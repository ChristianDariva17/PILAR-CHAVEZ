import React, { useState } from 'react';
import { X, Send, Check, MessageCircle, ShieldCheck } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function InquiryModal({ selectedItem, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [collectorType, setCollectorType] = useState('coleccionista');
  const [message, setMessage] = useState(
    selectedItem?.title
      ? `Hola Pilar, quisiera consultar la disponibilidad, ficha técnica y condiciones de envío para "${selectedItem.title}".`
      : 'Hola Pilar, me gustaría ponerme en contacto con el estudio para conocer más sobre tus obras y disponibilidad.'
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inquiryData = {
      name,
      email,
      phone,
      collectorType,
      item: selectedItem?.title || 'Consulta General',
      message,
      date: new Date().toISOString()
    };
    
    try {
      const list = JSON.parse(localStorage.getItem('arte_pilar_inquiries') || '[]');
      list.push(inquiryData);
      localStorage.setItem('arte_pilar_inquiries', JSON.stringify(list));
    } catch (err) {
      console.warn("Storage warning", err);
    }

    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Pilar, soy ${name || 'un coleccionista'}. Quisiera consultar sobre: ${selectedItem?.title || 'obras del catálogo'}.\nMensaje: ${message}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-[#131417] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
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
            Atención Directa para Coleccionistas
          </span>
          <h3 className="text-2xl font-black text-white mt-2 font-display">
            {selectedItem?.title ? `Consulta: ${selectedItem.title}` : 'Contacto con el Estudio'}
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            Ficha técnica, dossier de procedencia, cotización confidencial o agendamiento de cita.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-white font-display">
              Mensaje Enviado con Éxito
            </h4>
            <p className="text-xs text-zinc-300 max-w-md mx-auto">
              Gracias, <strong className="text-white">{name}</strong>. El equipo curatorial del estudio de Pilar revisará tu solicitud y se pondrá en contacto contigo en menos de 24 horas.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/51987654321?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continuar por WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Roberto Salgado"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Email *
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
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+51 987 654 321"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366]"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Perfil del Solicitante
                </label>
                <select
                  value={collectorType}
                  onChange={(e) => setCollectorType(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#ff3366]"
                >
                  <option value="coleccionista">Coleccionista Particular</option>
                  <option value="galeria">Galería / Curador</option>
                  <option value="arquitecto">Arquitecto / Diseñador de Interiores</option>
                  <option value="institucion">Institución o Empresa</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                Detalle de la Consulta / Requerimiento
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 py-3.5 rounded-xl bg-[#ff3366] hover:bg-[#ff1751] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#ff3366]/20"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta Formal</span>
              </button>

              <a
                href={`https://wa.me/51987654321?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat Directo</span>
              </a>
            </div>

            <p className="text-[10px] text-zinc-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Gestión confidencial. Ficha curatorial y cotización enviada por canal seguro.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

