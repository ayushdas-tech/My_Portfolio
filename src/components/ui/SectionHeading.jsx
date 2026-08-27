import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ 
  code = "01",
  tag = "SECTION", 
  title, 
  subtitle,
  align = "center" 
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {/* Monospace section indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-800/80 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3.5 light:bg-cyan-50 light:border-cyan-200 light:text-cyan-700`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>// {code}. {tag}</span>
      </motion.div>

      {/* Main Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 font-heading light:text-slate-900"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3.5 text-sm sm:text-base text-slate-400 leading-relaxed light:text-slate-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
