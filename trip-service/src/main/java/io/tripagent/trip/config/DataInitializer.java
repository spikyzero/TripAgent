package io.tripagent.trip.config;

import io.tripagent.trip.model.User;
import io.tripagent.trip.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Value("${admin.default.email}")
    private String adminEmail;
    @Value("${admin.default.name}")
    private String adminName;
    @Value("${admin.default.password}")
    private String adminPassword;
    @Value("${admin.default.role}")
    private String adminRole;

    @Bean
    public CommandLineRunner init(UserService userService) {
        return args -> {
            if (!userService.existUserByEmail(adminEmail)) {
                User admin = new User();
                admin.setEmail(adminEmail);
                admin.setName(adminName);
                admin.setPassword(adminPassword);
                admin.setRole(adminRole);
                userService.saveUser(admin);
            }
        };
    }

}