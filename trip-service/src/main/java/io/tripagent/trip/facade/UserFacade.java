package io.tripagent.trip.facade;

import io.tripagent.trip.controller.dto.UserDTO;
import io.tripagent.trip.controller.form.user.UserRegistrationForm;
import io.tripagent.trip.controller.form.user.UserUpdateForm;

import java.util.List;

public interface UserFacade {

    UserDTO saveUser(UserRegistrationForm userForm);

    UserDTO findUserById(Long id);

    UserDTO findUserByEmail(String email);

    List<UserDTO> findAllUsers();

    UserDTO updateUser(Long id, UserUpdateForm userForm);

    void deleteUser(Long id);

    boolean existUserByEmail(String email);

}