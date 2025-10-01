import React, { useEffect, useState } from 'react';
import { getSkills } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { 
  SiOpenjdk, 
  SiJavascript, 
  SiSpring, 
  SiMysql, 
  SiReact, 
  SiPostman, 
  SiGithub, 
  SiCss3, 
  SiHtml5 
} from "react-icons/si";
import { FaGit, FaTools } from "react-icons/fa";

const skillIcons = {
  Java: <SiOpenjdk size={24} color="#f89820" />,
  "Spring Boot": <SiSpring size={24} color="#6DB33F" />,
  Hibernate: <SiSpring size={24} color="#6DB33F" />,
  "RESTful APIs": <SiPostman size={24} color="#ef5b25" />,
  HTML: <SiHtml5 size={24} color="#e34c26" />,
  CSS: <SiCss3 size={24} color="#264de4" />,
  JavaScript: <SiJavascript size={24} color="#f7df1e" />,
  "React.js": <SiReact size={24} color="#61DBFB" />,
  MySQL: <SiMysql size={24} color="#00758F" />,
  Git: <FaGit size={24} color="#f1502f" />,
  GitHub: <SiGithub size={24} color="#333" />,
  Postman: <SiPostman size={24} color="#ef5b25" />,
  Maven: <FaTools size={24} color="#c71a36" />
};

const skillGroups = [
  { title: "Backend", skills: ["Java", "Spring Boot", "Hibernate", "RESTful APIs"] },
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "Database", skills: ["MySQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "Maven"] }
];

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getSkills()
      .then(res => {
        setSkills(res.data);
      })
      .catch(err => {
        console.error("Error fetching skills:", err);
        setError("Failed to load skills. Make sure the backend is running or wait if the server was inactive.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center py-5">
        <div className="spinner-border mb-3" role="status" aria-hidden="true"></div>
        <p className="text-center">
          Fetching skills from backend... Please wait if the server was inactive.
        </p>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  const skillsMap = {};
  skills.forEach(s => skillsMap[s.name] = s);

  return (
    <div className="container mt-5 skills-section">
      <h2 className="section-header mb-4">My Skills</h2>

      {skillGroups.map(group => (
        <div key={group.title} className="mb-4">
          <h4 className="mb-3">{group.title}</h4>
          <div className="d-flex flex-wrap gap-3">
            {group.skills.map(skillName => {
              const skill = skillsMap[skillName];
              if (!skill) return null;
              return (
                <div 
                  key={skill.name} 
                  className="skills-progress p-2 rounded shadow-sm skill-card-hover flex-grow-1"
                  style={{ minWidth: "200px", maxWidth: "220px" }}
                >
                  <div className="skill-label d-flex align-items-center justify-content-between mb-1">
                    <div className="d-flex align-items-center">
                      <span className="me-2">{skillIcons[skill.name] || "🛠️"}</span>
                      <strong>{skill.name}</strong>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ 
                        width: `${skill.level}%`, 
                        borderRadius: "12px", 
                      }}
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
