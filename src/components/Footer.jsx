import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
      </nav>
      <hr className="footer-divider" />
      <p className="footer-text">© 2025 Made by Nguyen Phuc Le</p>
    </footer>
  );
}

export default Footer;