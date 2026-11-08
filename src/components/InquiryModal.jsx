import React, { useState } from 'react';
import { X, Send, Check, MessageCircle, ShieldCheck, Truck } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { artistInfo } from '../data/content';

export default function InquiryModal({ selectedItem, open, onClose, onClosed, restoreFocusRef }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState(
    selectedItem?.title
      ? `Hola Elena, quisiera consultar la compra de tu obra "${selectedItem.title}" (${selectedItem.dimensions || ''}).`
      : 'Hola Elena, me gustaría consultar la disponibilidad de tus obras originales o encargar una pieza a medida.'
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inquiryData = {
      name,
      email,
      phone,
      city,
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
    `Hola Elena, soy ${name || 'un coleccionista'}${city ? ` desde ${city}` : ''}.\nQuisiera consultar sobre: ${selectedItem?.title || 'obras en lienzo'}.\nMensaje: ${message}`
  );

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md" />
        <Dialog.Content
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-xl max-h-[calc(100dvh-2rem)] overflow-y-auto bg-[#08140e] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-100"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          restoreFocusRef.current?.focus();
          onClosed();
        }}
      >
        <Dialog.Close asChild>
        <button
          aria-label="Cerrar formulario de consulta"
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        </Dialog.Close>

        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-500/30">
            Atención Directa del Estudio en Pucallpa
          </span>
          <Dialog.Title className="text-2xl font-black text-white mt-2 font-display">
            {selectedItem?.title ? `Consulta: ${selectedItem.title}` : 'Contacto con Elena del Pilar'}
          </Dialog.Title>
          <Dialog.Description className="text-xs text-zinc-300 mt-1">
            Ficha técnica, coordinación de pago por Yape / Transferencia y cotización de envío por Olva/Shalom.
          </Dialog.Description>
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
              Gracias, <strong className="text-white">{name}</strong>. Elena del Pilar o el equipo de su taller se pondrán en contacto contigo en breve para coordinar los detalles.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/51961000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
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
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Roberto Salgado"
                  className="w-full bg-[#050b07] border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Tu Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+51 987 654 321"
                  className="w-full bg-[#050b07] border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-[#050b07] border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                  Ciudad de Envío (Perú / Exterior)
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ej. Lima, Arequipa, Pucallpa"
                  className="w-full bg-[#050b07] border border-emerald-500/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider block mb-1">
                Consulta o Detalle del Pedido
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#050b07] border border-emerald-500/20 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/51961000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enviar por WhatsApp Inmediato</span>
              </a>

              <button
                type="submit"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar al Correo</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-zinc-400">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Envíos seguros desde Pucallpa con embalaje reforzado.</span>
            </div>
          </form>
        )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
