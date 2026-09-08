import React from 'react';

export function SectionHeading({ tag, title, subtitle }) {
  return (
    <div className="mb-8">
      {tag && (
        <span className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-1.5 block light:text-cyan-600">
          // {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-100 tracking-tight light:text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-400 light:text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
