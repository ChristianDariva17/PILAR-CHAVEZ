import React, { useState } from 'react';
import { Palette, Building2, Calendar, Users, Clock, Check, ArrowUpRight, Sparkles, MessageCircle, Paintbrush, ShieldCheck } from 'lucide-react';
import { workshopsData, artworksData } from '../data/content';

export default function StoreMonetization({ onOpenInquiry, onSelectWorkshop }) {
  const [activeTab, setActiveTab] = useState('comisiones'); // 'comisiones' | 'murales' | 'workshops'

  return (
    <section id="comisiones" className="py-24 bg-[#08140e] relative border-t border-emerald-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with 3 Tab switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
              <span className="w-4 h-[1px] bg-emerald-400"></span>
              <span>Pilar 2: Servicios Artísticos & Monetización Activa</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
              Encargos a Medida & Murales
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-2 max-w-xl">
              Comisiona un lienzo original de tu fauna amazónica favorita, transforma tu espacio con un mural de autor o inscríbete a nuestros talleres de pintura.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="bg-[#0b1c13] p-1.5 rounded-full border border-emerald-500/20 flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('comisiones')}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'comisiones'
                  ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Encargos a Medida</span>
            </button>

            <button
              onClick={() => setActiveTab('murales')}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'murales'
                  ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Muralismo para Hoteles</span>
            </button>

            <button
              onClick={() => setActiveTab('workshops')}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'workshops'
                  ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Talleres & Plein Air</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Encargos a Medida (Comisiones) */}
        {activeTab === 'comisiones' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0b1c13] rounded-3xl p-6 sm:p-10 border border-emerald-500/20 shadow-2xl">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                  Proceso de Creación Personalizado
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  ¿Deseas una obra original de tu animal o paisaje favorito?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  Elena del Pilar realiza obras personalizadas en acrílico sobre lienzo para coleccionistas particulares, residencias y oficinas. Puedes encargar tu felino sagrado (jaguar, puma), aves exóticas (guacamayos, colibríes, tucanes) o retratos con vestimenta y pintura facial tradicional Shipibo-Konibo.
                </p>

                {/* Steps of commission */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-xs font-mono font-bold text-emerald-400">PASO 1</span>
                    <p className="text-xs font-bold text-white">Idea & Boceto</p>
                    <p className="text-[11px] text-zinc-400">Definimos motivo, paleta de colores y medidas deseadas.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-xs font-mono font-bold text-amber-400">PASO 2</span>
                    <p className="text-xs font-bold text-white">Pintura en Vivo</p>
                    <p className="text-[11px] text-zinc-400">Fotos del avance en el lienzo desde el taller en Pucallpa.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">PASO 3</span>
                    <p className="text-xs font-bold text-white">Envío Asegurado</p>
                    <p className="text-[11px] text-zinc-400">Barnizado final, certificado de autoría y entrega por Olva/Shalom.</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/51961000000?text=${encodeURIComponent(
                      "Hola Elena, me gustaría consultar la cotización de una obra por encargo personalizado en acrílico sobre lienzo."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cotizar mi Encargo por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenInquiry({ isCommission: true, title: "Comisión o Encargo Personalizado" })}
                    className="text-xs uppercase tracking-wider font-bold bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl border border-white/10 transition-colors"
                  >
                    Formulario Formal de Cotización
                  </button>
                </div>
              </div>

              {/* Formatos Sugeridos */}
              <div className="lg:col-span-5 bg-[#06100a] p-6 rounded-2xl border border-emerald-500/20 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Formatos Populares y Referencia de Precio:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <span className="text-xs font-bold text-white block">Formato Íntimo</span>
                      <span className="text-[11px] text-zinc-400">30 × 40 cm (Lienzo tensado)</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400">Desde S/. 150</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <span className="text-xs font-bold text-white block">Formato Presencia</span>
                      <span className="text-[11px] text-zinc-400">60 × 80 cm (Composición compleja)</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400">Desde S/. 450</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div>
                      <span className="text-xs font-bold text-white block">Formato Monumental</span>
                      <span className="text-[11px] text-zinc-400">100 × 120 cm (Gran pared)</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-400">Desde S/. 750</span>
                  </div>
                </div>

                <p className="text-[10px] text-zinc-400 italic">
                  * Precios incluyen bastidor de madera de calidad, pintura profesional y embalaje reforzado.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: Muralismo para Hoteles & Espacios Comerciales */}
        {activeTab === 'murales' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-[#0b1c13] rounded-3xl p-6 sm:p-10 border border-emerald-500/20 shadow-2xl space-y-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-500/30">
                  Arte Público & Espacios Turísticos
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  Murales Monumentales con Identidad Amazónica
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  Como participante activa en murales comunitarios y formación académica profesional, Elena del Pilar interviene paredes de gran escala para hoteles ecológicos, albergues de selva, cafeterías, restaurantes y fachadas culturales en Pucallpa, Ucayali y Lima.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-[#06100a] border border-emerald-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white">Hoteles & Albergues Ecológicos</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Transforma el lobby, áreas de piscina o habitaciones principales en experiencias inmersivas que fascinan a turistas nacionales y extranjeros.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#06100a] border border-emerald-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white">Cafés & Restaurantes Temáticos</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Paredes fotográficas 'Instagrammables' con motivos de jaguares, flora tropical y aves que atraen clientes y posicionan tu marca.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#06100a] border border-emerald-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white">Pinturas de Alta Resistencia</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Uso de esmaltes acrílicos especiales para clima tropical, resistentes a la humedad, sol intenso y paso del tiempo.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-300">
                  <span className="font-bold text-emerald-400">Cotización por metro cuadrado:</span> Ajustada según dimensiones, superficie y ubicación.
                </div>
                <a
                  href={`https://wa.me/51961000000?text=${encodeURIComponent(
                    "Hola Elena, quisiera consultar la cotización de un proyecto de muralismo para un espacio comercial / hotel."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar Proyecto de Mural</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Workshops & Plein Air */}
        {activeTab === 'workshops' && (
          <div id="workshops" className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {workshopsData.map((workshop) => (
                <div
                  key={workshop.id}
                  className="bg-[#0b1c13] rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all p-6 sm:p-7 flex flex-col justify-between relative group shadow-xl"
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                        {workshop.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {workshop.seatsAvailable} cupos libres
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white font-display group-hover:text-emerald-300 transition-colors">
                      {workshop.title}
                    </h3>

                    {/* Schedule & Location */}
                    <div className="mt-4 space-y-2 text-xs text-zinc-300 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{workshop.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Cupo reducido: máx. {workshop.seatsTotal} participantes</span>
                      </div>
                    </div>

                    {/* Syllabus snippet */}
                    <div className="mt-4">
                      <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-2">
                        Temario destacado:
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {workshop.syllabus.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What is included */}
                    <div className="mt-4 p-3 rounded-lg bg-[#06100a] border border-white/5 text-[11px] text-zinc-400">
                      <p className="font-semibold text-zinc-200 mb-1">Incluye:</p>
                      {workshop.includes.join(' • ')}
                    </div>
                  </div>

                  {/* Price & Booking Button */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Inversión</span>
                      <span className="text-xl font-bold font-mono text-emerald-400">{workshop.price}</span>
                    </div>
                    <button
                      onClick={() => onSelectWorkshop(workshop)}
                      className="text-xs uppercase tracking-wider font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-2.5 rounded-lg transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
                    >
                      Reservar Plaza
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
