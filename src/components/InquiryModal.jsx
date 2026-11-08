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

  const cleanPhone = (artistInfo.contact.whatsapp || "+51990142825").replace(/[^0-9]/g, '');

  const whatsappMessage = encodeURIComponent(
    `Hola Elena, soy ${name || 'un coleccionista'}${city ? ` desde ${city}` : ''}.\nQuisiera consultar sobre: ${selectedItem?.title || 'obras en lienzo'}.\nMensaje: ${message}`
  );

  return (
    <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md" />
        <Dialog.Content
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] max-w-xl max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-white border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-zinc-900"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          restoreFocusRef.current?.focus();
          onClosed();
        }}
      >
        <Dialog.Close asChild>
        <button
          aria-label="Cerrar formulario de consulta"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
        </Dialog.Close>

        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
            Atención Directa del Estudio en Pucallpa
          </span>
          <Dialog.Title className="text-2xl font-serif font-bold text-zinc-900 mt-2">
            {selectedItem?.title ? `Consulta: ${selectedItem.title}` : 'Contacto con Elena del Pilar'}
          </Dialog.Title>
          <Dialog.Description className="text-xs text-zinc-500 mt-1">
            Ficha técnica, coordinación de pago por Yape / Transferencia y cotización de envío por Olva/Shalom.
          </Dialog.Description>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200 flex items-center justify-center mx-auto shadow-xs">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-serif font-bold text-zinc-900">
              Mensaje Enviado con Éxito
            </h4>
            <p className="text-xs text-zinc-600 max-w-md mx-auto">
              Gracias, <strong className="text-zinc-900 font-semibold">{name}</strong>. Elena del Pilar o el equipo de su taller se pondrán en contacto contigo en breve para coordinar los detalles.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${cleanPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Continuar por WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold border border-zinc-200"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Ej. Roberto Salgado"
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                  Tu Teléfono / WhatsApp *
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                  Ciudad de Envío (Perú / Exterior)
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ej. Lima, Arequipa, Pucallpa"
                  className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-zinc-700 uppercase tracking-wider block mb-1">
                Consulta o Detalle del Pedido
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#faf9f5] border border-zinc-200 rounded-xl p-3 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${cleanPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl bg-zinc-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enviar por WhatsApp Inmediato</span>
              </a>

              <button
                type="submit"
                className="px-5 py-3.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-zinc-200 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar al Correo</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-zinc-500">
              <Truck className="w-3.5 h-3.5 text-zinc-700" />
              <span>Envíos seguros desde Pucallpa con embalaje reforzado.</span>
            </div>
          </form>
        )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
