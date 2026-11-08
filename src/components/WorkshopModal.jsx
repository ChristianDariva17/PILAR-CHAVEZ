import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, Check, ArrowRight, Shield } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export default function WorkshopModal({ workshop, open, onClose, onClosed, restoreFocusRef }) {
  if (!workshop) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('principiante');
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      workshopId: workshop.id,
      workshopTitle: workshop.title,
      name,
      email,
      phone,
      experience,
      date: new Date().toISOString()
    };
    try {
      const list = JSON.parse(localStorage.getItem('arte_pilar_workshop_bookings') || '[]');
      list.push(reservation);
      localStorage.setItem('arte_pilar_workshop_bookings', JSON.stringify(list));
    } catch (err) {
      console.warn("Storage warning", err);
    }
    setConfirmed(true);
  };

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md" />
        <Dialog.Content
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-900"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          restoreFocusRef.current?.focus();
          onClosed();
        }}
      >
        <Dialog.Close asChild>
        <button
          aria-label="Cerrar inscripción al taller"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        </Dialog.Close>

        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
            Reserva de Cupo Oficial
          </span>
          <Dialog.Title className="text-2xl font-serif font-bold text-zinc-900 mt-2">
            {workshop.title}
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Formulario de pre-reserva y detalles del taller seleccionado.
          </Dialog.Description>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-zinc-200 text-xs text-zinc-600">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-zinc-800" />
              <span>{workshop.dates}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{workshop.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-zinc-800" />
              <span>{workshop.seatsAvailable} cupos disponibles</span>
            </div>
          </div>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-serif font-bold text-zinc-900">
              Pre-Reserva Registrada
            </h4>
            <p className="text-xs text-zinc-600 max-w-md mx-auto">
              Hemos apartado temporalmente tu cupo para <strong className="text-zinc-900 font-semibold">{workshop.title}</strong>. Te enviamos la confirmación e instrucciones de pago a <strong className="text-zinc-900 font-semibold">{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-md"
            >
              Finalizar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-[#faf9f5] border border-zinc-200/80 space-y-2 text-xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-900">
                Temario y Contenidos de la Experiencia:
              </p>
              <ul className="space-y-1 text-zinc-700">
                {workshop.syllabus.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-zinc-800 font-bold">●</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
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
                  placeholder="Ej. Sofía Mendoza"
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                  Tu Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                  WhatsApp de Contacto *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+51 999 000 111"
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                  Nivel de Experiencia Previa
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                >
                  <option value="principiante">Principiante / Sin experiencia previa</option>
                  <option value="intermedio">Intermedio / Estudiante de arte o diseño</option>
                  <option value="avanzado">Avanzado / Artista en ejercicio</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-zinc-200">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-mono">Inversión Total</span>
                <span className="text-xl font-serif font-bold text-zinc-900">{workshop.price}</span>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Confirmar Pre-Reserva</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
