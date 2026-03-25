package io.tripagent.trip.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "users", uniqueConstraints = @UniqueConstraint(name = "uk_user_email", columnNames = "email"))
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {

    @Column(unique = true, nullable = false)
    String email;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    String password;

    @Column(nullable = false)
    String role;

}