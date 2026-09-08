import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  const tools = ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Pandas', 'MySQL'];

  return (
    <section id="home" className="pt-28 pb-14 md:pt-36 md:pb-18">
      <div className="max-w-3xl mx-auto px-6 space-y-5">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Data Analyst & BI Roles</span>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            Hi, I'm Ayush Das.
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-blue-600 mt-1">
            Data Analyst & B.Tech CSBS Student
          </p>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">
          I turn raw data into decisions. I analyze datasets, build interactive dashboards, and diagnose business metrics using Python, SQL, Excel, Power BI, and Tableau.
        </p>

        {/* Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-medium text-gray-400 mr-1">Toolkit:</span>
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200/80"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gray-500" />
            <span>Email</span>
          </a>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-gray-500" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-gray-500" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}
