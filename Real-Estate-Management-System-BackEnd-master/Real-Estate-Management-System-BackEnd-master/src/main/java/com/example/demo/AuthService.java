package com.example.demo.service;

import com.example.demo.model.Users;
import com.example.demo.repository.UserRepository;
import com.example.demo.Security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public Users registerUser(Users user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String authenticateUser(String username, String password) {
        Users user = userRepository.findByUsername(username);
//                .orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(password, user.getPassword())) {
            return jwtUtil.generateToken(user);
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
