import React, { useState } from 'react';
import { ShoppingBag, Calendar, Users, Clock, Check, ArrowUpRight, Sparkles, Shield, HeartHandshake } from 'lucide-react';
import { artworksData, workshopsData } from '../data/content';

export default function StoreMonetization({ onOpenInquiry, onSelectWorkshop }) {
  const [activeTab, setActiveTab] = useState('prints'); // 'prints' | 'workshops'

  // Filter artworks that have prints or are available for sale
  const printArtworks = artworksData.filter((art) => art.hasPrints);

  return (
    <section id="tienda" className="py-24 bg-[#0e0f11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Tab switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff3366] mb-2">
              <span className="w-4 h-[1px] bg-[#ff3366]"></span>
              <span>Pilar 2: Venta de Obras & Diversificación de Ingresos</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              Tienda Oficial & Workshops
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Colecciona ediciones seriadas firmadas a mano por la artista o inscríbete en talleres intensivos y mentorías personalizadas de creación.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="bg-white/5 p-1 rounded-full border border-white/10 flex items-center">
            <button
              onClick={() => setActiveTab('prints')}
              className={`text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'prints'
                  ? 'bg-[#ff3366] text-white shadow-lg shadow-[#ff3366]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Prints & Ediciones ({printArtworks.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'workshops'
                  ? 'bg-[#ff3366] text-white shadow-lg shadow-[#ff3366]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Talleres & Mentorías ({workshopsData.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Prints & Ediciones Seriadas */}
        {activeTab === 'prints' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {printArtworks.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#131417] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono uppercase bg-black/80 backdrop-blur-md text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                        Edición de Autor
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                        Print Giclée de Museo • Papel 100% Algodón
                      </p>
                      <h3 className="text-base font-bold text-white mt-1 font-display">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/5 space-y-1 text-xs text-zinc-300">
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Firmado a mano y numerado por Pilar</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Shield className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Certificado con sello seco de autenticidad</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Precio Print</span>
                        <span className="text-lg font-bold font-mono text-white">{item.printPrice}</span>
                      </div>
                      <button
                        onClick={() => onOpenInquiry({ ...item, isPrint: true })}
                        className="text-xs font-bold bg-white text-zinc-950 hover:bg-[#ff3366] hover:text-white px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <span>Adquirir Print</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Note on Original Pieces vs Prints */}
            <div className="mt-12 bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#ff3366] tracking-wider">Para Coleccionistas & Galerías</span>
                <h4 className="text-lg font-bold text-white font-display">
                  ¿Buscas una pieza original o comisionar un encargo a medida?
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                  Disponemos de fichas curatoriales privadas con precios de lista para obras originales y proyectos de muralismo para instituciones o residencias.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry({ isCommission: true, title: "Comisión o Pieza Original" })}
                className="shrink-0 text-xs uppercase font-bold tracking-wider bg-[#ff3366] hover:bg-[#ff1751] text-white px-6 py-3.5 rounded-full transition-all shadow-lg shadow-[#ff3366]/20 cursor-pointer"
              >
                Solicitar Cotización Privada
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Workshops, Talleres & Mentorías */}
        {activeTab === 'workshops' && (
          <div id="workshops" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {workshopsData.map((workshop) => (
                <div
                  key={workshop.id}
                  className="bg-[#131417] rounded-2xl border border-white/10 hover:border-white/20 transition-all p-6 sm:p-7 flex flex-col justify-between relative group"
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                        {workshop.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {workshop.seatsAvailable} cupos libres
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white font-display group-hover:text-[#ff3366] transition-colors">
                      {workshop.title}
                    </h3>

                    {/* Schedule & Location */}
                    <div className="mt-4 space-y-2 text-xs text-zinc-300 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#ff3366]" />
                        <span>{workshop.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Grupo reducido: máx. {workshop.seatsTotal} participantes</span>
                      </div>
                    </div>

                    {/* Syllabus snippet */}
                    <div className="mt-4">
                      <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold mb-2">
                        Temario destacado:
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {workshop.syllabus.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#ff3366] font-bold">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What is included */}
                    <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] text-zinc-400">
                      <p className="font-semibold text-zinc-200 mb-1">Incluye:</p>
                      {workshop.includes.join(' • ')}
                    </div>
                  </div>

                  {/* Price & Booking Button */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Inversión</span>
                      <span className="text-xl font-bold font-mono text-white">{workshop.price}</span>
                    </div>
                    <button
                      onClick={() => onSelectWorkshop(workshop)}
                      className="text-xs uppercase tracking-wider font-bold bg-[#ff3366] hover:bg-[#ff1751] text-white px-5 py-2.5 rounded-lg transition-all shadow-md shadow-[#ff3366]/20 cursor-pointer"
                    >
                      Reservar Cupo
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Custom Mentorship Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-zinc-900 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    ¿Requieres un taller corporativo o para instituciones?
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Diseñamos experiencias inmersivas de arte, serigrafía en vivo y muralismo participativo para empresas y facultades de arte.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenInquiry({ title: "Taller Corporativo / Institucional", isCorporateWorkshop: true })}
                className="shrink-0 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Consultar Disponibilidad
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

