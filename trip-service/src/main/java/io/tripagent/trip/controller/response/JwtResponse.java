package io.tripagent.trip.controller.response;

import io.tripagent.trip.controller.dto.UserDTO;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
public class JwtResponse {

    String token;
    UserDTO userDTO;

}