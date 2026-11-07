import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MessageCircle, Paintbrush } from 'lucide-react';
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
    { label: 'El Artista', href: '#el-artista' },
    { label: 'Comisiones', href: '#comisiones' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'CV & Prensa', href: '#curriculum' },
    { label: 'Agenda', href: '#agenda' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06100a]/95 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name with Kené accent */}
          <a href="#" className="group flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl font-black tracking-tighter uppercase font-display bg-gradient-to-r from-white via-zinc-200 to-emerald-200 bg-clip-text text-transparent group-hover:to-emerald-400 transition-all">
              {artistInfo.brandName}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 hidden sm:inline-block border-l border-emerald-500/30 pl-2.5">
              Elena Chávez
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-emerald-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-emerald-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#newsletter"
              className="text-xs font-semibold text-zinc-300 hover:text-white px-3.5 py-2 rounded-full border border-emerald-500/20 hover:border-emerald-500/50 transition-colors flex items-center gap-1.5 bg-emerald-950/20"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Coleccionistas</span>
            </a>
            <button
              onClick={() => onOpenInquiry(null)}
              className="text-xs uppercase tracking-wider font-bold bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-4 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Consultar / Adquirir</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06100a]/98 backdrop-blur-xl border-b border-emerald-500/20 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-zinc-300 hover:text-emerald-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-emerald-500/20 flex flex-col gap-3">
            <a
              href="#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold text-zinc-200 py-2.5 rounded-lg border border-emerald-500/30"
            >
              Club de Coleccionistas VIP
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry(null);
              }}
              className="w-full text-center text-xs uppercase tracking-wider font-bold bg-emerald-500 text-zinc-950 py-3 rounded-lg"
            >
              Consultar Obra / Encargo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
