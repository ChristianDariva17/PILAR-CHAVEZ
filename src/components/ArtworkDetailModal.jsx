import React from 'react';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Share2, Sparkles, MessageCircle } from 'lucide-react';

export default function ArtworkDetailModal({ artwork, onClose, onOpenInquiry }) {
  if (!artwork) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#121316] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: High Res Image with zoom impression (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950 flex items-center justify-center p-6 sm:p-8 relative min-h-[350px]">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-zinc-400 font-mono">
              ● Fotografía en alta resolución para curaduría
            </div>
          </div>

          {/* Right Column: Complete Ficha Técnica & Actions (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff3366] bg-[#ff3366]/10 px-2.5 py-1 rounded-full border border-[#ff3366]/30">
                  {artwork.series || artwork.categoryLabel}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-2 font-display">
                  {artwork.title}
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Año de creación: <span className="font-mono text-zinc-200 font-bold">{artwork.year}</span>
                </p>
              </div>

              {/* Ficha Técnica Card */}
              <div className="bg-white/[0.03] rounded-xl p-4 border border-white/10 space-y-2.5 text-xs">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 pb-1 border-b border-white/5">
                  Ficha Técnica Certificada
                </p>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Técnica:</span>
                  <span className="text-zinc-200 font-medium">{artwork.technique}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Dimensiones:</span>
                  <span className="text-zinc-200 font-mono font-medium">{artwork.dimensions}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Materiales & Soporte:</span>
                  <span className="text-zinc-300">{artwork.materials}</span>
                </div>
                <div>
                  <span className="text-zinc-400 block text-[11px]">Estado de Disponibilidad:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {artwork.statusLabel}
                  </span>
                </div>
              </div>

              {/* Curatorial text */}
              <div className="space-y-1 text-xs text-zinc-300 leading-relaxed">
                <p className="font-semibold text-zinc-200">Nota Curatorial:</p>
                <p className="text-zinc-400 italic font-serif-art">{artwork.description}</p>
                {artwork.curatorNotes && (
                  <p className="text-[11px] text-zinc-400 mt-1">
                    {artwork.curatorNotes}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Valor de la Obra</span>
                  <span className="text-xl font-bold font-mono text-white">
                    {artwork.status === 'disponible' ? artwork.price : artwork.statusLabel}
                  </span>
                </div>
                {artwork.hasPrints && (
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Print Edición</span>
                    <span className="text-sm font-bold font-mono text-amber-300">{artwork.printPrice}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry(artwork);
                  }}
                  className="w-full py-3 rounded-xl bg-[#ff3366] hover:bg-[#ff1751] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-[#ff3366]/20"
                >
                  <span>Consultar Obra</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/51987654321?text=${encodeURIComponent(`Hola Pilar, me interesa conocer más sobre la obra: ${artwork.title} (${artwork.dimensions}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Estudio</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

