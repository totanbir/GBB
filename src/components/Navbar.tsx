import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'Licensing', href: '#certifications' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#faf8f5]/95 dark:bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#e2ded5] dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'bg-[#faf8f5]/80 dark:bg-[#0c0d0e]/60 backdrop-blur-sm border-b border-[#e8e4dc] dark:border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Zone 1: Brand Image Logo & Wordmark Lockup */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-opacity hover:opacity-95"
          >
            <div className="relative w-10 h-10 rounded-sm overflow-hidden border border-[#e2ded5] dark:border-white/15 bg-neutral-950 shadow-xs shrink-0 group-hover:border-[#b88344] dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="/src/assets/images/gbb.jpg"
                alt="Kova Studio logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#b88344] dark:text-white dark:group-hover:text-[#d1a36a] transition-colors font-display leading-tight">
                {COMPANY_INFO.name.toUpperCase()}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold leading-none mt-0.5">
                Global Manpower Agency
              </span>
            </div>
          </a>

          {/* Zone 2: 4–6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-neutral-950 dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#b88344] dark:after:bg-[#d1a36a] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Header Right Side Controls (Single Round Theme Button) */}
          <div className="flex items-center gap-3">
            {/* Single Round Theme Toggle Button */}
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-[#d8d3c7] dark:border-white/15 bg-white/90 dark:bg-white/10 hover:bg-neutral-100 dark:hover:bg-white/15 text-neutral-800 dark:text-[#d1a36a] shadow-xs hover:border-[#b88344]/50 dark:hover:border-[#d1a36a]/50 transition-all cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
              aria-label={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#d1a36a] transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300" />
              )}
            </button>

            {/* Mobile hamburger trigger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b88344]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Strictly constrained height) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-[#faf8f5]/98 dark:bg-[#0c0d0e]/98 backdrop-blur-xl md:hidden border-b border-[#e2ded5] dark:border-white/10 px-6 py-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-800 hover:text-[#b88344] dark:text-neutral-200 dark:hover:text-[#d1a36a] py-2 border-b border-neutral-200 dark:border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between p-3 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                Display Theme
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-sm font-semibold transition-all ${
                    theme === 'light'
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-sm font-semibold transition-all ${
                    theme === 'dark'
                      ? 'bg-[#d1a36a] text-neutral-950'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide text-neutral-900 bg-[#d1a36a] rounded-sm uppercase whitespace-nowrap cursor-pointer"
            >
              <span>Inquire Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
              {COMPANY_INFO.phone} · {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

