import React, { useState } from 'react';
import { Eye, ZoomIn, FileText, ArrowUpRight, Layers, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';
import { artworksData } from '../data/content';

export default function PortfolioSection({ onSelectArtwork, onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('todas');

  const categories = [
    { id: 'todas', label: 'Todas las Obras' },
    { id: 'fauna-mistica', label: 'Fauna Sagrada (Yanapuma / Aves)' },
    { id: 'identidad-amazona', label: 'Identidad & Retrato' },
    { id: 'gran-formato', label: 'Gran Formato (Garza)' },
    { id: 'paisaje-sensorial', label: 'Flora & Micro-fauna' },
  ];

  const filteredArtworks = activeCategory === 'todas'
    ? artworksData
    : artworksData.filter((item) => item.category === activeCategory);

  return (
    <section id="portafolio" className="py-24 bg-[#08140e] relative border-t border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
              <span className="w-4 h-[1px] bg-emerald-400"></span>
              <span>Pilar 1: Portafolio de Obras Originales • Pucallpa</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              Catálogo de Obras en Lienzo
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-2 max-w-xl">
              Pinturas originales en acrílico con texturas y motivos amazónicos. Cada pieza incluye certificado de autoría y ficha técnica.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-zinc-950 shadow-md'
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
              className="group relative bg-[#0b1c13] rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500/45 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Artwork Image Container */}
              <div 
                className="relative overflow-hidden aspect-[4/3] bg-zinc-950 cursor-pointer"
                onClick={() => onSelectArtwork(artwork)}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />

                {/* Dimensions Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                    {artwork.dimensions}
                  </span>
                </div>

                {/* Hover overlay hint with Room scale preview */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                  <span className="text-xs uppercase tracking-wider font-bold bg-emerald-500 text-zinc-950 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Ver Ficha & Escala en Pared</span>
                  </span>
                  <p className="text-[11px] text-zinc-300 line-clamp-2 px-2">
                    "{artwork.description}"
                  </p>
                </div>
              </div>

              {/* Ficha Técnica Card Summary */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">{artwork.categoryLabel}</span>
                    <span className="font-mono text-xs">{artwork.year}</span>
                  </div>

                  <h3 
                    onClick={() => onSelectArtwork(artwork)}
                    className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer font-display"
                  >
                    {artwork.title}
                  </h3>

                  {/* Ficha Técnica Details */}
                  <div className="mt-3 space-y-1.5 text-xs text-zinc-300 border-t border-white/5 pt-3">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Técnica:</span>
                      <span className="text-right font-medium text-zinc-200">
                        {artwork.technique}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Medida:</span>
                      <span className="font-mono text-emerald-400 font-bold">{artwork.dimensions}</span>
                    </div>
                  </div>
                </div>

                {/* Actions bottom bar */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Pieza Original</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-black text-white font-mono">{artwork.price}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">PEN</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectArtwork(artwork)}
                      className="text-xs font-semibold text-emerald-300 hover:text-white p-2 rounded-lg hover:bg-emerald-950 transition-colors flex items-center gap-1 border border-emerald-500/20"
                      title="Ver en la pared y ficha completa"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline text-[11px]">En pared</span>
                    </button>
                    <button
                      onClick={() => onOpenInquiry(artwork)}
                      className="text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer shadow-md"
                    >
                      <span>Adquirir</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Shipping & Authenticity Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0b1c13] via-[#0e2419] to-[#08140e] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Envíos Protegidos a Todo el Perú desde Pucallpa
              </h4>
              <p className="text-xs text-zinc-300 mt-0.5 max-w-2xl">
                Cada lienzo viaja con embalaje rígido multicapa, plástico burbuja y seguro de transporte vía <strong>Olva Courier, Shalom o agencia de tu preferencia</strong>. Pagos cómodos y seguros mediante <strong>Yape, Plin o Transferencia BCP / BBVA</strong>.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenInquiry({ title: "Consulta sobre envíos y cotización" })}
            className="shrink-0 text-xs uppercase tracking-wider font-bold bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl border border-white/10 transition-all cursor-pointer"
          >
            Consultar Costo de Envío
          </button>
        </div>

      </div>
    </section>
  );
}
