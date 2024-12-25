import React from 'react';
import '../styles/experience.css';
import experienceData from '../resources/experience.json'; // Importing experience data

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">
        <img src="https://img.icons8.com/?size=100&id=jFFUVKz5Oszp&format=png&color=000000" alt="Skills Icon" className="skills-icon" />
        Work Experience
      </h2>
      <div className="timeline">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="job-title">{experience.jobTitle}</h3>
              <p className="company">{experience.company}</p>
              <p className="location">{experience.location}</p>
              <p className="dates">
                {experience.startDate} - {experience.endDate}
              </p>

              <ul className="description">
                {experience.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {experience.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
