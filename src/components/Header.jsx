import React, { useState } from 'react';
import ModernButton from './ModernButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <h1>I'm Fredrik</h1>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://whatabomb.vivaladokky.online" target="_blank" rel="noopener noreferrer">What'aBomb</a></li>
          <li className="mobile-only">
            <a href="https://www.linkedin.com/in/dokkenfredrik/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
        <div className="nav-buttons">
          <a href="https://www.linkedin.com/in/dokkenfredrik/" target="_blank" rel="noopener noreferrer">
            <ModernButton variant="outline" size="small">
              LinkedIn
            </ModernButton>
          </a>
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;