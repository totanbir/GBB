import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'International Recruitment',
    description:
      'Connecting skilled talent with global employers',
  },
  {
    number: '02',
    title: 'Manpower Outsourcing',
    description:
      'Providing reliable workforce solutions for businesses.',
  },
  {
    number: '03',
    title: 'Visa & Work Permit Support',
    description:
      'Professional assistance with employment documentation and processing.',
  },
  {
    number: '04',
    title: 'Candidate Placement',
    description:
      'Guiding candidates from recruitment to successful overseas placement.',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-[#faf8f5] dark:bg-[#0c0d0e] border-t border-[#e2ded5] dark:border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Minimal Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b88344] dark:text-[#d1a36a] block mb-2">
            Services & Global Manpower
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white font-display">
            Skilled manpower and architectural joinery deployed worldwide.
          </h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Supplying contractors, developers, and studios with pre-vetted master carpenters, site leads, and turnkey installation teams.
          </p>
        </div>

        {/* Clean, Simple 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              onClick={() => onSelectService(service.title)}
              className="group p-6 bg-white dark:bg-[#121316] border border-[#e2ded5] dark:border-white/10 hover:border-[#b88344]/60 dark:hover:border-[#d1a36a]/60 rounded-sm shadow-xs transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#b88344] dark:text-[#d1a36a] block mb-4">
                  {service.number}
                </span>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 font-display group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors inline-flex items-center gap-1">
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
