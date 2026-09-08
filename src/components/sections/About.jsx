import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { personalInfo, educationList } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          code="01"
          tag="ABOUT & EDUCATION"
          title="Analytical Mindset, Strategic Focus"
          subtitle="A summary of my academic background and approach to data analysis."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Recruiter Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md light:bg-white light:border-slate-200"
          >
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-2 light:text-cyan-600">
              Executive Summary
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 mb-4 light:text-slate-900">
              Transforming complex datasets into actionable business decisions.
            </h3>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6 light:text-slate-600">
              {personalInfo.fullBio}
            </p>

            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex flex-wrap gap-4 light:border-slate-100">
              <span>● Python & SQL Analytics</span>
              <span>● Power BI & Tableau</span>
              <span>● Statistical Modeling</span>
              <span>● Excel Financial Models</span>
            </div>
          </motion.div>

          {/* Right Column: Clean Education Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            {educationList.map((edu, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-slate-700 transition-all light:bg-white light:border-slate-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                      {edu.type}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-100 font-heading light:text-slate-900">
                      {edu.institution}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-dark-800 text-cyan-300 border border-slate-700 light:bg-slate-100 light:text-slate-800 light:border-slate-300">
                    {edu.score}
                  </span>
                </div>

                <div className="text-sm font-medium text-slate-300 mb-2 light:text-slate-700">
                  {edu.degree}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-3 light:text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    {edu.status}
                  </span>
                </div>

                <ul className="space-y-1 text-xs text-slate-400 light:text-slate-600">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
