# Fredrik's Portfolio Website

A modern, responsive portfolio website built with React, showcasing Azure Cloud Engineering expertise with beautiful animations and modern UI components.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.js        # Navigation bar
│   ├── Hero.js          # Main landing section
│   ├── About.js         # About me section
│   ├── Content.js       # Azure expertise showcase
│   ├── Skills.js        # Technical skills with progress bars
│   ├── ModernButton.js  # Reusable button component
│   └── Footer.js        # Footer section
├── App.js               # Main app component
├── App.css              # All styling
├── index.js             # React entry point
└── index.css            # Global styles
```

## 🎨 Design System

### Colors
- **Primary Background**: `#060B21` (Dark purple)
- **Primary Gradient**: `#8B5CF6` to `#3B82F6` (Purple to Blue)
- **Text**: `#ffffff` (White)
- **Accent**: `rgba(255, 255, 255, 0.1)` (Transparent white)

### Button Variants
- `primary` - Gradient background with glow effects
- `secondary` - Transparent with border
- `outline` - Border only, fills on hover
- `glass` - Glassmorphism effect

### Button Sizes
- `small` - Compact buttons for cards
- `medium` - Standard size
- `large` - Hero section buttons

## ✏️ Making Edits

### Updating Personal Information

**Change your name:**
```javascript
// src/components/Header.js
<h1>Fredrik</h1> // Change "Fredrik" to your name

// src/components/Hero.js
<span className="gradient-text"> Fredrik</span> // Update here too

// src/components/Footer.js
<p>&copy; 2024 Fredrik. All rights reserved.</p> // And here
```

**Update hero description:**
```javascript
// src/components/Hero.js
<p className="hero-description">
  Cloud Engineer specializing in Microsoft Azure... // Edit this text
</p>
```

**Modify about section:**
```javascript
// src/components/About.js
// Edit the paragraphs in the About component
<p>I'm a passionate Cloud Engineer...</p>
```

### Updating Skills

**Add/remove skills:**
```javascript
// src/components/Skills.js
const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: "☁️",
    skills: [
      { name: "Microsoft Azure", level: 95 }, // Adjust level 0-100
      // Add new skills here
    ]
  }
  // Add new categories here
];
```

**Update statistics:**
```javascript
// src/components/About.js
<div className="stat-number">5+</div> // Change numbers
<div className="stat-label">Years Experience</div> // Change labels
```

### Customizing Content Cards

**Update Azure expertise cards:**
```javascript
// src/components/Content.js
<div className="feature-card">
  <div className="feature-icon">☁️</div> // Change emoji
  <h3>Azure Infrastructure</h3> // Change title
  <p>Virtual Networks, App Services...</p> // Change description
</div>
```

## 🆕 Adding New Pages/Sections

### Method 1: Add New Section to Existing Page

1. **Create new component:**
```javascript
// src/components/Projects.js
import React from 'react';
import ModernButton from './ModernButton';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Showcase of my Azure cloud projects...</p>
        
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project Name</h3>
            <p>Project description...</p>
            <ModernButton variant="secondary" size="small">
              View Details
            </ModernButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

2. **Add to App.js:**
```javascript
// src/App.js
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Content />
      <Projects /> {/* Add your new section */}
      <Skills />
      <Footer />
    </div>
  );
}
```

3. **Add styles to App.css:**
```css
/* Add at the end of src/App.css */
.projects {
  padding: 6rem 0;
  background: rgba(139, 92, 246, 0.05);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(139, 92, 246, 0.3);
}
```

4. **Update navigation:**
```javascript
// src/components/Header.js
<li><a href="#projects">Projects</a></li> // Add to nav links
```

### Method 2: Create Separate Pages (Advanced)

For multiple pages, you'll need React Router:

```bash
npm install react-router-dom
```

Then restructure with routing - let me know if you want this approach!

## 🎯 Component Usage Examples

### Using ModernButton

```javascript
import ModernButton from './ModernButton';

// Different variants
<ModernButton variant="primary" size="large" icon="🚀">
  Primary Button
</ModernButton>

<ModernButton variant="glass" size="medium" onClick={handleClick}>
  Glass Button
</ModernButton>

<ModernButton variant="outline" size="small" disabled>
  Disabled Button
</ModernButton>
```

### Creating Cards

```javascript
<div className="feature-card">
  <div className="feature-icon">🔧</div>
  <h3>Card Title</h3>
  <p>Card description text...</p>
  <ModernButton variant="secondary" size="small">
    Action Button
  </ModernButton>
</div>
```

## 🎨 Styling Guidelines

### Adding Animations

```css
/* Fade in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.my-element {
  animation: fadeIn 0.6s ease-out;
}
```

### Responsive Design

```css
/* Mobile-first approach */
.my-section {
  padding: 2rem 0;
}

@media (min-width: 768px) {
  .my-section {
    padding: 4rem 0;
  }
}
```

### Color Variables (Add to index.css)

```css
:root {
  --primary-bg: #060B21;
  --primary-gradient: linear-gradient(45deg, #8B5CF6, #3B82F6);
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.8);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🚀 Deployment

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://yourusername.github.io/your-repo-name",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repo for auto-deployment

## 🔧 Customization Tips

1. **Icons**: Use emojis or install `react-icons` for more options
2. **Fonts**: Add Google Fonts to `public/index.html`
3. **Images**: Add to `public` folder and reference as `/image.jpg`
4. **Animations**: Use CSS transitions and keyframes for smooth effects
5. **Performance**: Optimize images and use React.memo for heavy components

## 📝 Content Management

Keep your content organized by creating separate data files:

```javascript
// src/data/skills.js
export const skillCategories = [
  // Your skills data
];

// src/data/projects.js
export const projects = [
  // Your projects data
];
```

Then import and use in components for easier maintenance.

## 🐛 Troubleshooting

**Development server won't start:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

**Styles not updating:**
- Hard refresh browser (Ctrl+F5)
- Check for CSS syntax errors

**Component not rendering:**
- Check import/export statements
- Verify component is added to App.js

---

**Happy coding! 🚀** 

Feel free to customize this portfolio to match your personal brand and showcase your Azure expertise!