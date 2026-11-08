import React from 'react';
import { X, Printer, ShieldCheck, Award, CheckCircle2, FileText } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { artistInfo, artworksData } from '../data/content';

export default function CertificateModal({ artwork, open, onClose, onClosed, restoreFocusRef }) {
  // If no specific artwork is passed, default to Yanapuma for demonstration
  const item = artwork || artworksData[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md print:hidden" />
        <Dialog.Content
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] max-w-3xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-900 print:fixed print:inset-0 print:translate-x-0 print:translate-y-0 print:w-full print:max-w-none print:max-h-none print:rounded-none print:border-none print:shadow-none print:p-8"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            restoreFocusRef.current?.focus();
            onClosed();
          }}
        >
          {/* Top Actions (hidden on print) */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-200 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-800" />
                <span>Documento Oficial de Autoría</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir / PDF</span>
              </button>
              <Dialog.Close asChild>
                <button
                  aria-label="Cerrar certificado"
                  className="text-zinc-400 hover:text-zinc-900 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>
          </div>

          {/* Certificate Body (Museum & Fine Art Layout) */}
          <div className="border-[3px] border-zinc-900 p-6 sm:p-10 rounded-2xl relative bg-[#fdfcf9] shadow-inner space-y-8">
            
            {/* Header Stamp & Brand */}
            <div className="text-center space-y-2 border-b-2 border-zinc-900/80 pb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-zinc-900 bg-white mb-2 shadow-xs">
                <Award className="w-7 h-7 text-zinc-950" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-widest uppercase text-zinc-950">
                Certificado de Autenticidad
              </h2>
              <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-600">
                Estudio & Taller • {artistInfo.brandName} • Pucallpa (Ucayali), Perú
              </p>
              <p className="text-[10px] font-mono text-zinc-500">
                Registro de Autoría Nº: <strong className="text-zinc-950 font-bold">{item.catalogNumber ? `COA-${item.catalogNumber.replace(/[^0-9]/g, '')}-2024` : 'COA-001-2024'}</strong>
              </p>
            </div>

            {/* Declaration Text */}
            <div className="space-y-3 text-xs sm:text-sm text-zinc-800 leading-relaxed font-light">
              <p>
                Por medio del presente documento, la artista profesional certifica que la obra aquí descrita es una pieza <strong>original, única y de su exclusiva autoría e inventiva plástica</strong>, elaborada a mano con materiales de archivo y técnicas tradicionales de bellas artes.
              </p>
            </div>

            {/* Artwork Technical Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-white border border-zinc-300 text-xs shadow-xs">
              <div className="space-y-2">
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Título de la Obra:</span>
                  <span className="font-serif font-bold text-base text-zinc-950">{item.title}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Año de Creación:</span>
                  <span className="font-mono font-bold text-zinc-900">{item.year}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Técnica Utilizada:</span>
                  <span className="font-medium text-zinc-800">{item.technique}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Dimensiones del Bastidor:</span>
                  <span className="font-mono font-bold text-zinc-900">{item.dimensions}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Soporte & Materiales:</span>
                  <span className="font-medium text-zinc-800">{item.materials}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-zinc-500 block">Serie Curatorial:</span>
                  <span className="font-medium text-zinc-800">{item.series}</span>
                </div>
              </div>
            </div>

            {/* Rights & Conservation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[11px] text-zinc-600 border-t border-zinc-200 pt-5">
              <div className="space-y-1">
                <span className="font-bold text-zinc-900 uppercase block">Derechos de Autor:</span>
                <p className="leading-snug">
                  La adquisición transfiere la propiedad física de la obra original. Todos los derechos de reproducción, difusión editorial y derechos morales permanecen reservados a la artista conforme a la Ley de Derecho de Autor del Perú.
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-bold text-zinc-900 uppercase block">Recomendación de Conservación:</span>
                <p className="leading-snug">
                  Mantener en interiores evitando exposición directa y prolongada a la luz solar ultravioleta. Limpiar únicamente en seco con brocha suave de cerdas naturales.
                </p>
              </div>
            </div>

            {/* Signature & Seal Footer */}
            <div className="pt-8 border-t-2 border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <p className="font-serif italic text-lg font-bold text-zinc-950">
                  {artistInfo.fullName}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                  Firma de la Artista • Taller en Pucallpa
                </p>
              </div>

              {/* Museum Embossed Seal Simulation */}
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-zinc-400 flex flex-col items-center justify-center p-2 text-center text-zinc-500">
                <ShieldCheck className="w-5 h-5 text-zinc-700" />
                <span className="text-[8px] font-mono uppercase font-bold tracking-widest mt-1">Sello Oficial</span>
                <span className="text-[7px] font-mono text-zinc-400">ARTE PILAR</span>
              </div>

              <div className="text-center sm:text-right text-[10px] text-zinc-500 font-mono">
                <p>Fecha de emisión: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p>Pucallpa, Ucayali — Perú</p>
              </div>
            </div>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
