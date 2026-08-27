import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function MetricCard({ 
  title, 
  value, 
  change, 
  trend = 'up',
  subtitle,
  icon: Icon,
  accent = 'cyan',
  className = '' 
}) {
  const accentGradients = {
    cyan: "from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400",
    blue: "from-sky-500/10 to-transparent border-sky-500/20 hover:border-sky-500/40 text-sky-400",
    emerald: "from-emerald-500/10 to-transparent border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400",
    amber: "from-amber-500/10 to-transparent border-amber-500/20 hover:border-amber-500/40 text-amber-400",
    indigo: "from-indigo-500/10 to-transparent border-indigo-500/20 hover:border-indigo-500/40 text-indigo-400"
  };

  return (
    <motion.div 
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`relative p-4 sm:p-5 rounded-xl bg-gradient-to-b ${accentGradients[accent] || accentGradients.cyan} bg-dark-900/90 backdrop-blur-md border transition-all duration-300 shadow-card-dark light:bg-white light:border-slate-200 light:shadow-sm ${className}`}
    >
      {/* Top Header: Title & Icon */}
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500">
          {title}
        </span>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-dark-800 border border-slate-700/50 text-slate-300 light:bg-slate-100 light:border-slate-200 light:text-slate-700">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Main Metric Value */}
      <div className="flex items-baseline gap-2 mb-1.5">
        <span className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-slate-100 light:text-slate-900">
          {value}
        </span>
      </div>

      {/* Footer: Trend and Subtitle */}
      {(change || subtitle) && (
        <div className="flex items-center gap-2 pt-1 border-t border-slate-800/60 light:border-slate-100 text-xs">
          {change && (
            <span className={`inline-flex items-center gap-1 font-mono font-medium ${
              trend === 'up' ? 'text-emerald-400 light:text-emerald-600' :
              trend === 'down' ? 'text-rose-400 light:text-rose-600' :
              'text-slate-400 light:text-slate-500'
            }`}>
              {trend === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
              {trend === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
              {trend === 'neutral' && <Minus className="w-3.5 h-3.5" />}
              {change}
            </span>
          )}
          {subtitle && (
            <span className="text-slate-500 text-[11px] truncate">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
