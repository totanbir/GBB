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
   

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Metadata Row */}
         

    
 <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover"
            />


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
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
