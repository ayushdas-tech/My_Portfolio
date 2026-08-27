import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Code2, 
  Boxes, 
  Database, 
  Cpu, 
  GitBranch, 
  FileSpreadsheet, 
  PieChart, 
  Layers, 
  Terminal,
  Search,
  Filter,
  Check
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

const iconMap = {
  BarChart3: BarChart3,
  Code2: Code2,
  Boxes: Boxes,
  Database: Database,
  Cpu: Cpu,
  GitBranch: GitBranch
};

export function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.title.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-analyst pointer-events-none opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <SectionHeading
          code="02"
          tag="TECHNICAL TOOLKIT"
          title="Analytical, Querying & Computational Skills"
          subtitle="A comprehensive matrix of technologies, libraries, BI platforms, and engineering fundamentals applied across projects."
        />

        {/* Filter Chips Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeFilter === 'all'
                ? 'bg-cyan-500 text-dark-950 font-bold shadow-glow-sm'
                : 'bg-dark-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 light:bg-slate-100 light:text-slate-600'
            }`}
          >
            All Disciplines ({skillCategories.length})
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveFilter(category.title.split(' ')[0])}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeFilter === category.title.split(' ')[0]
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-glow-sm'
                  : 'bg-dark-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 light:bg-slate-100 light:text-slate-600'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Terminal;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 rounded-2xl bg-dark-900/90 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-md transition-all shadow-card-dark flex flex-col justify-between light:bg-white light:border-slate-200 light:shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-dark-800 border border-slate-700/60 text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors light:bg-slate-100 light:border-slate-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors light:text-slate-900">
                          {category.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} core competencies
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-xs font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5 light:text-slate-600">
                    {category.description}
                  </p>

                  {/* Skills Chips inside category */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-dark-850/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all light:bg-slate-50 light:border-slate-200"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-mono font-semibold text-xs text-slate-200 light:text-slate-800">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-dark-800 text-cyan-400 border border-cyan-500/20 light:bg-cyan-50 light:text-cyan-700">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug light:text-slate-500">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500 light:border-slate-100">
                  <span>Targeted for Data Analytics</span>
                  <span className="text-emerald-400">● Production Ready</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
