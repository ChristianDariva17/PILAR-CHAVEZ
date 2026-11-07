import React, { useState } from 'react';
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

export default function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryItem, setInquiryItem] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleOpenInquiry = (item = null) => {
    setInquiryItem(item);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setInquiryItem(null);
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
          onSelectArtwork={(artwork) => setSelectedArtwork(artwork)} 
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 1. Narrativa del Artista (Statement + Biografía + Enfoque) */}
        <ArtistStatement onOpenInquiry={handleOpenInquiry} />

        {/* 2. Facilitar la venta y monetización (Prints directos, Cotizaciones, Workshops) */}
        <StoreMonetization 
          onOpenInquiry={handleOpenInquiry} 
          onSelectWorkshop={(workshop) => setSelectedWorkshop(workshop)}
        />

        {/* 3. Captar coleccionistas y construir audiencia (Newsletter / Club VIP) */}
        <CollectorNewsletter />

        {/* 4. Generar credibilidad y difundir tu agenda (CV artístico + Calendario) */}
        <CredibilityAgenda onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Floating Collector WhatsApp Widget */}
      <FloatingWhatsApp onOpenInquiry={handleOpenInquiry} />

      {/* Modals */}
      {selectedArtwork && (
        <ArtworkDetailModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onOpenInquiry={handleOpenInquiry}
        />
      )}

      {inquiryModalOpen && (
        <InquiryModal
          selectedItem={inquiryItem}
          onClose={handleCloseInquiry}
        />
      )}

      {selectedWorkshop && (
        <WorkshopModal
          workshop={selectedWorkshop}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}
    </div>
  );
}

