import React from 'react';
import {
  ArrowUp,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { WhatsAppIcon } from './WhatsAppButton';

const SOCIAL_LINKS = [
   {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: Facebook,
    hoverColor: 'hover:text-[#1877F2]',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
    hoverColor: 'hover:text-[#E4405F]',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    hoverColor: 'hover:text-[#0A66C2]',
  },
 
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/01794186278?text=${encodeURIComponent(
    'Hello Global Business Brand, I would like to inquire about an architectural millwork project.'
  )}`;

  return (
    <footer className="bg-[#f0ede6] dark:bg-[#090a0b] border-t border-[#e2ded5] dark:border-white/10 text-neutral-600 dark:text-neutral-400 py-16 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e2ded5] dark:border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm overflow-hidden border border-[#e2ded5] dark:border-white/15 bg-neutral-950 shadow-xs shrink-0">
                <img
                  src="/src/assets/images/gbb.jpg"
                  alt="Kova Studio logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-neutral-900 dark:text-white font-display tracking-tight block leading-tight">
                  {COMPANY_INFO.name.toUpperCase()}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold block mt-0.5">
                  GLOBAL MANPOWER AGENCY
                </span>
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              Custom architectural millwork, precision timber joinery, and tailored interior fabrication for residential and hospitality spaces.
            </p>
            <div className="text-neutral-500 dark:text-neutral-400 text-[11px]">
              Address: {COMPANY_INFO.address}
            </div>

            {/* Social Media Channels on Footer Left Side */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-semibold block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-sm bg-white dark:bg-white/5 border border-[#d8d3c7] dark:border-white/10 hover:border-[#b88344]/60 dark:hover:border-[#d1a36a]/60 text-neutral-600 dark:text-neutral-300 hover:text-[#b88344] dark:hover:text-[#d1a36a] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                      aria-label={`Follow Kova Studio on ${social.name}`}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-neutral-900 dark:text-white font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Studio Heritage & Workshop
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Capabilities & Millwork Scope
                </a>
              </li>
              {/* <li>
                <a href="#gallery" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Selected Portfolio Gallery
                </a>
              </li> */}
              <li>
                <a href="#process" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Shop Engineering Process
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Licensing & Certifications
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Architect & Client Endorsements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Request Project Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-neutral-900 dark:text-white font-semibold block">
              Letest Jobs
            </span>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Acoustic Wall Slat Systems</li>
              <li>Quarter-sawn Oak Kitchens</li>
              <li>Hospitality Feature Bars</li>
              <li>Concealed Pivot Wall Doors</li>
              <li>Custom Metal Patination & Inlays</li>
              <li>FSC Chain of Custody Hardwoods</li>
            </ul>
          </div>

          {/* Quick Actions & WhatsApp Round Button (Right Side) */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div className="flex flex-col items-start md:items-end gap-4 w-full">
              {/* WhatsApp Round Contact Button */}
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 p-2.5 bg-neutral-200/70 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 border border-[#d8d3c7] dark:border-white/10 rounded-sm text-neutral-800 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-left md:text-right mt-6 md:mt-0">
              <span className="text-neutral-900 dark:text-white block font-medium">Office Visiting Hours</span>
              <span className="text-neutral-500 dark:text-neutral-400">Saturday – Thursday, 10:00 AM – 6:00 PM EST</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet legal copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 dark:text-neutral-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.fullName}. All rights reserved.
          </div>
          {/* <div className="flex items-center gap-6">
            <span>FSC® Certified</span>
            <span>·</span>
            <span>AIA Allied Member</span>
            <span>·</span>
            <span>Brooklyn, New York</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
