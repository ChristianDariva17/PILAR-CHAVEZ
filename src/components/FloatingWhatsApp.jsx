import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function FloatingWhatsApp({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPhone = (artistInfo.contact.whatsapp || "+51961000000").replace(/[^0-9]/g, '');

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Card Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white border border-zinc-200 rounded-2xl p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200 text-zinc-900">
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
                <p className="text-xs font-bold text-zinc-950 font-display">Estudio Arte Pilar</p>
                <p className="text-[10px] text-zinc-500 font-mono">● En línea para coleccionistas</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-900 p-1 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-zinc-600 space-y-2 font-light leading-relaxed">
            <p>
              ¡Hola! Si deseas consultar la disponibilidad de una obra original, cotizar un encargo a medida o coordinar una visita a nuestro taller en Pucallpa (Ucayali), conversemos directamente.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                "Hola Elena, visité el sitio oficial de Arte Pilar y me gustaría recibir información sobre tus obras en lienzo y catálogo disponible."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chatear por WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenInquiry(null);
              }}
              className="w-full py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[11px] font-semibold border border-zinc-200 transition-colors"
            >
              Enviar consulta formal al estudio
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-zinc-700"
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
