package com.kamran.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kamran.portfolio.model.User;
import com.kamran.portfolio.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Add a new user
    @PostMapping
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // Get all users
    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
