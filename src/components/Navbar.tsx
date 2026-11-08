import React, { useState } from 'react';
import { Menu, X, Sun, Moon, FileDown, Shield, Sparkles, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 pointer-events-none">
      <div className={`max-w-4xl mx-auto rounded-full border pointer-events-auto shadow-xl backdrop-blur-md transition-all duration-300 px-4 sm:px-6 h-14 flex items-center justify-between gap-4 ${
        isDark
          ? 'bg-neutral-900/80 border-neutral-800/90 text-neutral-100 shadow-black/40'
          : 'bg-white/85 border-neutral-200/90 text-neutral-900 shadow-neutral-200/50'
      }`}>
        {/* Brand / Logo - DA only */}
        <a
          href="#about"
          aria-label="Home - Dan Adejinmi"
          className="flex items-center font-bold tracking-tight text-sm whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white flex items-center justify-center font-['Outfit'] font-bold text-xs shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            DA
          </div>
        </a>

        {/* Floating Pill Nav Links */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition-colors py-1 ${
                isDark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`p-2 rounded-full border text-xs transition-colors ${
              isDark
                ? 'border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800'
                : 'border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100'
            }`}
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>

          {/* View Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-emerald-500 text-neutral-950 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all whitespace-nowrap"
          >
            Get In Touch
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 text-neutral-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden max-w-5xl mx-auto mt-2 rounded-2xl border p-4 shadow-2xl pointer-events-auto space-y-2 ${
          isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-200' : 'bg-white border-neutral-200 text-neutral-800'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs font-medium rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs text-emerald-400 flex items-center gap-1.5 py-1 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Resume Document</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
