import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { ProductItem } from '../types';
import { PRODUCTS_CATALOG, STORE_PHONE } from '../data/products';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const handleWhatsApp = (e: React.MouseEvent, product: ProductItem) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Olá! Estava no site da Papelaria Encantada e amei o modelo: *${product.name}*! Poderia me passar um orçamento para o meu tema? ✨`
    );
    window.open(`https://wa.me/${STORE_PHONE}?text=${msg}`, '_blank');
  };

  return (
    <section id="modelos" className="py-16 bg-white border-y border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-pink-600">
            Portfólio & Inspirações
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-brand mt-1">
            Modelos em Destaque
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-2">
            Trabalhos reais produzidos em nosso ateliê. Criamos qualquer tema sob medida para o seu evento.
          </p>
        </div>

        {/* 4-Item Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_CATALOG.map((product) => (
            <article
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-[#FAF8F9] rounded-2xl overflow-hidden border border-stone-200/70 hover:border-pink-300 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div>
                <div className="relative aspect-4/3 w-full bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                {/* Card Info */}
                <div className="p-4 space-y-1.5">
                  <span className="text-[11px] font-semibold text-pink-600 block">
                    {product.categoryLabel}
                  </span>
                  <h3 className="text-sm font-bold text-stone-900 leading-snug group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 pt-0">
                <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between gap-2">
                  <span className="text-xs text-stone-500 group-hover:text-stone-900 transition-colors inline-flex items-center gap-0.5">
                    Detalhes <ArrowUpRight className="w-3 h-3" />
                  </span>

                  <button
                    onClick={(e) => handleWhatsApp(e, product)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    <span>Orçar Tema</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quiet Custom Theme Prompt */}
        <div className="text-center mt-12 text-xs text-stone-500">
          <span>Não viu o tema da sua festa? Confeccionamos qualquer ideia do zero com arte exclusiva. </span>
          <a
            href={`https://wa.me/${STORE_PHONE}?text=${encodeURIComponent('Olá! Gostaria de consultar um orçamento para outro tema ✨')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 font-semibold underline hover:text-pink-600 transition-colors"
          >
            Fale conosco no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
