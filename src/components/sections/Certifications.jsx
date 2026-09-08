import React from 'react';
import { certifications } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Certifications() {
  return (
    <section id="certifications" className="py-14 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <SectionHeading title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600">
                  {cert.issuer}
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>

              <h3 className="font-semibold text-sm text-gray-900">
                {cert.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-gray-700"
                  >
                    {skill}
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
