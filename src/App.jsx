import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { ChatBot } from './components/ui/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#292524] font-sans selection:bg-[#e7e5df] selection:text-[#1c1917]">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
