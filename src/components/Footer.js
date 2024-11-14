import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Designed and built by Krishnkant Nayak</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f9',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
