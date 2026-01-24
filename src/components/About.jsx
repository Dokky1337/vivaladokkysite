import React from 'react';
import ModernButton from './ModernButton';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a passionate Cloud Engineer with extensive experience in Microsoft Azure, 
              specializing in designing and implementing scalable cloud architectures. 
              My expertise spans across cloud infrastructure, security, and DevOps practices.
            </p>
            <p>
              With a strong background in both traditional IT infrastructure and modern 
              cloud technologies, I help organizations migrate to the cloud while ensuring 
              optimal performance, security, and cost-effectiveness.
            </p>
            
            <div className="skills-section">
              <h3>Core Technologies</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-icon">☁️</span>
                  <span>Microsoft Azure</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🔧</span>
                  <span>Azure DevOps</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🐳</span>
                  <span>Docker & Kubernetes</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📜</span>
                  <span>Terraform & Bicep</span>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Azure Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;