package com.example.demo.repository;
import com.example.demo.model.Admin;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository <Admin, Integer> {



}
