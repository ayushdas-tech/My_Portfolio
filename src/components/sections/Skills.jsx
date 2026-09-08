import React from 'react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="py-14 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="Tools and platforms used for data modeling, analytics, and business intelligence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-2.5"
            >
              <h3 className="font-semibold text-sm text-gray-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
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
