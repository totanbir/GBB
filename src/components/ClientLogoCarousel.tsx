import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ClientLogo {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  symbol: React.ReactNode;
}

const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: 'marr',
    name: 'NESMA & PARTNER',
    subtitle: 'KSA',
    tagline: 'High-End Residential',
    symbol: (
      <div className="relative w-35 h-18 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/Nesma_Partners_Logo.png"
                alt="Global Business Brand"
                className="w-full h-full object-cover"
              />
            </div>
    ),
  },
  {
    id: 'cadence',
    name: 'HAYEN',
    subtitle: 'KSA',
    tagline: 'SoHo & Tribeca',
    symbol: (
      <div className="relative w-40 h-16 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/jpeg_logo.jpeg_1763387661.webp"
                alt="Global Business Brand"
                className="w-full h-full object-cover "
              />
            </div>
    ),
  },
  {
    id: 'foster',
    name: 'SMASCO',
    subtitle: 'KSA',
    tagline: 'Hospitality Spaces',
    symbol: (
      <div className="relative w-40 h-16 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/smasco.png"
                alt="Global Business Brand"
                className="w-full h-full object-cover "
              />
            </div>
    ),
  },
  {
    id: 'vanguard',
    name: 'YUKSEL',
    subtitle: 'KSA',
    tagline: 'Luxury Penthouses',
    symbol: (
      <div className="relative w-40 h-16 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/yukselsaudia_logo.jpeg"
                alt="Global Business Brand"
                className="w-full h-full object-cover "
              />
            </div>
    ),
  },
  {
    id: 'olmsted',
    name: 'TRANSGUARD',
    subtitle: 'UAE',
    tagline: 'Hudson Valley & CT',
    symbol: (
      <div className="relative w-48 h-15 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/footer_logo.png"
                alt="Global Business Brand"
                className="w-full h-full object-cover "
              />
            </div>
    ),
  },
  {
    id: 'aethelgard',
    name: 'MAJID',
    subtitle: 'UAE',
    tagline: 'Acoustic Architecture',
    symbol: (
      <div className="relative w-50 h-9 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/Majid_Al_Futtaim_logo.svg.webp"
                alt="Global Business Brand"
                className="w-full h-full object-cover "
              />
            </div>
    ),
  },
  {
    id: 'kroll',
    name: 'TOYOTA',
    subtitle: 'JPN',
    tagline: 'Bespoke Joinery',
    symbol: (
      <div className="relative w-50 h-9 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/Toyota-Logo.png"
                alt="Global Business Brand"
                className="w-full h-full object-cover "
              />
            </div>
    ),
  },
  {
    id: 'sloane',
    name: 'ABDAL',
    subtitle: 'HUMAN RESOURCES',
    tagline: 'Manhattan & Hamptons',
    symbol: (
      <div className="relative w-35 h-17 rounded-sm overflow-hidden dark:group-hover:border-[#d1a36a] transition-colors">
              <img
                src="https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/abdal_hrm_co.png"
                alt="Global Business Brand"
                className="w-full h-full object-cover"
              />
            </div>
    ),
  },
];

export const ClientLogoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);
  const touchStartX = useRef<number | null>(null);

  // Responsive items count calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Mobile: 2 logos
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 logos
      } else {
        setItemsPerView(4); // Desktop: 4 logos
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalLogos = CLIENT_LOGOS.length;
  const maxIndex = Math.max(0, totalLogos - itemsPerView);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Very simple autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Client & Architectural Partners"
      className="py-12 bg-[#f4f1ea]/60 dark:bg-[#090a0c] border-y border-[#e2ded5] dark:border-white/5 transition-colors overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Minimal Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b88344] dark:bg-[#d1a36a]" />
            <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-600 dark:text-neutral-400">
             Overseas Specialized Recruitment Partner
            </h3>
          </div>

          {/* Simple Slider Navigation Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              className="p-1.5 rounded-sm border border-[#d8d3c7] dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-white/80 dark:bg-[#141518] transition-colors cursor-pointer"
              aria-label="Previous client logos"
              title="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-1.5 rounded-sm border border-[#d8d3c7] dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/30 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-white/80 dark:bg-[#141518] transition-colors cursor-pointer"
              aria-label="Next client logos"
              title="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Viewport */}
        <div
          className="overflow-hidden select-none cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.id}
                className="shrink-0 px-2 sm:px-3"
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >
                <div className="group h-24 px-4 bg-white/60 dark:bg-[#121316] hover:bg-white dark:hover:bg-[#17181c] border border-[#e2ded5] dark:border-white/5 hover:border-[#b88344]/40 dark:hover:border-[#d1a36a]/40 rounded-sm shadow-xs transition-all duration-200 flex items-center justify-center gap-3">
                  {/* Geometric Monogram Icon */}
                  <div className="text-neutral-400 dark:text-neutral-500 group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors shrink-0">
                    {client.symbol}
                  </div>

                  {/* Wordmark Info */}
                  <div className="text-left overflow-hidden">
                    <span className="block text-xs sm:text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors truncate font-display">
                      {client.name}
                    </span>
                    <span className="block text-[10px] tracking-wider uppercase text-neutral-500 dark:text-neutral-400 truncate">
                      {client.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Dot Indicators */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-[#b88344] dark:bg-[#d1a36a]'
                  : 'w-1.5 bg-neutral-300 dark:bg-white/20 hover:bg-neutral-400 dark:hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
