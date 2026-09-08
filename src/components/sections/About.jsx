import React from 'react';
import { personalInfo, educationList } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="py-14 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <SectionHeading title="About & Education" />

        <p className="text-base text-gray-700 leading-relaxed">
          {personalInfo.fullBio}
        </p>

        {/* Education Timeline */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Education
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-sm text-gray-900">
                    {edu.institution}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                    {edu.score}
                  </span>
                </div>

                <p className="text-xs text-gray-600 font-medium">
                  {edu.degree}
                </p>

                <p className="text-xs text-gray-400">
                  {edu.period} · {edu.status}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
