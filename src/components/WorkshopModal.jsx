import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, Check, ArrowRight, Shield } from 'lucide-react';

export default function WorkshopModal({ workshop, onClose }) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#131417] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff3366] bg-[#ff3366]/10 px-2.5 py-1 rounded-full border border-[#ff3366]/30">
            Reserva de Cupo Oficial
          </span>
          <h3 className="text-2xl font-black text-white mt-2 font-display">
            {workshop.title}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-xs text-zinc-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#ff3366]" />
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
              className="px-6 py-2.5 rounded-xl bg-[#ff3366] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Finalizar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Temario y Contenidos de la Experiencia:
              </p>
              <ul className="space-y-1 text-zinc-300">
                {workshop.syllabus.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#ff3366] font-bold">●</span>
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366]"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366]"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Nivel de Experiencia Previa
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff3366]"
                >
                  <option value="principiante">Principiante / Sin experiencia</option>
                  <option value="intermedio">Intermedio / Estudiante de arte o diseño</option>
                  <option value="avanzado">Avanzado / Artista en ejercicio</option>
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Inversión Total</span>
                <span className="text-xl font-bold font-mono text-white">{workshop.price}</span>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-[#ff3366] hover:bg-[#ff1751] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#ff3366]/25"
              >
                <span>Confirmar Pre-Reserva</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

