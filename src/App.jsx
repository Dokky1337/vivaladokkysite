import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Content from './components/Content';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Content />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;