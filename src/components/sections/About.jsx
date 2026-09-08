import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import { personalInfo, educationList } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        <SectionHeading
          tag="ABOUT"
          title="Background & Education"
        />

        <div className="space-y-8">
          {/* Bio text */}
          <p className="text-base text-slate-300 leading-relaxed light:text-slate-600">
            {personalInfo.fullBio}
          </p>

          {/* Education cards */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
              Education
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-colors light:bg-slate-50 light:border-slate-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-heading font-bold text-base text-slate-100 light:text-slate-900">
                      {edu.institution}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-dark-800 text-cyan-300 border border-slate-700 light:bg-white light:text-slate-800 light:border-slate-300">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 font-medium mb-2 light:text-slate-700">
                    {edu.degree}
                  </p>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400 light:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Award className="w-3.5 h-3.5" />
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
