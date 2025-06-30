import React from 'react';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import ParticleBackground from './components/hero/ParticleBackground';
import Skill from './components/skill/Skill';
import ProjectSection from './components/projectsection/ProjectSection';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className='bg-[#0f172a] !overflow-x-hidden' >
      <NavBar/>
      <Hero/>
      <About/>
      <Skill/>
      <ProjectSection/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;