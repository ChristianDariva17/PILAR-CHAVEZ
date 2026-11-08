import React, { useState } from 'react';
import { Sparkles, MapPin, GraduationCap, Clock, Palette, ArrowUpRight, BookOpen, Quote, CheckCircle2 } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function ArtistStatement({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('timeline'); // 'timeline' | 'declaracion' | 'proceso'

  const timelineSteps = [
    {
      period: "Los Inicios en Pucallpa",
      tag: "Validación Temprana",
      title: "Las Raíces Amazónicas y Primeras Ventas Independientes",
      text: "Nacida en Pucallpa (Ucayali), Elena demostró una capacidad natural para capturar la luz y el misterio de la selva. Sus primeros cuadros encontraron pronta resonancia y comenzaron a venderse de manera independiente desde sus comienzos, forjando su comprensión del arte como un puente directo de comunicación con el coleccionista."
    },
    {
      period: "2021 — 2024",
      tag: "Formación Formal",
      title: "La Decisión Académica: 4 Años de Rigor Profesional",
      text: "Lejos de conformarse con las ventas tempranas, Elena decidió profundizar en el lenguaje visual a través del estudio formal. Actualmente cursa el 4to año de la carrera de Artista Profesional, un proceso que ha transformado su técnica, su manejo del color, la composición y su solidez conceptual."
    },
    {
      period: "Presente & Futuro",
      tag: "Calle y Caballete",
      title: "Plein Air en Yarinacocha y Muralismo de Preservación",
      text: "Su versatilidad se consolida en la participación en concursos de pintura rápida al aire libre (captando los cambios lumínicos del río y la laguna) y en la ejecución de murales comunitarios que alertan sobre la fragilidad del ecosistema amazónico ante la huella humana."
    }
  ];

  return (
    <section id="el-artista" className="py-24 bg-[#06100a] relative border-t border-emerald-500/15 overflow-hidden">
      {/* Background accents with organic emerald & amber glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-emerald-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtitle tag & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
            <span className="w-4 h-[1px] bg-emerald-400"></span>
            <span>Narrativa & Trayectoria • Elena del Pilar Chávez Gutiérrez</span>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-emerald-500/20">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'timeline'
                  ? 'bg-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>El Viaje de Elena</span>
            </button>
            <button
              onClick={() => setActiveTab('declaracion')}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'declaracion'
                  ? 'bg-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Declaración Artística</span>
            </button>
            <button
              onClick={() => setActiveTab('proceso')}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'proceso'
                  ? 'bg-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>En el Caballete</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Portrait & Identity Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-[#08140e] aspect-[4/5]">
                <img
                  src={artistInfo.bio.avatar}
                  alt={`Fotografía de ${artistInfo.fullName} pintando al aire libre en Pucallpa`}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/90 px-2.5 py-0.5 rounded border border-emerald-500/30">
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
            <div className="p-4 rounded-xl bg-[#0b1c13] border border-emerald-500/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Formación Académica Formal</span>
              </div>
              <p className="text-zinc-300 text-[11px] leading-relaxed">
                4to año de la carrera de Artista Profesional. Combinando la frescura y misterio de Pucallpa con la solidez de la composición clásica.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Especialidad: Acrílico & Texturas</span>
                <span className="text-amber-400 font-bold">Pucallpa, Perú</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* TAB 1: Línea de Tiempo Interactiva */}
            {activeTab === 'timeline' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-white leading-tight">
                    De la Selva a la Academia: La Trayectoria de Elena
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    El camino de una artista que convirtió la intuición amazónica en un lenguaje pictórico profesional.
                  </p>
                </div>

                {/* Timeline visual cards */}
                <div className="space-y-4 relative before:content-[''] before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-emerald-500/20">
                  {timelineSteps.map((step, idx) => (
                    <div key={idx} className="relative pl-10 group">
                      <div className="absolute left-2 top-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#06100a] group-hover:scale-125 transition-transform"></div>
                      <div className="p-5 rounded-2xl bg-[#08140e] border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                            {step.period}
                          </span>
                          <span className="text-[10px] text-amber-400 font-bold">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white font-display">
                          {step.title}
                        </h3>
                        <p className="text-xs text-zinc-300 leading-relaxed font-light">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Declaración Artística Completa */}
            {activeTab === 'declaracion' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-white leading-tight">
                  "El arte en Pucallpa no es solo observación, es una vivencia sensorial."
                </h2>

                <div className="p-4 rounded-xl bg-emerald-950/40 border-l-4 border-emerald-400 text-emerald-100 font-serif-art italic text-base sm:text-lg leading-relaxed">
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
            )}

            {/* TAB 3: Proceso en el Caballete */}
            {activeTab === 'proceso' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-white leading-tight">
                  En el Caballete: Materia, Luz y Trazo
                </h2>
                
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Elena trabaja con pigmentos acrílicos sobre lienzo, incorporando veladuras al óleo y texturas táctiles. Cada obra es el resultado de un estudio detenido de los ciclos naturales:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#08140e] border border-emerald-500/20 space-y-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">01 / Trazos Kené</span>
                    <h4 className="text-sm font-bold text-white">Geometría Ancestral</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Líneas bioluminiscentes inspiradas en los diseños Shipibo-Konibo aplicadas sobre la piel de felinos como el Yanapuma.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08140e] border border-emerald-500/20 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">02 / Pintura Rápida</span>
                    <h4 className="text-sm font-bold text-white">Luz Tropical en Vivo</h4>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      Técnica ágil al aire libre en la laguna de Yarinacocha para atrapar los reflejos del agua antes de que cambie la luz crepuscular.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-zinc-300 space-y-1">
                  <p className="font-bold text-emerald-300">Compromiso con la Conservación:</p>
                  <p className="text-zinc-400">
                    "Mi visión busca alertar sobre la fragilidad de los ecosistemas amazónicos, transformando la conciencia del espectador hacia el respeto por lo no humano."
                  </p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
              <a
                href="#portafolio"
                className="text-xs uppercase tracking-wider font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-3 rounded-full transition-colors shadow-md shadow-emerald-500/20"
              >
                Explorar Catálogo de Obras
              </a>
              <button
                onClick={() => onOpenInquiry(null)}
                className="text-xs uppercase tracking-wider font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Conversar con Elena del Pilar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
