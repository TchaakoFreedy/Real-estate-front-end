package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "tenant")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Tenant extends Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int  tenant_id;
    private boolean payRent;



}
