import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-social">
          <a href="https://github.com/MattSch92" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/matt-schnepp/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
