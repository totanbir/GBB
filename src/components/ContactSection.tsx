import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Truck,
  FileCode,
  ArrowUpRight,
  ShieldCheck,
  Navigation,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactSectionProps {
  initialServiceInterest?: string;
  initialProjectTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceInterest,
  initialProjectTitle,
}) => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(COMPANY_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const mailtoSubject = initialProjectTitle
    ? `Project Inquiry: ${initialProjectTitle}`
    : initialServiceInterest
    ? `Service Inquiry: ${initialServiceInterest}`
    : 'Architectural Millwork & Joinery Inquiry';

  const mailtoHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(mailtoSubject)}`;

  return (
    <section id="contact" className="py-24 bg-[#f4f1ea] dark:bg-[#0f1012] border-t border-[#e2ded5] dark:border-white/5 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#b88344] dark:text-[#d1a36a] font-semibold mb-3">
            <span>Direct Contact & Studio Location</span>
            <span aria-hidden="true">·</span>
            <span>Brooklyn, New York</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white font-display [text-wrap:balance]">
            Visit our workshop or connect with our estimating team.
          </h2>
          <p className="mt-4 text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
            We welcome architects, general contractors, and private clients for scheduled design consultations, material reviews, and timber species inspections at our Red Hook fabrication facility.
          </p>

          {/* Context Banner if user came from a specific service or project */}
          {(initialProjectTitle || initialServiceInterest) && (
            <div className="mt-6 p-4 bg-amber-500/10 border border-[#b88344]/30 dark:border-[#d1a36a]/30 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#b88344] dark:text-[#d1a36a] block mb-0.5">
                  Inquiry Scope In Focus
                </span>
                <span className="text-neutral-800 dark:text-neutral-200">
                  {initialProjectTitle
                    ? `Referencing portfolio work: "${initialProjectTitle}"`
                    : `Inquiring about: "${initialServiceInterest}"`}
                </span>
              </div>
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#b88344] dark:bg-[#d1a36a] text-white dark:text-neutral-950 font-semibold uppercase tracking-wider rounded-sm transition-colors hover:bg-[#a17034] dark:hover:bg-[#dfb47e] self-start sm:self-auto shrink-0 shadow-sm"
              >
                <span>Draft Email With This Scope</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Studio Workshop & Physical Address */}
          <div className="p-8 bg-white dark:bg-[#141518] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#b88344]/10 dark:bg-[#d1a36a]/10 border border-[#b88344]/20 dark:border-[#d1a36a]/20 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#b88344] dark:text-[#d1a36a]" />
              </div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-2">
                Workshop & Design Studio
              </span>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display mb-3">
                Fabrication Facility
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                {COMPANY_INFO.address}
              </p>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1 mb-6">
                <div>Red Hook Industrial Waterfront District</div>
                <div>Freight loading dock accessible via Bay 4</div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider border border-[#d8d3c7] dark:border-white/15 hover:border-neutral-400 dark:hover:border-white/30 text-neutral-800 dark:text-neutral-200 rounded-sm transition-colors cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-[#d8d3c7] dark:border-white/15 hover:border-neutral-400 dark:hover:border-white/30 rounded-sm transition-colors"
                title="Open in Google Maps"
                aria-label="Open in Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Direct Communication Lines */}
          <div className="p-8 bg-white dark:bg-[#141518] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#b88344]/10 dark:bg-[#d1a36a]/10 border border-[#b88344]/20 dark:border-[#d1a36a]/20 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-[#b88344] dark:text-[#d1a36a]" />
              </div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-2">
                Direct Communications
              </span>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display mb-3">
                Call & Email
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-0.5">Telephone</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-base font-semibold text-neutral-900 dark:text-white hover:text-[#b88344] dark:hover:text-[#d1a36a] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-0.5">Shop Inquiry Email</span>
                  <a
                    href={mailtoHref}
                    className="text-base font-semibold text-neutral-900 dark:text-white hover:text-[#b88344] dark:hover:text-[#d1a36a] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center gap-2">
              <a
                href={mailtoHref}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider bg-neutral-900 hover:bg-[#b88344] dark:bg-[#d1a36a] dark:hover:bg-[#dfb47e] text-white dark:text-neutral-950 rounded-sm transition-colors cursor-pointer shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center p-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-[#d8d3c7] dark:border-white/15 hover:border-neutral-400 dark:hover:border-white/30 rounded-sm transition-colors cursor-pointer"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Visiting Hours & Studio Tours */}
          <div className="p-8 bg-white dark:bg-[#141518] border border-[#e2ded5] dark:border-white/10 rounded-sm shadow-sm dark:shadow-none flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#b88344]/10 dark:bg-[#d1a36a]/10 border border-[#b88344]/20 dark:border-[#d1a36a]/20 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#b88344] dark:text-[#d1a36a]" />
              </div>
              <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block mb-2">
                Operational Schedule
              </span>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display mb-3">
                Hours & Consultations
              </h3>

              <div className="space-y-3 mb-6 text-sm">
                <div>
                  <span className="text-neutral-900 dark:text-white font-medium block">
                    {COMPANY_INFO.workingHours}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Workshop floor in active operation
                  </span>
                </div>

                <div className="pt-2 border-t border-neutral-100 dark:border-white/5">
                  <span className="text-neutral-900 dark:text-white font-medium block">
                    Saturday & Sunday: Closed
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    On-site weekend installations by prior scheduling
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#b88344] dark:text-[#d1a36a] shrink-0" />
                <span>Client studio walkthroughs by appointment only</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};
