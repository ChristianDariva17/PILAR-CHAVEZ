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
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md" />
        <Dialog.Content
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100dvh-2rem)] overflow-y-auto bg-[#08140e] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-100"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          restoreFocusRef.current?.focus();
          onClosed();
        }}
      >
        <Dialog.Close asChild>
        <button
          aria-label="Cerrar inscripción al taller"
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        </Dialog.Close>

        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
            Reserva de Cupo Oficial
          </span>
          <Dialog.Title className="text-2xl font-black text-white mt-2 font-display">
            {workshop.title}
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            Formulario de pre-reserva y detalles del taller seleccionado.
          </Dialog.Description>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-emerald-500/20 text-xs text-zinc-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{workshop.dates}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-400" />
              <span>{workshop.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>{workshop.seatsAvailable} cupos disponibles</span>
            </div>
          </div>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white font-display">
              Pre-Reserva Registrada
            </h4>
            <p className="text-xs text-zinc-300 max-w-md mx-auto">
              Hemos apartado temporalmente tu cupo para <strong className="text-white">{workshop.title}</strong>. Te enviamos la confirmación e instrucciones de pago a <strong className="text-white">{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Finalizar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-black/40 border border-emerald-500/20 space-y-2 text-xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Temario y Contenidos de la Experiencia:
              </p>
              <ul className="space-y-1 text-zinc-300">
                {workshop.syllabus.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400 font-bold">●</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Sofía Mendoza"
                  className="w-full bg-black/40 border border-emerald-500/25 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Tu Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-black/40 border border-emerald-500/25 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  WhatsApp de Contacto *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+51 999 000 111"
                  className="w-full bg-black/40 border border-emerald-500/25 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Nivel de Experiencia Previa
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-[#050e09] border border-emerald-500/25 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                >
                  <option value="principiante">Principiante / Sin experiencia previa</option>
                  <option value="intermedio">Intermedio / Estudiante de arte o diseño</option>
                  <option value="avanzado">Avanzado / Artista en ejercicio</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-emerald-500/20">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Inversión Total</span>
                <span className="text-xl font-bold font-mono text-emerald-400">{workshop.price}</span>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/25"
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
