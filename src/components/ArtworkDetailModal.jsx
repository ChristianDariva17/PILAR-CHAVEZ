import React, { useState, useRef } from 'react';
import { X, ArrowUpRight, ShieldCheck, Eye, Layers, Truck, MessageCircle, Search, Sun, Moon, Sparkles } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { artistInfo } from '../data/content';

export default function ArtworkDetailModal({ artwork, open, onClose, onClosed, onOpenInquiry, onOpenCertificate, restoreFocusRef, skipFocusRestoreRef }) {
  if (!artwork) return null;

  const [viewMode, setViewMode] = useState('detalle'); // 'detalle' | 'lupa' | 'en_pared'
  const [roomLighting, setRoomLighting] = useState('galeria'); // 'galeria' | 'contemporanea' | 'noche'

  // Loupe state
  const loupeContainerRef = useRef(null);
  const [loupePos, setLoupePos] = useState({ x: 50, y: 50, show: false, pageX: 0, pageY: 0 });

  const cleanPhone = (artistInfo.contact.whatsapp || "+51990142825").replace(/[^0-9]/g, '');

  const whatsappBuyUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hola Elena, me interesa adquirir tu obra original "${artwork.title}" (${artwork.dimensions}, precio ${artwork.price}). ¿Sigue disponible y cómo coordinamos el envío?`
  )}`;

  const handleLoupeMove = (e) => {
    if (!loupeContainerRef.current) return;
    const rect = loupeContainerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));

    setLoupePos({
      x,
      y,
      show: true,
      pageX: clientX - rect.left,
      pageY: clientY - rect.top,
    });
  };

  const handleLoupeLeave = () => {
    setLoupePos((prev) => ({ ...prev, show: false }));
  };

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md" />
        <Dialog.Content
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] max-w-5xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-white border border-zinc-200/90 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-900"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (!skipFocusRestoreRef.current) restoreFocusRef.current?.focus();
            onClosed();
          }}
        >
          {/* Top bar with Close & View Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border-b border-zinc-200/80 bg-[#faf9f5]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-800">
                {artwork.categoryLabel}
              </span>
              <span className="text-zinc-400 text-xs hidden sm:inline">•</span>
              <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                {artwork.catalogNumber || 'CAT. Nº'}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* View Mode Toggle: Detalle vs Lupa vs En la Pared */}
              <div className="flex items-center bg-zinc-100 p-0.5 sm:p-1 rounded-full border border-zinc-200 text-xs">
                <button
                  onClick={() => setViewMode('detalle')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                    viewMode === 'detalle' ? 'bg-zinc-900 text-white font-bold shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Obra Completa</span>
                  <span className="sm:hidden text-[11px]">Lienzo</span>
                </button>

                <button
                  onClick={() => setViewMode('lupa')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                    viewMode === 'lupa' ? 'bg-zinc-900 text-white font-bold shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Lupa de Textura (2.8x)</span>
                  <span className="sm:hidden text-[11px]">Lupa 2.8x</span>
                </button>

                <button
                  onClick={() => setViewMode('en_pared')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                    viewMode === 'en_pared' ? 'bg-zinc-900 text-white font-bold shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">En la Pared</span>
                  <span className="sm:hidden text-[11px]">Pared</span>
                </button>
              </div>

              <Dialog.Close asChild>
                <button
                  aria-label="Cerrar detalles de la obra"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer border border-zinc-200 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
            
            {/* Left Column: Visual Explorer (7 cols) */}
            <div className="lg:col-span-7 bg-[#f4f3ef] border-r border-zinc-200/80 flex items-center justify-center p-4 sm:p-6 relative min-h-[340px] sm:min-h-[420px] min-w-0">
              
              {/* Mode 1: High-res Lightbox View */}
              {viewMode === 'detalle' && (
                <div className="relative w-full h-[min(65vh,540px)] min-h-[280px]">
                  <Lightbox
                    slides={[{ src: artwork.image, alt: artwork.title }]}
                    plugins={[Inline, Zoom]}
                    inline={{ style: { width: '100%', height: '100%' } }}
                    carousel={{ finite: true }}
                    render={{
                      buttonPrev: () => null,
                      buttonNext: () => null,
                    }}
                    labels={{
                      'Close': 'Cerrar visor',
                      'Zoom in': 'Ampliar',
                      'Zoom out': 'Reducir',
                    }}
                  />
                  <div className="absolute bottom-3 inset-x-2 sm:inset-x-4 z-10 flex flex-wrap justify-between items-center gap-1 text-[10px] text-zinc-800 font-mono bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200 shadow-xs pointer-events-none">
                    <span>● Lienzo original de algodón</span>
                    <span>Formato real: {artwork.dimensions}</span>
                  </div>
                </div>
              )}

              {/* Mode 2: Interactive Brushstroke Loupe (2.5x Zoom Magnifier) */}
              {viewMode === 'lupa' && (
                <div 
                  ref={loupeContainerRef}
                  onMouseMove={handleLoupeMove}
                  onTouchMove={handleLoupeMove}
                  onMouseLeave={handleLoupeLeave}
                  className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden cursor-crosshair border border-zinc-300 bg-white select-none shadow-xl"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-contain pointer-events-none"
                  />

                  {/* Circular Magnifier Lens */}
                  {loupePos.show && (
                    <div
                      style={{
                        left: `${loupePos.pageX}px`,
                        top: `${loupePos.pageY}px`,
                        transform: 'translate(-50%, -50%)',
                        backgroundImage: `url(${artwork.image})`,
                        backgroundPosition: `${loupePos.x}% ${loupePos.y}%`,
                        backgroundSize: '280%',
                        backgroundRepeat: 'no-repeat',
                      }}
                      className="absolute w-44 h-44 rounded-full border-2 border-zinc-900 shadow-[0_12px_35px_rgba(0,0,0,0.35)] pointer-events-none z-30 ring-4 ring-white/90"
                    >
                      {/* Reticle center crosshair */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                        <div className="w-4 h-[1px] bg-zinc-900"></div>
                        <div className="w-[1px] h-4 bg-zinc-900 absolute"></div>
                      </div>
                    </div>
                  )}

                  {/* Hint overlay badge */}
                  <div className="absolute top-3 inset-x-3 flex justify-between items-center pointer-events-none z-20">
                    <span className="text-[10px] font-mono font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 text-zinc-900 backdrop-blur-md border border-zinc-200 shadow-xs">
                      Mueve el cursor para inspeccionar textura y trazos
                    </span>
                    <span className="text-[10px] font-mono text-zinc-900 bg-white/90 px-2.5 py-1 rounded-full border border-zinc-200 font-bold shadow-xs">
                      2.8x
                    </span>
                  </div>
                </div>
              )}

              {/* Mode 3: Room Simulator with 3 Ambient Lighting Modes */}
              {viewMode === 'en_pared' && (
                <div 
                  className={`relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 border border-zinc-300 transition-all duration-700 shadow-inner ${
                    roomLighting === 'galeria'
                      ? 'bg-gradient-to-b from-[#1c1c20] via-[#121215] to-[#0a0a0c]'
                      : roomLighting === 'contemporanea'
                      ? 'bg-gradient-to-br from-[#e4e2dd] via-[#d5d3ce] to-[#c5c3be]'
                      : 'bg-gradient-to-b from-[#0c141e] via-[#070c13] to-[#040609]'
                  }`}
                >
                  {/* Ceiling Spotlight Beam for Galeria */}
                  {roomLighting === 'galeria' && (
                    <div 
                      className="absolute -top-10 inset-x-0 h-96 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.3) 0%, rgba(255,255,255,0.05) 50%, transparent 75%)',
                      }}
                    />
                  )}

                  {/* Window Light Beam for Contemporanea */}
                  {roomLighting === 'contemporanea' && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
                      }}
                    />
                  )}

                  {/* Amazonian Night Mystic Glow */}
                  {roomLighting === 'noche' && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 30%, rgba(56,189,248,0.2) 0%, transparent 70%)',
                      }}
                    />
                  )}

                  {/* Wall Horizon Line */}
                  <div className={`absolute inset-x-0 bottom-24 h-1 shadow-sm ${roomLighting === 'contemporanea' ? 'bg-zinc-400/30' : 'bg-white/10'}`} />

                  {/* Top Bar inside Room Simulator: Lighting Controls */}
                  <div className="relative z-20 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 bg-black/75 px-2.5 py-1 rounded-md border border-white/10">
                      Escala en Sala (Pared de 2.5m)
                    </span>

                    {/* Lighting selector pills */}
                    <div className="flex items-center gap-1 bg-black/70 p-1 rounded-lg border border-white/10 text-[11px]">
                      <button
                        onClick={() => setRoomLighting('galeria')}
                        className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer flex items-center gap-1 ${
                          roomLighting === 'galeria' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Galería</span>
                      </button>
                      <button
                        onClick={() => setRoomLighting('contemporanea')}
                        className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer flex items-center gap-1 ${
                          roomLighting === 'contemporanea' ? 'bg-white text-zinc-950 font-bold shadow-xs' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Sun className="w-3 h-3" />
                        <span>Luz Día</span>
                      </button>
                      <button
                        onClick={() => setRoomLighting('noche')}
                        className={`px-2.5 py-1 rounded-md transition-all font-semibold cursor-pointer flex items-center gap-1 ${
                          roomLighting === 'noche' ? 'bg-cyan-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <Moon className="w-3 h-3" />
                        <span>Noche</span>
                      </button>
                    </div>
                  </div>

                  {/* Artwork Mounted with Exact Proportional Scale */}
                  <div className="relative z-10 flex justify-center items-center flex-1 py-4">
                    <div 
                      className="relative transition-all duration-500"
                      style={{
                        width: artwork.dimensions.includes('129')
                          ? '260px'
                          : (artwork.dimensions.includes('69') || artwork.dimensions.includes('60'))
                          ? '185px'
                          : '120px',
                        boxShadow: roomLighting === 'galeria'
                          ? '0 25px 50px rgba(0,0,0,0.9), 0 0 20px rgba(245,158,11,0.2)'
                          : '0 20px 40px rgba(0,0,0,0.85)',
                      }}
                    >
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-auto object-cover rounded border-[3px] border-[#221c16]"
                      />
                      {/* Depth shadow on wall */}
                      <div className="absolute -bottom-3 inset-x-2 h-4 bg-black/60 blur-md pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Minimalist modern sofa outline on the floor */}
                  <div className="relative z-20 flex justify-center w-full">
                    <div className="w-64 sm:w-80 h-16 bg-[#18181b] border-t-4 border-zinc-600 rounded-t-xl flex items-center justify-center shadow-2xl">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest">
                        Referencia de Proporción • {artwork.dimensions}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Ficha Técnica, Storytelling & WhatsApp Purchase (5 cols) */}
            <div className="lg:col-span-5 p-4 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 bg-white">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-700 bg-zinc-100 px-2.5 py-0.5 rounded-full border border-zinc-200">
                      {artwork.series}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {artwork.catalogNumber || 'CAT. Nº 001/09'}
                    </span>
                  </div>

                  <Dialog.Title className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 mt-1 leading-tight">
                    {artwork.title}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Ficha técnica, historia y opciones para consultar esta obra.
                  </Dialog.Description>
                  <p className="text-xs text-zinc-500 mt-1">
                    Año: <span className="font-mono text-zinc-800 font-bold">{artwork.year}</span> • Taller en Pucallpa (Ucayali)
                  </p>
                </div>

                {/* Ficha Técnica Card */}
                <div className="bg-[#faf9f5] rounded-xl p-4 border border-zinc-200/80 space-y-2 text-xs">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 pb-1 border-b border-zinc-200/60">
                    Ficha Técnica de Autor
                  </p>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Técnica:</span>
                    <span className="text-zinc-800 font-medium">{artwork.technique}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Medidas del bastidor:</span>
                    <span className="text-zinc-900 font-mono font-bold">{artwork.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[11px]">Materiales y soporte:</span>
                    <span className="text-zinc-700 text-[11px] leading-relaxed">{artwork.materials}</span>
                  </div>
                </div>

                {/* Storytelling Amazónico */}
                <div className="space-y-1.5 text-xs text-zinc-700 leading-relaxed bg-[#faf9f5] p-4 rounded-xl border border-zinc-200/80">
                  <p className="font-bold text-zinc-900 uppercase text-[11px] tracking-wider">
                    Memoria de la Obra:
                  </p>
                  <p className="text-zinc-800 font-normal italic font-serif leading-relaxed text-sm">
                    "{artwork.description}"
                  </p>
                  {artwork.curatorNotes && (
                    <p className="text-[11px] text-zinc-600 pt-1 border-t border-zinc-200/60">
                      <strong className="text-zinc-900">Nota Curatorial:</strong> {artwork.curatorNotes}
                    </p>
                  )}
                </div>

                {/* Shipping info */}
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-700">
                  <Truck className="w-4 h-4 text-zinc-800 shrink-0" />
                  <p className="text-[11px]">
                    <strong>Envío a todo el Perú:</strong> Desde Pucallpa vía Olva Courier / Shalom / Agencia con embalaje rígido reforzado.
                  </p>
                </div>

                {/* Certificate of Authenticity badge */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#faf9f5] border border-zinc-200 text-xs text-zinc-700">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                    <span className="text-[11px] font-medium">Incluye Certificado Oficial firmado y sellado</span>
                  </div>
                  <button
                    onClick={() => onOpenCertificate && onOpenCertificate(artwork)}
                    className="text-[11px] font-bold text-zinc-950 underline hover:text-black cursor-pointer"
                  >
                    Ver Certificado COA
                  </button>
                </div>
              </div>

              {/* Bottom Actions: Price and Direct Local Payment */}
              <div className="pt-4 border-t border-zinc-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-mono">
                      Inversión de la Pieza Original
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-serif font-bold text-zinc-900">{artwork.price}</span>
                      <span className="text-[11px] text-zinc-500 font-mono">PEN</span>
                    </div>
                  </div>

                  {/* Local Payment Badges */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-700">
                    <span className="bg-[#7c3aed]/10 text-[#6d28d9] px-2 py-0.5 rounded border border-[#7c3aed]/20 font-bold">Yape</span>
                    <span className="bg-[#0284c7]/10 text-[#0369a1] px-2 py-0.5 rounded border border-[#0284c7]/20 font-bold">Plin</span>
                    <span className="bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded border border-zinc-200">Transferencia</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={whatsappBuyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Adquirir por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenInquiry(artwork, { handoff: true })}
                    className="w-full py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-zinc-200"
                  >
                    <span>Formulario / Cotizar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
