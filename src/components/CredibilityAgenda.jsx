import React, { useState } from 'react';
import { Award, Calendar, Download, Newspaper, MapPin, ChevronRight } from 'lucide-react';
import { cvData, agendaEvents } from '../data/content';

export default function CredibilityAgenda({ onOpenInquiry, onOpenDossier, onOpenStudioVisit }) {
  const [cvTab, setCvTab] = useState('individuales');

  return (
    <section id="curriculum" className="py-24 bg-[#f4f3ef] relative border-t border-zinc-200/80 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">
              <span className="w-4 h-[1.5px] bg-zinc-950"></span>
              <span>Registro Curatorial & Agenda Oficial</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-zinc-950">
              Trayectoria Curatorial & Agenda
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl font-light leading-relaxed">
              Registro documentado de exposiciones, premios en concursos de pintura rápida, intervenciones murales y calendario de actividades artísticas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDossier}
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider bg-white hover:bg-zinc-100 text-zinc-900 px-5 py-3 rounded-xl border border-zinc-300 transition-all cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-zinc-700" />
              <span>Ver Dossier Curatorial (PDF)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Curricular Exhibitions & Awards (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-100">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-950 font-display flex items-center gap-2">
                  <Award className="w-5 h-5 text-zinc-900" />
                  <span>Currículum Artístico (CV)</span>
                </h3>

                {/* Sub-tabs for CV */}
                <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200">
                  <button
                    onClick={() => setCvTab('individuales')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                      cvTab === 'individuales' ? 'bg-zinc-950 text-white font-black shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    Individuales
                  </button>
                  <button
                    onClick={() => setCvTab('colectivas')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                      cvTab === 'colectivas' ? 'bg-zinc-950 text-white font-black shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    Colectivas
                  </button>
                  <button
                    onClick={() => setCvTab('premios')}
                    className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                      cvTab === 'premios' ? 'bg-zinc-950 text-white font-black shadow-xs' : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    Premios & Murales
                  </button>
                </div>
              </div>

              {/* CV List View */}
              <div className="mt-6 space-y-4">
                {cvTab === 'individuales' && (
                  <div className="space-y-4">
                    {cvData.soloExhibitions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-zinc-50 transition-colors border-l-2 border-zinc-950 pl-4">
                        <span className="font-mono text-xs font-bold text-zinc-900 shrink-0 pt-0.5">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-950 font-display">
                            "{item.title}" — Exposición Individual
                          </h4>
                          <p className="text-xs text-zinc-500 mt-0.5 font-light">
                            {item.gallery} • <span className="text-zinc-700">{item.city}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cvTab === 'colectivas' && (
                  <div className="space-y-4">
                    {cvData.groupExhibitions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-zinc-50 transition-colors border-l-2 border-zinc-400 pl-4">
                        <span className="font-mono text-xs font-bold text-zinc-800 shrink-0 pt-0.5">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-950 font-display">
                            {item.title}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-0.5 font-light">
                            {item.gallery} • <span className="text-zinc-700">{item.city}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {cvTab === 'premios' && (
                  <div className="space-y-4">
                    {cvData.awardsAndResidencies.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-zinc-50 transition-colors border-l-2 border-emerald-800 pl-4">
                        <span className="font-mono text-xs font-bold text-emerald-900 shrink-0 pt-0.5">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-950 font-display">
                            {item.title}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-0.5 font-light">
                            Otorgado por: <span className="text-zinc-800">{item.entity}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Press quotes */}
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-xs uppercase font-bold text-zinc-800 tracking-wider mb-4">
                  <Newspaper className="w-4 h-4 text-zinc-900" />
                  <span>Crítica de Arte & Menciones en Prensa</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cvData.press.map((p, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-zinc-900 uppercase block">
                        {p.media}
                      </span>
                      <p className="text-[11px] text-zinc-600 italic font-serif-art leading-relaxed">
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
            <div className="bg-white rounded-3xl border border-zinc-200/90 p-6 sm:p-8 shadow-xs">
              
              <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-950 font-display flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-zinc-900" />
                  <span>Calendario de Eventos</span>
                </h3>
                <span className="text-[10px] uppercase font-bold px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 border border-zinc-200">
                  Agenda Oficial
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {agendaEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 rounded-2xl bg-zinc-50 hover:bg-zinc-100/70 border border-zinc-200/80 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded">
                        {evt.date}
                      </span>
                      <span className="text-[10px] uppercase font-semibold text-zinc-500">
                        {evt.type}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-950 font-display">
                      {evt.title}
                    </h4>

                    <p className="text-xs text-zinc-500 flex items-center gap-1.5 font-light">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{evt.location}</span>
                    </p>

                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-zinc-200/60">
                      <span className="text-[10px] text-emerald-800 font-medium font-mono">
                        ● {evt.status}
                      </span>
                      <button
                        onClick={() => onOpenInquiry({ title: evt.title, isEventReservation: true })}
                        className="text-xs font-bold text-zinc-900 hover:text-black flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Confirmar Asistencia</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Studio visit box: Open Studio Pucallpa */}
              <div className="mt-6 p-5 rounded-2xl bg-[#faf9f5] border border-zinc-200 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-zinc-700 bg-zinc-100 px-2.5 py-0.5 rounded border border-zinc-200">
                    Open Studio
                  </span>
                  <span className="text-[11px] font-mono text-zinc-600">Pucallpa, Ucayali</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 font-display">
                    Visitas Guiadas al Taller de la Artista
                  </h4>
                  <p className="text-xs text-zinc-600 font-light leading-relaxed mt-1">
                    Recorrido de 45 min por el estudio: observa lienzos en caballete, conoce los pigmentos amazónicos y conversa directamente con Elena del Pilar.
                  </p>
                </div>
                <button
                  onClick={onOpenStudioVisit}
                  className="w-full text-xs uppercase tracking-wider font-bold bg-zinc-950 hover:bg-zinc-800 text-white py-2.5 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar Visita al Taller</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
