import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowUpRight,
  SlidersHorizontal,
  Play,
  Pause,
  LayoutGrid,
  Maximize2,
} from 'lucide-react';
import { PROJECTS, Project } from '../data/companyData';
import { ProjectModal } from './ProjectModal';

interface ProjectGalleryProps {
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Responsive visible count tracking
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  // Drag / Touch Swipe gesture state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'SAUDI ARABIA', 'DUBAI', 'KUWAIT', 'MALAYSIA'];

  // Handle window resizing for responsive cards visible
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.craftDetails.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Reset to first slide whenever category or search filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, searchQuery]);

  const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  // Autoplay timer
  useEffect(() => {
    if (!isAutoPlaying || viewMode !== 'carousel' || filteredProjects.length <= itemsPerPage) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, viewMode, filteredProjects.length, itemsPerPage, handleNext]);

  // Touch and Mouse Drag Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSignificantSwipe = Math.abs(distance) > 50;

    if (isSignificantSwipe) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (isDragging.current && touchStartX.current && touchEndX.current) {
      const distance = touchStartX.current - touchEndX.current;
      if (Math.abs(distance) > 50) {
        if (distance > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-[#faf8f5] dark:bg-[#0c0d0e] relative border-t border-[#e2ded5] dark:border-white/5 transition-colors overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Project Gallery Portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Mode Toggles */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#b88344] dark:text-[#d1a36a] font-semibold mb-3">
              <span>Selected Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Carousel Slider Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display [text-wrap:balance]">
              OUR VALUEBALE COMPNAY DEMAND LETTER
            </h2>
          </div>

          {/* Slider Controls Strip */}
        
        </div>

        {/* Filter Bar & Search: Single-line controls with responsive layout */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#e2ded5] dark:border-white/10">
          {/* Interactive Segmented Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-neutral-200/80 dark:bg-[#16171a] border border-[#e2ded5] dark:border-white/10 rounded-sm overflow-x-auto">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors whitespace-nowrap rounded-sm cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-[#d1a36a] dark:text-neutral-950 font-bold shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-300/40 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 opacity-70 tabular-nums">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Instant Search Bar */}
          <div className="relative min-w-[240px] max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search wood, style, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#16171a] border border-[#e2ded5] dark:border-white/10 rounded-sm text-xs text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-[#b88344] dark:focus:border-[#d1a36a] transition-colors shadow-xs dark:shadow-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-[#e2ded5] dark:border-white/10 rounded-sm p-8 bg-white dark:bg-[#111215]">
            <SlidersHorizontal className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
              Try adjusting your search criteria or resetting the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-white dark:text-neutral-900 bg-neutral-900 dark:bg-[#d1a36a] rounded-sm uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'carousel' ? (
          /* =========================================
             CAROUSEL SLIDER VIEW
             ========================================= */
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Carousel Viewport Container */}
            <div
              ref={containerRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              {/* Carousel Sliding Track */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="shrink-0 px-3 sm:px-4"
                    style={{
                      width: `${100 / itemsPerPage}%`,
                    }}
                  >
                    <article
                      onClick={() => setActiveProject(project)}
                      className="group cursor-pointer bg-white dark:bg-[#111215] border border-[#e2ded5] dark:border-white/10 hover:border-[#b88344]/50 dark:hover:border-[#d1a36a]/50 shadow-sm dark:shadow-none transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between h-full"
                    >
                      {/* Media Container with 4:3 Aspect Ratio */}
                      <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          loading={index < 3 ? 'eager' : 'lazy'}
                          draggable={false}
                          className="w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-[#111215] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                        {/* Top Badge: Slide index & Inspect Icon */}
                        {/* <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-xs rounded-xs text-[10px] font-mono text-neutral-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-xs rounded-full text-white/80 group-hover:text-white group-hover:bg-[#b88344] dark:group-hover:bg-[#d1a36a] dark:group-hover:text-neutral-950 transition-colors">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div> */}

                        {/* Bottom-left Category label over image */}
                        <div className="absolute bottom-3 left-4 right-4">
                          <span className="text-[11px] uppercase tracking-wider text-[#d1a36a] font-semibold">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                         
                          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                            <span>{project.location}</span>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{project.year}</span>
                          </div>

                          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 font-display group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors leading-tight">
                            {project.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                            {project.summary}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs">
                          <span className="text-neutral-500 dark:text-neutral-400 truncate max-w-[160px]">
                            {project.craftDetails[0]}
                          </span>
                          <span className="text-neutral-900 dark:text-white font-semibold uppercase tracking-wider group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors shrink-0 inline-flex items-center gap-1">
                            <span>Inspect</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows Floating Over Sides on Large Screens */}
            {filteredProjects.length > itemsPerPage && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 dark:bg-[#16171a]/95 border border-[#e2ded5] dark:border-white/15 text-neutral-800 dark:text-white shadow-lg items-center justify-center hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 dark:bg-[#16171a]/95 border border-[#e2ded5] dark:border-white/15 text-neutral-800 dark:text-white shadow-lg items-center justify-center hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Carousel Pagination Indicator Dots & Progress */}
            {filteredProjects.length > itemsPerPage && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e2ded5] dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Swipe or drag horizontally to browse commissions
                  </span>
                </div>

                {/* Dot Pagination indicators */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
                    const isActive = currentIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'w-8 bg-neutral-900 dark:bg-[#d1a36a]'
                            : 'w-2 bg-neutral-300 dark:bg-white/20 hover:bg-neutral-400 dark:hover:bg-white/40'
                        }`}
                        aria-label={`Go to slide page ${idx + 1}`}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* =========================================
             OPTIONAL GRID VIEW (when user toggles 'Grid')
             ========================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer bg-white dark:bg-[#111215] border border-[#e2ded5] dark:border-white/10 hover:border-[#b88344]/50 dark:hover:border-[#d1a36a]/50 shadow-sm dark:shadow-none transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between"
              >
                {/* Media Container with 4:3 Aspect Ratio */}
                <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-[#111215] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                  <div className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-xs rounded-full text-white/80 group-hover:text-white group-hover:bg-[#b88344] dark:group-hover:bg-[#d1a36a] dark:group-hover:text-neutral-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                      <span className="text-[#b88344] dark:text-[#d1a36a] font-semibold">
                        {project.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 font-display group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 dark:text-neutral-400 truncate max-w-[190px]">
                      {project.craftDetails[0]}
                    </span>
                    <span className="text-neutral-900 dark:text-white font-semibold uppercase tracking-wider group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors shrink-0">
                      View Case Study
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquireSimilar={(title) => {
          setActiveProject(null);
          onInquireProject(title);
        }}
      />
    </section>
  );
};
