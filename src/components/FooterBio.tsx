import React from 'react';
import { Heart, Instagram, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, STORE_PHONE, LOCATION_CITY, STORE_PHONE_DISPLAY } from '../data/products';

export const FooterBio: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 pt-5 pb-12 text-center border-t border-slate-100 bg-white/70 backdrop-blur-xs mt-6">
      <div className="max-w-md mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2.5">
          <a
            href={`https://wa.me/${STORE_PHONE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-semibold transition-all"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{STORE_PHONE_DISPLAY}</span>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 text-xs font-semibold transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>@papelariaencantada.campos</span>
          </a>
        </div>

        <p className="text-xs text-slate-500 font-medium flex items-center justify-center gap-1">
          <span>Criado com carinho para momentos inesquecíveis</span>
          <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
        </p>

        <p className="text-[11px] text-slate-400 leading-relaxed">
          Ateliê em {LOCATION_CITY} • Envio para todo o Brasil 🇧🇷
          <br />
          Papelaria Encantada © {currentYear}
        </p>
      </div>
    </footer>
  );
};
