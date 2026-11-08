import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Truck, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { artworksData } from '../data/content';
import ArtworkCanvasCard from './ArtworkCanvasCard';

export default function PortfolioSection({ onSelectArtwork, onOpenInquiry, onOpenCertificate }) {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [availabilityFilter, setAvailabilityFilter] = useState('todas'); // 'todas' | 'disponible' | 'coleccion-privada'
  const [sortBy, setSortBy] = useState('curatorial'); // 'curatorial' | 'price-asc' | 'price-desc'
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: 'todas', label: `Todas (${artworksData.length})` },
    { id: 'fauna-mistica', label: 'Fauna Amazónica' },
    { id: 'aves-amazonia', label: 'Aves & Colibríes' },
    { id: 'identidad-amazona', label: 'Identidad & Retrato' },
    { id: 'paisaje-mistico', label: 'Mística & Agua' },
  ];

  let filteredArtworks = artworksData.filter((item) => {
    const matchCategory = activeCategory === 'todas' || item.category === activeCategory;
    const matchAvailability = availabilityFilter === 'todas' || item.status === availabilityFilter;
    return matchCategory && matchAvailability;
  });

  if (sortBy === 'price-asc') {
    filteredArtworks.sort((a, b) => a.priceNum - b.priceNum);
  } else if (sortBy === 'price-desc') {
    filteredArtworks.sort((a, b) => b.priceNum - a.priceNum);
  }

  return (
    <section id="portafolio" className="py-24 bg-[#faf9f5] relative border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimalist Editorial Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">
              <span className="w-4 h-[1.5px] bg-zinc-950"></span>
              <span>Catálogo Oficial • Elena del Pilar</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-zinc-950">
              Obras Originales en Lienzo
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl font-light leading-relaxed">
              Pinturas originales en acrílico sobre lienzo de algodón tensado en bastidor de madera. Cada pieza es única y se entrega con ficha técnica y certificado de autenticidad de la artista.
            </p>
          </div>

          {/* Availability Pills (Disponibles vs Colección Privada) */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-zinc-200 shadow-xs text-xs">
            <button
              onClick={() => setAvailabilityFilter('todas')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                availabilityFilter === 'todas'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
              }`}
            >
              Catálogo Completo
            </button>
            <button
              onClick={() => setAvailabilityFilter('disponible')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                availabilityFilter === 'disponible'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
              }`}
            >
              Disponibles Hoy ({artworksData.filter(a => a.status === 'disponible').length})
            </button>
            <button
              onClick={() => setAvailabilityFilter('coleccion-privada')}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                availabilityFilter === 'coleccion-privada'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
              }`}
            >
              Colección Privada ({artworksData.filter(a => a.status === 'coleccion-privada').length})
            </button>
          </div>
        </div>

        {/* Secondary Bar: Thematic Filters & Sorter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-12">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-2xl border border-zinc-200 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs uppercase tracking-wider font-semibold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-zinc-950 text-white font-bold shadow-xs'
                    : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sorter Selector */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-zinc-200 text-xs shadow-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-zinc-800 text-xs font-medium focus:outline-none cursor-pointer"
              aria-label="Ordenar obras por"
            >
              <option value="curatorial">Orden de Catálogo</option>
              <option value="price-asc">Inversión: Menor a Mayor</option>
              <option value="price-desc">Inversión: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* Clean, Balanced, Uniform 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
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
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-zinc-900" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-950 uppercase tracking-wider">
                Envíos Protegidos a Todo el Perú desde Pucallpa
              </h4>
              <p className="text-xs text-zinc-600 mt-0.5 max-w-2xl font-light leading-relaxed">
                Cada lienzo viaja con embalaje de seguridad reforzado de varias capas vía <strong>Olva Courier, Shalom o agencia de tu preferencia</strong>. Métodos de pago seguros mediante <strong>Yape, Plin o Transferencia BCP / BBVA</strong>.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenCertificate && onOpenCertificate()}
              className="shrink-0 text-xs uppercase tracking-wider font-bold bg-white hover:bg-zinc-100 text-zinc-900 px-4 py-3 rounded-xl border border-zinc-300 transition-all cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-zinc-800" />
              <span>Ver Certificado COA</span>
            </button>
            <button
              onClick={() => onOpenInquiry({ title: "Consulta sobre envíos y cotización" })}
              className="shrink-0 text-xs uppercase tracking-wider font-bold bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-3 rounded-xl transition-all cursor-pointer shadow-sm"
            >
              Consultar Envíos
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
