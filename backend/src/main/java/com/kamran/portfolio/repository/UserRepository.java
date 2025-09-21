package com.kamran.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kamran.portfolio.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
