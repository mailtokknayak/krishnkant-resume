import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Krishnkant Nayak</h1>
      <p>Software Development Engineer 2</p>
      <div style={iconContainerStyle}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub size={30} style={iconStyle} /></a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} style={iconStyle} /></a>
        <a href="mailto:youremail@example.com"><FaEnvelope size={30} style={iconStyle} /></a>
      </div>
    </header>
  );
};

const headerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f9',
};

const iconContainerStyle = {
  marginTop: '10px',
};

const iconStyle = {
  margin: '0 10px',
  color: '#333',
};

export default Header;
