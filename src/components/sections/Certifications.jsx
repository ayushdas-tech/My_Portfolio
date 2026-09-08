import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Certifications() {
  return (
    <section id="certifications" className="py-16 border-t border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        <SectionHeading
          tag="CERTIFICATIONS"
          title="Verified Certifications"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800 space-y-2.5 light:bg-slate-50 light:border-slate-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-semibold light:text-cyan-600">
                  {cert.issuer}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>

              <h3 className="font-heading font-bold text-base text-slate-100 light:text-slate-900">
                {cert.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed light:text-slate-600">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cert.skillsCovered.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-white light:text-slate-700 light:border-slate-200"
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
