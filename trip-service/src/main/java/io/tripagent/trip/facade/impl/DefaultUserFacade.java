package io.tripagent.trip.facade.impl;

import io.tripagent.trip.controller.dto.UserDTO;
import io.tripagent.trip.controller.form.user.UserRegistrationForm;
import io.tripagent.trip.controller.form.user.UserUpdateForm;
import io.tripagent.trip.converter.UserMapper;
import io.tripagent.trip.exception.NotUniqueEmailException;
import io.tripagent.trip.exception.UserNotFoundException;
import io.tripagent.trip.facade.UserFacade;
import io.tripagent.trip.model.User;
import io.tripagent.trip.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Component
public class DefaultUserFacade implements UserFacade {

    private static final String ROLE_DEFAULT = "USER";
    private final UserService userService;
    private final UserMapper userMapper;

    public DefaultUserFacade(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @Override
    public UserDTO saveUser(UserRegistrationForm userForm) {
        if (userService.existUserByEmail(userForm.getEmail())) {
            log.error("Error. Not unique email address: {}", userForm.getEmail());
            throw new NotUniqueEmailException();
        }
        User user = userMapper.toUser(userForm);
        user.setRole(ROLE_DEFAULT);
        return userMapper.toUserDTO(userService.saveUser(user));
    }

    @Override
    public UserDTO findUserById(Long id) {
        return userService.findUserById(id)
                .map(userMapper::toUserDTO)
                .orElseThrow(UserNotFoundException::new);
    }

    @Override
    public UserDTO findUserByEmail(String email) {
        return userService.findUserByEmail(email)
                .map(userMapper::toUserDTO)
                .orElseThrow(UserNotFoundException::new);
    }

    @Override
    public List<UserDTO> findAllUsers() {
        return userService.findAllUsers().stream()
                .map(userMapper::toUserDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO updateUser(Long id, UserUpdateForm userForm) {
        User updatedUser = userService.updateUser(id, userMapper.toUser(userForm));
        return userMapper.toUserDTO(updatedUser);
    }

    @Override
    public void deleteUser(Long id) {
        userService.deleteUser(id);
    }

    @Override
    public boolean existUserByEmail(String email) {
        return userService.existUserByEmail(email);
    }

}