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

export default function Footer({ onOpenInquiry, onOpenCertificate }) {
  const cleanPhone = (artistInfo.contact.whatsapp || "+51961000000").replace(/[^0-9]/g, '');
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f4f3ef] border-t border-zinc-200/80 pt-16 pb-12 text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-200">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold tracking-tight text-zinc-900">
                {artistInfo.brandName}
              </span>
              <span className="text-[10px] font-mono text-zinc-600 border border-zinc-300 px-2 py-0.5 rounded-full bg-white shadow-xs">
                Pucallpa
              </span>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm font-light">
              Plataforma oficial y archivo curatorial de la artista profesional <strong className="text-zinc-900 font-medium">{artistInfo.fullName}</strong>. Extensión digital de su obra, estudio en Pucallpa (Ucayali) y proyectos de arte público.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-zinc-900 hover:text-white text-zinc-700 flex items-center justify-center transition-all border border-zinc-200 shadow-xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${artistInfo.contact.email}`}
                className="w-9 h-9 rounded-full bg-white hover:bg-zinc-900 hover:text-white text-zinc-700 flex items-center justify-center transition-all border border-zinc-200 shadow-xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${cleanPhone}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-zinc-900 hover:text-white text-zinc-700 flex items-center justify-center transition-all border border-zinc-200 shadow-xs"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav: Objetivos Estratégicos (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-900">
              Estructura Curatorial
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portafolio" className="hover:text-zinc-950 transition-colors">
                  1. Obras Originales (S/. 150 - S/. 800)
                </a>
              </li>
              <li>
                <a href="#el-artista" className="hover:text-zinc-950 transition-colors">
                  2. El Viaje de Elena & Declaración
                </a>
              </li>
              <li>
                <a href="#comisiones" className="hover:text-zinc-950 transition-colors">
                  3. Encargos a Medida de Fauna
                </a>
              </li>
              <li>
                <a href="#comisiones" className="hover:text-zinc-950 transition-colors">
                  4. Muralismo para Hoteles & Espacios
                </a>
              </li>
              <li>
                <a href="#workshops" className="hover:text-zinc-950 transition-colors">
                  5. Talleres & Plein Air Yarinacocha
                </a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-zinc-950 transition-colors">
                  6. CV Oficial & Dossier en PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto & Ubicación (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-900">
              Taller & Contacto Directo
            </p>
            <div className="space-y-2 text-xs text-zinc-600">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zinc-800 shrink-0 mt-0.5" />
                <span>{artistInfo.contact.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>{artistInfo.contact.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>{artistInfo.contact.phone}</span>
              </p>
            </div>

            <div className="pt-2 text-[11px] text-zinc-500">
              <p>● Envíos a todo el Perú (Olva Courier / Shalom)</p>
              <p>● Pagos vía Yape, Plin y Transferencia</p>
            </div>
          </div>

          {/* Top back button (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase font-bold text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-100 px-4 py-2.5 rounded-full border border-zinc-200 transition-colors cursor-pointer shadow-xs"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenCertificate}
              className="text-[11px] text-zinc-600 hover:text-zinc-950 mt-6 lg:mt-0 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-zinc-800" />
              <span className="underline">Certificado de Autoría</span>
            </button>
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
