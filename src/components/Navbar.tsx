import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { LOGO_URL, STORE_PHONE, STORE_PHONE_DISPLAY } from '../data/products';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatsAppUrl = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(
    'Olá! Estava navegando no site da Papelaria Encantada e gostaria de solicitar um orçamento para o meu evento. ✨'
  )}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF0F5]/90 backdrop-blur-md border-b border-pink-200/60 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Brand Zone with larger prominent logo */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, '#inicio')}
          className="flex items-center gap-3.5 group"
        >
          <img
            src={LOGO_URL}
            alt="Papelaria Encantada"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-pink-100 shadow-sm group-hover:scale-105 transition-transform shrink-0"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-stone-900 font-brand tracking-tight leading-tight">
              Papelaria Encantada
            </span>
            <span className="text-[11px] font-medium text-stone-500 hidden sm:block">
              Ateliê de Personalizados
            </span>
          </div>
        </a>

        {/* Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#modelos"
            onClick={(e) => handleLinkClick(e, '#modelos')}
            className="hover:text-stone-900 transition-colors"
          >
            Modelos
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleLinkClick(e, '#sobre')}
            className="hover:text-stone-900 transition-colors"
          >
            O Ateliê
          </a>
          <a
            href="#duvidas"
            onClick={(e) => handleLinkClick(e, '#duvidas')}
            className="hover:text-stone-900 transition-colors"
          >
            Dúvidas
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="md:hidden p-2 text-stone-600 hover:text-stone-900"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-3">
          <a
            href="#modelos"
            onClick={(e) => handleLinkClick(e, '#modelos')}
            className="block py-1.5 text-sm font-medium text-stone-700"
          >
            Modelos
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleLinkClick(e, '#sobre')}
            className="block py-1.5 text-sm font-medium text-stone-700"
          >
            O Ateliê
          </a>
          <a
            href="#duvidas"
            onClick={(e) => handleLinkClick(e, '#duvidas')}
            className="block py-1.5 text-sm font-medium text-stone-700"
          >
            Dúvidas
          </a>
          <div className="pt-2 border-t border-stone-100">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp ({STORE_PHONE_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
