import React from 'react';

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'md',
  dot = false,
  className = '' 
}) {
  const baseStyles = "inline-flex items-center font-mono font-medium rounded-full transition-all duration-200";
  
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
    lg: "px-3 py-1.5 text-sm"
  };

  const variantStyles = {
    default: "bg-dark-800 text-slate-300 border border-slate-700/60 light:bg-slate-100 light:text-slate-700 light:border-slate-300",
    cyan: "bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 light:bg-cyan-50 light:text-cyan-700 light:border-cyan-300",
    sky: "bg-sky-950/40 text-sky-400 border border-sky-500/30 light:bg-sky-50 light:text-sky-700 light:border-sky-300",
    emerald: "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 light:bg-emerald-50 light:text-emerald-700 light:border-emerald-300",
    amber: "bg-amber-950/40 text-amber-400 border border-amber-500/30 light:bg-amber-50 light:text-amber-700 light:border-amber-300",
    indigo: "bg-indigo-950/40 text-indigo-400 border border-indigo-500/30 light:bg-indigo-50 light:text-indigo-700 light:border-indigo-300",
    rose: "bg-rose-950/40 text-rose-400 border border-rose-500/30 light:bg-rose-50 light:text-rose-700 light:border-rose-300",
  };

  const dotStyles = {
    default: "bg-slate-400",
    cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    sky: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]",
    emerald: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]",
    amber: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]",
    indigo: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]",
    rose: "bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse ${dotStyles[variant] || dotStyles.default}`} />
      )}
      {children}
    </span>
  );
}
