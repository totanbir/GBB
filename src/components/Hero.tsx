import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  ShieldCheck,
  Clock,
  Globe,
  Award,
} from 'lucide-react';

interface HeroProps {
  onExploreGallery?: () => void;
  onOpenConsultation: () => void;
}

interface Slide {
  image: string;
  alt: string;
  badge: string;
  title: string;
  location: string;
}

const SLIDES: Slide[] = [
  {
    image: 'https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/mature-male-site-engineer-having-conversation-with-saudi-arab-businessman_476263-282.avif',
    alt: 'Executive recruitment team reviewing architectural candidates',
    badge: 'Executive Talent Acquisition',
    title: 'Recruiting Master KSA',
    location: 'Headquartered in Riyad · Deployed Globally',
  },
  {
    image: 'https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/Move-In-Move-Out-Cleaning-Dubai-FirstCall-880x620.webp',
    alt: 'Specialized joinery installation crew on luxury project site',
    badge: 'UAE Cleaning Services',
    title: 'Luxury Office Cleaning',
    location: 'Active Projects: Qatar, Dubai, Saudi',
  },
  {
    image: 'https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/uae_manpower_hero_sunlight.webp',
    alt: 'Technical site supervisors and engineering coordinators',
    badge: 'Site Leadership',
    title: 'Construction Welding',
    location: 'Dubai - UAE',
  },
  {
    image: 'https://idolgroup-hrm-all-file-store.s3.ap-southeast-1.amazonaws.com/6.jpg',
    alt: 'Waiters & Waitresses',
    badge: 'Restaurant',
    title: 'Restaurant Workers',
    location: 'UAE - KSA - QATAR',
  },
];

const METRICS = [
  { value: '50,000+', label: 'DEPLOYMENT', detail: 'Bench-tested & trade-certified' },
  { value: '200+', label: 'CLIENTS', detail: 'Rapid candidate matching' },
  { value: '10+', label: 'YEARS OF EXPERIENCE', detail: 'Contractor retention rate' },
  { value: '10+ Countries', label: 'Global Mobility', detail: 'Visas, payroll & travel handled' },
];

const TALENT_ROLES = [
  'Construction',
  'Catering',
  'Food & Restaurant',
  'Technical',
  'Fit-Out Leads',
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0c0d0e] text-white"
      aria-label="Global Manpower & Recruitment Agency"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d1a36a]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Two-Column Content: Left Text, Right Square Box Carousel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clean & Simple Recruitment Agency Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Live Agency Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-neutral-200">
                Recruitment Licence - 1623
              </span>
            </div>

            {/* Bold, Clear Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] mb-5 font-display [text-wrap:balance]">
              We Bangladeshi Talent{' '}
              <span className="text-[#d1a36a] block sm:inline">Deployed Worldwide.</span>
            </h1>

            {/* Simple, Punchy Subtitle */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl font-normal">
              Connecting skilled Bangladeshi talent with trusted global employers, creating meaningful careers and delivering reliable workforce solutions across international markets.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-neutral-950 bg-[#d1a36a] hover:bg-[#dfb47e] transition-colors rounded-sm cursor-pointer uppercase shadow-lg shadow-black/40 whitespace-nowrap"
              >
                <Briefcase className="w-4 h-4" />
                <span>Request Manpower</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-colors rounded-sm cursor-pointer uppercase whitespace-nowrap"
              >
                <Users className="w-4 h-4 text-[#d1a36a]" />
                <span>Apply as Jobs</span>
              </button>
            </div>

            {/* Simple In-Demand Tags */}
            <div className="flex items-center flex-wrap gap-2 text-xs mb-6">
              <span className="text-neutral-400 font-medium">In-Demand:</span>
              {TALENT_ROLES.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={onOpenConsultation}
                  className="px-2.5 py-1 rounded-xs bg-white/5 hover:bg-[#d1a36a]/20 border border-white/10 hover:border-[#d1a36a]/40 text-neutral-300 hover:text-white transition-colors cursor-pointer text-[11px]"
                >
                  {role}
                </button>
              ))}
            </div>

            {/* 3 Simple Agency Guarantees */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-neutral-400 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#d1a36a]" />
                <span>International Standards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#d1a36a]" />
                <span>Tech-Enabled Recruitment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#d1a36a]" />
                <span>Job Readiness Training</span>
              </div>
            </div>

          </div>

          {/* Right Column: Square Box Image Carousel Slider */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative w-full max-w-md aspect-square rounded-sm overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl shadow-black/80 group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Images */}
              {SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                );
              })}

              {/* Scrim Overlay inside Square Box */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

              {/* Top Floating Badge on Square Box */}
              <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-wider text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{SLIDES[currentSlide].badge}</span>
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xs bg-[#d1a36a] text-neutral-950 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  <Award className="w-3 h-3" />
                  Verified
                </span>
              </div>

              {/* Bottom Caption & Controls inside Square Box */}
              <div className="absolute bottom-0 inset-x-0 z-30 p-5">
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display leading-snug">
                    {SLIDES[currentSlide].title}
                  </h3>
                  <p className="text-xs text-[#d1a36a] mt-1 font-medium">
                    {SLIDES[currentSlide].location}
                  </p>
                </div>

                {/* Slider Controls Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/15">
                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5">
                    {SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          idx === currentSlide
                            ? 'w-6 bg-[#d1a36a]'
                            : 'w-2 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                    <span className="text-[10px] font-mono text-neutral-300 ml-2">
                      0{currentSlide + 1} / 0{SLIDES.length}
                    </span>
                  </div>

                  {/* Previous / Next Arrow Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="w-7 h-7 rounded-sm bg-black/60 hover:bg-[#d1a36a] hover:text-neutral-950 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="w-7 h-7 rounded-sm bg-black/60 hover:bg-[#d1a36a] hover:text-neutral-950 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Proof Metrics Strip across the bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-2">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-white font-display tabular-nums">
                {m.value}
              </span>
              <span className="text-xs font-semibold text-[#d1a36a] mt-0.5">
                {m.label}
              </span>
              <span className="text-[11px] text-neutral-400">
                {m.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
