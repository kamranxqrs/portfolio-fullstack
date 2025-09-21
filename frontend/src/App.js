import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Modular CSS imports
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/contact.css';
import './styles/buttons.css';
import './styles/responsive.css';

// Components and Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        {/* Footer kept inside App.js */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          &copy; {new Date().getFullYear()} Kamran Qureshi. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
