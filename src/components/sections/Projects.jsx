import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  BarChart2, 
  ArrowUpRight, 
  CheckCircle2, 
  Database,
  Lock
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  BarChart,
  Cell
} from 'recharts';
import { projects } from '../../data/portfolioData';
import { salesProjectChartData, discountImpactData } from '../../data/mockAnalyticsData';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          code="03"
          tag="CASE STUDIES"
          title="Featured Analytics Projects"
          subtitle="Detailed case studies demonstrating business intelligence modeling, SQL diagnostics, and interactive dashboard engineering."
        />

        <div className="space-y-12 md:space-y-16">
          
          {/* ============================================================ */}
          {/* CASE STUDY 01: Sales & Revenue Analytics Dashboard */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-dark-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl light:bg-white light:border-slate-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-2 light:text-cyan-600">
                    Case Study 01 · Commercial BI
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100 mb-3 light:text-slate-900">
                    {projects[0].title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 light:text-slate-600">
                    {projects[0].description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 text-xs text-slate-300 light:text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Revenue & Margin Tracking:</strong> Analyzed $482k+ across multi-channel sales pipelines.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Order & Customer Cohorts:</strong> Dynamic time-series filtering across 12,800+ processed orders.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span><strong>Product & Regional Performance:</strong> Granular margin breakdowns identifying high-value categories.</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[0].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-slate-100 light:text-slate-700 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 light:border-slate-200">
                  <a
                    href={projects[0].liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-all shadow-sm"
                  >
                    <span>View Live Dashboard</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium bg-dark-800 hover:bg-dark-700 text-slate-200 border border-slate-700 transition-all light:bg-slate-100 light:text-slate-800"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Clean Chart Visualizer */}
              <div className="lg:col-span-6 p-4 rounded-xl bg-dark-950/70 border border-slate-800/80 light:bg-slate-50 light:border-slate-200">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-300 light:text-slate-700">
                  <span className="font-semibold">Actual Revenue vs Target Quota</span>
                  <span className="text-emerald-400 font-medium">+18.4% YoY</span>
                </div>

                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={salesProjectChartData} margin={{ top: 8, right: 8, left: -15, bottom: 0 }}>
                      <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                      <YAxis 
                        stroke="#64748b" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(val) => `$${(val/1000).toFixed(0)}k`} 
                      />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="p-2.5 rounded-lg bg-dark-950/95 border border-cyan-500/30 text-xs font-mono shadow-lg">
                                <p className="text-slate-200 font-bold mb-1">{label}</p>
                                <p className="text-cyan-400">Actual: ${payload[0]?.value?.toLocaleString()}</p>
                                <p className="text-sky-400">Target: ${payload[1]?.value?.toLocaleString()}</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="actual" name="Actual" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={18} />
                      <Line type="monotone" dataKey="target" name="Target" stroke="#38bdf8" strokeWidth={2} strokeDasharray="3 3" dot={false} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 light:border-slate-200">
                  <span>Margin: <strong className="text-emerald-400 font-normal">24.6% Avg</strong></span>
                  <span className="text-slate-400">Interactive KPI Filter Engine</span>
                </div>
              </div>

            </div>
          </motion.div>


          {/* ============================================================ */}
          {/* CASE STUDY 02: Retail Sales Health Check */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-dark-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl light:bg-white light:border-slate-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Narrative */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider mb-2 light:text-sky-600">
                    Case Study 02 · SQL & Profit Diagnostics
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100 mb-3 light:text-slate-900">
                    {projects[1].title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5 light:text-slate-600">
                    {projects[1].description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 text-xs text-slate-300 light:text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span><strong>Discount Erosion Analysis:</strong> Pinpointed profit margin loss when discounts exceed 20%.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span><strong>Regional Performance:</strong> Ranked retail hubs by net operating profit vs gross transaction volume.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span><strong>Strategic Recommendations:</strong> Formulated calibrated discount ceilings with projected +8.2% margin gain.</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[1].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-slate-100 light:text-slate-700 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions / Placeholder indicators */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono light:border-slate-200">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dark-800 text-slate-400 border border-slate-700/60 light:bg-slate-100 light:text-slate-600">
                    <Lock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Demo (Release Pending)</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-dark-800 text-slate-400 border border-slate-700/60 light:bg-slate-100 light:text-slate-600">
                    <Github className="w-3.5 h-3.5 text-slate-500" />
                    <span>GitHub Repo (Pending)</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Clean Discount Sensitivity Chart */}
              <div className="lg:col-span-6 p-4 rounded-xl bg-dark-950/70 border border-slate-800/80 light:bg-slate-50 light:border-slate-200">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-300 light:text-slate-700">
                  <span className="font-semibold">Discount Tier vs Net Margin (%)</span>
                  <span className="text-amber-400 font-medium">Margin Diagnostic</span>
                </div>

                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={discountImpactData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
                      <XAxis dataKey="discountTier" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis 
                        stroke="#64748b" 
                        fontSize={10} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(val) => `${val}%`}
                      />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            const item = payload[0]?.payload;
                            return (
                              <div className="p-2.5 rounded-lg bg-dark-950/95 border border-sky-500/30 text-xs font-mono shadow-lg">
                                <p className="text-slate-200 font-bold mb-1">{label} Tier</p>
                                <p className="text-sky-400">Gross Margin: {item.grossMargin}%</p>
                                <p className={item.netProfit < 0 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                                  Net Profit: {item.netProfit}%
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar dataKey="grossMargin" name="Gross %" fill="#38bdf8" radius={[3, 3, 0, 0]} barSize={16} />
                      <Bar dataKey="netProfit" name="Net %" barSize={16} radius={[3, 3, 0, 0]}>
                        {discountImpactData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.netProfit < 0 ? '#fb7185' : '#34d399'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400 light:border-slate-200">
                  <span className="text-rose-400">&gt; 20% discount triggers negative net margin</span>
                  <span className="text-slate-400">SQL Window Analysis</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
