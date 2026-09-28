import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="0"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
  </svg>
);

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '01794186278';
  const defaultMessage = 'Hello Global Business Brand, I would like to inquire about an architectural millwork project.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-md bg-neutral-900/90 dark:bg-black/90 text-white text-xs font-medium shadow-xl border border-white/10 backdrop-blur-xs transition-all duration-200 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Chat on WhatsApp</span>
        <span className="ml-1.5 w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
      </div>

      {/* Round Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/35 transition-all duration-200 transform hover:scale-108 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
        aria-label="Direct WhatsApp Chat with Kova Studio"
      >
        <span className="sr-only">Contact Kova Studio on WhatsApp</span>
        {/* Soft pulse glow around the button */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity"
          aria-hidden="true"
        />
        <WhatsAppIcon className="w-7 h-7 fill-white relative z-10" />
      </a>
    </aside>
  );
};
