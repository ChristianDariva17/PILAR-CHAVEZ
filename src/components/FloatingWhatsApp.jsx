import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function FloatingWhatsApp({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPhone = (artistInfo.contact.whatsapp || "+51990142825").replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Floating Card Popup */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200 text-zinc-900">
          <div className="flex items-center justify-between pb-3.5 border-b border-zinc-100">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={artistInfo.bio.avatar}
                  alt={artistInfo.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-200 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-600 border-2 border-white"></span>
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-950 font-display">Estudio Pilar Chávez</p>
                <p className="text-[10px] text-zinc-500 font-mono">● En línea para coleccionistas</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-900 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Cerrar ventana de contacto"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs sm:text-[13px] text-zinc-700 space-y-2 leading-relaxed">
            <p>
              ¡Hola! Si deseas consultar la disponibilidad de una obra original, cotizar un encargo a medida o coordinar una visita a nuestro taller en Pucallpa (Ucayali), conversemos directamente.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                "Hola Elena, visité el sitio oficial de Pilar Chávez y me gustaría recibir información sobre tus obras en lienzo y catálogo disponible."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chatear por WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenInquiry(null);
              }}
              className="w-full py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold border border-zinc-200 transition-colors active:scale-98 cursor-pointer"
            >
              Enviar consulta formal al estudio
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-zinc-700 min-h-[48px]"
        aria-label="Atención para coleccionistas vía WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400" />
        <span className="text-xs font-bold tracking-wide uppercase font-mono">
          Estudio
        </span>
      </button>
    </div>
  );
}
