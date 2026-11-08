import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, Check, MessageCircle } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { artistInfo, openStudioInfo } from '../data/content';

export default function StudioVisitModal({ open, onClose, onClosed, restoreFocusRef }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [visitors, setVisitors] = useState('1');
  const [interest, setInterest] = useState('coleccionista');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const cleanPhone = (artistInfo.contact.whatsapp || "+51990142825").replace(/[^0-9]/g, '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const visitData = {
      name,
      phone,
      email,
      date,
      timeSlot,
      visitors,
      interest,
      notes,
      createdAt: new Date().toISOString()
    };

    try {
      const list = JSON.parse(localStorage.getItem('arte_pilar_studio_visits') || '[]');
      list.push(visitData);
      localStorage.setItem('arte_pilar_studio_visits', JSON.stringify(list));
    } catch (err) {
      console.warn("Storage warning", err);
    }

    setConfirmed(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Elena, quisiera agendar una visita al taller en Pucallpa (Open Studio).\nNombre: ${name}\nFecha preferida: ${date || 'Próximos días'} (${timeSlot})\nAsistentes: ${visitors} persona(s)\nInterés: ${interest}`
  );

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md" />
        <Dialog.Content
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] max-w-2xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-white border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-900"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            restoreFocusRef.current?.focus();
            onClosed();
          }}
        >
          <Dialog.Close asChild>
            <button
              aria-label="Cerrar ventana de visita al taller"
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </Dialog.Close>

          <div className="mb-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
              Open Studio • Pucallpa, Ucayali
            </span>
            <Dialog.Title className="text-2xl font-serif font-bold text-zinc-950 mt-2">
              Agendar Visita Guiada al Taller
            </Dialog.Title>
            <Dialog.Description className="text-xs text-zinc-600 mt-1">
              {openStudioInfo.lead}
            </Dialog.Description>
          </div>

          {confirmed ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center mx-auto shadow-xs">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif font-bold text-zinc-950">
                Solicitud de Visita Registrada
              </h4>
              <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed">
                Gracias, <strong className="text-zinc-950">{name}</strong>. Elena del Pilar coordinará la confirmación de horario para tu visita al taller en Pucallpa.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${cleanPhone}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Coordinar de Inmediato por WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold border border-zinc-200"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Studio Info Snippet */}
              <div className="p-4 rounded-xl bg-[#faf9f5] border border-zinc-200/80 space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/60 pb-2">
                  <div className="flex items-center gap-1.5 text-zinc-900 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-zinc-800 shrink-0" />
                    <span>{openStudioInfo.location}</span>
                  </div>
                  <span className="font-mono text-zinc-600 text-[11px]">{openStudioInfo.duration}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-zinc-700 pt-1">
                  {openStudioInfo.includes.map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-zinc-900 font-bold">✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Martín Vargas"
                    className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+51 987 654 321"
                    className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                    Fecha Sugerida
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                    Turno Preferido
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                  >
                    <option value="10:00 AM">Mañana (10:00 AM)</option>
                    <option value="3:30 PM">Tarde (3:30 PM)</option>
                    <option value="Por coordinar">Por coordinar</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                    Nº de Personas
                  </label>
                  <select
                    value={visitors}
                    onChange={(e) => setVisitors(e.target.value)}
                    className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3-4">Grupo (3 a 4)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                  Interés Principal de la Visita
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                >
                  <option value="coleccionista">Coleccionista (Adquisición o encargo de obra)</option>
                  <option value="curador">Curaduría, Prensa o Gestión Cultural</option>
                  <option value="turista">Turismo Cultural y Amante de la Amazonía</option>
                  <option value="estudiante">Estudiante de Bellas Artes / Diseño</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-200">
                <span className="text-[11px] text-zinc-500 font-mono">
                  {openStudioInfo.price}
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-zinc-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Confirmar Solicitud</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

