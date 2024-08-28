package com.example.demo.repository;

import com.example.demo.model.Tenant;
import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<Tenant, Integer> {
    Optional<Users> findByEmail(String email);
}