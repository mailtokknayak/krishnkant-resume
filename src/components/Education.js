// src/components/Education.js
import React from 'react';
import '../styles/education.css'; // Import the separate CSS file
import educationData from '../resources/education.json';
const Education = () => {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-list">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-details">
              <h3 className="degree">{item.degree}</h3>
              <p className="institution">University: {item.university}</p>
              <p className="institution">College: {item.institution}</p>
              <p className="year">Graduated: {item.year}</p>
            </div>
            <div className="courses">
              <h4>Relevant Courses:</h4>
              <ul>
                {item.courses.map((course, courseIndex) => (
                  <li key={courseIndex}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
