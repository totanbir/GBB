import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'awi-qcp',
    title: 'AWI Quality Certification Program (QCP)',
    subtitle: 'Premium Grade Architectural Woodwork Manufacturer',
    image: '/src/assets/images/cert_awi_qcp_1790162220638.jpg',
  },
  {
    id: 'fsc-guild',
    title: 'FSC® Chain-of-Custody & Guild Accreditation',
    subtitle: 'Certified Sustainable Timber & Master Joinery Fellowship',
    image: '/src/assets/images/cert_fsc_guild_1790162244961.jpg',
  },
];

export const LicensingCertifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section
      id="certifications"
      className="py-20 bg-[#faf8f5] dark:bg-[#0b0c0e] border-t border-[#e2ded5] dark:border-white/5 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#b88344] dark:text-[#d1a36a] font-semibold mb-3">
            <span>Verified Credentials</span>
            <span aria-hidden="true">·</span>
            <span>Architectural Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display [text-wrap:balance]">
            Licensing & Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal">
            Official quality accreditations and sustainable forestry certifications awarded to Kova Architectural Woodwork.
          </p>
        </div>

        {/* ONLY TWO CERTIFICATE IMAGES DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="group cursor-pointer bg-white dark:bg-[#121316] border border-[#e2ded5] dark:border-white/10 hover:border-[#b88344]/50 dark:hover:border-[#d1a36a]/50 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Certificate Image Frame */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                />

                {/* Hover Overlay with Zoom Prompt */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900/90 text-white text-xs font-semibold uppercase tracking-wider rounded-sm shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#d1a36a]" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              {/* Title & Caption */}
              <div className="p-5 border-t border-[#e2ded5] dark:border-white/5">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-display group-hover:text-[#b88344] dark:group-hover:text-[#d1a36a] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {cert.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal on Certificate Click */}
      {selectedCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-950 border border-white/20 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-900/90">
              <div>
                <h4 className="text-sm font-bold text-white font-display">
                  {selectedCertificate.title}
                </h4>
                <span className="text-xs text-neutral-400">
                  {selectedCertificate.subtitle}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close certificate preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 sm:p-6 flex items-center justify-center bg-black/60">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xs shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
