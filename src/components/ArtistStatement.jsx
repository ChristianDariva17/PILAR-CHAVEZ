import React from 'react';
import { Sparkles, Quote, MapPin, Compass, ArrowUpRight } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function ArtistStatement({ onOpenInquiry }) {
  return (
    <section id="el-artista" className="py-24 bg-[#0c0d0e] relative border-t border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtitle tag */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff3366] mb-3">
          <span className="w-4 h-[1px] bg-[#ff3366]"></span>
          <span>Narrativa & Declaración del Artista</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid / Portrait & Studio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff3366] to-amber-500 rounded-2xl blur-md opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-[4/5]">
                <img
                  src={artistInfo.bio.avatar}
                  alt={`Retrato de ${artistInfo.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xl font-black uppercase text-white font-display">
                    {artistInfo.name}
                  </p>
                  <p className="text-xs text-zinc-300 flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ff3366]" />
                    {artistInfo.bio.city} — {artistInfo.bio.experienceYears}
                  </p>
                </div>
              </div>
            </div>

            {/* Studio thumbnail with caption */}
            <div className="rounded-xl overflow-hidden border border-white/10 relative h-36 group">
              <img
                src={artistInfo.bio.studioImage}
                alt="Estudio de arte"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-between px-5">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">El Estudio en Barranco</p>
                  <p className="text-[11px] text-zinc-300">Espacio de experimentación y residencias</p>
                </div>
                <a
                  href="#agenda"
                  className="text-[11px] font-semibold text-white bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg backdrop-blur-md transition-colors"
                >
                  Agendar Visita
                </a>
              </div>
            </div>
          </div>

          {/* Statement Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-display tracking-tight text-white leading-tight">
              "El lienzo no es una superficie pasiva, sino un campo de batalla poético."
            </h2>

            <div className="p-4 rounded-xl bg-white/[0.03] border-l-4 border-[#ff3366] text-zinc-200 font-serif-art italic text-base sm:text-lg leading-relaxed">
              {artistInfo.statement.lead}
            </div>

            <div className="space-y-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              {artistInfo.statement.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Disciplines Chips */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
                Disciplinas & Medios de Investigación:
              </p>
              <div className="flex flex-wrap gap-2">
                {artistInfo.bio.disciplines.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                  >
                    ● {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#curriculum"
                className="text-xs uppercase tracking-wider font-bold bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 rounded-full transition-colors"
              >
                Ver Trayectoria & CV
              </a>
              <button
                onClick={() => onOpenInquiry(null)}
                className="text-xs uppercase tracking-wider font-bold text-white hover:text-[#ff3366] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Conversar con el Estudio</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

