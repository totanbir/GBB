import React, { useState } from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  TreePine,
  Award,
  Quote,
  Target,
  Eye,
  Compass,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  const [ceoImgError, setCeoImgError] = useState(false);
  const [workshopImgError, setWorkshopImgError] = useState(false);

  const pillars = [
    {
      icon: TreePine,
      title: '100% Sustainably Sourced Timber',
      desc: 'All North American hardwoods are procured from FSC-certified sustainable timber tracts with verified chain-of-custody documentation.',
    },
    {
      icon: ShieldCheck,
      title: 'Millimeter Engineering Tolerances',
      desc: 'We combine heavy 5-axis CNC machining with traditional mortise-and-tenon hand joinery to deliver seamless, defect-free fits on site.',
    },
    {
      icon: Award,
      title: 'Architectural Grade Finishes',
      desc: 'Ultra-low VOC hardwax oils, catalyzed conversion varnishes, and custom patinated metals applied in a dust-controlled finishing facility.',
    },
    {
      icon: CheckCircle2,
      title: 'In-House Installation Crew',
      desc: 'No subcontracted handoffs. Our own master carpenters transport, assemble, and hand-scribe every unit directly into your space.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#f4f1ea] dark:bg-[#0f1012] border-t border-[#e2ded5] dark:border-white/5 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#b88344] dark:text-[#d1a36a] font-semibold mb-3">
            <span>GLOBAL BUSINESS BRAND</span>
            <span aria-hidden="true">·</span>
            <span>Est. {COMPANY_INFO.foundedYear}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display [text-wrap:balance]">
            Connecting Global Talent, Creating Limitless Opportunities.
          </h2>
          {/* <p className="mt-4 text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            Kova Studio was founded on an unapologetic belief: true architectural millwork should outlast the building it inhabits. Operating from our 6,500 square foot facility in Red Hook, Brooklyn, we serve interior design studios, architects, and private clients who refuse standard catalog compromises.
          </p> */}
        </div>

        {/* Short Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Mission Card */}
          <div className="p-8 bg-white dark:bg-[#141518] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-sm dark:shadow-none flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#b88344]/5 dark:bg-[#d1a36a]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#b88344]/10 dark:bg-[#d1a36a]/10 border border-[#b88344]/20 dark:border-[#d1a36a]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#b88344] dark:text-[#d1a36a]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#b88344] dark:text-[#d1a36a] font-semibold block">
                    Our Mission
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                    Precision & Purpose
                  </h3>
                </div>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <Compass className="w-4 h-4 text-[#b88344] dark:text-[#d1a36a]" />
              <span>Grounded in mathematical tolerance & verified chain-of-custody timber</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 bg-white dark:bg-[#141518] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-sm dark:shadow-none flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#b88344]/5 dark:bg-[#d1a36a]/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#b88344]/10 dark:bg-[#d1a36a]/10 border border-[#b88344]/20 dark:border-[#d1a36a]/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#b88344] dark:text-[#d1a36a]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#b88344] dark:text-[#d1a36a] font-semibold block">
                    Our Vision
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                    Architectural Excellence
                  </h3>
                </div>
              </div>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <Award className="w-4 h-4 text-[#b88344] dark:text-[#d1a36a]" />
              <span>Setting new standards for generational manpower in GCC</span>
            </div>
          </div>
        </div>

        {/* CEO Message & Executive Portrait Feature */}
        <div className="mb-20 bg-white dark:bg-[#141518] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-md dark:shadow-none overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* CEO Photo Column */}
            <div className="lg:col-span-5 relative bg-neutral-900 min-h-[380px] lg:min-h-full">
              {!ceoImgError ? (
                <img
                  src={COMPANY_INFO.ceo.photo}
                  alt={`${COMPANY_INFO.ceo.name}, ${COMPANY_INFO.ceo.title} of Kova Studio`}
                  referrerPolicy="no-referrer"
                  onError={() => setCeoImgError(true)}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-neutral-900 text-neutral-400">
                  <Award className="w-12 h-12 text-[#d1a36a] mb-2" />
                  <span className="font-display font-semibold text-white">{COMPANY_INFO.ceo.name}</span>
                  <span className="text-xs text-neutral-400">{COMPANY_INFO.ceo.title}</span>
                </div>
              )}
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/60" />

              {/* CEO Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-wider text-[#d1a36a] font-semibold block mb-1">
                  Studio Leadership
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {COMPANY_INFO.ceo.name}
                </h3>
                <span className="text-xs text-neutral-300 block">
                  {COMPANY_INFO.ceo.title} · {COMPANY_INFO.ceo.credentials}
                </span>
              </div>
            </div>

            {/* CEO Message Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Quote className="w-10 h-10 text-[#b88344] dark:text-[#d1a36a] opacity-60" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#b88344] dark:text-[#d1a36a]">
                    Founder & CEO Message
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-display mb-6 leading-tight">
                  "Leading with Vision, Driven by Purpose"
                </h3>

                <blockquote className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>{COMPANY_INFO.ceo.message}</p>
                </blockquote>
              </div>

              {/* Signature Block */}
              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div className="font-serif italic text-2xl text-neutral-900 dark:text-neutral-100 tracking-wide">
                    {COMPANY_INFO.ceo.signature}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Dhaka, Bangladesh
                  </div>
                </div>

                <div className="text-xs px-3 py-1.5 rounded-xs bg-[#b88344]/10 dark:bg-[#d1a36a]/10 text-[#b88344] dark:text-[#d1a36a] font-semibold self-start sm:self-auto">
                  Gulf & Overseas Manpower Recruitment Expert
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Workshop Facility Highlight */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white font-display">
              A dedicated team of master joiners, draftsmen, and finishers.
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              Every project begins with raw dimensional lumber carefully seasoned to 6–8% moisture content in our climate-regulated storage. We hand-select veneers for grain symmetry, sequence each sheet across continuous elevations, and pre-assemble every unit in our workshop prior to transit.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Whether matching historical 19th-century townhouse moldings or executing razor-thin flush reveals for minimalist penthouses, our team approaches every joint with deliberate mathematical precision.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-white/[0.03] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-sm dark:shadow-none">
                <span className="text-xs uppercase tracking-wider text-[#b88344] dark:text-[#d1a36a] font-semibold block mb-1">
                  Workshop Capacity
                </span>
                <span className="text-sm text-neutral-800 dark:text-neutral-200">
                  6,500 sq ft production floor with 5-axis CNC & dedicated spray booth
                </span>
              </div>
              <div className="p-4 bg-white dark:bg-white/[0.03] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-sm dark:shadow-none">
                <span className="text-xs uppercase tracking-wider text-[#b88344] dark:text-[#d1a36a] font-semibold block mb-1">
                  Regional Service
                </span>
                <span className="text-sm text-neutral-800 dark:text-neutral-200">
                  Greater New York Metro, Hudson Valley, Connecticut & Hamptons
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden border border-[#e2ded5] dark:border-white/10 aspect-[4/3] bg-neutral-900 shadow-xl dark:shadow-2xl">
              {!workshopImgError ? (
                <img
                  src="/src/assets/images/hero_craft_workshop_1790154582906.jpg"
                  alt="Kova Studio master workshop in Brooklyn"
                  referrerPolicy="no-referrer"
                  onError={() => setWorkshopImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-6 text-center bg-neutral-900 text-neutral-400">
                  <span>Kova Studio Woodwork Workshop</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs text-[#d1a36a] font-medium uppercase tracking-wider block">
                  Brooklyn, NY Facility
                </span>
                <span className="text-sm font-medium text-white">
                  Dry pre-assembly staging floor & material specimen archive
                </span>
              </div>
            </div>
          </div>
        </div> */}

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#e2ded5] dark:border-white/10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 bg-white dark:bg-white/[0.02] hover:bg-neutral-50 dark:hover:bg-white/[0.04] border border-[#e2ded5] dark:border-white/5 hover:border-[#b88344]/30 dark:hover:border-white/15 transition-all rounded-sm flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-[#b88344]/10 dark:bg-[#d1a36a]/10 border border-[#b88344]/20 dark:border-[#d1a36a]/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#b88344] dark:text-[#d1a36a]" />
                  </div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-white mb-2 font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
