import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

const appStyle = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '900px',
  margin: 'auto',
  padding: '20px',
};

export default App;
