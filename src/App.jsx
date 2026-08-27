import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-950 text-slate-100 font-sans transition-colors duration-300 relative selection:bg-cyan-500/30 selection:text-cyan-300 light:bg-slate-50 light:text-slate-900">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />

      </div>
    </ThemeProvider>
  );
}

export default App;
