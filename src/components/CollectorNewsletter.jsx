import React, { useState } from 'react';
import { Mail, Sparkles, Check, Lock, ShieldCheck, ArrowRight, Download } from 'lucide-react';

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
    <section id="newsletter" className="py-24 bg-[#faf9f5] relative border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-zinc-200/90 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm relative">
          
          {/* Top pill */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono font-bold uppercase tracking-widest text-zinc-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Círculo Privado de Coleccionistas</span>
            </span>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase font-display tracking-tight text-zinc-950">
              Preventas Privadas & Acceso Exclusivo
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
              Sé el primero en conocer las nuevas obras originales de Elena del Pilar antes de su difusión pública en exposiciones o redes sociales.
            </p>
          </div>

          {/* Pillars of value */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 max-w-3xl mx-auto border-y border-zinc-100 py-8">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-zinc-950">01 / PREVENTA 48H</span>
              <p className="text-xs font-bold text-zinc-900">Catálogo Prioritario</p>
              <p className="text-[11px] text-zinc-500 font-light">Reserva de piezas originales a precio de taller antes del lanzamiento general.</p>
            </div>
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-zinc-950">02 / VISITAS AL ESTUDIO</span>
              <p className="text-xs font-bold text-zinc-900">Open Studio Pucallpa</p>
              <p className="text-[11px] text-zinc-500 font-light">Invitaciones exclusivas para ver lienzos en proceso y dialogar con la artista.</p>
            </div>
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs font-mono font-bold text-zinc-950">03 / REGALO DIGITAL</span>
              <p className="text-xs font-bold text-zinc-900">Fondo HD de Yanapuma</p>
              <p className="text-[11px] text-zinc-500 font-light">Descarga en alta definición para tu monitor o dispositivo al registrarte.</p>
            </div>
          </div>

          {/* Form / Submitted state */}
          {submitted ? (
            <div className="max-w-md mx-auto p-6 rounded-2xl bg-zinc-50 border border-zinc-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 font-display">
                ¡Bienvenido/a al Círculo de Coleccionistas!
              </h3>
              <p className="text-xs text-zinc-600">
                Hemos registrado a <strong className="text-zinc-950">{email}</strong>. Recibirás en tu correo los accesos prioritarios a las nuevas obras de Elena del Pilar.
              </p>
              
              <div className="pt-2">
                <a
                  href="/obras/yanapuma.jpg"
                  download="Yanapuma_Elena_Chavez_Wallpaper.jpg"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar Obra Digital en HD</span>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-zinc-600 underline hover:text-zinc-900 font-mono block mx-auto pt-2 cursor-pointer"
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
                  className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Tu correo electrónico *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-xs text-zinc-950 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                  required
                />
              </div>

              {/* Interest Selector */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-zinc-50 p-3 rounded-xl border border-zinc-200 text-xs text-zinc-600">
                <span className="text-[11px] font-semibold text-zinc-800">Interés preferente:</span>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="interest"
                      value="originales"
                      checked={interest === 'originales'}
                      onChange={() => setInterest('originales')}
                      className="accent-zinc-950"
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
                      className="accent-zinc-950"
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
                      className="accent-zinc-950"
                    />
                    <span>Talleres</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Acceder a Preventas Privadas</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-zinc-500">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Privacidad estricta, cero spam
                </span>
                <span>•</span>
                <span>Cancela cuando desees</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
