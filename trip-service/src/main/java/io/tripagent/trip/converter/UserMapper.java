package io.tripagent.trip.converter;

import io.tripagent.trip.controller.dto.UserDTO;
import io.tripagent.trip.controller.form.user.UserRegistrationForm;
import io.tripagent.trip.controller.form.user.UserUpdateForm;
import io.tripagent.trip.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "email", target = "email")
    @Mapping(source = "name", target = "name")
    User toUser(UserRegistrationForm userForm);

    @Mapping(source = "email", target = "email")
    @Mapping(source = "name", target = "name")
    User toUser(UserUpdateForm userForm);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "role", target = "role")
    UserDTO toUserDTO(User user);

}