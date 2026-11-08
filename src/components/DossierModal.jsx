import React from 'react';
import { X, Printer, Download, Award, MapPin, GraduationCap, CheckCircle } from 'lucide-react';
import { artistInfo, cvData, artworksData } from '../data/content';

export default function DossierModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:fixed print:inset-0">
      <div 
        className="relative w-full max-w-4xl bg-[#08140e] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto print:bg-white print:text-black print:border-none print:shadow-none print:p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions (hidden on print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 print:hidden">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
              Dossier Curatorial Oficial
            </span>
            <h3 className="text-xl font-bold text-white mt-1 font-display">
              Currículum Artístico & Registro de Trayectoria
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar en PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Printable Document Content */}
        <div className="space-y-8 print:space-y-6 text-zinc-300 print:text-zinc-900 text-xs">
          
          {/* Header */}
          <div className="border-b border-white/10 print:border-black/20 pb-6">
            <h1 className="text-3xl sm:text-4xl font-black font-display text-white print:text-black tracking-tight uppercase">
              {artistInfo.fullName}
            </h1>
            <p className="text-sm font-semibold text-emerald-400 print:text-emerald-700 mt-1">
              {artistInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4 text-[11px] text-zinc-400 print:text-zinc-600 mt-2">
              <span>● {artistInfo.origin}</span>
              <span>● {artistInfo.bio.academicStatus}</span>
              <span>● Contacto: {artistInfo.contact.email}</span>
            </div>
          </div>

          {/* Statement extract */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-400 print:text-emerald-800 border-b border-emerald-500/20 pb-1">
              Declaración Artística (Resumen Curatorial)
            </h2>
            <p className="italic text-zinc-200 print:text-zinc-800 leading-relaxed font-serif-art text-sm">
              "{artistInfo.statement.lead}"
            </p>
            <p className="leading-relaxed">
              {artistInfo.statement.paragraphs[0]}
            </p>
          </div>

          {/* Formación & Perfil */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-emerald-400 print:text-emerald-800 border-b border-emerald-500/20 pb-1">
              Perfil & Formación Profesional
            </h2>
            <p className="leading-relaxed">
              {artistInfo.bio.biographyFull[2]} {artistInfo.bio.biographyFull[3]}
            </p>
          </div>

          {/* Exposiciones en dos columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Solo Exhibitions */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-white print:text-black pb-1 border-b border-white/10 print:border-zinc-300">
                Exposiciones Individuales
              </h3>
              <ul className="space-y-2">
                {cvData.soloExhibitions.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-mono text-emerald-400 print:text-emerald-700 font-bold">{item.year}</span>
                    <div>
                      <span className="font-semibold text-white print:text-black block">"{item.title}"</span>
                      <span className="text-zinc-400 print:text-zinc-600 text-[11px]">{item.gallery} • {item.city}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group Exhibitions */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-white print:text-black pb-1 border-b border-white/10 print:border-zinc-300">
                Exposiciones Colectivas & Salones
              </h3>
              <ul className="space-y-2">
                {cvData.groupExhibitions.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-mono text-amber-400 print:text-amber-700 font-bold">{item.year}</span>
                    <div>
                      <span className="font-semibold text-white print:text-black block">{item.title}</span>
                      <span className="text-zinc-400 print:text-zinc-600 text-[11px]">{item.gallery} • {item.city}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Premios, Muralismo & Pintura Rápida */}
          <div className="space-y-2 pt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-white print:text-black pb-1 border-b border-white/10 print:border-zinc-300">
              Distinciones, Concursos de Pintura Rápida & Muralismo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cvData.awardsAndResidencies.map((award, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] print:bg-zinc-100 border border-white/5 print:border-zinc-300">
                  <span className="font-mono text-[10px] text-emerald-400 print:text-emerald-700 font-bold">{award.year}</span>
                  <p className="font-semibold text-white print:text-black text-[11px]">{award.title}</p>
                  <p className="text-zinc-400 print:text-zinc-600 text-[10px]">{award.entity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Obras Representativas en Catálogo */}
          <div className="space-y-2 pt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-white print:text-black pb-1 border-b border-white/10 print:border-zinc-300">
              Muestra de Cuerpo de Obra en Colección & Catálogo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {artworksData.slice(0, 3).map((art) => (
                <div key={art.id} className="p-2 rounded-lg bg-white/[0.02] print:bg-zinc-50 border border-white/5 print:border-zinc-200 text-[10px]">
                  <p className="font-bold text-white print:text-black">{art.title} ({art.year})</p>
                  <p className="text-zinc-400 print:text-zinc-600">{art.technique}</p>
                  <p className="font-mono text-zinc-300 print:text-zinc-700 mt-1">{art.dimensions}</p>
                  <span className="text-emerald-400 print:text-emerald-700 font-semibold">{art.statusLabel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer of Dossier */}
          <div className="pt-6 border-t border-white/10 print:border-zinc-300 flex items-center justify-between text-[10px] text-zinc-500">
            <p>Dossier emitido por el Estudio de Elena del Pilar Chávez Gutiérrez • Pucallpa (Ucayali), Perú</p>
            <p className="font-mono">Documento Curatorial Oficial</p>
          </div>

        </div>

      </div>
    </div>
  );
}

