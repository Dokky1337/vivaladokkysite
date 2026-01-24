import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "Microsoft Azure", level: 90 },
        { name: "Microsoft Entra ID", level: 85 },
        { name: "Azure DevOps", level: 80 }
      ]
    },
    {
      title: "Infrastructure & DevOps",
      icon: "⚙️",
      skills: [
        { name: "Infrastructure as Code", level: 90 },
        { name: "CI/CD Pipelines", level: 88 },
        { name: "Docker & Containers", level: 85 }
      ]
    },
    {
      title: "Programming & Scripting",
      icon: "💻",
      skills: [
        { name: "Bicep", level: 95 },
        { name: "Terraform", level: 85 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <p>
          My expertise spans across various cloud technologies and modern DevOps practices, 
          with a focus on Microsoft Azure ecosystem.
        </p>
        
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item-detailed">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;