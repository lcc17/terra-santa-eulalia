"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/context";
import ProductCard from "@/components/domesticos/ProductCard";
import FAQSlider from "@/components/domesticos/FAQSlider";

export default function ProductsPage() {
  const { t } = useApp();
  const products = t.productsList || [];

  // Estado para el filtro activo
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Extraer categorías únicas dinámicamente
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  // Filtrar productos
  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-sand-light/30 min-h-screen pb-20">
      {/* HEADER DE SECCIÓN */}
      <section className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-olive-green text-xs uppercase tracking-[0.3em] font-bold"
        >
          Catálogo Terra
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-earth-brown my-6"
        >
          {t.domestic.productsTitle}
        </motion.h1>
      </section>

      {/* --- BARRA DE FILTROS (NUEVO UX) --- */}
      <section className="px-6 mb-12 overflow-x-auto">
        <div className="flex justify-center min-w-max gap-4 pb-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border
                ${
                  activeCategory === cat
                    ? "bg-earth-brown text-cream border-earth-brown shadow-lg"
                    : "bg-transparent text-earth-brown border-earth-brown/30 hover:border-earth-brown"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="bg-earth-brown/5 rounded-[50px] p-8 md:p-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Clave para animar al cambiar filtro
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" // 4 Columnas para ver más productos
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))
              ) : (
                <div className="col-span-full text-center py-20 opacity-50">
                  No hay rituales disponibles en esta categoría.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECCIÓN FAQ */}
      <section className="px-6 pb-12 border-t border-earth-brown/10 pt-12">
        <h2 className="text-3xl font-serif text-center mb-10 text-earth-brown opacity-80">
          {t.domestic.faqTitle}
        </h2>
        <FAQSlider />
      </section>
    </div>
  );
}
