import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
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
        ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-xs' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900 text-sm tracking-tight hover:text-blue-600 transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-gray-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="sm:hidden p-1.5 text-gray-600 hover:text-gray-900"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-gray-200 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
