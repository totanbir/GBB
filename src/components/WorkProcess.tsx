import React from 'react';
import { WORK_PROCESS } from '../data/companyData';

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#f4f1ea] dark:bg-[#0f1012] border-t border-[#e2ded5] dark:border-white/5 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#b88344] dark:text-[#d1a36a] font-semibold mb-3">
            <span>Methodology</span>
            <span aria-hidden="true">·</span>
            <span>Shop Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display [text-wrap:balance]">
            30-Day Recruitment Process.
          </h2>
          <p className="mt-4 text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            Our comprehensive 10-step workflow is designed for speed and precision, ensuring a complete cycle in exactly 30 days. 30 Technical Timeline Efficiency Guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WORK_PROCESS.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-white dark:bg-[#141518] border border-[#e2ded5] dark:border-white/10 rounded-sm relative flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-[#b88344] dark:text-[#d1a36a] font-mono tabular-nums block mb-4">
                  {step.step}.
                </span>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-white/5 text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-semibold">
                Phase {step.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
