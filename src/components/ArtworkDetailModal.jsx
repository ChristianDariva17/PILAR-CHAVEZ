import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Eye, Layers, Truck, MessageCircle, HelpCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { artistInfo } from '../data/content';

export default function ArtworkDetailModal({ artwork, open, onClose, onClosed, onOpenInquiry, restoreFocusRef, skipFocusRestoreRef }) {
  if (!artwork) return null;

  const [viewMode, setViewMode] = useState('detalle'); // 'detalle' | 'en_pared'

  // Pre-configured WhatsApp text for Peruvian buyers
  const whatsappBuyUrl = `https://wa.me/51961000000?text=${encodeURIComponent(
    `Hola Elena, me interesa adquirir tu obra original "${artwork.title}" (${artwork.dimensions}, precio ${artwork.price}). ¿Sigue disponible y haces envíos a mi ciudad?`
  )}`;

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md" />
        <Dialog.Content
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] max-w-5xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-[#08140e] border border-emerald-500/20 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-100"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          if (!skipFocusRestoreRef.current) restoreFocusRef.current?.focus();
          onClosed();
        }}
      >
        {/* Top bar with Close & View Switcher */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060e09]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-300">
              {artwork.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle: Detalle vs En la Pared */}
            <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('detalle')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'detalle' ? 'bg-emerald-500 text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Detalle de Obra</span>
              </button>
              <button
                onClick={() => setViewMode('en_pared')}
                className={`px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'en_pared' ? 'bg-emerald-500 text-zinc-950 shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Ver en la Pared (Escala)</span>
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
          
          {/* Left Column: Image viewer or Room scale simulator (7 cols) */}
          <div className="lg:col-span-7 bg-[#050b07] flex items-center justify-center p-4 sm:p-8 relative min-h-[320px] sm:min-h-[380px] min-w-0">
            {viewMode === 'detalle' ? (
              <div className="relative w-full h-[min(65vh,560px)] min-h-[280px]">
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
                    'Close': 'Cerrar visor de imagen',
                    'Zoom in': 'Ampliar imagen',
                    'Zoom out': 'Reducir imagen',
                  }}
                />
                <div className="absolute bottom-3 inset-x-2 sm:inset-x-4 z-10 flex flex-wrap justify-between items-center gap-1 text-[10px] text-zinc-200 font-mono bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
                  <span>● Fotografía original de la obra</span>
                  <span>Formato real: {artwork.dimensions}</span>
                </div>
              </div>
            ) : (
              /* Room Simulator */
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#1b2520] via-[#121915] to-[#0c100e] flex flex-col justify-end p-6 border border-white/10">
                {/* Wall and floor perspective lines */}
                <div className="absolute inset-x-0 top-0 bottom-24 bg-[#1e2b24]/40 border-b-2 border-white/10 shadow-inner"></div>
                
                {/* Artwork hanging on the wall */}
                <div className="absolute inset-x-0 top-10 flex justify-center z-10">
                  <div 
                    className="relative shadow-2xl transition-all duration-300"
                    style={{
                      width: artwork.dimensions.includes('129')
                        ? '240px'
                        : (artwork.dimensions.includes('69') || artwork.dimensions.includes('60'))
                        ? '175px'
                        : '110px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-auto object-cover rounded border-[3px] border-amber-950/80"
                    />
                  </div>
                </div>

                {/* Minimalist modern sofa outline on the floor */}
                <div className="relative z-20 flex justify-center w-full">
                  <div className="w-64 sm:w-80 h-16 bg-[#0e1612] border-t-4 border-amber-700/60 rounded-t-xl flex items-center justify-center shadow-2xl">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 tracking-widest">
                      Simulación en Sala (Referencia de Escala: {artwork.dimensions})
                    </span>
                  </div>
                </div>

                <div className="absolute top-4 left-4 z-20 bg-black/80 px-2.5 py-1 rounded-md text-[10px] text-emerald-300 font-mono border border-emerald-500/20">
                  Escala aproximada en pared
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Ficha Técnica, Storytelling & Local Payment (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#08140e]">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  {artwork.series}
                </span>
                <Dialog.Title className="text-2xl sm:text-3xl font-black text-white mt-2 font-display">
                  {artwork.title}
                </Dialog.Title>
                <Dialog.Description className="sr-only">
                  Ficha técnica, historia y opciones para consultar esta obra.
                </Dialog.Description>
                <p className="text-xs text-zinc-400 mt-1">
                  Año: <span className="font-mono text-zinc-200 font-bold">{artwork.year}</span> • Pucallpa, Ucayali
                </p>
              </div>

              {/* Ficha Técnica Card */}
              <div className="bg-[#0b1c13] rounded-xl p-4 border border-emerald-500/20 space-y-2 text-xs">
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 pb-1 border-b border-emerald-500/10">
                  Ficha Técnica Oficial
                </p>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Técnica:</span>
                  <span className="text-zinc-200 font-medium">{artwork.technique}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Medidas del bastidor:</span>
                  <span className="text-zinc-200 font-mono font-bold text-emerald-300">{artwork.dimensions}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Materiales:</span>
                  <span className="text-zinc-300 text-[11px]">{artwork.materials}</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-white/5">
                  <span className="text-zinc-400">Disponibilidad:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {artwork.statusLabel}
                  </span>
                </div>
              </div>

              {/* Storytelling Amazónico */}
              <div className="space-y-1.5 text-xs text-zinc-300 leading-relaxed bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                <p className="font-bold text-emerald-300 uppercase text-[11px] tracking-wider">Historia de la Obra:</p>
                <p className="text-zinc-300 font-light italic font-serif-art leading-relaxed">
                  "{artwork.description}"
                </p>
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
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Precio de la Pieza Original</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black font-mono text-emerald-400">{artwork.price}</span>
                    <span className="text-[11px] text-zinc-400 font-mono">PEN (Soles)</span>
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
                  <span>Comprar por WhatsApp</span>
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
