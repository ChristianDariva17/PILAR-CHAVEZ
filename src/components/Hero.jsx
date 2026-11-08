import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Eye, ShieldCheck, Sparkles, MapPin, Palette } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function Hero({ onOpenInquiry, onSelectArtwork }) {
  const shouldReduceMotion = useReducedMotion();

  const featuredArtwork = {
    title: "Yanapuma (Jaguar Negro Protector)",
    dimensions: "30 x 40 cm",
    price: "S/. 150",
    technique: "Acrílico sobre lienzo con patrones Kené",
    image: "/obras/yanapuma.jpg",
    id: "obra-01"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headlines & Curatorial Statement */}
          <motion.div 
            className="lg:col-span-7 space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs tracking-widest uppercase text-zinc-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-700"></span>
              <span>Estudio Oficial • Pucallpa (Ucayali)</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase font-display leading-[0.95] text-zinc-950">
              EL ALMA <br />
              <span className="font-serif-art italic font-normal text-emerald-950 lowercase">
                Amazónica
              </span> <br />
              EN EL LIENZO.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-xl text-zinc-700 font-normal max-w-xl leading-relaxed">
              Extensión digital de la obra de <span className="font-semibold text-zinc-900">{artistInfo.fullName}</span> ({artistInfo.artisticName}). 
              Un diálogo contemporáneo entre la exuberancia viva de Ucayali, el acrílico sobre lienzo y el rigor académico profesional.
            </motion.p>

            <motion.blockquote variants={itemVariants} className="border-l-2 border-zinc-950 pl-4 py-1.5 italic text-sm sm:text-base text-zinc-700 font-serif-art max-w-lg bg-zinc-100/60 rounded-r-lg">
              "{artistInfo.manifestoQuote}"
            </motion.blockquote>

            {/* CTAs with Mobile Full-Width Responsive Hierarchy */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#portafolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-xl active:scale-98"
              >
                <span>Explorar Obras Originales</span>
                <Eye className="w-4 h-4 text-zinc-300" />
              </a>

              <a
                href="#comisiones"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-xs active:scale-98"
              >
                <span>Encargar Obra a Medida</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-800" />
              </a>

              <a
                href="#el-artista"
                className="text-center sm:text-left inline-flex items-center justify-center gap-2 text-zinc-600 hover:text-zinc-950 font-medium text-xs uppercase tracking-wider px-3 py-2 transition-colors"
              >
                <span>Biografía & Trayectoria</span>
              </a>
            </motion.div>

            {/* Real Social Proof / Metrics */}
            <motion.div variants={itemVariants} className="pt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-zinc-200 max-w-lg">
              <div>
                <p className="text-lg sm:text-2xl font-bold font-display text-zinc-950">Pucallpa</p>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 font-mono">Ucayali — Perú</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold font-display text-zinc-950">Bellas Artes</p>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 font-mono">Artista Profesional</p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-bold font-display text-zinc-950">100%</p>
                <p className="text-[10px] sm:text-[11px] text-zinc-500 font-mono">Originales en Lienzo</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Artwork Feature (Pristine Museum Display) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Fine Art Gallery Mount */}
              <div className="rounded-2xl bg-white p-4 sm:p-5 border border-zinc-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                
                <div className="relative overflow-hidden rounded-xl bg-zinc-100 aspect-[4/5] shadow-inner">
                  <img
                    src={featuredArtwork.image}
                    alt={featuredArtwork.title}
                    width="600"
                    height="750"
                    className="w-full h-full object-cover object-center transition duration-700"
                  />

                  {/* Clean badge */}
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-800 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-200 shadow-xs">
                      Obra Disponible
                    </span>
                    <span className="text-[10px] font-mono text-zinc-700 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md border border-zinc-200">
                      Kené
                    </span>
                  </div>
                </div>

                {/* Artwork Card Info */}
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
                      CAT. Nº 001/09
                    </span>
                    <span className="font-mono text-xs">{featuredArtwork.dimensions}</span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 font-display">
                    {featuredArtwork.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-600 font-light">
                    {featuredArtwork.technique} • Lienzo sobre bastidor de madera
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100 mt-2">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-mono">Inversión</span>
                      <span className="text-xl font-black font-mono text-zinc-950">{featuredArtwork.price} PEN</span>
                    </div>

                    <button
                      onClick={() => onOpenInquiry(featuredArtwork)}
                      className="text-xs font-bold uppercase tracking-wider bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Consultar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
