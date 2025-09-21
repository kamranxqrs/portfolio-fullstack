import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const truncate = (s, n = 160) => (s && s.length > n ? s.slice(0, n) + '...' : s || '');

  const techChips = project.techStack ? project.techStack.split(',').map(t => t.trim()) : [];

  return (
    <>
      <div className="card h-100 shadow-sm hover-shadow border-0" style={{ transition: '0.3s' }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{project.title}</h5>
          <p className="card-text text-muted flex-grow-1" style={{ whiteSpace: 'pre-line' }}>
            {truncate(project.description)}
          </p>

          <div className="mb-2">
            {techChips.map((t, i) => (
              <span key={i} className="badge-tech">{t}</span>
            ))}
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between align-items-center bg-white border-0">
          <div>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark btn-sm me-2"
                aria-label={`Open ${project.title} GitHub`}
              >
                <FaGithub /> <span className="ms-1">Code</span>
              </a>
            )}

            {project.demoLink && project.demoLink.trim().length > 0 && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-sm"
                aria-label={`Open ${project.title} demo`}
              >
                <FiExternalLink /> <span className="ms-1">Demo</span>
              </a>
            )}
          </div>

          <button className="btn btn-link text-decoration-none" onClick={() => setOpen(true)}>
            Read more
          </button>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop-custom" role="dialog" aria-modal="true">
          <div className="modal-custom">
            <button className="close-btn btn btn-light" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <h5 className="mb-2 fw-bold">{project.title}</h5>
            <p className="text-muted" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>

            {techChips.length > 0 && (
              <div className="mb-3">
                {techChips.map((t, i) => <span key={i} className="badge-tech">{t}</span>)}
              </div>
            )}

            <div className="d-flex justify-content-end">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-dark me-2">
                  <FaGithub /> &nbsp; View Code
                </a>
              )}
              {project.demoLink && project.demoLink.trim().length > 0 && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <FiExternalLink /> &nbsp; Open Demo
                </a>
              )}
              <button className="btn btn-outline-secondary ms-2" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
