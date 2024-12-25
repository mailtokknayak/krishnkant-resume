import React from 'react';
import '../styles/contact.css'; // Import the contact-specific CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
    
        <h2 className="contact-heading">
          <img src="https://img.icons8.com/?size=100&id=BQlLHKSAC1Yu&format=png&color=000000" alt="Contact Icon" className="contact-icon" />
          Contact Me
        </h2>
        <div className="contact-container">
        <div className="contact-details">
          <div className="contact-item">
            <span className="label">Email:</span>
            <a href="mailto:krishnkantnayak02@gmail.com" className="contact-link">
              krishnkantnayak02@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="label">Phone:</span>
            <a href="tel:+1234567890" className="contact-link">
              7411408190
            </a>
          </div>
          <div className="contact-item">
            <span className="label">GitHub:</span>
            <a href="https://github.com/mailtokknayak" target="_blank" rel="noopener noreferrer" className="contact-link">
              github.com/mailtokknayak
            </a>
          </div>
          <div className="contact-item">
            <span className="label">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/krishnkant-nayak-37a71b106/" target="_blank" rel="noopener noreferrer" className="contact-link">
              linkedin.com/in/krishnkant-nayak
            </a>
          </div>
          <div className="contact-item">
            <span className="label">LeetCode:</span>
            <a href="https://leetcode.com/u/knayak/" target="_blank" rel="noopener noreferrer" className="contact-link">
              leetcode.com/u/knayak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
