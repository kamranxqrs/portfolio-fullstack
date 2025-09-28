import React from 'react'; 
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles/home.css';

function Home() {
  const keySkills = [
    { name: 'Java', class: 'badge-java' },
    { name: 'Spring Boot', class: 'badge-spring' },
    { name: 'Hibernate', class: 'badge-hibernate' },
    { name: 'JavaScript', class: 'badge-js' },
    { name: 'React.js', class: 'badge-react' },
    { name: 'MySQL', class: 'badge-mysql' },
    { name: 'DSA', class: 'badge-dsa' }
  ];

  const projects = [
    {
      title: 'CampusHire Backend',
      desc: 'Full-stack web application to manage college placements. Backend built with Java Spring Boot, MySQL for database, and RESTful APIs to handle students, companies, and placements efficiently.',
      link: 'https://github.com/kamranxqrs/CampusHire-Backend',
    },
    {
      title: 'Portfolio Website',
      desc: 'Dynamic portfolio built with React.js and Bootstrap to showcase projects, skills, and resume. Includes responsive design, animations, and backend integration for skills and projects data.',
      link: 'https://github.com/kamranxqrs/portfolio-fullstack',
    },
    {
      title: 'To-Do List Web App',
      desc: 'Task management app using React.js frontend and Java Spring Boot backend. Features include adding, editing, deleting, and tracking tasks with persistent storage in MySQL.',
      link: 'https://github.com/kamranxqrs/ToDoApp',
    },
  ];

  return (
    <div className="home-page-bg py-5">
      <div className="container home-page">
        <div className="row gx-5">

          <div className="col-lg-4 col-md-5 mb-4 left-col text-center shadow-lg p-4 rounded-4 bg-white">
            <img src="/profile.jpeg" alt="Kamran Qureshi" className="profile-pic mb-3 rounded-circle shadow-sm" />
            <h2 className="name mb-3">Kamran Qureshi</h2>

            <div className="skills mb-3">
              <h5 className="fw-bold">Key Skills</h5>
              <div className="d-flex flex-wrap justify-content-center">
                {keySkills.map(skill => (
                  <span key={skill.name} className={`badge-tech ${skill.class} m-1`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <Link to="/resume" className="btn btn-primary mb-4 shadow-sm">Download Resume</Link>

            <div className="education text-start">
              <h4 className="mb-3 fw-bold">Education</h4>
              <div className="edu-item mb-3">
                <h5>B.Tech in Computer Science & Engineering</h5>
                <p>Anjuman College of Engineering and Technology, Nagpur</p>
                <p>CGPA: 7.8 (78%) | Passout: 2025</p>
              </div>
              <div className="edu-item mb-3">
                <h5>Higher Secondary Certificate (12th)</h5>
                <p>St. Francis de Sales College, Nagpur</p>
                <p>Percentage: 95% | Passout: 2021</p>
              </div>
              <div className="edu-item mb-3">
                <h5>Secondary School Certificate (10th)</h5>
                <p>St. Johns High School, Nagpur</p>
                <p>Percentage: 81.4% | Passout: 2019</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-7 right-col shadow-lg p-4 rounded-4 bg-white">
            <div className="about-me mb-4">
              <h3 className="fw-bold">About Me</h3>
              <p>
                I am a passionate Software Developer specializing in <strong>Java Full Stack Development</strong>,
                with expertise in backend technologies such as Java, Spring Boot, Hibernate, and MySQL,
                and frontend frameworks including React.js, HTML, CSS, and JavaScript.
              </p>
              <p>
                I have applied these skills in projects such as <strong>CampusHire Backend</strong> and a <strong>To-Do List Web App</strong>,
                which helped me master dynamic frontend-backend integration, RESTful APIs, and user-centric design.
                I also have experience with a <strong>Library Management System</strong> in Java.
              </p>
              <p>
                My experience in building real-world applications enables me to create scalable and efficient solutions.
                I aim to leverage these skills to contribute to impactful software projects, grow professionally, and apply my skills in IT industry.
              </p>
            </div>

            <div className="projects mb-4">
              <h3 className="fw-bold">Projects</h3>
              {projects.map(proj => (
                <div key={proj.title} className="project-item p-3 mb-3 shadow-sm rounded d-flex justify-content-between align-items-start">
                  <div>
                    <h5>{proj.title}</h5>
                    <p className="text-muted">{proj.desc}</p>
                  </div>
                  <div>
                    <a href={proj.link} target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
                  </div>
                </div>
              ))}
            </div>

            <div className="connect-me mb-4">
              <h3 className="fw-bold">Connect with Me</h3>
              <div className="social-links d-flex flex-wrap gap-3">
                <a href="https://linkedin.com/in/kamran-qureshi-a354271b9" target="_blank" rel="noreferrer" className="social-badge">
                  <FaLinkedin size={24} /><span className="ms-2">LinkedIn</span>
                </a>
                <a href="https://github.com/kamranxqrs" target="_blank" rel="noreferrer" className="social-badge">
                  <FaGithub size={24} /><span className="ms-2">GitHub</span>
                </a>
                <a href="https://leetcode.com/u/kamran_qrs/" target="_blank" rel="noreferrer" className="social-badge">
                  <SiLeetcode size={24} /><span className="ms-2">LeetCode</span>
                </a>
                <a href="mailto:kamranquraishi801@gmail.com" className="social-badge">
                  <FaEnvelope size={24} /><span className="ms-2">Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
