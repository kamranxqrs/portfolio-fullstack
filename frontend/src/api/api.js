import axios from 'axios';

// Base URL of your Spring Boot backend
const API_BASE_URL = 'http://localhost:8080';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects APIs
export const getProjects = () => api.get('/projects');
export const addProject = (project) => api.post('/projects', project);
export const updateProject = (id, project) => api.put(`/projects/${id}`, project);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Skills APIs
export const getSkills = () => api.get('/skills');
export const addSkill = (skill) => api.post('/skills', skill);
export const updateSkill = (id, skill) => api.put(`/skills/${id}`, skill);
export const deleteSkill = (id) => api.delete(`/skills/${id}`);

// Contact APIs
export const getContacts = () => api.get('/contacts');
export const addContact = (contact) => api.post('/contacts', contact);

// Users APIs (optional)
export const getUsers = () => api.get('/users');
export const addUser = (user) => api.post('/users', user);

// Resume (static file download)
export const downloadResume = () => `${API_BASE_URL}/resume.pdf`;
