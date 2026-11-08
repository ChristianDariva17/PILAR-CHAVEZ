import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ZoomIn, Eye, ArrowUpRight, Layers } from 'lucide-react';

export default function ArtworkCanvasCard({ artwork, onSelectArtwork, onOpenInquiry, index = 0 }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Mouse tilt motion values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth springs for 60fps physics
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle tilt angles: -6 to +6 degrees (restrained & elegant)
  const rotateX = useTransform(smoothY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothX, [0, 1], [-6, 6]);

  // Glare positioning
  const glareX = useTransform(smoothX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothY, [0, 1], [0, 100]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    // Skip 3D tilt calculations on touch screens to save GPU battery & prevent scroll jitter
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover)').matches) return;
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

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.6,
        delay: shouldReduceMotion ? 0 : (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="col-span-1 w-full"
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
          className={`relative h-full rounded-2xl bg-white border border-zinc-200/90 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 sm:p-6 active:scale-[0.99] sm:active:scale-100 ${
            isHovered ? 'border-zinc-400 shadow-[0_22px_50px_rgba(0,0,0,0.1)]' : ''
          }`}
        >
          {/* Top Curatorial Bar */}
          <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-zinc-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold text-zinc-900 tracking-wider">
                {artwork.catalogNumber || `CAT. Nº 0${index + 1}/09`}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
              <span className="text-[11px] font-mono text-zinc-500">
                {artwork.year}
              </span>
            </div>

            {artwork.status === 'coleccion-privada' ? (
              <span className="text-[10px] font-mono font-medium text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 shadow-xs">
                {artwork.statusLabel}
              </span>
            ) : (
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/70">
                {artwork.dimensions}
              </span>
            )}
          </div>

          {/* Artwork Canvas Image */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => onSelectArtwork(artwork)}
              aria-label={`Ver ficha y textura de ${artwork.title}`}
              className="relative block w-full rounded-xl overflow-hidden cursor-pointer group/canvas bg-zinc-100 aspect-[4/3] shadow-inner"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover/canvas:scale-104 transition-transform duration-700"
              />

              {/* Glare Light Effect */}
              <motion.div
                style={{
                  background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
                }}
                className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/canvas:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center z-20">
                <span className="text-xs uppercase tracking-wider font-bold bg-white text-zinc-950 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xl">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Inspeccionar Obra</span>
                </span>
                <span className="text-[11px] text-white/90 font-mono">
                  {artwork.dimensions}
                </span>
              </div>
            </button>
          </div>

          {/* Artwork Info & Typography */}
          <div className="pt-4 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-zinc-600 block mb-1">
                {artwork.categoryLabel}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-serif-art text-zinc-950 tracking-tight leading-snug">
                <button
                  type="button"
                  onClick={() => onSelectArtwork(artwork)}
                  className="text-left hover:text-emerald-900 transition-colors cursor-pointer"
                >
                  {artwork.title}
                </button>
              </h3>

              <p className="text-xs text-zinc-600 mt-2 font-light line-clamp-2 leading-relaxed">
                {artwork.description}
              </p>

              {/* Ficha técnica compacta */}
              <div className="mt-3.5 space-y-1.5 text-xs border-t border-zinc-100 pt-3">
                <div className="flex justify-between items-center text-zinc-500">
                  <span>Técnica:</span>
                  <span className="text-zinc-800 font-medium">{artwork.technique}</span>
                </div>
                <div className="flex justify-between items-center text-zinc-500">
                  <span>Soporte:</span>
                  <span className="text-zinc-700 text-[11px]">Lienzo en Bastidor</span>
                </div>
              </div>
            </div>

            {/* Price & Purchase Actions */}
            <div className="mt-5 pt-3.5 border-t border-zinc-100 flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-mono">
                  Original
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black font-mono text-zinc-950">{artwork.price}</span>
                  <span className="text-[10px] font-mono text-zinc-500">PEN</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectArtwork(artwork)}
                  className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 p-2.5 rounded-xl hover:bg-zinc-100 transition-colors flex items-center gap-1.5 border border-zinc-200 cursor-pointer"
                  title="Ver en la pared y ficha completa"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">Pared</span>
                </button>

                {artwork.status === 'coleccion-privada' ? (
                  <button
                    onClick={() => onOpenInquiry({ ...artwork, isCommissionSimilar: true, title: `Encargo similar a ${artwork.title}` })}
                    className="text-xs font-bold uppercase tracking-wider bg-zinc-100 hover:bg-zinc-200 text-zinc-800 px-3.5 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer border border-zinc-300"
                    title="Obra en colección privada. Puedes solicitar una pieza similar a medida."
                  >
                    <span>Pedir Similar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenInquiry(artwork)}
                    className="text-xs font-bold uppercase tracking-wider bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>Adquirir</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </motion.div>
  );
}
