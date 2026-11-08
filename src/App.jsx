import React, { useRef, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import ArtistStatement from './components/ArtistStatement';
import StoreMonetization from './components/StoreMonetization';
import CollectorNewsletter from './components/CollectorNewsletter';
import CredibilityAgenda from './components/CredibilityAgenda';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Lazy-load heavier modal components (React Best Practices - bundle optimization)
const ArtworkDetailModal = lazy(() => import('./components/ArtworkDetailModal'));
const InquiryModal = lazy(() => import('./components/InquiryModal'));
const WorkshopModal = lazy(() => import('./components/WorkshopModal'));
const DossierModal = lazy(() => import('./components/DossierModal'));
const StudioVisitModal = lazy(() => import('./components/StudioVisitModal'));
const CertificateModal = lazy(() => import('./components/CertificateModal'));

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [artworkDialogOpen, setArtworkDialogOpen] = useState(false);
  const [artworkDialogMounted, setArtworkDialogMounted] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryDialogMounted, setInquiryDialogMounted] = useState(false);
  const [inquiryItem, setInquiryItem] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [workshopDialogOpen, setWorkshopDialogOpen] = useState(false);
  const [workshopDialogMounted, setWorkshopDialogMounted] = useState(false);
  const [dossierModalOpen, setDossierModalOpen] = useState(false);
  const [studioVisitModalOpen, setStudioVisitModalOpen] = useState(false);
  const [studioVisitMounted, setStudioVisitMounted] = useState(false);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);
  const [certificateMounted, setCertificateMounted] = useState(false);
  const [certificateArtwork, setCertificateArtwork] = useState(null);
  const restoreFocusRef = useRef(null);
  const skipArtworkFocusRestoreRef = useRef(false);

  const rememberActiveElement = () => {
    if (document.activeElement instanceof HTMLElement) {
      restoreFocusRef.current = document.activeElement;
    }
  };

  const handleSelectArtwork = (artwork) => {
    rememberActiveElement();
    setSelectedArtwork(artwork);
    setArtworkDialogMounted(true);
    setArtworkDialogOpen(true);
  };

  const handleSelectWorkshop = (workshop) => {
    rememberActiveElement();
    setSelectedWorkshop(workshop);
    setWorkshopDialogMounted(true);
    setWorkshopDialogOpen(true);
  };

  const handleOpenInquiry = (item = null, options = {}) => {
    if (options.handoff) {
      skipArtworkFocusRestoreRef.current = true;
      setArtworkDialogOpen(false);
    } else {
      rememberActiveElement();
    }
    setInquiryItem(item);
    setInquiryDialogMounted(true);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
  };

  const handleInquiryClosed = () => {
    setInquiryItem(null);
    setInquiryDialogMounted(false);
    skipArtworkFocusRestoreRef.current = false;
  };

  const handleArtworkClosed = () => {
    setSelectedArtwork(null);
    setArtworkDialogMounted(false);
  };

  const handleWorkshopClosed = () => {
    setSelectedWorkshop(null);
    setWorkshopDialogMounted(false);
  };

  const handleOpenCertificate = (artwork = null) => {
    rememberActiveElement();
    setCertificateArtwork(artwork);
    setCertificateMounted(true);
    setCertificateModalOpen(true);
  };

  const handleOpenStudioVisit = () => {
    rememberActiveElement();
    setStudioVisitMounted(true);
    setStudioVisitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-zinc-900 selection:bg-[#14532d] selection:text-white">
      {/* Skip to Content for Accessibility (WCAG 2.2) */}
      <a
        href="#portafolio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-900 focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Saltar directamente al catálogo de obras
      </a>
      {/* Top Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 1. Portafolio Digital de Alta Calidad (Impacto visual + Fichas Técnicas) */}
        <PortfolioSection 
          onSelectArtwork={handleSelectArtwork}
          onOpenInquiry={handleOpenInquiry}
          onOpenCertificate={handleOpenCertificate}
        />

        {/* 1. Narrativa del Artista (Statement + Biografía + Enfoque) */}
        <ArtistStatement onOpenInquiry={handleOpenInquiry} />

        {/* 2. Facilitar la venta y monetización (Prints directos, Cotizaciones, Workshops) */}
        <StoreMonetization 
          onOpenInquiry={handleOpenInquiry} 
          onSelectWorkshop={handleSelectWorkshop}
        />

        {/* 3. Captar coleccionistas y construir audiencia (Newsletter / Club VIP) */}
        <CollectorNewsletter />

        {/* 4. Generar credibilidad y difundir tu agenda (CV artístico + Calendario) */}
        <CredibilityAgenda 
          onOpenInquiry={handleOpenInquiry} 
          onOpenDossier={() => setDossierModalOpen(true)}
          onOpenStudioVisit={handleOpenStudioVisit}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenInquiry={handleOpenInquiry} 
        onOpenCertificate={() => handleOpenCertificate(null)}
      />

      {/* Floating Collector WhatsApp Widget */}
      <FloatingWhatsApp onOpenInquiry={handleOpenInquiry} />

      {/* Lazy Modals with Suspense */}
      <Suspense fallback={null}>
        {artworkDialogMounted && (
          <ArtworkDetailModal
            artwork={selectedArtwork}
            open={artworkDialogOpen}
            onClose={() => setArtworkDialogOpen(false)}
            onClosed={handleArtworkClosed}
            onOpenInquiry={handleOpenInquiry}
            onOpenCertificate={handleOpenCertificate}
            restoreFocusRef={restoreFocusRef}
            skipFocusRestoreRef={skipArtworkFocusRestoreRef}
          />
        )}

        {inquiryDialogMounted && (
          <InquiryModal
            selectedItem={inquiryItem}
            open={inquiryModalOpen}
            onClose={handleCloseInquiry}
            onClosed={handleInquiryClosed}
            restoreFocusRef={restoreFocusRef}
          />
        )}

        {workshopDialogMounted && (
          <WorkshopModal
            workshop={selectedWorkshop}
            open={workshopDialogOpen}
            onClose={() => setWorkshopDialogOpen(false)}
            onClosed={handleWorkshopClosed}
            restoreFocusRef={restoreFocusRef}
          />
        )}

        {dossierModalOpen && (
          <DossierModal
            onClose={() => setDossierModalOpen(false)}
          />
        )}

        {studioVisitMounted && (
          <StudioVisitModal
            open={studioVisitModalOpen}
            onClose={() => setStudioVisitModalOpen(false)}
            onClosed={() => setStudioVisitMounted(false)}
            restoreFocusRef={restoreFocusRef}
          />
        )}

        {certificateMounted && (
          <CertificateModal
            artwork={certificateArtwork}
            open={certificateModalOpen}
            onClose={() => setCertificateModalOpen(false)}
            onClosed={() => {
              setCertificateMounted(false);
              setCertificateArtwork(null);
            }}
            restoreFocusRef={restoreFocusRef}
          />
        )}
      </Suspense>
    </div>
  );
}
