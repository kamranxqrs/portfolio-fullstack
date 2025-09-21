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

import com.kamran.portfolio.model.Skill;
import com.kamran.portfolio.repository.SkillRepository;

@RestController
@RequestMapping("/skills")
public class SkillController {

    private final SkillRepository skillRepository;

    public SkillController(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    // Add a new skill
    @PostMapping
    public Skill addSkill(@RequestBody Skill skill) {
        return skillRepository.save(skill);
    }

    // Get all skills
    @GetMapping
    public List<Skill> getSkills() {
        return skillRepository.findAll();
    }

    // Get skill by ID
    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill not found with id " + id));
    }

    // Update skill
    @PutMapping("/{id}")
    public Skill updateSkill(@PathVariable Long id, @RequestBody Skill updatedSkill) {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill not found with id " + id));

        skill.setName(updatedSkill.getName());
        skill.setLevel(updatedSkill.getLevel());

        return skillRepository.save(skill);
    }

    // Delete skill
    @DeleteMapping("/{id}")
    public void deleteSkill(@PathVariable Long id) {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill not found with id " + id));
        skillRepository.delete(skill);
    }
}
