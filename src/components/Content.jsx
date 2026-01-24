import React from 'react';
import ModernButton from './ModernButton';

const Content = () => {
  return (
    <section className="content">
      <div className="container">
        <h2>Azure Cloud Expertise</h2>
        <p>
          I design and implement robust cloud solutions using Microsoft Azure, 
          focusing on scalability, security, and cost optimization.
        </p>
        
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3>Azure Infrastructure</h3>
            <p>Virtual Networks, App Services, Azure Functions, and container orchestration</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>DevOps & Automation</h3>
            <p>CI/CD pipelines, Infrastructure as Code, and Azure DevOps solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;