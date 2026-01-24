import React from 'react';
import ModernButton from './ModernButton';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm
          <span className="gradient-text"> Fredrik</span>
        </h1>
        <p className="hero-description">
          Cloud Engineer specializing in Microsoft Azure, building scalable 
          cloud solutions and modern infrastructure architectures.
        </p>
      </div>
      <div className="hero-decoration">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;