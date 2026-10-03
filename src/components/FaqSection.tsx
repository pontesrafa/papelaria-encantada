import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FREQUENT_QUESTIONS, STORE_PHONE, STORE_PHONE_DISPLAY } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-20 bg-[#FFF5F8]/70 border-t border-pink-200/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-pink-600">
            Dúvidas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-brand mt-1">
            Como fazer seu pedido
          </h2>
        </div>

        {/* Clean Accordion */}
        <div className="divide-y divide-pink-100 bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-xs">
          {FREQUENT_QUESTIONS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleQuestion(idx)}
                  type="button"
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-stone-900 hover:text-pink-600 transition-colors cursor-pointer py-1"
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-pink-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed pr-6">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet Contact Link */}
        <div className="text-center mt-12 text-xs text-stone-500">
          <span>Tem outra dúvida? </span>
          <a
            href={`https://wa.me/${STORE_PHONE}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre os personalizados da Papelaria Encantada ✨')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 font-semibold underline hover:text-pink-600 transition-colors"
          >
            Fale conosco no WhatsApp ({STORE_PHONE_DISPLAY})
          </a>
        </div>

      </div>
    </section>
  );
};
