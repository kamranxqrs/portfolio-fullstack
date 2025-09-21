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

import com.kamran.portfolio.model.Project;
import com.kamran.portfolio.repository.ProjectRepository;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // Add a new project
    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    // Get all projects
    @GetMapping
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    // Get project by ID
    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id " + id));
    }

    // Update project
    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project updatedProject) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id " + id));

        project.setTitle(updatedProject.getTitle());
        project.setDescription(updatedProject.getDescription());
        project.setTechStack(updatedProject.getTechStack());
        project.setGithubLink(updatedProject.getGithubLink());
        project.setDemoLink(updatedProject.getDemoLink());

        return projectRepository.save(project);
    }

    // Delete project
    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id " + id));
        projectRepository.delete(project);
    }
}
