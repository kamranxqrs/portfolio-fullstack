import React, { useState } from 'react';
import { addContact } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Make sure hover-shadow and new styles are included

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContact(formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center fw-bold">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto shadow-sm p-4 rounded hover-shadow"
        style={{ maxWidth: '600px', background: '#f8f9fa' }}
      >
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input
            type="text"
            className="form-control shadow-sm rounded hover-shadow"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control shadow-sm rounded hover-shadow"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            className="form-control shadow-sm rounded hover-shadow"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn contact-btn btn-lg w-100 shadow-sm hover-shadow"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p
          className={`text-center mt-3 fw-semibold ${
            status.includes('success') ? 'status-success' : 'status-error'
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}

export default Contact;
