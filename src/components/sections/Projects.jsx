import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  BarChart2, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Filter, 
  Search, 
  Sparkles,
  AlertCircle,
  Database,
  Table,
  LineChart as LineChartIcon,
  Copy,
  Check
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
  CartesianGrid,
  BarChart,
  Cell
} from 'recharts';
import { projects } from '../../data/portfolioData';
import { salesProjectChartData, discountImpactData } from '../../data/mockAnalyticsData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

export function Projects() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyLink = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <SectionHeading
          code="03"
          tag="CASE STUDIES & ANALYTICS PROJECTS"
          title="Featured Analytics & Decision Systems"
          subtitle="In-depth analytics case studies showcasing commercial metrics modeling, SQL diagnostics, and interactive dashboard engineering."
        />

        {/* Project Case Studies Stack */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* ============================================================ */}
          {/* PROJECT 1: Sales & Revenue Analytics Dashboard */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-dark-900/90 border border-cyan-500/30 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 relative overflow-hidden light:bg-white light:border-cyan-200"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Project Narrative & Analysis */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="cyan" dot>Featured Case Study 01</Badge>
                    <span className="text-xs font-mono text-cyan-400/80">COMMERCIAL BI</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100 mb-2 light:text-slate-900">
                    {projects[0].title}
                  </h3>

                  <p className="text-sm font-mono text-cyan-400 mb-4 light:text-cyan-600">
                    {projects[0].tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 light:text-slate-600">
                    {projects[0].description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[0].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-200 border border-slate-700/70 light:bg-slate-100 light:text-slate-700 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Analytical Features Checklist */}
                  <div className="p-4 rounded-xl bg-dark-850/80 border border-slate-800 mb-6 light:bg-slate-50 light:border-slate-200">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Key Analytical Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 light:text-slate-700">
                      {projects[0].highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links & CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800 light:border-slate-200">
                  <a
                    href={projects[0].liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-cyan-500 to-sky-500 text-dark-950 hover:from-cyan-400 hover:to-sky-400 transition-all shadow-glow-cyan"
                  >
                    <span>View Live Dashboard</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href={projects[0].githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium bg-dark-800 hover:bg-dark-700 text-slate-200 border border-slate-700 hover:border-cyan-500/40 transition-all light:bg-slate-100 light:text-slate-800"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Repository</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Interactive Dashboard Visualization Component */}
              <div className="lg:col-span-6 flex flex-col space-y-4">
                
                {/* KPI Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {projects[0].kpis.map((kpi, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-dark-850/90 border border-cyan-500/20 light:bg-slate-50 light:border-slate-200"
                    >
                      <span className="text-[10px] font-mono text-slate-400 block mb-1 truncate">
                        {kpi.label}
                      </span>
                      <span className="text-base sm:text-lg font-bold font-mono text-slate-100 metric-number block light:text-slate-900">
                        {kpi.value}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 block mt-0.5">
                        {kpi.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Main Interactive Recharts Chart Visualizer */}
                <div className="p-4 sm:p-5 rounded-2xl bg-dark-950/80 border border-slate-800/90 light:bg-slate-50 light:border-slate-200">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-cyan-400" />
                      <span className="font-mono font-semibold text-slate-200 light:text-slate-800">
                        Actual Revenue vs Target Forecast (USD)
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      Chart.js Engine
                    </span>
                  </div>

                  <div className="h-60 sm:h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={salesProjectChartData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} />
                        <YAxis 
                          stroke="#64748b" 
                          fontSize={10} 
                          tickLine={false} 
                          tickFormatter={(val) => `$${(val/1000).toFixed(0)}k`} 
                        />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="p-3 rounded-lg bg-dark-950/95 border border-cyan-500/50 shadow-2xl text-xs font-mono">
                                  <p className="text-slate-200 font-bold mb-1.5">{label} Performance</p>
                                  <p className="text-cyan-400">Actual Revenue: ${payload[0]?.value?.toLocaleString()}</p>
                                  <p className="text-sky-400">Target Target: ${payload[1]?.value?.toLocaleString()}</p>
                                  <p className="text-emerald-400">Profit Margin: {payload[0]?.payload?.margin}%</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'JetBrains Mono', paddingTop: '8px' }} />
                        <Bar dataKey="actual" name="Actual Revenue" fill="#06b6d4" radius={[4, 4, 0, 0]} barSize={20} />
                        <Line type="monotone" dataKey="target" name="Target Quota" stroke="#38bdf8" strokeWidth={2.5} strokeDasharray="4 4" dot={{ r: 3 }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 light:border-slate-200">
                    <span>Performance: <strong className="text-emerald-400 font-normal">+14.2% Above Target</strong></span>
                    <a 
                      href={projects[0].liveDemoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      Open full app <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>


          {/* ============================================================ */}
          {/* PROJECT 2: Retail Sales Health Check */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-dark-900/90 border border-indigo-500/30 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl shadow-indigo-950/30 relative overflow-hidden light:bg-white light:border-indigo-200"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Narrative & SQL Analysis Focus */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <Badge variant="indigo" dot>Featured Case Study 02</Badge>
                    <span className="text-xs font-mono text-indigo-400/80">SQL DIAGNOSTICS</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-100 mb-2 light:text-slate-900">
                    {projects[1].title}
                  </h3>

                  <p className="text-sm font-mono text-indigo-400 mb-4 light:text-indigo-600">
                    {projects[1].tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 light:text-slate-600">
                    {projects[1].description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[1].techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-800 text-slate-200 border border-slate-700/70 light:bg-slate-100 light:text-slate-700 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="p-4 rounded-xl bg-dark-850/80 border border-slate-800 mb-6 light:bg-slate-50 light:border-slate-200">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-indigo-400" />
                      SQL Findings & Strategic Recommendations
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 light:text-slate-700">
                      {projects[1].highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links / Clean Placeholder Callouts */}
                <div className="space-y-3 pt-4 border-t border-slate-800 light:border-slate-200">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Placeholder Live Demo Button */}
                    <div className="relative group">
                      <button
                        onClick={() => handleCopyLink("LIVE_DEMO_LINK_TO_BE_ADDED", "proj2-demo")}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium bg-dark-800 text-slate-300 border border-indigo-500/40 hover:border-indigo-400 hover:text-white transition-all light:bg-slate-100 light:text-slate-800"
                      >
                        <span>Demo:</span>
                        <code className="text-indigo-400 font-bold">LIVE_DEMO_LINK_TO_BE_ADDED</code>
                        {copiedId === "proj2-demo" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                      </button>
                    </div>

                    {/* Placeholder GitHub Button */}
                    <div className="relative group">
                      <button
                        onClick={() => handleCopyLink("GITHUB_LINK_TO_BE_ADDED", "proj2-gh")}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium bg-dark-800 text-slate-300 border border-indigo-500/40 hover:border-indigo-400 hover:text-white transition-all light:bg-slate-100 light:text-slate-800"
                      >
                        <Github className="w-4 h-4 text-indigo-400" />
                        <code className="text-indigo-400 font-bold">GITHUB_LINK_TO_BE_ADDED</code>
                        {copiedId === "proj2-gh" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Repository and Live deployment links will be linked upon public release.</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Retail Margin & Discount Sensitivity Chart */}
              <div className="lg:col-span-6 flex flex-col space-y-4">
                
                {/* Diagnostics KPI Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {projects[1].kpis.map((kpi, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-dark-850/90 border border-indigo-500/20 light:bg-slate-50 light:border-slate-200"
                    >
                      <span className="text-[10px] font-mono text-slate-400 block mb-1 truncate">
                        {kpi.label}
                      </span>
                      <span className="text-base sm:text-lg font-bold font-mono text-slate-100 metric-number block light:text-slate-900">
                        {kpi.value}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-400 block mt-0.5">
                        {kpi.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Recharts Discount Erosion Visualizer */}
                <div className="p-4 sm:p-5 rounded-2xl bg-dark-950/80 border border-slate-800/90 light:bg-slate-50 light:border-slate-200">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <div className="flex items-center gap-2">
                      <LineChartIcon className="w-4 h-4 text-indigo-400" />
                      <span className="font-mono font-semibold text-slate-200 light:text-slate-800">
                        Discount Tier vs Net Operating Margin (%)
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950 text-indigo-400 border border-indigo-500/30">
                      SQL Diagnostic Model
                    </span>
                  </div>

                  <div className="h-60 sm:h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={discountImpactData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                        <XAxis dataKey="discountTier" stroke="#64748b" fontSize={10} tickLine={false} />
                        <YAxis 
                          stroke="#64748b" 
                          fontSize={10} 
                          tickLine={false}
                          tickFormatter={(val) => `${val}%`}
                        />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              const item = payload[0]?.payload;
                              return (
                                <div className="p-3 rounded-lg bg-dark-950/95 border border-indigo-500/50 shadow-2xl text-xs font-mono">
                                  <p className="text-slate-200 font-bold mb-1.5">{label} Band</p>
                                  <p className="text-indigo-400">Order Volume: {item.volume} units</p>
                                  <p className="text-sky-400">Gross Margin: {item.grossMargin}%</p>
                                  <p className={item.netProfit < 0 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                                    Net Profit Margin: {item.netProfit}% {item.netProfit < 0 ? '(Margin Erosion Zone)' : ''}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'JetBrains Mono', paddingTop: '8px' }} />
                        <Bar dataKey="grossMargin" name="Gross Margin %" fill="#818cf8" radius={[3, 3, 0, 0]} barSize={18} />
                        <Bar dataKey="netProfit" name="Net Profit %" barSize={18} radius={[3, 3, 0, 0]}>
                          {discountImpactData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.netProfit < 0 ? '#fb7185' : '#34d399'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 light:border-slate-200">
                    <span className="text-amber-400">Insight: Discounts &gt; 20% severely cannibalize net profit.</span>
                    <span className="text-slate-500">SQL CTE Aggregation</span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
