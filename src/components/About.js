import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">
          <img src="https://img.icons8.com/?size=100&id=23345&format=png&color=000000" alt="About Icon" className="about-icon" />
          About Me
        </h2>
        <p className="about-description">
          With over 7.5 years of experience as a Full Stack Developer, I specialize in both front-end and back-end technologies. My expertise includes:
        </p>
        <ul className="tech-list">
          <li>Backend Development: Java, Spring Boot</li>
          <li>Frontend Development: ReactJS, NodeJS</li>
          <li>Methodologies: Agile, XP, CI/CD, TDD</li>
          <li>Collaborative Practices: Pair Programming, Code Reviews</li>
        </ul>
        <p className="about-footer">
          I'm passionate about continuous learning and always stay updated with the latest tech trends to deliver scalable and efficient solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
