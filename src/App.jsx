import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import ArtistStatement from './components/ArtistStatement';
import StoreMonetization from './components/StoreMonetization';
import CollectorNewsletter from './components/CollectorNewsletter';
import CredibilityAgenda from './components/CredibilityAgenda';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ArtworkDetailModal from './components/ArtworkDetailModal';
import InquiryModal from './components/InquiryModal';
import WorkshopModal from './components/WorkshopModal';
import DossierModal from './components/DossierModal';

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

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 selection:bg-[#ff3366] selection:text-white">
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
        />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Floating Collector WhatsApp Widget */}
      <FloatingWhatsApp onOpenInquiry={handleOpenInquiry} />

      {/* Modals */}
      {artworkDialogMounted && (
        <ArtworkDetailModal
          artwork={selectedArtwork}
          open={artworkDialogOpen}
          onClose={() => setArtworkDialogOpen(false)}
          onClosed={handleArtworkClosed}
          onOpenInquiry={handleOpenInquiry}
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
    </div>
  );
}
