import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Code2, 
  Boxes, 
  Database, 
  Cpu, 
  GitBranch 
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = {
  BarChart3: BarChart3,
  Code2: Code2,
  Boxes: Boxes,
  Database: Database,
  Cpu: Cpu,
  GitBranch: GitBranch
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          code="02"
          tag="SKILLS & TOOLS"
          title="Technical & Analytical Capabilities"
          subtitle="A structured overview of the languages, analytics platforms, libraries, and core computer science concepts I work with."
        />

        {/* 6 Clean Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-dark-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between light:bg-white light:border-slate-200"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-dark-800 text-cyan-400 border border-slate-700/60 light:bg-slate-100 light:border-slate-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-slate-100 light:text-slate-900">
                        {category.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {category.skills.length} core skills
                      </span>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-dark-850 border border-slate-800 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors light:bg-slate-100 light:border-slate-200 light:text-slate-800"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="font-medium">{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtitle / Focus note */}
                <p className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 light:border-slate-100 light:text-slate-500">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
