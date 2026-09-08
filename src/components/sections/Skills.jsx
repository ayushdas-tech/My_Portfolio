import React from 'react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        <SectionHeading
          tag="SKILLS"
          title="Technical Capabilities"
          subtitle="Tools and technologies used for data modeling, analytics, and business intelligence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 space-y-3 light:bg-slate-50 light:border-slate-200"
            >
              <h3 className="font-heading font-semibold text-sm text-slate-200 light:text-slate-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-white light:text-slate-800 light:border-slate-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
