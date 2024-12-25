import React from 'react';
import '../styles/education.css';
import educationData from '../resources/education.json'; // Importing education data

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">
        Education
      </h2>
      <div className="timeline">
        {educationData.map((education, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="degree">{education.degree}</h3>
              {education.logo && (
                <div className="college_logo">
                  <img src="../../public/aktu_logo.png"  alt="Education Icon" className="college-logo" />
                </div>
              )}
              <p className="institution">{education.university}</p>
              <p className="institution">{education.institution}</p>
              <p className="dates">
                {education.startDate} - {education.endDate}
              </p>
              <p className="description">{education.description}</p>
              {/* Add logo and address */}
              
              {education.address && (
                <p className="address">{education.address}</p>
              )}
              {education.website && (
                <a href={education.website} target="_blank" rel="noopener noreferrer" className="website-link">
                  Visit Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
