import React from 'react';
import { ArrowUpRight, Eye, ShieldCheck, Sparkles, MapPin, Palette } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function Hero({ onOpenInquiry, onSelectArtwork }) {
  const featuredArtwork = {
    title: "Yanapuma (Jaguar Negro Protector)",
    dimensions: "30 x 40 cm",
    price: "S/. 150",
    technique: "Acrílico sobre lienzo con patrones Kené",
    image: "/obras/yanapuma.jpg",
    id: "obra-01"
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#060e09]">
      {/* Background Decorative Amazonian Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Background Subtle Kené Texture Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Concept */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs tracking-widest uppercase text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Estudio Oficial • Pucallpa (Ucayali)</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-display leading-[0.92] text-white">
              EL ALMA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                AMAZÓNICA
              </span> <br />
              EN EL LIENZO.
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
              Extensión digital de la obra de <span className="font-semibold text-white">{artistInfo.fullName}</span> ({artistInfo.artisticName}). 
              Un diálogo vivo entre la exuberancia de la selva de Ucayali, el acrílico sobre lienzo y la disciplina artística profesional.
            </p>

            <blockquote className="border-l-2 border-emerald-500 pl-4 py-1 italic text-sm text-zinc-300 font-serif-art max-w-lg bg-emerald-950/20 rounded-r-lg">
              "{artistInfo.manifestoQuote}"
            </blockquote>

            {/* CTAs adaptados a compras y encargos reales */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portafolio"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/20"
              >
                <span>Ver Obras (S/. 150 - S/. 800)</span>
                <Eye className="w-4 h-4" />
              </a>

              <a
                href="#comisiones"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-emerald-500/30 font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                <span>Encargar Obra a Medida</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href="#el-artista"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 font-medium text-xs uppercase tracking-wider px-4 py-3 transition-colors"
              >
                <span>Trayectoria de Elena</span>
              </a>
            </div>

            {/* Real Social Proof / Metrics */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-xl sm:text-2xl font-black font-display text-white">Pucallpa</p>
                <p className="text-[11px] text-emerald-400 font-mono">Ucayali — Perú</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-display text-white">4to Año</p>
                <p className="text-[11px] text-zinc-400 font-mono">Artista Profesional</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black font-display text-white">100%</p>
                <p className="text-[11px] text-zinc-400 font-mono">Originales en Lienzo</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Artwork Feature (Yanapuma) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Artistic Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 via-teal-500 to-amber-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-70 transition duration-700"></div>

              <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#08140e] shadow-2xl">
                <img
                  src={featuredArtwork.image}
                  alt={featuredArtwork.title}
                  className="w-full h-[470px] object-cover object-center group-hover:scale-105 transition duration-700"
                />

                {/* Artwork Quick Overlay Spec */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/85 to-transparent backdrop-blur-[2px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-500/30">
                      Obra Disponible 2024
                    </span>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      Patrones Kené
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">
                    {featuredArtwork.title}
                  </h3>
                  <p className="text-xs text-zinc-300">
                    {featuredArtwork.technique} • {featuredArtwork.dimensions}
                  </p>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/15">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Inversión</span>
                      <span className="text-xl font-black font-mono text-emerald-400">{featuredArtwork.price} PEN</span>
                    </div>
                    <button
                      onClick={() => onOpenInquiry(featuredArtwork)}
                      className="text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-4 py-2 rounded-xl transition-colors flex items-center gap-1 cursor-pointer shadow-md"
                    >
                      <span>Consultar Obra</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
