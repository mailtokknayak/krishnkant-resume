import React, { useState, useEffect } from 'react';
import skillsData from '../resources/skills.json';
import '../styles/skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-heading">
        <img src="https://img.icons8.com/?size=100&id=eo7oyvlYn4yl&format=png&color=000000" alt="Skills Icon" className="skills-icon" />
        Skills
      </h2>
      <div className="skills-list">
        {skills.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category.category}</h3>
            <ul className="skills-list-items">
              {category.skillsList.map((skill, index) => (
                <li key={index} className="skill-card">
                  <img src={skill.image} alt={skill.skillName} className="skill-icon" />
                  <div className="skill-details">
                    <h4>{skill.skillName}</h4>
                    <p><strong>Proficiency:</strong> {skill.proficiency}</p>
                    <p><strong>Experience:</strong> {skill.experienceYears} years</p>
                    <p>{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
