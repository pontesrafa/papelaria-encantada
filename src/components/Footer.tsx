import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { LOGO_URL, STORE_PHONE, STORE_PHONE_DISPLAY, INSTAGRAM_URL, INSTAGRAM_HANDLE, LOCATION_CITY } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <img
              src={LOGO_URL}
              alt="Papelaria Encantada"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-stone-700 shadow-xs bg-white shrink-0"
            />
            <div>
              <span className="block text-lg font-bold text-white font-brand leading-none">
                Papelaria Encantada
              </span>
              <span className="block text-xs text-stone-400 mt-1">
                {LOCATION_CITY} • Envio para todo o Brasil
              </span>
            </div>
          </div>

          {/* Direct Social & WhatsApp Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@{INSTAGRAM_HANDLE}</span>
            </a>

            <span className="text-stone-700">·</span>

            <a
              href={`https://wa.me/${STORE_PHONE}?text=${encodeURIComponent('Olá! Vim pelo site da Papelaria Encantada ✨')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{STORE_PHONE_DISPLAY}</span>
            </a>
          </div>

        </div>

        {/* Quiet Copyright */}
        <div className="pt-6 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Papelaria Encantada. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
