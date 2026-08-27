import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Briefcase,
  TrendingUp,
  Cpu,
  Layers,
  FileCode
} from 'lucide-react';
import { personalInfo, educationList } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export function About() {
  const valueProps = [
    {
      title: "Data-to-Decision Pipeline",
      description: "Extracting raw transaction data with SQL, cleaning in Pandas, and synthesizing into high-impact executive dashboards.",
      icon: TrendingUp,
      accent: "cyan"
    },
    {
      title: "Business-First Analytics",
      description: "Trained in Computer Science & Business Systems (CSBS) to align algorithmic metrics with margin growth and customer retention.",
      icon: Briefcase,
      accent: "sky"
    },
    {
      title: "Solid CS Fundamentals",
      description: "Grounding data workflows with strong understanding of DSA, Object-Oriented Design, and relational database architecture.",
      icon: Cpu,
      accent: "emerald"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          code="01"
          tag="PROFILE & EDUCATION"
          title="Bridging Analytical Rigor & Business Strategy"
          subtitle="A high-level overview of my background, academic credentials, and analytical approach."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Recruiter Bio & Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md relative overflow-hidden light:bg-white light:border-slate-200">
              
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="cyan" dot>About Ayush Das</Badge>
                <span className="text-xs font-mono text-slate-500">Kolkata, WB</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 mb-4 light:text-slate-900">
                Transforming complex datasets into actionable business leverage.
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4 light:text-slate-600">
                {personalInfo.fullBio}
              </p>

              {/* Quick Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-300 light:border-slate-100 light:text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complex SQL & Window Functions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Python (Pandas & EDA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Power BI & Tableau Storytelling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Financial & Sales KPI Modeling</span>
                </div>
              </div>

            </div>

            {/* Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {valueProps.map((prop, idx) => {
                const Icon = prop.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-dark-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all light:bg-slate-50 light:border-slate-200"
                  >
                    <div className="p-2 rounded-lg bg-dark-800 w-fit text-cyan-400 mb-2.5 light:bg-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-semibold text-xs text-slate-200 mb-1 light:text-slate-800">
                      {prop.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug light:text-slate-600">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

          {/* Right Column: Elegant Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-md light:bg-white light:border-slate-200">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800 light:border-slate-100">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-heading font-bold text-lg text-slate-100 light:text-slate-900">
                    Academic Background
                  </h3>
                </div>
                <Badge variant="sky">Verified Credentials</Badge>
              </div>

              {/* Education Cards */}
              <div className="space-y-6">
                {educationList.map((edu, index) => (
                  <div 
                    key={index}
                    className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:to-slate-800 last:before:bg-cyan-400"
                  >
                    {/* Node Dot */}
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-dark-950 border-2 border-cyan-400 shadow-[0_0_8px_#22d3ee]" />

                    <div className="p-4 sm:p-5 rounded-xl bg-dark-850/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all light:bg-slate-50 light:border-slate-200">
                      
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                            {edu.type}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-slate-100 font-heading light:text-slate-900">
                            {edu.institution}
                          </h4>
                        </div>
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 light:bg-cyan-100 light:text-cyan-800">
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

                      <ul className="space-y-1.5 text-xs text-slate-400 light:text-slate-600">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
