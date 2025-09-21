package com.kamran.portfolio.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String techStack;
    private String githubLink;
    private String demoLink;

    // Constructors
    public Project() {}
    public Project(String title, String description, String techStack, String githubLink, String demoLink) {
        this.title = title;
        this.description = description;
        this.techStack = techStack;
        this.githubLink = githubLink;
        this.demoLink = demoLink;
    }

    // Getters & Setters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    public String getTechStack() {
        return techStack;
    }
    public void setTechStack(String techStack) {
        this.techStack = techStack;
    }

    public String getGithubLink() {
        return githubLink;
    }
    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }

    public String getDemoLink() {
        return demoLink;
    }
    public void setDemoLink(String demoLink) {
        this.demoLink = demoLink;
    }
}
