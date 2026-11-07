import React, { useState } from 'react';
import { Sparkles, MapPin, GraduationCap, Feather, Palette, ArrowUpRight, BookOpen, Quote } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function ArtistStatement({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('declaracion'); // 'declaracion' | 'biografia'

  return (
    <section id="el-artista" className="py-24 bg-[#0a0f0d] relative border-t border-white/5 overflow-hidden">
      {/* Background accents with organic emerald / jungle glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-emerald-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtitle tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <span className="w-4 h-[1px] bg-emerald-400"></span>
            <span>Narrativa & Declaración del Artista • Pucallpa (Ucayali)</span>
          </div>

          {/* Toggle between Statement and Biography */}
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab('declaracion')}
              className={`text-xs uppercase tracking-wider font-bold px-5 py-2 rounded-full transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'declaracion'
                  ? 'bg-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Declaración Artística</span>
            </button>
            <button
              onClick={() => setActiveTab('biografia')}
              className={`text-xs uppercase tracking-wider font-bold px-5 py-2 rounded-full transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'biografia'
                  ? 'bg-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Biografía Oficial</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Images Grid / Portrait & Origin (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 aspect-[4/5]">
                <img
                  src={artistInfo.bio.avatar}
                  alt={`Retrato de ${artistInfo.fullName}`}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    Artista Profesional (4to Año)
                  </span>
                  <p className="text-2xl font-black uppercase text-white font-display">
                    {artistInfo.fullName}
                  </p>
                  <p className="text-xs text-zinc-300 flex items-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{artistInfo.origin}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick credentials badge card */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Formación Académica Formal</span>
              </div>
              <p className="text-zinc-300">
                Cursando el 4to año de la carrera de Artista Profesional, perfeccionando técnica al óleo, composición y conceptualización visual.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Especialidad: Óleo, Texturas & Murales</span>
                <span className="text-amber-400 font-bold">Pucallpa, Perú</span>
              </div>
            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {activeTab === 'declaracion' ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-display tracking-tight text-white leading-tight">
                  "El arte en Pucallpa no es solo observación, es una vivencia sensorial."
                </h2>

                <div className="p-4 rounded-xl bg-emerald-950/30 border-l-4 border-emerald-400 text-emerald-100 font-serif-art italic text-base sm:text-lg leading-relaxed">
                  "{artistInfo.statement.lead}"
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  {artistInfo.statement.paragraphs.map((p, i) => (
                    <p key={i} className="text-justify sm:text-left">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-display tracking-tight text-white leading-tight">
                  Raíces Vivas de la Amazonía & Trayectoria
                </h2>

                <div className="p-4 rounded-xl bg-amber-950/20 border-l-4 border-amber-400 text-amber-200 font-serif-art italic text-base sm:text-lg leading-relaxed">
                  "Desde sus inicios entendió el arte no solo como expresión, sino como un puente de comunicación con el coleccionista."
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                  {artistInfo.bio.biographyFull.map((p, i) => (
                    <p key={i} className="text-justify sm:text-left">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Disciplines Chips */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
                Disciplinas & Ejes de Creación:
              </p>
              <div className="flex flex-wrap gap-2">
                {artistInfo.bio.disciplines.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-emerald-950/30 border border-emerald-500/20 text-emerald-300"
                  >
                    ● {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#portafolio"
                className="text-xs uppercase tracking-wider font-bold bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 rounded-full transition-colors"
              >
                Explorar Obras Disponibles
              </a>
              <button
                onClick={() => onOpenInquiry(null)}
                className="text-xs uppercase tracking-wider font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Contactar con el Taller</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
