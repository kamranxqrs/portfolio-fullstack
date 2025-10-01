import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/api';
import ProjectCard from '../components/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProjects();
      setProjects(res.data || []);
    } catch (err) {
      console.error(err);
      setError('Failed to load projects. Make sure the backend is running or wait if the server was inactive.');
    } finally {
      setLoading(false);
    }
  };

  const visible = projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    (p.techStack && p.techStack.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center fw-bold">My Projects</h2>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search projects or tech (e.g., Java, React)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <div className="spinner-border mb-3" role="status" aria-hidden="true"></div>
          <p className="text-center">
            Fetching projects from backend... Please wait if the server was inactive.
          </p>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : visible.length === 0 ? (
        <p className="text-center">No projects to show (or no matches for your search).</p>
      ) : (
        <div className="row g-4">
          {visible.map((project) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
