import React, { useState } from 'react';
import { Mail, Sparkles, Check, Lock, ShieldCheck, ArrowRight, BellRing } from 'lucide-react';

export default function CollectorNewsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState('ambos');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    // Simulate saving lead in local collector list
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
    <section id="newsletter" className="py-24 bg-[#0a0a0c] relative border-t border-white/5 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff3366]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#15161a] to-[#101114] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          {/* Subtle top pill */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3366]/10 border border-[#ff3366]/30 text-xs font-bold uppercase tracking-widest text-[#ff3366]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pilar 3: Club Privado de Coleccionistas & Audiencia Directa</span>
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-display tracking-tight text-white">
              Acceso Exclusivo a Nuevas Obras & Preventas
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Sin intermediarios ni algoritmos de redes sociales. Sé de los primeros en acceder a las series pictóricas antes de que salgan a la venta pública o se presenten en ferias internacionales.
            </p>
          </div>

          {/* Pillars of value */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 max-w-3xl mx-auto border-y border-white/10 py-8">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-[#ff3366]">01 / PREVENTA 48H</span>
              <p className="text-xs font-semibold text-white">Catálogo Prioritario</p>
              <p className="text-[11px] text-zinc-400">Acceso preferencial para reservar piezas antes del anuncio en Instagram o prensa.</p>
            </div>
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-amber-400">02 / VISITAS VIP</span>
              <p className="text-xs font-semibold text-white">Open Studio Days</p>
              <p className="text-[11px] text-zinc-400">Invitaciones privadas al estudio en Barranco para ver obras monumentales en proceso.</p>
            </div>
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-400">03 / INVITACIONES</span>
              <p className="text-xs font-semibold text-white">Inauguraciones & Ferias</p>
              <p className="text-[11px] text-zinc-400">Entradas de cortesía a bienales, ferias de arte y cócteles con curadores.</p>
            </div>
          </div>

          {/* Form / Submitted state */}
          {submitted ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                ¡Bienvenido/a al Círculo de Coleccionistas!
              </h3>
              <p className="text-xs text-zinc-300">
                Hemos registrado a <strong className="text-white">{email}</strong>. Te enviaremos a la brevedad el catálogo confidencial de obras disponibles del estudio.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-emerald-400 underline hover:text-emerald-300 font-mono mt-2 cursor-pointer"
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366] transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff3366] transition-colors"
                  required
                />
              </div>

              {/* Interest Selector */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/5 text-xs text-zinc-400">
                <span className="text-[11px] font-semibold text-zinc-300">Principal interés:</span>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="originales"
                      checked={interest === 'originales'}
                      onChange={() => setInterest('originales')}
                      className="accent-[#ff3366]"
                    />
                    <span>Piezas Originales</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="prints"
                      checked={interest === 'prints'}
                      onChange={() => setInterest('prints')}
                      className="accent-[#ff3366]"
                    />
                    <span>Prints & Ediciones</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="ambos"
                      checked={interest === 'ambos'}
                      onChange={() => setInterest('ambos')}
                      className="accent-[#ff3366]"
                    />
                    <span>Ambos / Talleres</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ff3366] hover:bg-[#ff1751] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#ff3366]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Unirme al Club de Coleccionistas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-zinc-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-zinc-400" />
                  Privacidad estricta, cero spam
                </span>
                <span>•</span>
                <span>Cancela tu suscripción en cualquier momento</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}

