import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  const tools = ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Pandas', 'MySQL'];

  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-900 border border-slate-800 text-xs font-mono text-slate-300 light:bg-slate-100 light:border-slate-200 light:text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Data Analyst & BI Opportunities</span>
          </div>

          {/* Name & Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-100 tracking-tight leading-tight light:text-slate-900">
              Ayush Das
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-400 mt-1 light:text-cyan-600">
              Data Analyst & B.Tech CSBS Student
            </p>
          </div>

          {/* Core Philosophy & Bio */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl light:text-slate-600">
            I turn raw data into decisions. I build practical analytics solutions, interactive dashboards, and business diagnostics using Python, SQL, Excel, Power BI, and Tableau.
          </p>

          {/* Core Stack Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono text-slate-400 mr-1">Toolkit:</span>
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-900 border border-slate-800 text-slate-200 light:bg-slate-100 light:border-slate-200 light:text-slate-800"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Action CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-colors shadow-sm"
            >
              <span>View Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Ayush_Das_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium bg-dark-900 hover:bg-dark-800 text-slate-200 border border-slate-800 light:bg-white light:border-slate-200 light:text-slate-800"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-100 hover:bg-dark-900 transition-colors light:text-slate-600 light:hover:text-slate-900"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-100 hover:bg-dark-900 transition-colors light:text-slate-600 light:hover:text-slate-900"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-100 hover:bg-dark-900 transition-colors light:text-slate-600 light:hover:text-slate-900"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
