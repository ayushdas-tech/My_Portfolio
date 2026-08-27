import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Code, 
  Table, 
  FileSpreadsheet, 
  BarChart, 
  Sparkles,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { HeroDashboard } from './HeroDashboard';
import { Badge } from '../ui/Badge';

export function Hero() {
  const tools = [
    { name: 'Python', icon: Code, color: 'text-sky-400 border-sky-500/30' },
    { name: 'SQL', icon: Database, color: 'text-cyan-400 border-cyan-500/30' },
    { name: 'Power BI', icon: BarChart, color: 'text-amber-400 border-amber-500/30' },
    { name: 'Excel', icon: FileSpreadsheet, color: 'text-emerald-400 border-emerald-500/30' },
    { name: 'Tableau', icon: Table, color: 'text-indigo-400 border-indigo-500/30' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background Decorative Gradients and Grid */}
      <div className="absolute inset-0 bg-grid-analyst pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            
            {/* Status / Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/30 mb-6 shadow-glow-sm light:bg-cyan-50 light:border-cyan-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-xs font-mono font-medium text-slate-300 light:text-slate-700">
                Open to Data Analyst & BI Roles
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold">2027 Grad</span>
            </div>

            {/* Subheading Identity */}
            <div className="mb-2">
              <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold light:text-cyan-600">
                {personalInfo.subheading}
              </span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 font-heading leading-[1.1] mb-6 light:text-slate-950">
              I turn raw data into{' '}
              <span className="gradient-text-cyan relative inline-block">
                decisions.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-cyan-400/40" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 2 150 2 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300/90 font-normal leading-relaxed mb-8 max-w-xl light:text-slate-600">
              {personalInfo.bioHeadline}
            </p>

            {/* Core Tech Stack Mini Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
              {tools.map((t) => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.name}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-dark-900/80 border ${t.color} light:bg-slate-100`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{t.name}</span>
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold bg-gradient-to-r from-cyan-500 via-sky-500 to-cyan-400 text-dark-950 hover:from-cyan-400 hover:to-sky-400 transition-all shadow-glow-cyan transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Ayush_Das_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-sm font-medium bg-dark-900/80 hover:bg-dark-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all light:bg-white light:text-slate-800 light:border-slate-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Connect Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full light:border-slate-200">
              <span className="text-xs font-mono text-slate-400">CONNECT:</span>
              
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Ayush Das GitHub"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700 light:hover:text-cyan-600"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Ayush Das LinkedIn"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700 light:hover:text-cyan-600"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a 
                href={personalInfo.socialLinks.email}
                aria-label="Email Ayush Das"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700 light:hover:text-cyan-600"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Live Interactive Hero Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <HeroDashboard />
          </motion.div>

        </div>

      </div>

      {/* Scroll indicator prompt */}
      <div className="flex justify-center mt-12 md:mt-16">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono"
        >
          <span>EXPLORE ANALYST PROFILE</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
}
