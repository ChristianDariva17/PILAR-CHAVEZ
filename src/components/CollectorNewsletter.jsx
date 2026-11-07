import React, { useState } from 'react';
import { Mail, Sparkles, Check, Lock, ShieldCheck, ArrowRight, Download, Gift } from 'lucide-react';

export default function CollectorNewsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('originales');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    const collectorLead = {
      name,
      email,
      interest,
      registeredAt: new Date().toISOString(),
    };
    
    try {
      const existing = JSON.parse(localStorage.getItem('arte_pilar_collectors') || '[]');
      existing.push(collectorLead);
      localStorage.setItem('arte_pilar_collectors', JSON.stringify(existing));
    } catch (err) {
      console.warn("Storage error", err);
    }

    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="py-24 bg-[#06100a] relative border-t border-emerald-500/15 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#0b1c13] to-[#08140e] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          {/* Top pill */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest text-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Pilar 3: Club Privado de Coleccionistas & Audiencia Directa</span>
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-display tracking-tight text-white">
              Preventas Privadas & Acceso Exclusivo
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Sé el primero en ver las nuevas obras de Elena del Pilar antes de que se anuncien en redes sociales o se exhiban en galerías. Sin depender de algoritmos.
            </p>
          </div>

          {/* Pillars of value */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 max-w-3xl mx-auto border-y border-white/10 py-8">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400">01 / PREVENTA 48H</span>
              <p className="text-xs font-bold text-white">Catálogo Prioritario</p>
              <p className="text-[11px] text-zinc-400">Reserva de piezas originales a precio de lanzamiento antes de salir al público general.</p>
            </div>
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-amber-400">02 / VISITAS AL TALLER</span>
              <p className="text-xs font-bold text-white">Open Studio Pucallpa</p>
              <p className="text-[11px] text-zinc-400">Invitaciones exclusivas para ver lienzos en proceso y conversar directamente con la artista.</p>
            </div>
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-400">03 / REGALO DIGITAL</span>
              <p className="text-xs font-bold text-white">Wallpaper HD de Yanapuma</p>
              <p className="text-[11px] text-zinc-400">Descarga gratuita en alta definición para tu móvil o monitor al unirte al club.</p>
            </div>
          </div>

          {/* Form / Submitted state */}
          {submitted ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#082215] border border-emerald-500/40 text-center space-y-3 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                ¡Bienvenido/a al Círculo de Coleccionistas!
              </h3>
              <p className="text-xs text-zinc-300">
                Hemos registrado a <strong className="text-white">{email}</strong>. Ya tienes acceso preferente a las nuevas obras de Elena del Pilar.
              </p>
              
              <div className="pt-2">
                <a
                  href="/obras/yanapuma.jpg"
                  download="Yanapuma_Elena_Chavez_Wallpaper.jpg"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Wallpaper de Regalo</span>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-emerald-400 underline hover:text-emerald-300 font-mono block mx-auto pt-2 cursor-pointer"
              >
                Registrar otro contacto
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#06100a] border border-emerald-500/20 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#06100a] border border-emerald-500/20 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  required
                />
              </div>

              {/* Interest Selector */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#06100a] p-3 rounded-xl border border-emerald-500/10 text-xs text-zinc-400">
                <span className="text-[11px] font-semibold text-zinc-300">Principal interés:</span>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="originales"
                      checked={interest === 'originales'}
                      onChange={() => setInterest('originales')}
                      className="accent-emerald-500"
                    />
                    <span>Obras Originales</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="comisiones"
                      checked={interest === 'comisiones'}
                      onChange={() => setInterest('comisiones')}
                      className="accent-emerald-500"
                    />
                    <span>Encargos a Medida</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="workshops"
                      checked={interest === 'workshops'}
                      onChange={() => setInterest('workshops')}
                      className="accent-emerald-500"
                    />
                    <span>Talleres / Plein Air</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Unirme y Recibir Wallpaper de Regalo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-zinc-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-zinc-500" />
                  Privacidad estricta, cero spam
                </span>
                <span>•</span>
                <span>Cancela cuando quieras</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
