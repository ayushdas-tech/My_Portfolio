import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Binary, 
  PieChart, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { certifications } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export function Certifications() {
  const certIcons = {
    Binary: Binary,
    PieChart: PieChart
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-analyst pointer-events-none opacity-25" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <SectionHeading
          code="04"
          tag="ACCREDITATIONS & COURSES"
          title="Verified Professional Certifications"
          subtitle="Specialized coursework completed in algorithmic problem solving, statistical programming, and modern data analytics workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = certIcons[cert.icon] || Award;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all shadow-card-dark flex flex-col justify-between relative overflow-hidden light:bg-white light:border-slate-200"
              >
                {/* Top Corner Glow Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Issuer & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-dark-800 border border-slate-700/60 text-cyan-400 group-hover:text-cyan-300 light:bg-slate-100 light:border-slate-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold block light:text-cyan-600">
                          {cert.issuer}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {cert.badge}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 light:bg-emerald-50 light:text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors light:text-slate-900">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 light:text-slate-600">
                    {cert.description}
                  </p>

                  {/* Skills Covered Matrix */}
                  <div className="p-3.5 rounded-xl bg-dark-850/80 border border-slate-800 light:bg-slate-50 light:border-slate-200">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Competencies Mastered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-white light:text-slate-700 light:border-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Validation */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 light:border-slate-100">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Completion
                  </span>
                  <span className="text-slate-500">
                    Industry Standard
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
