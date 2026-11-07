import React from 'react';
import { ArrowDown, ArrowUpRight, Palette, Eye, Award } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#ff3366]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#fbbf24]/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Concept */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs tracking-widest uppercase text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff3366] animate-pulse"></span>
              <span>Portafolio Oficial & Estudio de Arte</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-display leading-[0.92]">
              EL ARTE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] via-[#ff758c] to-[#ffbe76]">
                COMO VOZ
              </span> <br />
              VISCERAL.
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
              Extensión digital de la obra de <span className="font-semibold text-white">{artistInfo.name}</span>. 
              Pintura matérica, gran formato y gráfica contemporánea concebidos para coleccionistas, curadores y amantes de la materia viva.
            </p>

            <blockquote className="border-l-2 border-[#ff3366] pl-4 py-1 italic text-sm text-zinc-400 font-serif-art max-w-lg">
              "{artistInfo.manifestoQuote}"
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portafolio"
                className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-xl shadow-white/5"
              >
                <span>Explorar Obras</span>
                <Eye className="w-4 h-4" />
              </a>

              <a
                href="#tienda"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all"
              >
                <span>Prints & Tienda</span>
                <ArrowUpRight className="w-4 h-4 text-[#ff3366]" />
              </a>

              <a
                href="#workshops"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-medium text-xs uppercase tracking-wider px-4 py-3 transition-colors"
              >
                <span>Próximos Talleres</span>
              </a>
            </div>

            {/* Quick Metrics / Social Proof */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-black font-display text-white">14+</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider">Años de trayectoria</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black font-display text-white">28+</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider">Exposiciones int.</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black font-display text-white">120+</p>
                <p className="text-[11px] text-zinc-400 uppercase tracking-wider">Obras en colección</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Artwork Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Artistic Frame Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#ff3366] via-purple-600 to-amber-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-700"></div>

              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-zinc-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85"
                  alt="Obra emblemática Pilar"
                  className="w-full h-[460px] object-cover object-center group-hover:scale-105 transition duration-700"
                />

                {/* Artwork Quick Overlay Spec */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-[2px]">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff3366] bg-[#ff3366]/10 px-2 py-0.5 rounded border border-[#ff3366]/30">
                    Obra Destacada 2024
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5 font-display">
                    Resonancia del Fuego Nocturno
                  </h3>
                  <p className="text-xs text-zinc-300">
                    Óleo y pigmentos sobre lino belga • 180 x 140 cm
                  </p>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/15">
                    <span className="text-xs font-semibold text-emerald-400">
                      ● Original Disponible
                    </span>
                    <button
                      onClick={() => onOpenInquiry({ title: "Resonancia del Fuego Nocturno", id: "obra-01", price: "$3,800 USD" })}
                      className="text-xs font-bold text-white hover:text-[#ff3366] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Solicitar Ficha Técnica</span>
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

