import React from 'react';

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[#1c1917] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm text-[#78716c]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
