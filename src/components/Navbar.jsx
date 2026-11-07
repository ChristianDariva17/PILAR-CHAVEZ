import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
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
    { label: 'Tienda & Prints', href: '#tienda' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'CV & Prensa', href: '#curriculum' },
    { label: 'Agenda', href: '#agenda' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="group flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter uppercase font-display bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:to-[#ff3366] transition-all">
              {artistInfo.brandName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3366] group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#ff3366] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#newsletter"
              className="text-xs font-semibold text-zinc-300 hover:text-white px-3 py-2 rounded-full border border-white/15 hover:border-white/40 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff3366]" />
              Club Coleccionistas
            </a>
            <button
              onClick={() => onOpenInquiry(null)}
              className="text-xs uppercase tracking-wider font-bold bg-[#ff3366] hover:bg-[#ff1751] text-white px-4 py-2.5 rounded-full transition-all shadow-lg shadow-[#ff3366]/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Consultar Obra</span>
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
        <div className="md:hidden bg-[#0c0d0e]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-zinc-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold text-zinc-200 py-2.5 rounded-lg border border-white/20"
            >
              Club de Coleccionistas VIP
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry(null);
              }}
              className="w-full text-center text-xs uppercase tracking-wider font-bold bg-[#ff3366] text-white py-3 rounded-lg"
            >
              Consultar Obra / Encargo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

