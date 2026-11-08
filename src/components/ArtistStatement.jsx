import React, { useState } from 'react';
import { MapPin, GraduationCap, Clock, Palette, ArrowUpRight, Quote } from 'lucide-react';
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
      period: "Trayectoria Formal",
      tag: "Formación Profesional",
      title: "La Decisión Académica: Rigor y Maestría Técnica",
      text: "Lejos de conformarse con las ventas tempranas, Elena decidió profundizar en el lenguaje visual a través del estudio formal en la carrera de Artista Profesional, un proceso que ha transformado su técnica, su manejo del color, la composición y su solidez conceptual."
    },
    {
      period: "Presente & Futuro",
      tag: "Calle y Caballete",
      title: "Plein Air en Yarinacocha y Muralismo de Preservación",
      text: "Su versatilidad se consolida en la participación en concursos de pintura rápida al aire libre (captando los cambios lumínicos del río y la laguna) y en la ejecución de murales comunitarios que alertan sobre la fragilidad del ecosistema amazónico ante la huella humana."
    }
  ];

  return (
    <section id="el-artista" className="py-24 bg-[#f4f3ef] relative border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtitle tag & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">
            <span className="w-4 h-[1.5px] bg-zinc-950"></span>
            <span>Biografía & Manifiesto • Elena del Pilar</span>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="inline-flex p-1 rounded-2xl bg-white border border-zinc-200 shadow-xs">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'timeline'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Trayectoria</span>
            </button>
            <button
              onClick={() => setActiveTab('declaracion')}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'declaracion'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Quote className="w-3.5 h-3.5" />
              <span>Declaración Artística</span>
            </button>
            <button
              onClick={() => setActiveTab('proceso')}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'proceso'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Proceso en el Taller</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Portrait & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl overflow-hidden border border-zinc-200/90 shadow-md bg-white p-3">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-100">
                <img
                  src={artistInfo.bio.avatar}
                  alt={`Fotografía de ${artistInfo.fullName} pintando al aire libre en Pucallpa`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/20">
                    Artista Plástica Profesional
                  </span>
                  <p className="text-2xl font-black uppercase text-white font-display">
                    {artistInfo.fullName}
                  </p>
                  <p className="text-xs text-zinc-200 flex items-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                    <span>{artistInfo.origin}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick credentials badge card */}
            <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 space-y-2 text-xs shadow-xs">
              <div className="flex items-center gap-2 text-zinc-950 font-bold">
                <GraduationCap className="w-4 h-4 text-emerald-800" />
                <span>Formación Académica Formal</span>
              </div>
              <p className="text-zinc-600 text-xs leading-relaxed font-light">
                Carrera de Artista Profesional en Artes Plásticas. Combinando la frescura intuitiva de Ucayali con la solidez de la composición clásica.
              </p>
              <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Especialidad: Acrílico & Texturas</span>
                <span className="text-zinc-950 font-bold">Pucallpa, Perú</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* TAB 1: Línea de Tiempo */}
            {activeTab === 'timeline' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-zinc-950 leading-tight">
                    De la Selva a la Academia: La Trayectoria de Elena
                  </h2>
                  <p className="text-xs text-zinc-500 mt-1">
                    El camino de una artista que convirtió la intuición amazónica en un lenguaje pictórico profesional.
                  </p>
                </div>

                {/* Timeline visual cards */}
                <div className="space-y-4 relative before:content-[''] before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-zinc-200">
                  {timelineSteps.map((step, idx) => (
                    <div key={idx} className="relative pl-10 group">
                      <div className="absolute left-2 top-3 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white shadow-xs"></div>
                      <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded">
                            {step.period}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-zinc-950 font-display">
                          {step.title}
                        </h3>
                        <p className="text-xs text-zinc-600 leading-relaxed font-light">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Declaración Artística */}
            {activeTab === 'declaracion' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-zinc-950 leading-tight">
                  "El arte en Pucallpa no es solo observación, es una vivencia sensorial."
                </h2>

                <div className="p-5 rounded-2xl bg-white border-l-4 border-zinc-950 text-zinc-900 font-serif-art italic text-base sm:text-lg leading-relaxed shadow-xs">
                  "{artistInfo.statement.lead}"
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
                  {artistInfo.statement.paragraphs.map((p, i) => (
                    <p key={i} className="text-justify sm:text-left">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Proceso en el Taller */}
            {activeTab === 'proceso' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-display tracking-tight text-zinc-950 leading-tight">
                  En el Caballete: Materia, Luz y Trazo
                </h2>
                
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Elena trabaja con pigmentos acrílicos sobre lienzo, incorporando veladuras al óleo y texturas táctiles. Cada obra es el resultado de un estudio detenido de los ciclos naturales de la selva:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-2">
                    <span className="text-xs font-mono font-bold text-zinc-800 uppercase">01 / Trazos Kené</span>
                    <h4 className="text-sm font-bold text-zinc-950">Geometría Ancestral</h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed font-light">
                      Líneas bioluminiscentes inspiradas en los diseños Shipibo-Konibo aplicadas sobre la piel de felinos como el Yanapuma.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-xs space-y-2">
                    <span className="text-xs font-mono font-bold text-zinc-800 uppercase">02 / Pintura Rápida</span>
                    <h4 className="text-sm font-bold text-zinc-950">Luz Tropical en Vivo</h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed font-light">
                      Técnica ágil al aire libre en la laguna de Yarinacocha para atrapar los reflejos del agua antes de que cambie la luz crepuscular.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-100 border border-zinc-200 text-xs text-zinc-700 space-y-1">
                  <p className="font-bold text-zinc-950">Compromiso con la Conservación:</p>
                  <p className="font-light italic font-serif-art text-sm text-zinc-800">
                    "Mi visión busca alertar sobre la fragilidad de los ecosistemas amazónicos, transformando la conciencia del espectador hacia el respeto por lo no humano."
                  </p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-zinc-200">
              <a
                href="#portafolio"
                className="text-xs uppercase tracking-wider font-bold bg-zinc-950 hover:bg-zinc-800 text-white px-6 py-3 rounded-full transition-all shadow-sm"
              >
                Explorar Catálogo de Obras
              </a>
              <button
                onClick={() => onOpenInquiry(null)}
                className="text-xs uppercase tracking-wider font-bold text-zinc-800 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer"
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
