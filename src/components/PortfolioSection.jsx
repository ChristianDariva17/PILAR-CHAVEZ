import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Eye, ZoomIn, FileText, ArrowUpRight, Layers, ShieldCheck, Truck, CheckCircle2, Sparkles, SlidersHorizontal } from 'lucide-react';
import { artworksData } from '../data/content';
import ArtworkCanvasCard from './ArtworkCanvasCard';

export default function PortfolioSection({ onSelectArtwork, onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [sortBy, setSortBy] = useState('curatorial'); // 'curatorial' | 'price-asc' | 'price-desc'
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: 'todas', label: `Todas (${artworksData.length})` },
    { id: 'fauna-mistica', label: 'Fauna Amazónica' },
    { id: 'aves-amazonia', label: 'Aves & Colibríes' },
    { id: 'identidad-amazona', label: 'Identidad & Retrato' },
    { id: 'paisaje-mistico', label: 'Mística & Agua' },
  ];

  let filteredArtworks = activeCategory === 'todas'
    ? [...artworksData]
    : artworksData.filter((item) => item.category === activeCategory);

  if (sortBy === 'price-asc') {
    filteredArtworks.sort((a, b) => a.priceNum - b.priceNum);
  } else if (sortBy === 'price-desc') {
    filteredArtworks.sort((a, b) => b.priceNum - a.priceNum);
  }

  return (
    <section id="portafolio" className="py-24 bg-[#060e09] relative border-t border-emerald-500/15">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
              <span className="w-4 h-[1px] bg-emerald-400"></span>
              <span>Pilar 1: Exposición Curatorial de Obras Originales • Pucallpa</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              Catálogo de Obras en Lienzo
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-2 max-w-xl font-light">
              Lienzos originales de algodón sobre bastidor de madera, pintados con acrílico, texturas y pigmentos de la Amazonía de Ucayali. Cada obra se entrega con certificado de autenticidad firmado.
            </p>
          </div>

          {/* Controls: Category Filter + Sorter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#0b1c13] rounded-2xl border border-emerald-500/20">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs uppercase tracking-wider font-bold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-emerald-500 text-zinc-950 font-black shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sorter Selector */}
            <div className="flex items-center gap-2 bg-[#0b1c13] px-3 py-1.5 rounded-xl border border-emerald-500/20 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-zinc-200 text-xs font-semibold focus:outline-none cursor-pointer"
                aria-label="Ordenar obras por"
              >
                <option value="curatorial" className="bg-[#0b1c13] text-white">Orden Curatorial</option>
                <option value="price-asc" className="bg-[#0b1c13] text-white">Inversión: Menor a Mayor</option>
                <option value="price-desc" className="bg-[#0b1c13] text-white">Inversión: Mayor a Menor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dynamic Asymmetric Gallery Grid with 3D Canvas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredArtworks.map((artwork, idx) => (
            <ArtworkCanvasCard
              key={artwork.id}
              artwork={artwork}
              index={idx}
              onSelectArtwork={onSelectArtwork}
              onOpenInquiry={onOpenInquiry}
            />
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
              <p className="text-xs text-zinc-300 mt-0.5 max-w-2xl font-light">
                Cada lienzo viaja con embalaje rígido multicapa, esquineros amortiguados y plástico burbuja reforzado vía <strong>Olva Courier, Shalom o agencia de tu preferencia</strong>. Pagos cómodos y seguros mediante <strong>Yape, Plin o Transferencia BCP / BBVA</strong>.
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
