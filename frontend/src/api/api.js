import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'https://portfolio-backend-cg2j.onrender.com';

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

// Contacts APIs
export const getContacts = () => api.get('/contacts');
export const addContact = (contact) => api.post('/contacts', contact);

// Users APIs
export const getUsers = () => api.get('/users');
export const addUser = (user) => api.post('/users', user);

// Resume
export const downloadResume = () => `${API_BASE_URL}/resume.pdf`;
