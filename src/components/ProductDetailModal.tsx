import React, { useEffect } from 'react';
import { X, MessageCircle, Sparkles, Ruler, FileText, Package, Check } from 'lucide-react';
import { ProductItem } from '../types';
import { STORE_PHONE } from '../data/products';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Olá! Estou vendo o modelo *${product.name}* no site da Papelaria Encantada! Gostaria de consultar disponibilidade e solicitar um orçamento personalizado para o tema da minha festa. ✨`
    );
    window.open(`https://wa.me/${STORE_PHONE}?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[92vh] sm:max-h-[85vh] bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300 border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Image Header */}
        <div className="relative aspect-4/3 w-full bg-slate-100 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
          {product.badge && (
            <div className="absolute bottom-3.5 left-3.5 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm border border-white/60">
              {product.badge}
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-pink-600 mb-1">
              {product.categoryLabel}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-brand">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Highlights & Craft Details Card */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
            {product.dimensions && (
              <div className="flex items-start gap-2.5 text-slate-700">
                <Ruler className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span><strong>Dimensões:</strong> {product.dimensions}</span>
              </div>
            )}
            <div className="flex items-start gap-2.5 text-slate-700">
              <FileText className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
              <span><strong>Papel & Impressão:</strong> {product.paperType}</span>
            </div>
            <div className="flex items-start gap-2.5 text-slate-700">
              <Package className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
              <span><strong>Produção:</strong> Confeccionado artesanalmente sob medida para o seu tema</span>
            </div>
          </div>

          {/* Acabamentos Especiais */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              Diferenciais & Acabamentos:
            </h4>
            <ul className="space-y-1.5">
              {product.finishDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 bg-white border-t border-slate-100">
          <button
            onClick={handleWhatsAppInquiry}
            type="button"
            className="w-full flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Orçar este Modelo no WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
