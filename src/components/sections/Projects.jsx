import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="py-14 border-t border-[#e7e5df]">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world case studies in business analytics, dashboards, and SQL diagnostics."
        />

        <div className="space-y-6">
          {/* Project 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#e7e5df] space-y-3.5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#78716c]">
                  Business Intelligence
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c1917] mt-0.5">
                  {projects[0].title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={projects[0].liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#292524] hover:bg-[#44403c] text-[#fafaf9] transition-colors"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={projects[0].githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#f0eee8] hover:bg-[#e7e5df] text-[#44403c] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#78716c]" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <p className="text-sm text-[#57534e] leading-relaxed">
              {projects[0].description}
            </p>

            <ul className="space-y-1 text-xs text-[#57534e] list-disc list-inside">
              <li>Revenue, profit, and order trend analysis across multi-channel sales pipelines.</li>
              <li>Customer segmentation, category performance, and regional revenue breakdown.</li>
              <li>Transaction-level search and instant multi-metric filtering engine.</li>
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f0eee8]">
              {projects[0].techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-xs font-medium bg-[#eeece6] text-[#44403c]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#e7e5df] space-y-3.5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#78716c]">
                  SQL Diagnostics
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c1917] mt-0.5">
                  {projects[1].title}
                </h3>
              </div>

              <span className="px-2.5 py-1 rounded text-xs font-medium bg-[#f0eee8] text-[#78716c]">
                Release Pending
              </span>
            </div>

            <p className="text-sm text-[#57534e] leading-relaxed">
              {projects[1].description}
            </p>

            <ul className="space-y-1 text-xs text-[#57534e] list-disc list-inside">
              <li>SQL queries diagnosing profit margin erosion when retail discounts exceed 20%.</li>
              <li>Region and product category matrix ranking net operating profit vs transaction volume.</li>
              <li>Data-backed pricing recommendations proposing calibrated discount ceilings.</li>
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f0eee8]">
              {projects[1].techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded text-xs font-medium bg-[#eeece6] text-[#44403c]"
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
