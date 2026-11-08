import React, { useState } from 'react';
import { Palette, Building2, Calendar, Users, Clock, Check, ArrowUpRight, MessageCircle, Sparkles, Printer, ShieldCheck } from 'lucide-react';
import { workshopsData, artworksData, printsData } from '../data/content';

export default function StoreMonetization({ onOpenInquiry, onSelectWorkshop }) {
  const [activeTab, setActiveTab] = useState('comisiones'); // 'comisiones' | 'prints' | 'murales' | 'workshops'
  const [selectedPrintSizes, setSelectedPrintSizes] = useState({
    'print-01': 0,
    'print-02': 0,
    'print-03': 0,
    'print-04': 0,
  });

  const handleSizeChange = (printId, sizeIdx) => {
    setSelectedPrintSizes((prev) => ({ ...prev, [printId]: sizeIdx }));
  };

  return (
    <section id="comisiones" className="py-24 bg-[#faf9f5] relative border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with 3 Tab switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">
              <span className="w-4 h-[1.5px] bg-zinc-950"></span>
              <span>Servicios Artísticos & Comisiones</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase font-display tracking-tight text-zinc-950">
              Encargos a Medida & Murales
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-2 max-w-xl font-light leading-relaxed">
              Comisiona un lienzo original de tu motivo amazónico preferido, transforma un espacio con un mural de autor o participa en nuestros talleres de pintura rápida.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="bg-white p-1 rounded-2xl border border-zinc-200 shadow-xs flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('comisiones')}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'comisiones'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Encargos a Medida</span>
            </button>

            <button
              onClick={() => setActiveTab('prints')}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'prints'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prints Seriados (S/. 60+)</span>
            </button>

            <button
              onClick={() => setActiveTab('murales')}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'murales'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Muralismo</span>
            </button>

            <button
              onClick={() => setActiveTab('workshops')}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'workshops'
                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-950'
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                  Proceso de Creación Personalizado
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 font-display">
                  ¿Deseas una obra original de tu animal o paisaje favorito?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  Elena del Pilar realiza obras personalizadas en acrílico sobre lienzo para coleccionistas particulares, residencias y oficinas. Puedes encargar tu felino sagrado (jaguar, puma), aves exóticas (guacamayos, colibríes) o retratos con vestimenta y pintura facial tradicional Shipibo-Konibo.
                </p>

                {/* Steps of commission */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
                    <span className="text-xs font-mono font-bold text-zinc-900">PASO 1</span>
                    <p className="text-xs font-bold text-zinc-950">Idea & Boceto</p>
                    <p className="text-[11px] text-zinc-500 font-light leading-snug">Definimos motivo, paleta y medidas deseadas.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
                    <span className="text-xs font-mono font-bold text-zinc-900">PASO 2</span>
                    <p className="text-xs font-bold text-zinc-950">Avance en Vivo</p>
                    <p className="text-[11px] text-zinc-500 font-light leading-snug">Fotos y videos del proceso en el caballete.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1">
                    <span className="text-xs font-mono font-bold text-zinc-900">PASO 3</span>
                    <p className="text-xs font-bold text-zinc-950">Entrega Segura</p>
                    <p className="text-[11px] text-zinc-500 font-light leading-snug">Barnizado, certificado firmado y embalaje rígido.</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/51961000000?text=${encodeURIComponent(
                      "Hola Elena, me gustaría consultar la cotización de una obra por encargo personalizado en acrílico sobre lienzo."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Cotizar Encargo por WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenInquiry({ isCommission: true, title: "Comisión o Encargo Personalizado" })}
                    className="text-xs uppercase tracking-wider font-bold bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-5 py-3 rounded-xl border border-zinc-200 transition-colors"
                  >
                    Formulario de Cotización
                  </button>
                </div>
              </div>

              {/* Formatos Sugeridos */}
              <div className="lg:col-span-5 bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-800 font-mono">
                  Formatos de Referencia & Precios Base:
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
                    <div>
                      <span className="text-xs font-bold text-zinc-950 block">Formato Íntimo</span>
                      <span className="text-[11px] text-zinc-500 font-mono">30 × 40 cm (Lienzo tensado)</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-zinc-950">Desde S/. 150</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
                    <div>
                      <span className="text-xs font-bold text-zinc-950 block">Formato Presencia</span>
                      <span className="text-[11px] text-zinc-500 font-mono">60 × 80 cm (Composición rica)</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-zinc-950">Desde S/. 450</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-xs">
                    <div>
                      <span className="text-xs font-bold text-zinc-950 block">Formato Monumental</span>
                      <span className="text-[11px] text-zinc-500 font-mono">100 × 120 cm (Gran pared)</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-zinc-950">Desde S/. 750</span>
                  </div>
                </div>

                <p className="text-[10px] text-zinc-500 italic">
                  * Incluyen bastidor de madera de calidad, pintura acrílica profesional y embalaje reforzado.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB: Prints & Reproducciones de Autor */}
        {activeTab === 'prints' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Header banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                  Edición Limitada & Certificada
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 font-display">
                  Reproducciones Fine Art en Papel de Algodón
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  Lleva una pieza de Elena del Pilar a tu hogar con impresión de calidad museo. Cada reproducción es numerada a mano del 01 al 50, firmada por la artista y sellada en relieve para garantizar su autenticidad.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 text-xs text-zinc-600 shrink-0">
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="font-bold text-zinc-950 block">Papel 310g</span>
                  <span className="text-[11px] text-zinc-500 font-mono">100% Algodón libre de ácido</span>
                </div>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="font-bold text-zinc-950 block">Tintas de Archivo</span>
                  <span className="text-[11px] text-zinc-500 font-mono">Durabilidad 100+ años</span>
                </div>
              </div>
            </div>

            {/* Prints Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {printsData.map((item) => {
                const currentSizeIdx = selectedPrintSizes[item.id] || 0;
                const activeSize = item.sizes[currentSizeIdx] || item.sizes[0];
                const cleanPhone = "51961000000";
                const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                  `Hola Elena, quisiera adquirir el Print Seriado de autor de "${item.title}" en formato ${activeSize.size} (${activeSize.price}). ¿Cómo coordinamos el envío?`
                )}`;

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-300 transition-all p-5 flex flex-col justify-between shadow-xs hover:shadow-md"
                  >
                    <div>
                      {/* Thumbnail with gallery mat */}
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 p-2 border border-zinc-200/60 mb-4 shadow-inner">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                        {item.series}
                      </span>
                      <h4 className="text-base font-bold text-zinc-950 font-display mt-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-600 mt-1.5 line-clamp-2 font-light">
                        {item.description}
                      </p>

                      {/* Size Selector */}
                      <div className="mt-4 pt-3 border-t border-zinc-100 space-y-1.5">
                        <span className="text-[10px] uppercase font-mono font-bold text-zinc-700 block">
                          Elige Formato:
                        </span>
                        <div className="grid grid-cols-1 gap-1">
                          {item.sizes.map((s, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleSizeChange(item.id, sIdx)}
                              className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                                currentSizeIdx === sIdx
                                  ? 'bg-zinc-950 text-white font-bold shadow-xs'
                                  : 'bg-zinc-50 text-zinc-700 hover:bg-zinc-100 border border-zinc-200/70'
                              }`}
                            >
                              <span>{s.size}</span>
                              <span className="font-mono">{s.price}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-6 pt-3 border-t border-zinc-100 space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[10px] text-zinc-500 uppercase font-mono">Inversión</span>
                        <span className="text-lg font-bold font-mono text-zinc-950">{activeSize.price}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-xs cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-current" />
                          <span>Pedir</span>
                        </a>

                        <button
                          onClick={() => onOpenInquiry({ title: `Print: ${item.title} (${activeSize.size})` })}
                          className="py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1 border border-zinc-200 cursor-pointer"
                        >
                          <span>Cotizar</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Muralismo */}
        {activeTab === 'murales' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-sm space-y-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                  Arte Público & Espacios Arquitectónicos
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 font-display">
                  Murales Monumentales con Identidad Amazónica
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                  Como participante activa en murales comunitarios y formación académica profesional, Elena del Pilar interviene paredes de gran escala para hoteles ecológicos, albergues de selva, cafeterías y fachadas culturales en Pucallpa, Ucayali y Lima.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h4 className="text-sm font-bold text-zinc-950">Hoteles & Albergues</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    Transforma el lobby, áreas de piscina o habitaciones principales en experiencias inmersivas para huéspedes y visitantes.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h4 className="text-sm font-bold text-zinc-950">Cafés & Restaurantes</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    Paredes fotográficas con motivos de fauna, flora tropical y felinos que refuerzan la identidad del espacio.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2">
                  <h4 className="text-sm font-bold text-zinc-950">Alta Resistencia</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-light">
                    Uso de esmaltes acrílicos especiales para clima tropical, resistentes a la humedad, sol intenso y paso del tiempo.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-600">
                  <span className="font-bold text-zinc-950">Cotización por metro cuadrado:</span> Ajustada según dimensiones, superficie y ubicación.
                </div>
                <a
                  href={`https://wa.me/51961000000?text=${encodeURIComponent(
                    "Hola Elena, quisiera consultar la cotización de un proyecto de muralismo para un espacio comercial / hotel."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
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
                  className="bg-white rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all p-6 sm:p-7 flex flex-col justify-between relative shadow-xs hover:shadow-md"
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                        {workshop.type}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {workshop.seatsAvailable} cupos libres
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-zinc-950 font-display">
                      {workshop.title}
                    </h3>

                    {/* Schedule & Location */}
                    <div className="mt-4 space-y-2 text-xs text-zinc-600 pb-4 border-b border-zinc-100 font-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-zinc-950" />
                        <span className="text-zinc-800 font-medium">{workshop.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-zinc-500" />
                        <span>Cupo reducido: máx. {workshop.seatsTotal} participantes</span>
                      </div>
                    </div>

                    {/* Syllabus snippet */}
                    <div className="mt-4">
                      <p className="text-[11px] uppercase tracking-wider text-zinc-950 font-bold mb-2">
                        Temario destacado:
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-600 font-light">
                        {workshop.syllabus.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-zinc-950 font-bold">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What is included */}
                    <div className="mt-4 p-3 rounded-xl bg-zinc-50 border border-zinc-100 text-[11px] text-zinc-600">
                      <p className="font-semibold text-zinc-900 mb-0.5">Incluye:</p>
                      {workshop.includes.join(' • ')}
                    </div>
                  </div>

                  {/* Price & Booking Button */}
                  <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-mono">Inversión</span>
                      <span className="text-xl font-bold font-mono text-zinc-950">{workshop.price}</span>
                    </div>
                    <button
                      onClick={() => onSelectWorkshop(workshop)}
                      className="text-xs uppercase tracking-wider font-bold bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
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
