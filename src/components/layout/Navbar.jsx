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
        ? 'py-3.5 bg-[#f7f6f2]/90 backdrop-blur-md border-b border-[#e7e5df]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#home" className="flex items-center gap-2 font-semibold text-[#1c1917] text-sm tracking-tight hover:text-[#57534e] transition-colors">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-[#78716c] font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-[#1c1917] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="sm:hidden p-1.5 text-[#78716c] hover:text-[#1c1917]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#e7e5df] bg-[#f7f6f2] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#44403c] hover:text-[#1c1917]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
