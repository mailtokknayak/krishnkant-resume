// src/components/Contact.js
import React from 'react';
import '../styles/contact.css'; // Import the contact-specific CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <div className="contact-details">
          <div className="contact-item">
            <span className="label">Email:</span>
            <a href="mailto:johndoe@example.com" className="contact-link">
              johndoe@example.com
            </a>
          </div>
          <div className="contact-item">
            <span className="label">Phone:</span>
            <a href="tel:+1234567890" className="contact-link">
              +1 (234) 567-890
            </a>
          </div>
          <div className="contact-item">
            <span className="label">GitHub:</span>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/johndoe
            </a>
          </div>
          <div className="contact-item">
            <span className="label">LinkedIn:</span>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/johndoe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
