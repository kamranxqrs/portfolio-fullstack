import React from "react";
import { SiJava, SiJavascript, SiSpringboot, SiMysql, SiReact, SiPostman, SiGithub, SiMaven, SiCss3, SiHtml5 } from "react-icons/si";
import { FaDatabase, FaGit } from "react-icons/fa";

// Map skill names to icons
const skillIcons = {
  Java: <SiJava size={28} color="#f89820" />,
  SQL: <FaDatabase size={28} color="#00758F" />,
  JavaScript: <SiJavascript size={28} color="#f7df1e" />,
  HTML: <SiHtml5 size={28} color="#e34c26" />,
  CSS: <SiCss3 size={28} color="#264de4" />,
  "Spring Boot": <SiSpringboot size={28} color="#6DB33F" />,
  "Spring Data JPA": <SiSpringboot size={28} color="#6DB33F" />,
  Hibernate: <SiSpringboot size={28} color="#6DB33F" />,
  React: <SiReact size={28} color="#61DBFB" />,
  MySQL: <SiMysql size={28} color="#00758F" />,
  Maven: <SiMaven size={28} color="#c71a36" />,
  Git: <FaGit size={28} color="#f1502f" />,
  GitHub: <SiGithub size={28} color="#333" />,
  Postman: <SiPostman size={28} color="#ef5b25" />,
  "RESTful APIs": <SiPostman size={28} color="#ef5b25" />
};

function SkillCard({ skill }) {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center mb-2">
        {/* Icon + Skill Name */}
        <span className="me-2">
          {skillIcons[skill.name] || "🛠️"}
        </span>
        <strong>{skill.name}</strong>
      </div>

      {/* Progress Bar */}
      <div className="progress" style={{ height: "12px", borderRadius: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${skill.level}%`,
            borderRadius: "20px",
            background: "linear-gradient(90deg, #4facfe, #00f2fe)"
          }}
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}

export default SkillCard;
