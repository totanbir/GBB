import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogoCarousel } from './components/ClientLogoCarousel';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectGallery } from './components/ProjectGallery';
import { WorkProcess } from './components/WorkProcess';
import { LicensingCertifications } from './components/LicensingCertifications';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppButton';

function AppContent() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState<string | undefined>(undefined);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToContact();
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedProjectTitle(projectTitle);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] dark:bg-[#0c0d0e] text-[#141517] dark:text-[#f4f4f0] flex flex-col font-sans selection:bg-[#b88344]/25 dark:selection:bg-[#d1a36a]/30 transition-colors duration-200">
      {/* Top Bar Contract Navigation with Header Right-Side Dark & Light Option */}
      <Navbar onOpenConsultation={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreGallery={scrollToGallery}
          onOpenConsultation={scrollToContact}
        />

        <ClientLogoCarousel />

        <AboutSection />

        <ServicesSection onSelectService={handleSelectService} />

        <ProjectGallery onInquireProject={handleInquireProject} />

        <WorkProcess />

        <LicensingCertifications />

        <TestimonialsSection />

        <ContactSection
          initialServiceInterest={selectedService}
          initialProjectTitle={selectedProjectTitle}
        />
      </main>

      {/* Clean Quiet Footer */}
      <Footer />

      {/* Floating round WhatsApp contact button at bottom right */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

