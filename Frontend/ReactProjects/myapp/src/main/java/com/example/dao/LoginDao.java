package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Login;

@Repository
public interface LoginDao extends JpaRepository<Login, String> {

}
