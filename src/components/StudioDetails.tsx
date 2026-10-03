import React from 'react';
import { Sparkles, MapPin, Truck, Check } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_DISPLAY, LOCATION_CITY } from '../data/products';

export const StudioDetails: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-[#FFF0F5]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Craftsmanship Strip */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-wider uppercase text-pink-600">
              Produção Própria & Artesanal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-brand mt-1">
              O Cuidado em Cada Detalhe
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Desde a escolha do papel até a amarração final do laço de cetim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-pink-100 shadow-xs space-y-2">
              <span className="text-xs font-bold text-stone-900">01. Papéis Nobres 180g</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Utilizamos papel fosco de alta gramatura que não reflete a luz dos flashes nas fotos e garante cores vivas e durabilidade para a mesa.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-pink-100 shadow-xs space-y-2">
              <span className="text-xs font-bold text-stone-900">02. Laços Duplos & Pedrarias</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Laços encorpados com fita de cetim acetinada, chatons perolados e pontos de strass aplicados peça por peça com precisão.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-pink-100 shadow-xs space-y-2">
              <span className="text-xs font-bold text-stone-900">03. Arte Aprovada Antes</span>
              <p className="text-xs text-stone-600 leading-relaxed">
                Você recebe a prévia digital personalizada com o nome e a idade do aniversariante no WhatsApp para aprovar antes de qualquer impressão.
              </p>
            </div>
          </div>
        </div>

        {/* Calm Process & Shipping (2 clean cards) */}
        <div className="pt-8 border-t border-pink-200/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Local Studio */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-pink-600" />
                <span>Retirada em Campos dos Goytacazes - RJ</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Clientes de Campos dos Goytacazes podem retirar os personalizados diretamente no ateliê com data agendada e frete grátis, ou optar por entrega rápida via motoboy.
              </p>
            </div>

            {/* National Shipping */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <Truck className="w-4 h-4 text-stone-700" />
                <span>Envio para Todo o Brasil</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Para outras cidades, enviamos via Correios (SEDEX ou PAC) com código de rastreamento. As caixas possuem dobras inteligentes e vão protegidas para chegarem impecáveis.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
