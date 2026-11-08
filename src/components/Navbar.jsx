import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { artistInfo } from '../data/content';

export default function Navbar({ onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Obras', href: '#portafolio' },
    { label: 'La Artista', href: '#el-artista' },
    { label: 'Comisiones', href: '#comisiones' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'CV & Prensa', href: '#curriculum' },
    { label: 'Agenda', href: '#agenda' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f5]/90 backdrop-blur-md border-b border-zinc-200/80 py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="group flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase font-display text-zinc-950 group-hover:text-emerald-950 transition-colors">
              {artistInfo.brandName}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 hidden sm:inline-block border-l border-zinc-300 pl-2.5">
              Elena Chávez
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-600 hover:text-zinc-950 font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-zinc-950 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#newsletter"
              className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 px-3.5 py-2 rounded-full border border-zinc-200 hover:border-zinc-400 transition-colors flex items-center gap-1.5 bg-white shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Coleccionistas</span>
            </a>
            <button
              onClick={() => onOpenInquiry(null)}
              className="text-xs uppercase tracking-wider font-bold bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <span>Consultar Obra</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-300" />
            </button>
          </div>

          {/* Mobile menu trigger with 48px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-800 hover:text-black p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer rounded-lg hover:bg-zinc-100"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 bg-white border border-zinc-200 rounded-2xl shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider text-zinc-700 hover:text-zinc-950 py-2 border-b border-zinc-100 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#newsletter"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2.5 rounded-xl border border-zinc-300 text-xs font-semibold text-zinc-800"
                >
                  Club de Coleccionistas
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry(null);
                  }}
                  className="w-full py-3 rounded-xl bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1"
                >
                  <span>Consultar Adquisición</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
