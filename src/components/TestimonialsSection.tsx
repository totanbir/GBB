import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#faf8f5] dark:bg-[#0c0d0e] border-t border-[#e2ded5] dark:border-white/5 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#b88344] dark:text-[#d1a36a] font-semibold mb-3">
            <span>Client Endorsements</span>
            <span aria-hidden="true">·</span>
            <span>Architect & Builder Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display [text-wrap:balance]">
            Trusted by architects, general contractors, and private homeowners.
          </h2>
          <p className="mt-4 text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            Real feedback from commercial hospitality operators, design principals, and custom residential commissions across New York and New England.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-white dark:bg-[#111215] border border-[#e2ded5] dark:border-white/10 rounded-sm flex flex-col justify-between shadow-sm dark:shadow-none transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#b88344]/40 dark:text-[#d1a36a]/30 mb-4" />
                <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed italic mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 dark:border-white/10">
                <div className="font-semibold text-neutral-900 dark:text-white text-sm font-display">
                  {testimonial.author}
                </div>
                <div className="text-xs text-[#b88344] dark:text-[#d1a36a] font-medium">
                  {testimonial.role} · {testimonial.organization}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Project: {testimonial.project} ({testimonial.year})
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
