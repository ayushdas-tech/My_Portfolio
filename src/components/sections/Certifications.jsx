import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Binary, PieChart } from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Certifications() {
  const certIcons = {
    Binary: Binary,
    PieChart: PieChart
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          code="04"
          tag="CERTIFICATIONS"
          title="Verified Professional Credentials"
          subtitle="Specialized certifications completed in algorithmic problem solving and end-to-end data analytics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = certIcons[cert.icon] || Award;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-dark-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between light:bg-white light:border-slate-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-dark-800 text-cyan-400 border border-slate-700/60 light:bg-slate-100 light:border-slate-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold block light:text-cyan-600">
                          {cert.issuer}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {cert.badge}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 light:bg-emerald-50 light:text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-100 mb-2 light:text-slate-900">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 light:text-slate-600">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-dark-850 text-slate-300 border border-slate-800 light:bg-slate-100 light:text-slate-700 light:border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-500 flex items-center justify-between light:border-slate-100">
                  <span>Authorized Certificate</span>
                  <span className="text-cyan-400">● Completed</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
