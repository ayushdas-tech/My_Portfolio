import React from 'react';
import { certifications } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Certifications() {
  return (
    <section id="certifications" className="py-14 border-t border-[#e7e5df]">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <SectionHeading title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-4 rounded-xl bg-[#ffffff] border border-[#e7e5df] space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#78716c]">
                  {cert.issuer}
                </span>
                <span className="text-[11px] font-medium text-[#44403c] bg-[#edeae3] px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>

              <h3 className="font-semibold text-sm text-[#1c1917]">
                {cert.title}
              </h3>

              <p className="text-xs text-[#57534e] leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1 pt-1">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[11px] bg-[#eeece6] text-[#44403c]"
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
