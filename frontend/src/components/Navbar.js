import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Make sure this includes the CSS below

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Kamran Qureshi</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['Home','Projects','Skills','Contact','Resume'].map((link) => (
              <li className="nav-item" key={link}>
                <Link
                  className="nav-link text-uppercase mx-2 fw-semibold"
                  to={`/${link === 'Home' ? '' : link.toLowerCase()}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
