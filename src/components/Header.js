// src/components/Header.js
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <div className="header-name">Krishnkant Nayak</div>
        <div className="header-title">Software Development Engineer 2 </div>
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
              Home
            </Link>
           </li>
          <li>
          <Link to="about" className="nav-link">
              About
            </Link>
           </li>
           <li>
            <Link to="skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="experience" className="nav-link">
              Experience
            </Link>
          </li>
          <li>
            <Link to="education" className="nav-link">
              Education
            </Link>
          </li>
          <li>
            <Link to="contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
