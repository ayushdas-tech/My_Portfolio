import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Heart, 
  Database,
  Code,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950/90 relative z-10 light:bg-slate-50 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/60 light:border-slate-200">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-dark-900 border border-cyan-500/30 text-cyan-400 font-heading font-bold text-sm light:bg-white light:border-cyan-400">
                AD
              </div>
              <span className="font-heading font-bold text-base text-slate-100 light:text-slate-900">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400 mb-2">
              DATA ANALYST PORTFOLIO
            </p>
            <p className="text-xs text-slate-400 max-w-sm light:text-slate-600">
              Transforming complex transactional and operational data into actionable dashboards, statistical insights, and strategic decisions.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400 light:text-slate-600">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Col 3: Social Icons & Back to top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all light:bg-white light:border-slate-300 light:text-slate-700"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all light:bg-white light:border-slate-300 light:text-slate-700"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.email}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all light:bg-white light:border-slate-300 light:text-slate-700"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-dark-900 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-950 transition-all ml-2 light:bg-cyan-50 light:border-cyan-300 light:hover:bg-cyan-100"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tech Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>
            © {currentYear} Ayush Das. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React + Tailwind CSS + Framer Motion</span>
            <span className="text-cyan-400">⚡</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
