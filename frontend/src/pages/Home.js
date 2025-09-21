import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Home() {
  return (
    <div 
  className="d-flex flex-column justify-content-center align-items-center text-center"
  style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0f7fa, #f0f9ff)',
    padding: '2rem'
  }}
>
  {/* Hero Name & Contact */}
  <h1 className="display-4 fw-bold mb-3 fade-in-up delay-1">Kamran Qureshi</h1>
  <p className="text-muted mb-1 fade-in-up delay-2">
    +91 7517557120 ⋄ Nagpur, Maharashtra, India
  </p>
  <p className="text-muted mb-3 fade-in-up delay-2">
    kamranquraishi801@gmail.com ⋄ 
    <a href="https://linkedin.com/in/kamran-qureshi-a354271b9" target="_blank" rel="noreferrer" className="text-primary ms-1 me-1">LinkedIn</a> ⋄ 
    <a href="https://github.com/kamranxqrs" target="_blank" rel="noreferrer" className="text-primary ms-1">GitHub</a>
  </p>

  {/* Summary Card */}
  <div className="card shadow-sm mb-4 p-4 hover-shadow fade-in-up delay-3" style={{ maxWidth: '800px', borderRadius: '15px' }}>
    <h4 className="fw-bold mb-3">About Me</h4>
    <p className="mb-0">
      Software Developer specializing in <span className="text-primary fw-semibold">Java Full Stack Development</span>, backend technologies (Java, Spring Boot, Hibernate, MySQL), RESTful APIs, and frontend frameworks (React.js, Angular, HTML/CSS/JS).
    </p>
  </div>

  {/* Skills Card */}
  <div className="card shadow-sm mb-4 p-4 hover-shadow fade-in-up delay-4" style={{ maxWidth: '800px', borderRadius: '15px' }}>
    <h4 className="fw-bold mb-3">Key Skills</h4>
    <div className="d-flex flex-wrap justify-content-center">
      {['Java', 'Spring Boot', 'Hibernate', 'React.js', 'Angular', 'MySQL', 'REST APIs', 'DSA', 'Agile']
        .map((skill) => (
          <span key={skill} className="badge-tech m-1 fade-in-up">{skill}</span>
      ))}
    </div>
  </div>

  {/* Buttons */}
  <div className="d-flex flex-wrap justify-content-center mt-3 fade-in-up delay-4">
    {[
      { name: 'Projects', color: 'primary' },
      { name: 'Skills', color: 'success' },
      { name: 'Contact', color: 'info' },
      { name: 'Resume', color: 'dark' },
    ].map((btn) => (
      <Link
        key={btn.name}
        to={`/${btn.name === 'Resume' ? 'resume' : btn.name.toLowerCase()}`}
        className={`btn btn-${btn.color} btn-lg m-2 shadow-sm hover-shadow home-btn`}
      >
        {btn.name}
      </Link>
    ))}
  </div>
</div>

  );
}

export default Home;

