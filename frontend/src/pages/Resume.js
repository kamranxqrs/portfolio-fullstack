import React from 'react';
import { downloadResume } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Resume() {
  const handleDownload = () => {
    window.open(downloadResume(), '_blank');
  };

  return (
    <section className="resume-section py-5">
      <div className="text-center">
        <h2 className="section-header mb-4">My Resume</h2>
        <p className="lead mb-4">You can view or download my resume below:</p>

        {/* PDF Viewer */}
        <iframe
          src={downloadResume()}
          title="Resume Preview"
          width="80%"
          height="600px"
          style={{ border: '1px solid #ccc', borderRadius: '12px', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
        ></iframe>

        <div className="mt-4">
          <button
            className="btn btn-primary-gradient btn-lg shadow-light"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
