import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function FloatingWhatsApp({ onOpenInquiry }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Card Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#16171b] border border-white/15 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src={artistInfo.bio.avatar}
                  alt={artistInfo.name}
                  className="w-9 h-9 rounded-full object-cover border border-white/20"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#16171b]"></span>
              </div>
              <div>
                <p className="text-xs font-bold text-white font-display">Estudio Arte Pilar</p>
                <p className="text-[10px] text-emerald-400">● En línea para coleccionistas</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-zinc-300 space-y-2">
            <p>
              ¡Hola! Si deseas consultar la disponibilidad de una obra, cotizar un encargo o agendar una visita al taller en Barranco, escríbenos directamente.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/51987654321?text=${encodeURIComponent(
                "Hola Pilar, visité tu sitio web y me gustaría recibir información sobre tus obras disponibles y catálogo curatorial."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenInquiry(null);
              }}
              className="w-full py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-[11px] font-semibold border border-white/5 transition-colors"
            >
              Enviar correo formal al estudio
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="Atención para coleccionistas vía WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-wide uppercase font-sans">
          Coleccionistas
        </span>
      </button>
    </div>
  );
}

