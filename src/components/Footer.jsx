import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { artistInfo } from '../data/content';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050b07] border-t border-emerald-500/20 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter uppercase font-display text-white">
                {artistInfo.brandName}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                Pucallpa
              </span>
            </div>
            <p className="text-zinc-300 text-xs leading-relaxed max-w-sm font-light">
              Plataforma oficial y archivo curatorial de la artista profesional <strong className="text-white">{artistInfo.fullName}</strong>. Extensión digital de su obra, estudio en Pucallpa (Ucayali) y proyectos de arte público.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${artistInfo.contact.email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/51961000000`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-zinc-950 text-white flex items-center justify-center transition-all border border-white/10"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav: Objetivos Estratégicos (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Estructura Curatorial
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portafolio" className="hover:text-emerald-300 transition-colors">
                  1. Obras Originales (S/. 150 - S/. 800)
                </a>
              </li>
              <li>
                <a href="#el-artista" className="hover:text-emerald-300 transition-colors">
                  2. El Viaje de Elena & Declaración
                </a>
              </li>
              <li>
                <a href="#comisiones" className="hover:text-emerald-300 transition-colors">
                  3. Encargos a Medida de Fauna
                </a>
              </li>
              <li>
                <a href="#comisiones" className="hover:text-emerald-300 transition-colors">
                  4. Muralismo para Hoteles & Espacios
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-emerald-300 transition-colors">
                  5. Talleres & Plein Air Yarinacocha
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-emerald-300 transition-colors">
                  6. CV Oficial & Dossier en PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto & Ubicación (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Taller & Contacto Directo
            </p>
            <div className="space-y-2 text-xs text-zinc-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{artistInfo.contact.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>{artistInfo.contact.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>{artistInfo.contact.phone}</span>
              </p>
            </div>

            <div className="pt-2 text-[11px] text-zinc-400">
              <p>● Envíos a todo el Perú (Olva Courier / Shalom)</p>
              <p>● Pagos vía Yape, Plin y Transferencia</p>
            </div>
          </div>

          {/* Top back button (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase font-bold text-zinc-300 hover:text-white bg-white/5 hover:bg-emerald-950 px-4 py-2.5 rounded-full border border-emerald-500/20 transition-colors cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] text-zinc-400 mt-6 lg:mt-0 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certificado de Autoría</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} {artistInfo.fullName} ({artistInfo.brandName}) — Todos los derechos reservados.</p>
          <p className="font-mono text-zinc-400">Pucallpa, Ucayali — Amazonía Peruana.</p>
        </div>

      </div>
    </footer>
  );
}
