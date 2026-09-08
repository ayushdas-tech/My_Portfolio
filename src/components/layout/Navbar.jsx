import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'py-3.5 bg-dark-950/80 backdrop-blur-md border-b border-slate-800/80 light:bg-white/80 light:border-slate-200' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        
        {/* Name / Home Link */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform" />
          <span className="font-heading font-bold text-base tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors light:text-slate-900">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-400 light:text-slate-600">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-slate-100 transition-colors light:hover:text-slate-900"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download="Ayush_Das_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-cyan-500 hover:bg-cyan-400 text-dark-950 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-dark-800 transition-colors light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="sm:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-100 light:text-slate-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-dark-950/95 px-6 py-4 space-y-3 light:bg-white light:border-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors light:text-slate-700"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
