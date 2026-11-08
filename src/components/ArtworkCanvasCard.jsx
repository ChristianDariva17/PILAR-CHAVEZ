import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ZoomIn, Eye, ArrowUpRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export default function ArtworkCanvasCard({ artwork, onSelectArtwork, onOpenInquiry, index = 0 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt motion values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for buttery 60fps physics
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Tilt angles: -10 to +10 degrees
  const rotateX = useTransform(smoothY, [0, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 1], [-8, 8]);

  // Dynamic glare positioning
  const glareX = useTransform(smoothX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothY, [0, 1], [0, 100]);

  // Shadow displacement reacting to light
  const shadowX = useTransform(smoothX, [0, 1], [-12, 12]);
  const shadowY = useTransform(smoothY, [0, 1], [-12, 12]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const isMonumental = artwork.scaleType === 'monumental';
  const isMedium = artwork.scaleType === 'medium';

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`relative group ${
        isMonumental ? 'col-span-1 md:col-span-2 lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* 3D Perspective Container */}
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
        className="w-full h-full"
      >
        <motion.div
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: 'preserve-3d',
          }}
          className={`relative h-full rounded-2xl bg-[#08140e] border border-emerald-500/25 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl ${
            isMonumental ? 'p-5 sm:p-7' : 'p-4 sm:p-5'
          } ${
            isHovered ? 'border-emerald-400/60 shadow-[0_30px_70px_rgba(0,0,0,0.85)]' : ''
          }`}
        >
          {/* Subtle Canvas Stretcher Depth Border (Relieve de Bastidor de Madera) */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-white/[0.04] z-20" />

          {/* Top Curatorial Bar */}
          <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold text-emerald-400 tracking-wider">
                {artwork.catalogNumber || `CAT. Nº 0${index + 1}/09`}
              </span>
              <span className="w-1 h-1 rounded-full bg-emerald-500/50"></span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                {artwork.dimensions}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {isMonumental && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Gran Formato
                </span>
              )}
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                Original
              </span>
            </div>
          </div>

          {/* Main Layout: Split for Monumental, Stacked for Normal */}
          <div className={`${isMonumental ? 'grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1' : 'flex flex-col flex-1'}`}>
            
            {/* Artwork Canvas Image */}
            <div className={`${isMonumental ? 'md:col-span-7' : 'w-full'}`}>
              <button
                type="button"
                onClick={() => onSelectArtwork(artwork)}
                aria-label={`Ver ficha y textura de ${artwork.title}`}
                className={`relative block w-full rounded-xl overflow-hidden cursor-pointer group/canvas bg-zinc-950 shadow-inner ${
                  isMonumental
                    ? 'aspect-[16/11]'
                    : isMedium
                    ? 'aspect-[4/5]'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover/canvas:scale-105 transition-transform duration-700"
                />

                {/* Glare Light Effect (Reflejo satinado en barniz de lienzo) */}
                <motion.div
                  style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.16) 0%, transparent 65%)`,
                  }}
                  className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/canvas:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center z-20">
                  <span className="text-xs uppercase tracking-wider font-bold bg-emerald-500 text-zinc-950 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xl">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Inspeccionar Lienzo & Textura</span>
                  </span>
                  <p className="text-[11px] text-zinc-300 line-clamp-2 px-2 max-w-xs">
                    "{artwork.description}"
                  </p>
                </div>
              </button>
            </div>

            {/* Artwork Info & Curatorial Notes */}
            <div className={`${isMonumental ? 'md:col-span-5 flex flex-col justify-between h-full pt-4 md:pt-0' : 'pt-4 flex-1 flex flex-col justify-between'}`}>
              <div>
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">{artwork.categoryLabel}</span>
                  <span className="font-mono text-xs text-zinc-500">{artwork.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight leading-snug">
                  <button
                    type="button"
                    onClick={() => onSelectArtwork(artwork)}
                    className="text-left hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {artwork.title}
                  </button>
                </h3>

                <p className="text-xs text-zinc-300 mt-2 font-serif-art italic line-clamp-2">
                  "{artwork.description}"
                </p>

                {/* Ficha técnica compacta */}
                <div className="mt-3.5 space-y-1.5 text-xs border-t border-emerald-500/15 pt-3">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Técnica:</span>
                    <span className="text-zinc-200 font-medium">{artwork.technique}</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Soporte:</span>
                    <span className="text-zinc-300 text-[11px] truncate max-w-[200px]" title={artwork.materials}>
                      Lienzo en Bastidor
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span>Medidas:</span>
                    <span className="text-emerald-400 font-mono font-bold">{artwork.dimensions}</span>
                  </div>
                </div>
              </div>

              {/* Price & Purchase Actions */}
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-mono">
                    Pieza Original Única
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black font-mono text-white">{artwork.price}</span>
                    <span className="text-[10px] font-mono text-zinc-400">PEN</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectArtwork(artwork)}
                    className="text-xs font-semibold text-emerald-300 hover:text-white p-2.5 rounded-xl hover:bg-emerald-950/80 transition-colors flex items-center gap-1.5 border border-emerald-500/25 cursor-pointer"
                    title="Ver en la pared y detalles de autor"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline text-[11px]">En pared</span>
                  </button>

                  <button
                    onClick={() => onOpenInquiry(artwork)}
                    className="text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/20"
                  >
                    <span>Adquirir</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
