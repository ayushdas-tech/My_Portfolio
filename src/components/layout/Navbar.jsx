import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, 
  Download, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  FolderKanban, 
  Terminal, 
  Award, 
  Mail, 
  User,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home', icon: BarChart2 },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Terminal },
  { name: 'Projects', href: '#projects', icon: FolderKanban },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Navbar() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-dark-950/85 backdrop-blur-md border-b border-cyan-500/15 shadow-lg shadow-cyan-950/20 light:bg-white/90 light:border-slate-200' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Mark: AD Monogram with Data Node */}
          <a 
            href="#home" 
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Ayush Das Portfolio Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-dark-800 to-dark-900 border border-cyan-500/30 group-hover:border-cyan-400 transition-all shadow-glow-sm light:bg-slate-100 light:border-cyan-400">
              <span className="font-heading font-bold text-lg tracking-wider text-cyan-400 group-hover:text-cyan-300">
                AD
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] border-2 border-dark-950" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors light:text-slate-900">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-cyan-400/90 tracking-wider">
                DATA ANALYST
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-dark-900/70 border border-slate-800/80 backdrop-blur-md light:bg-slate-100/90 light:border-slate-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-cyan-300 font-semibold light:text-cyan-700' 
                      : 'text-slate-400 hover:text-slate-100 light:text-slate-600 light:hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-cyan-950/70 border border-cyan-500/40 shadow-sm light:bg-cyan-100/80 light:border-cyan-300"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Resume CTA + Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Download Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              download="Ayush_Das_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-cyan-500 to-sky-500 text-dark-950 hover:from-cyan-400 hover:to-sky-400 transition-all shadow-glow-cyan transform hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span> Resume
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all light:bg-slate-100 light:border-slate-300 light:text-slate-600"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Navigation"
              className="md:hidden p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-400 light:bg-slate-100 light:border-slate-300 light:text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-cyan-500/20 bg-dark-950/95 backdrop-blur-xl px-4 pt-3 pb-6 light:bg-white/98 light:border-slate-200"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive 
                        ? 'bg-cyan-950/60 text-cyan-400 font-medium border border-cyan-500/30 light:bg-cyan-50 light:text-cyan-700' 
                        : 'text-slate-300 hover:bg-dark-900 hover:text-slate-100 light:text-slate-700 light:hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{item.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                );
              })}
              
              <div className="pt-3 mt-2 border-t border-slate-800 light:border-slate-200">
                <a
                  href={personalInfo.resumeUrl}
                  download="Ayush_Das_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-mono text-xs font-semibold bg-gradient-to-r from-cyan-500 to-sky-500 text-dark-950 shadow-glow-cyan"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
