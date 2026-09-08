import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-800/60 light:border-slate-200 text-xs font-mono text-slate-500">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium light:text-slate-700">
            {personalInfo.name}
          </span>
          <span>·</span>
          <span>Data Analyst</span>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={personalInfo.socialLinks.github} 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-slate-200 transition-colors light:hover:text-slate-900"
          >
            GitHub
          </a>
          <a 
            href={personalInfo.socialLinks.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-slate-200 transition-colors light:hover:text-slate-900"
          >
            LinkedIn
          </a>
          <a 
            href={personalInfo.socialLinks.email} 
            className="hover:text-slate-200 transition-colors light:hover:text-slate-900"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-1.5 rounded-lg hover:bg-dark-800 text-slate-400 hover:text-cyan-400 transition-colors ml-2 light:hover:bg-slate-100"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
