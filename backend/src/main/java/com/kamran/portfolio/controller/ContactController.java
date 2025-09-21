package com.kamran.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kamran.portfolio.model.Contact;
import com.kamran.portfolio.repository.ContactRepository;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // Add a new contact message
    @PostMapping
    public Contact addContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    // Get all contact messages
    @GetMapping
    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }

    // Get a single contact by ID
    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id " + id));
    }

    // Update a contact message
    @PutMapping("/{id}")
    public Contact updateContact(@PathVariable Long id, @RequestBody Contact updatedContact) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id " + id));

        contact.setName(updatedContact.getName());
        contact.setEmail(updatedContact.getEmail());
        contact.setMessage(updatedContact.getMessage());

        return contactRepository.save(contact);
    }

    // Delete a contact message
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found with id " + id));
        contactRepository.delete(contact);
    }
}
