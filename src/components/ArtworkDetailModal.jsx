import React, { useState, useRef } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Eye, Layers, Truck, MessageCircle, Search, Sun, Moon, Sparkles } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { artistInfo } from '../data/content';

export default function ArtworkDetailModal({ artwork, open, onClose, onClosed, onOpenInquiry, restoreFocusRef, skipFocusRestoreRef }) {
  if (!artwork) return null;

  const [viewMode, setViewMode] = useState('detalle'); // 'detalle' | 'lupa' | 'en_pared'
  const [roomLighting, setRoomLighting] = useState('galeria'); // 'galeria' | 'contemporanea' | 'noche'

  // Loupe state
  const loupeContainerRef = useRef(null);
  const [loupePos, setLoupePos] = useState({ x: 50, y: 50, show: false, pageX: 0, pageY: 0 });

  const cleanPhone = (artistInfo.contact.whatsapp || "+51961000000").replace(/[^0-9]/g, '');

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
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md" />
        <Dialog.Content
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] max-w-5xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-[#08140e] border border-emerald-500/25 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-100"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (!skipFocusRestoreRef.current) restoreFocusRef.current?.focus();
            onClosed();
          }}
        >
          {/* Top bar with Close & View Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-emerald-500/15 bg-[#060e09]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300">
                {artwork.categoryLabel}
              </span>
              <span className="text-zinc-500 text-xs hidden sm:inline">•</span>
              <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                {artwork.catalogNumber || 'CAT. Nº'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* View Mode Toggle: Detalle vs Lupa vs En la Pared */}
              <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 text-xs">
                <button
                  onClick={() => setViewMode('detalle')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'detalle' ? 'bg-emerald-500 text-zinc-950 font-black shadow-md' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Obra Completa</span>
                </button>

                <button
                  onClick={() => setViewMode('lupa')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'lupa' ? 'bg-emerald-500 text-zinc-950 font-black shadow-md' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Lupa de Textura (2.5x)</span>
                </button>

                <button
                  onClick={() => setViewMode('en_pared')}
                  className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    viewMode === 'en_pared' ? 'bg-emerald-500 text-zinc-950 font-black shadow-md' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>En la Pared</span>
                </button>
              </div>

              <Dialog.Close asChild>
                <button
                  aria-label="Cerrar detalles de la obra"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[80vh] overflow-y-auto">
            
            {/* Left Column: Visual Explorer (7 cols) */}
            <div className="lg:col-span-7 bg-[#050b07] flex items-center justify-center p-4 sm:p-6 relative min-h-[340px] sm:min-h-[420px] min-w-0">
              
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
                  <div className="absolute bottom-3 inset-x-2 sm:inset-x-4 z-10 flex flex-wrap justify-between items-center gap-1 text-[10px] text-zinc-200 font-mono bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
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
                  className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden cursor-crosshair border border-emerald-500/30 bg-black select-none shadow-2xl"
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
                      className="absolute w-44 h-44 rounded-full border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.5),inset_0_0_15px_rgba(0,0,0,0.4)] pointer-events-none z-30 ring-4 ring-black/60"
                    >
                      {/* Reticle center crosshair */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                        <div className="w-4 h-[1px] bg-emerald-400"></div>
                        <div className="w-[1px] h-4 bg-emerald-400 absolute"></div>
                      </div>
                    </div>
                  )}

                  {/* Hint overlay badge */}
                  <div className="absolute top-3 inset-x-3 flex justify-between items-center pointer-events-none z-20">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                      Mueve el cursor para inspeccionar textura y trazos
                    </span>
                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-500/30 font-bold">
                      2.8x
                    </span>
                  </div>
                </div>
              )}

              {/* Mode 3: Room Simulator with 3 Ambient Lighting Modes */}
              {viewMode === 'en_pared' && (
                <div 
                  className={`relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden flex flex-col justify-between p-6 border border-emerald-500/20 transition-all duration-700 ${
                    roomLighting === 'galeria'
                      ? 'bg-gradient-to-b from-[#0e1c14] via-[#09120d] to-[#040806]'
                      : roomLighting === 'contemporanea'
                      ? 'bg-gradient-to-br from-[#212d26] via-[#16201b] to-[#0b120f]'
                      : 'bg-gradient-to-b from-[#07131a] via-[#050e14] to-[#020508]'
                  }`}
                >
                  {/* Ceiling Spotlight Beam for Galeria */}
                  {roomLighting === 'galeria' && (
                    <div 
                      className="absolute -top-10 inset-x-0 h-96 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.25) 0%, rgba(16,185,129,0.1) 45%, transparent 75%)',
                      }}
                    />
                  )}

                  {/* Window Light Beam for Contemporanea */}
                  {roomLighting === 'contemporanea' && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
                      }}
                    />
                  )}

                  {/* Amazonian Night Mystic Glow */}
                  {roomLighting === 'noche' && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 30%, rgba(56,189,248,0.18) 0%, transparent 70%)',
                      }}
                    />
                  )}

                  {/* Wall Horizon Line */}
                  <div className="absolute inset-x-0 bottom-24 h-1 bg-white/10 shadow-sm" />

                  {/* Top Bar inside Room Simulator: Lighting Controls */}
                  <div className="relative z-20 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 bg-black/80 px-2.5 py-1 rounded-md border border-emerald-500/25">
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
                          roomLighting === 'contemporanea' ? 'bg-emerald-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-white'
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
                    <div className="w-64 sm:w-80 h-16 bg-[#0c1410] border-t-4 border-amber-800/60 rounded-t-xl flex items-center justify-center shadow-2xl">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 tracking-widest">
                        Referencia de Proporción • {artwork.dimensions}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Ficha Técnica, Storytelling & WhatsApp Purchase (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#08140e]">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30">
                      {artwork.series}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">
                      {artwork.catalogNumber || 'CAT. Nº 001/09'}
                    </span>
                  </div>

                  <Dialog.Title className="text-2xl sm:text-3xl font-black text-white mt-1 font-display leading-tight">
                    {artwork.title}
                  </Dialog.Title>
                  <Dialog.Description className="sr-only">
                    Ficha técnica, historia y opciones para consultar esta obra.
                  </Dialog.Description>
                  <p className="text-xs text-zinc-400 mt-1">
                    Año: <span className="font-mono text-zinc-200 font-bold">{artwork.year}</span> • Taller en Pucallpa (Ucayali)
                  </p>
                </div>

                {/* Ficha Técnica Card */}
                <div className="bg-[#0b1c13] rounded-xl p-4 border border-emerald-500/20 space-y-2 text-xs">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 pb-1 border-b border-emerald-500/10">
                    Ficha Técnica de Autor
                  </p>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Técnica:</span>
                    <span className="text-zinc-200 font-medium">{artwork.technique}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Medidas del bastidor:</span>
                    <span className="text-emerald-300 font-mono font-bold">{artwork.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[11px]">Materiales y soporte:</span>
                    <span className="text-zinc-300 text-[11px] leading-relaxed">{artwork.materials}</span>
                  </div>
                </div>

                {/* Storytelling Amazónico */}
                <div className="space-y-1.5 text-xs text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-emerald-500/15">
                  <p className="font-bold text-emerald-300 uppercase text-[11px] tracking-wider">
                    Memoria de la Obra:
                  </p>
                  <p className="text-zinc-300 font-light italic font-serif-art leading-relaxed text-sm">
                    "{artwork.description}"
                  </p>
                  {artwork.curatorNotes && (
                    <p className="text-[11px] text-zinc-400 pt-1 border-t border-white/5">
                      <strong className="text-emerald-400">Nota Curatorial:</strong> {artwork.curatorNotes}
                    </p>
                  )}
                </div>

                {/* Shipping info */}
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-xs text-zinc-300">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <p className="text-[11px]">
                    <strong>Envío a todo el Perú:</strong> Desde Pucallpa vía Olva Courier / Shalom / Agencia con embalaje rígido reforzado.
                  </p>
                </div>
              </div>

              {/* Bottom Actions: Price and Direct Local Payment */}
              <div className="pt-4 border-t border-emerald-500/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-mono">
                      Inversión de la Pieza Original
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black font-mono text-emerald-400">{artwork.price}</span>
                      <span className="text-[11px] text-zinc-400 font-mono">PEN</span>
                    </div>
                  </div>

                  {/* Local Payment Badges */}
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                    <span className="bg-[#7c3aed]/20 text-[#a78bfa] px-2 py-0.5 rounded border border-[#7c3aed]/40 font-bold">Yape</span>
                    <span className="bg-[#0284c7]/20 text-[#38bdf8] px-2 py-0.5 rounded border border-[#0284c7]/40 font-bold">Plin</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-zinc-300">Transferencia</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={whatsappBuyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Adquirir por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenInquiry(artwork, { handoff: true })}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-white/10"
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
