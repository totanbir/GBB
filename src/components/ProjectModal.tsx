import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, Check, MapPin, Calendar, Clock, Layers, Quote } from 'lucide-react';
import { Project } from '../data/companyData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-[#faf8f5] dark:bg-[#111215] border border-[#e2ded5] dark:border-white/15 w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl my-auto text-left transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-white bg-black/60 hover:bg-black/90 rounded-full transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image within Modal */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-neutral-900 overflow-hidden">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-neutral-400 text-sm">
              <span>{project.title}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d1a36a] font-semibold mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#e2ded5] dark:border-white/10 text-xs">
            <div>
              <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#b88344] dark:text-[#d1a36a]" /> Location
              </span>
              <span className="font-medium text-neutral-900 dark:text-white">{project.location}</span>
            </div>
            <div>
              <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#b88344] dark:text-[#d1a36a]" /> Completion Year
              </span>
              <span className="font-medium text-neutral-900 dark:text-white tabular-nums">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#b88344] dark:text-[#d1a36a]" /> Production Time
              </span>
              <span className="font-medium text-neutral-900 dark:text-white">{project.duration}</span>
            </div>
            <div>
              <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#b88344] dark:text-[#d1a36a]" /> Client Type
              </span>
              <span className="font-medium text-neutral-900 dark:text-white truncate block">{project.clientType}</span>
            </div>
          </div>

          {/* Narrative Summary */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-2 font-display">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-white/[0.02] p-5 border border-[#e2ded5] dark:border-white/5 rounded-sm shadow-sm dark:shadow-none">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#b88344] dark:text-[#d1a36a] mb-2">
                Engineering Challenge
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-2">
                Fabrication Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Craft Specifications */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-3 font-display">
              Materials & Craft Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.craftDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <Check className="w-4 h-4 text-[#b88344] dark:text-[#d1a36a] shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Client Endorsement */}
          {project.testimonialQuote && (
            <div className="p-5 border-l-2 border-[#b88344] dark:border-[#d1a36a] bg-amber-500/5 dark:bg-[#17181c] rounded-r-sm">
              <Quote className="w-5 h-5 text-[#b88344]/50 dark:text-[#d1a36a]/40 mb-2" />
              <p className="text-sm italic text-neutral-800 dark:text-neutral-200 mb-3 leading-relaxed">
                "{project.testimonialQuote.quote}"
              </p>
              <div className="text-xs">
                <span className="font-semibold text-neutral-900 dark:text-white block">
                  {project.testimonialQuote.author}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {project.testimonialQuote.role}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#f0ede6] dark:bg-[#0c0d0e] border-t border-[#e2ded5] dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
            Interested in bespoke work of this scale or aesthetic language?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-[#d8d3c7] dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/20 rounded-sm transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquireSimilar(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white dark:text-neutral-950 bg-neutral-900 dark:bg-[#d1a36a] hover:bg-[#b88344] dark:hover:bg-[#dfb47e] transition-colors rounded-sm cursor-pointer whitespace-nowrap shadow-sm"
            >
              <span>Inquire Similar Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
