import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [showSubbar, setShowSubbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'about'];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        const rect = sectionElement.getBoundingClientRect();

        // Check if the section is in view
        if (rect.top <= 0 && rect.bottom >= 0) {
          setActiveSection(section);
        }

        // Show the subbar only when we're past the "hero" section
        if (rect.top <= window.innerHeight && section === 'about') {
          setShowSubbar(true);
        } else if (rect.top > window.innerHeight) {
          setShowSubbar(false);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Vertical Line with Dots and Section Names (Subbar) */}
      {showSubbar && (
        <div className="fixed top-1/3 right-5 z-50 flex flex-col items-center space-y-8 lg:flex hidden">
          {/* Vertical line */}
          <div className="relative flex flex-col items-center space-y-10">

            {/* About Section */}
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className={`text-red-300 ${activeSection === 'about' ? 'font-bold' : ''}`}>
                About
              </span>
              <div
                className={`w-2 h-2 rounded-full ${activeSection === 'about' ? 'bg-red-200' : 'bg-gray-400'}`}
              ></div>
            </div>

            {/* Skills Section */}
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className={`text-red-300 ${activeSection === 'skills' ? 'font-bold' : ''}`}>
                Skills
              </span>
              <div
                className={`w-2 h-2 rounded-full ${activeSection === 'skills' ? 'bg-red-200' : 'bg-gray-400'}`}
              ></div>
            </div>

            {/* Projects Section */}
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className={`text-red-300 ${activeSection === 'projects' ? 'font-bold' : ''}`}>
                Projects
              </span>
              <div
                className={`w-2 h-2 rounded-full ${activeSection === 'projects' ? 'bg-red-200' : 'bg-gray-400'}`}
              ></div>
            </div>

            {/* Contact Section */}
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className={`text-red-300 ${activeSection === 'contact' ? 'font-bold' : ''}`}>
                Contact
              </span>
              <div
                className={`w-2 h-2 rounded-full ${activeSection === 'contact' ? 'bg-red-200' : 'bg-gray-400'}`}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <section id="hero" className="relative flex items-center justify-center w-full h-screen bg-right bg-fixed">
        <Hero />
      </section>

      <section id="about" className="relative flex justify-center w-full bg-right bg-fixed">
        <About />
      </section>

      <section id="skills"  className="relative flex justify-center w-full  bg-right bg-fixed">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Home;