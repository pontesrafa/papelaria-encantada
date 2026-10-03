import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_DISPLAY, LOGO_URL, HERO_FEATURED_IMAGE } from '../data/products';

export const HeroSection: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(
    'Olá! Estava no site da Papelaria Encantada e gostaria de tirar dúvidas e solicitar um orçamento de personalizados para minha festa! ✨'
  )}`;

  return (
    <section id="inicio" className="pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Refined Typography & Clean Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Studio Identity with prominent logo */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-16 h-16 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-pink-100 shadow-md p-0.5 bg-white shrink-0">
                <img
                  src={LOGO_URL}
                  alt="Logo Papelaria Encantada"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold tracking-wider uppercase text-pink-600 block">
                  Papelaria Encantada
                </span>
                <span className="text-xs text-stone-500 block">
                  Ateliê em Campos dos Goytacazes - RJ
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight leading-[1.15] font-brand max-w-xl mx-auto lg:mx-0">
              A delicadeza do artesanal em cada detalhe da sua festa.
            </h1>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Caixas em scrap 3D, topos de bolo e lembrancinhas exclusivas produzidas com papéis nobres, laços duplos de cetim e acabamento de alto padrão. Ateliê em Campos dos Goytacazes - RJ, com envio seguro para todo o Brasil.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Orçar no WhatsApp ({STORE_PHONE_DISPLAY})</span>
              </a>

              <a
                href="#modelos"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors py-2"
              >
                <span>Ver os 4 modelos</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quiet Unboxed Metadata */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-stone-500">
              <span>Qualquer tema sob medida</span>
              <span aria-hidden="true">·</span>
              <span>Arte enviada para aprovação</span>
              <span aria-hidden="true">·</span>
              <span>Campos dos Goytacazes - RJ</span>
            </div>
          </div>

          {/* Right Column: Uninterrupted Photography */}
          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
              <img
                src={HERO_FEATURED_IMAGE}
                alt="Caixa Milk de Luxo tema Magali produzida pela Papelaria Encantada"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[11px] font-medium opacity-90">Modelo Autoral</span>
                <p className="text-sm font-semibold leading-tight">Caixa Milk com Laço Duplo & Aplique 3D</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
