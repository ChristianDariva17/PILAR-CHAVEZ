import React, { useState } from 'react';
import { Eye, ZoomIn, FileText, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { artworksData } from '../data/content';

export default function PortfolioSection({ onSelectArtwork, onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('todas');

  const categories = [
    { id: 'todas', label: 'Todas las Obras' },
    { id: 'pintura', label: 'Pintura & Óleo' },
    { id: 'gran-formato', label: 'Gran Formato & Mural' },
    { id: 'serigrafia', label: 'Serigrafía & Gráfica' },
    { id: 'mixta', label: 'Técnica Mixta' },
  ];

  const filteredArtworks = activeCategory === 'todas'
    ? artworksData
    : artworksData.filter((item) => item.category === activeCategory);

  return (
    <section id="portafolio" className="py-24 bg-[#0e0f11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff3366] mb-2">
              <span className="w-4 h-[1px] bg-[#ff3366]"></span>
              <span>Pilar 1: Portafolio Digital de Alta Resolución</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              Cuerpo de Obra & Archivo
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Cada pieza documentada con ficha técnica curatorial completa: soporte, pigmentos, dimensiones y procedencia para coleccionistas.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-zinc-950 shadow-md'
                    : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative bg-[#131417] rounded-xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Artwork Image Container */}
              <div 
                className="relative overflow-hidden aspect-[4/3] bg-zinc-900 cursor-pointer"
                onClick={() => onSelectArtwork(artwork)}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md border ${
                      artwork.status === 'disponible'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
                        : artwork.status === 'bajo_cotizacion'
                        ? 'bg-amber-950/80 text-amber-300 border-amber-500/30'
                        : 'bg-zinc-900/80 text-zinc-400 border-zinc-700/40'
                    }`}
                  >
                    {artwork.statusLabel}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="text-xs uppercase tracking-wider font-bold bg-white text-zinc-950 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ver Ficha Completa</span>
                  </span>
                </div>
              </div>

              {/* Ficha Técnica Card Summary */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                    <span className="font-mono">{artwork.year}</span>
                    <span className="uppercase text-[11px] tracking-wider text-zinc-400">{artwork.categoryLabel}</span>
                  </div>

                  <h3 
                    onClick={() => onSelectArtwork(artwork)}
                    className="text-lg font-bold text-white group-hover:text-[#ff3366] transition-colors cursor-pointer font-display"
                  >
                    {artwork.title}
                  </h3>

                  {/* Ficha Técnica Details */}
                  <div className="mt-3 space-y-1.5 text-xs text-zinc-300 border-t border-white/5 pt-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Técnica:</span>
                      <span className="text-right font-medium max-w-[65%] truncate" title={artwork.technique}>
                        {artwork.technique}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Dimensiones:</span>
                      <span className="font-mono text-zinc-200">{artwork.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Materiales:</span>
                      <span className="text-right text-zinc-400 max-w-[65%] truncate" title={artwork.materials}>
                        {artwork.materials}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions bottom bar */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    {artwork.status === 'disponible' && (
                      <span className="text-sm font-bold text-white font-mono">{artwork.price}</span>
                    )}
                    {artwork.status === 'bajo_cotizacion' && (
                      <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">Cotización Privada</span>
                    )}
                    {artwork.status === 'coleccion_privada' && (
                      <span className="text-xs uppercase tracking-wider text-zinc-400">Colección Privada</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectArtwork(artwork)}
                      className="text-xs font-semibold text-zinc-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="Ver ficha técnica detallada"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onOpenInquiry(artwork)}
                      className="text-xs font-bold bg-white/10 hover:bg-[#ff3366] text-white px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Consultar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Curator Footnote */}
        <div className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ff3366]/10 border border-[#ff3366]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#ff3366]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Garantía de Autenticidad & Embalaje Museístico
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Todas las obras originales y reproducciones en serie incluyen Certificado de Autenticidad emitido y firmado por la artista, con embalaje reforzado y seguro internacional puerta a puerta.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenInquiry(null)}
            className="shrink-0 text-xs uppercase tracking-wider font-bold border border-white/20 hover:border-white text-white px-5 py-3 rounded-xl transition-all cursor-pointer"
          >
            Solicitar Catálogo PDF para Curadores
          </button>
        </div>

      </div>
    </section>
  );
}

