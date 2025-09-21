package com.kamran.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kamran.portfolio.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
