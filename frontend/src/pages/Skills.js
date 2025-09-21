import React, { useEffect, useState } from 'react';
import { getSkills } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then(res => setSkills(res.data))
      .catch(err => console.error("Error fetching skills:", err));
  }, []);

  return (
    <div className="container mt-5 skills-section">
      <h2 className="section-header mb-5">My Skills</h2>
      {skills.map(skill => (
        <div key={skill.name} className="skills-progress">
          <div className="skill-label">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${skill.level}%` }} 
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
