import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_DISPLAY } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(
    'Olá! Estou navegando no site da Papelaria Encantada e gostaria de tirar dúvidas sobre personalizados para minha festa! ✨'
  )}`;

  return (
    <aside aria-label="Atendimento WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp ${STORE_PHONE_DISPLAY}`}
        className="flex items-center justify-center w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white" />
      </a>
    </aside>
  );
};
