import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { StudioDetails } from './components/StudioDetails';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ProductItem } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-900 flex flex-col selection:bg-pink-100 selection:text-pink-900">
      {/* Clean Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Refined Hero */}
        <HeroSection />

        {/* 4 Authentic Products Catalog */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Studio Craft & Shipping */}
        <StudioDetails />

        {/* Concise FAQ */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Discreet WhatsApp Float */}
      <FloatingWhatsApp />

      {/* Clean Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
