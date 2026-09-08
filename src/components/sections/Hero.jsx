import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export function Hero() {
  const tools = ['Python', 'SQL', 'Excel', 'Power BI', 'Tableau', 'Pandas', 'MySQL'];

  return (
    <section id="home" className="pt-28 pb-14 md:pt-36 md:pb-18">
      <div className="max-w-3xl mx-auto px-6 space-y-5">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edeae3] border border-[#dedad1] text-xs font-medium text-[#44403c]">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span>Available for Data Analyst & BI Roles</span>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1c1917] tracking-tight">
            Hi, I'm Ayush Das.
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#57534e] mt-1">
            Data Analyst & B.Tech CSBS Student
          </p>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-[#57534e] leading-relaxed max-w-2xl">
          I turn raw data into decisions. I analyze datasets, build interactive dashboards, and diagnose business metrics using Python, SQL, Excel, Power BI, and Tableau.
        </p>

        {/* Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-xs font-medium text-[#78716c] mr-1">Toolkit:</span>
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#eeece6] text-[#44403c] border border-[#e2dfd7]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#292524] hover:bg-[#44403c] text-[#fafaf9] transition-colors"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#57534e] hover:text-[#1c1917] hover:bg-[#edeae3] transition-colors border border-[#e2dfd7]"
          >
            <Mail className="w-3.5 h-3.5 text-[#78716c]" />
            <span>Email</span>
          </a>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#57534e] hover:text-[#1c1917] hover:bg-[#edeae3] transition-colors border border-[#e2dfd7]"
          >
            <Github className="w-3.5 h-3.5 text-[#78716c]" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-[#57534e] hover:text-[#1c1917] hover:bg-[#edeae3] transition-colors border border-[#e2dfd7]"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#78716c]" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}
