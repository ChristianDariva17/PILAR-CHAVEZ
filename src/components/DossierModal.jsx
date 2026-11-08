import React from 'react';
import { X, Printer, Download, Award, MapPin, GraduationCap } from 'lucide-react';
import { artistInfo, cvData, artworksData } from '../data/content';

export default function DossierModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:fixed print:inset-0">
      <div 
        className="relative w-full max-w-4xl bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto print:bg-white print:text-black print:border-none print:shadow-none print:p-8 animate-in fade-in zoom-in-95 duration-200 text-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions (hidden on print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 print:hidden">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
              Dossier Curatorial Oficial
            </span>
            <h3 className="text-xl font-serif font-bold text-zinc-900 mt-1">
              Currículum Artístico & Registro de Trayectoria
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar en PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-900 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dossier Printable Document Content */}
        <div className="space-y-8 print:space-y-6 text-zinc-700 print:text-zinc-900 text-xs">
          
          {/* Header */}
          <div className="border-b border-zinc-200 print:border-black/20 pb-6">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 print:text-black tracking-tight">
              {artistInfo.fullName}
            </h1>
            <p className="text-sm font-semibold text-zinc-800 print:text-zinc-800 mt-1">
              {artistInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4 text-[11px] text-zinc-500 print:text-zinc-600 mt-2">
              <span>● {artistInfo.origin}</span>
              <span>● {artistInfo.bio.academicStatus}</span>
              <span>● Contacto: {artistInfo.contact.email}</span>
            </div>
          </div>

          {/* Statement extract */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-900 print:text-black border-b border-zinc-200 pb-1">
              Declaración Artística (Resumen Curatorial)
            </h2>
            <p className="italic text-zinc-800 print:text-zinc-800 leading-relaxed font-serif text-sm">
              "{artistInfo.statement.lead}"
            </p>
            <p className="leading-relaxed">
              {artistInfo.statement.paragraphs[0]}
            </p>
          </div>

          {/* Formación & Perfil */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-900 print:text-black border-b border-zinc-200 pb-1">
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
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 print:text-black pb-1 border-b border-zinc-200 print:border-zinc-300">
                Exposiciones Individuales
              </h3>
              <ul className="space-y-2">
                {cvData.soloExhibitions.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-mono text-zinc-900 print:text-zinc-900 font-bold">{item.year}</span>
                    <div>
                      <span className="font-semibold text-zinc-900 print:text-black block">"{item.title}"</span>
                      <span className="text-zinc-500 print:text-zinc-600 text-[11px]">{item.gallery} • {item.city}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group Exhibitions */}
            <div className="space-y-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 print:text-black pb-1 border-b border-zinc-200 print:border-zinc-300">
                Exposiciones Colectivas & Salones
              </h3>
              <ul className="space-y-2">
                {cvData.groupExhibitions.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="font-mono text-zinc-700 print:text-zinc-700 font-bold">{item.year}</span>
                    <div>
                      <span className="font-semibold text-zinc-900 print:text-black block">{item.title}</span>
                      <span className="text-zinc-500 print:text-zinc-600 text-[11px]">{item.gallery} • {item.city}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Premios, Muralismo & Pintura Rápida */}
          <div className="space-y-2 pt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 print:text-black pb-1 border-b border-zinc-200 print:border-zinc-300">
              Distinciones, Concursos de Pintura Rápida & Muralismo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cvData.awardsAndResidencies.map((award, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#faf9f5] print:bg-zinc-100 border border-zinc-200 print:border-zinc-300">
                  <span className="font-mono text-[10px] text-zinc-800 print:text-zinc-800 font-bold">{award.year}</span>
                  <p className="font-semibold text-zinc-900 print:text-black text-[11px]">{award.title}</p>
                  <p className="text-zinc-500 print:text-zinc-600 text-[10px]">{award.entity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Obras Representativas en Catálogo */}
          <div className="space-y-2 pt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 print:text-black pb-1 border-b border-zinc-200 print:border-zinc-300">
              Muestra de Cuerpo de Obra en Colección & Catálogo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {artworksData.slice(0, 3).map((art) => (
                <div key={art.id} className="p-2.5 rounded-lg bg-[#faf9f5] print:bg-zinc-50 border border-zinc-200 print:border-zinc-200 text-[10px]">
                  <p className="font-bold text-zinc-900 print:text-black">{art.title} ({art.year})</p>
                  <p className="text-zinc-500 print:text-zinc-600">{art.technique}</p>
                  <p className="font-mono text-zinc-800 print:text-zinc-700 mt-1">{art.dimensions}</p>
                  <span className="text-zinc-900 print:text-zinc-900 font-semibold">{art.statusLabel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer of Dossier */}
          <div className="pt-6 border-t border-zinc-200 print:border-zinc-300 flex items-center justify-between text-[10px] text-zinc-500">
            <p>Dossier emitido por el Estudio de Elena del Pilar Chávez Gutiérrez • Pucallpa (Ucayali), Perú</p>
            <p className="font-mono">Documento Curatorial Oficial</p>
          </div>

        </div>

      </div>
    </div>
  );
}

