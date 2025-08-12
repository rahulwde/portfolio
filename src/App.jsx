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
import ScrollToTop from './components/navbar/ScrollToTop';
import ScrollProgressBar from './components/navbar/ScrollProgressBar';
import CertificateSection from './components/education/CertificateSection';

const App = () => {
  return (
    <div className='bg-[#0f172a] !overflow-x-hidden' >
      <ScrollProgressBar/>
      <NavBar/>
      <ScrollToTop></ScrollToTop>
      <Hero/>
      <About/>
      <Skill/>
      <ProjectSection/>
      <Education/>
      <CertificateSection/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;