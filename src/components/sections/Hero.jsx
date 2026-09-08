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
  FileSpreadsheet, 
  BarChart, 
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { HeroDashboard } from './HeroDashboard';

export function Hero() {
  const tools = [
    { name: 'Python', icon: Code },
    { name: 'SQL', icon: Database },
    { name: 'Power BI', icon: BarChart },
    { name: 'Excel', icon: FileSpreadsheet },
    { name: 'Tableau', icon: BarChart },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-analyst pointer-events-none opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-cyan-500/20 mb-5 light:bg-slate-100 light:border-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 light:text-slate-700">
                Available for Data Analyst & BI Roles
              </span>
            </div>

            {/* Subheading */}
            <div className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2 light:text-cyan-600">
              {personalInfo.subheading}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 font-heading leading-tight mb-5 light:text-slate-950">
              I turn raw data into{' '}
              <span className="gradient-text-cyan">decisions.</span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-xl light:text-slate-600">
              {personalInfo.bioHeadline}
            </p>

            {/* Core Tools */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono text-slate-400 mr-1">Toolkit:</span>
              {tools.map((t) => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-dark-900 border border-slate-800 text-slate-300 light:bg-slate-100 light:border-slate-200 light:text-slate-700"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.name}</span>
                  </span>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Ayush_Das_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-medium bg-dark-900 hover:bg-dark-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-all light:bg-white light:text-slate-800 light:border-slate-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4 border-t border-slate-800/80 w-full text-xs font-mono text-slate-400 light:border-slate-200">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700 light:hover:text-cyan-600"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700 light:hover:text-cyan-600"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a 
                href={personalInfo.socialLinks.email}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700 light:hover:text-cyan-600"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Mini Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 w-full"
          >
            <HeroDashboard />
          </motion.div>

        </div>

      </div>

      {/* Clean Scroll prompt */}
      <div className="flex justify-center mt-12 md:mt-16">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
}
