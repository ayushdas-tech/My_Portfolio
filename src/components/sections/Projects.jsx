import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-slate-800/60 light:border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        <SectionHeading
          tag="PROJECTS"
          title="Featured Analytics Projects"
          subtitle="Real-world case studies in business intelligence, SQL diagnostics, and data visualization."
        />

        <div className="space-y-8">
          {/* ============================================================ */}
          {/* PROJECT 1 */}
          {/* ============================================================ */}
          <div className="p-6 sm:p-7 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4 light:bg-slate-50 light:border-slate-200">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1 light:text-cyan-600">
                  Business Intelligence · Dashboard
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 light:text-slate-900">
                  {projects[0].title}
                </h3>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2">
                <a
                  href={projects[0].liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-colors shadow-sm"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={projects[0].githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-800 hover:bg-dark-700 text-slate-200 border border-slate-700 transition-colors light:bg-white light:text-slate-800 light:border-slate-300"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed light:text-slate-600">
              {projects[0].description}
            </p>

            {/* Key Highlights */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-1 light:text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Revenue, profit, and order trend analysis across multi-channel sales pipelines.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Customer segmentation, category performance, and regional revenue distribution.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Transaction-level search and instant multi-metric filtering engine.</span>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60 light:border-slate-200">
              {projects[0].techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-xs font-mono bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-white light:text-slate-700 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>


          {/* ============================================================ */}
          {/* PROJECT 2 */}
          {/* ============================================================ */}
          <div className="p-6 sm:p-7 rounded-2xl bg-dark-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-4 light:bg-slate-50 light:border-slate-200">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider block mb-1 light:text-sky-600">
                  SQL Diagnostics · Strategy
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 light:text-slate-900">
                  {projects[1].title}
                </h3>
              </div>

              {/* Status / Placeholder Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-dark-800 text-slate-400 border border-slate-700/60 light:bg-white light:text-slate-600 light:border-slate-300">
                <span>Release Pending</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed light:text-slate-600">
              {projects[1].description}
            </p>

            {/* Key Highlights */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-1 light:text-slate-700">
              <div className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span>SQL queries diagnosing profit margin erosion when retail discounts exceed 20%.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span>Region and product category matrix ranking net operating profit vs transaction volume.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span>Data-backed pricing recommendations proposing calibrated discount ceilings.</span>
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60 light:border-slate-200">
              {projects[1].techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-xs font-mono bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-white light:text-slate-700 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
