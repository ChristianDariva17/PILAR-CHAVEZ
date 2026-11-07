import React, { useState } from 'react';
import { Award, Calendar, Download, ExternalLink, Newspaper, MapPin, CheckCircle, ChevronRight, Bookmark } from 'lucide-react';
import { cvData, agendaEvents } from '../data/content';

export default function CredibilityAgenda({ onOpenInquiry }) {
  const [cvTab, setCvTab] = useState('individuales');

  return (
    <section id="curriculum" className="py-24 bg-[#0c0d0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff3366] mb-2">
              <span className="w-4 h-[1px] bg-[#ff3366]"></span>
              <span>Pilar 4: Credibilidad Institucional & Agenda Pública</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              Trayectoria Curatorial & Agenda
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Registro documentado de exposiciones institucionales, residencias internacionales, premios y calendario de próximas ferias y visitas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert("Dossier Curatorial / CV Oficial descargado (Simulación en PDF con fichas de obra y bio)")}
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider bg-white/10 hover:bg-white text-white hover:text-zinc-950 px-5 py-3 rounded-xl border border-white/15 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV Artístico (PDF)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Curricular Exhibitions & Awards (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#131417] rounded-2xl border border-white/10 p-6 sm:p-8">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                <h3 className="text-xl font-black uppercase tracking-tight text-white font-display flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#ff3366]" />
                  <span>Currículum Artístico (CV)</span>
                </h3>

                {/* Sub-tabs for CV */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                  <button
                    onClick={() => setCvTab('individuales')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      cvTab === 'individuales' ? 'bg-[#ff3366] text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Individuales
                  </button>
                  <button
                    onClick={() => setCvTab('colectivas')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      cvTab === 'colectivas' ? 'bg-[#ff3366] text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Colectivas
                  </button>
                  <button
                    onClick={() => setCvTab('premios')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      cvTab === 'premios' ? 'bg-[#ff3366] text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Premios & Residencias
                  </button>
                </div>
              </div>

              {/* CV List View */}
              <div className="mt-6 space-y-4">
                {cvTab === 'individuales' && (
                  <div className="space-y-4">
                    {cvData.soloExhibitions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/[0.02] transition-colors border-l-2 border-[#ff3366]/40 pl-4">
                        <span className="font-mono text-xs font-bold text-[#ff3366] shrink-0 pt-0.5">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white font-display">
                            "{item.title}" — Exposición Individual
                          </h4>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            {item.gallery} • <span className="text-zinc-300">{item.city}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cvTab === 'colectivas' && (
                  <div className="space-y-4">
                    {cvData.groupExhibitions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/[0.02] transition-colors border-l-2 border-amber-500/40 pl-4">
                        <span className="font-mono text-xs font-bold text-amber-400 shrink-0 pt-0.5">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white font-display">
                            {item.title}
                          </h4>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            {item.gallery} • <span className="text-zinc-300">{item.city}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cvTab === 'premios' && (
                  <div className="space-y-4">
                    {cvData.awardsAndResidencies.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/[0.02] transition-colors border-l-2 border-purple-500/40 pl-4">
                        <span className="font-mono text-xs font-bold text-purple-400 shrink-0 pt-0.5">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white font-display">
                            {item.title}
                          </h4>
                          <p className="text-xs text-zinc-400 mt-0.5">
                            Otorgado por: <span className="text-zinc-300">{item.entity}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Press quotes */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase font-bold text-zinc-400 tracking-wider mb-4">
                  <Newspaper className="w-4 h-4 text-[#ff3366]" />
                  <span>Crítica de Arte & Menciones en Prensa</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cvData.press.map((p, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#ff3366] uppercase block">
                        {p.media}
                      </span>
                      <p className="text-[11px] text-zinc-300 italic leading-relaxed">
                        "{p.quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Live Agenda & Event Calendar (5 cols) */}
          <div id="agenda" className="lg:col-span-5 space-y-6">
            <div className="bg-[#131417] rounded-2xl border border-white/10 p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <h3 className="text-xl font-black uppercase tracking-tight text-white font-display flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#ff3366]" />
                  <span>Calendario de Eventos</span>
                </h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Agenda 2025
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {agendaEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 transition-colors space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#ff3366] bg-[#ff3366]/10 px-2 py-0.5 rounded">
                        {evt.date}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-zinc-400">
                        {evt.type}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white font-display">
                      {evt.title}
                    </h4>

                    <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                      <span>{evt.location}</span>
                    </p>

                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 font-medium">
                        ● {evt.status}
                      </span>
                      <button
                        onClick={() => onOpenInquiry({ title: evt.title, isEventReservation: true })}
                        className="text-xs font-bold text-white hover:text-[#ff3366] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Confirmar Asistencia</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Studio visit box */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 text-center space-y-2">
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  ¿Deseas una visita privada al estudio?
                </p>
                <p className="text-[11px] text-zinc-400">
                  Recibimos a coleccionistas, curadores y directores de galerías en Barranco con cita concertada previa.
                </p>
                <button
                  onClick={() => onOpenInquiry({ title: "Visita Privada al Estudio en Barranco", isStudioVisit: true })}
                  className="text-xs uppercase tracking-wider font-bold text-[#ff3366] hover:underline pt-1 inline-block cursor-pointer"
                >
                  Agendar Cita Privada →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

