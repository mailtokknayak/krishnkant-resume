// src/components/Skills.js
import React, { useState, useEffect } from 'react';
import skillsData from '../resources/skills.json';  // Import the skills JSON data
import '../styles/skills.css'
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((category, index) => (
          <div key={index}>
            <h3>{category.category}</h3>
            <ul>
              {category.skillsList.map((skill, index) => (
                <li key={index} className="skill-card">
                  <img src={skill.image} alt={skill.skillName} />
                  <div>
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
