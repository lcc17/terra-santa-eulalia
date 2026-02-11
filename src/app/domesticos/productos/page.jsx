"use client";
import { motion } from "framer-motion";
import { useApp } from "@/lib/context";
// Importaciones absolutas para evitar errores de ruta
import ProductCard from "@/components/domesticos/ProductCard";
import FAQSlider from "@/components/domesticos/FAQSlider";

export default function ProductsPage() {
  // 1. EL HOOK DEBE IR AQUÍ ADENTRO, SIEMPRE.
  const { t } = useApp();

  // Obtenemos la lista del contexto (aseguramos que sea un array vacío si falla)
  const products = t.productsList || [];

  return (
    <div className="bg-sand-light/30 min-h-screen pb-20">
      {/* HEADER DE SECCIÓN */}
      <section className="pt-32 pb-12 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-earth-brown mb-6"
        >
          {t.domestic.productsTitle}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-earth-brown/80 font-serif italic"
        >
          {t.domestic.productsDesc}
        </motion.p>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        {/* Contenedor decorativo opcional para dar profundidad */}
        <div className="bg-earth-brown/5 rounded-[50px] p-8 md:p-12">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((prod, index) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }} // Efecto cascada
                  viewport={{ once: true }}
                >
                  <ProductCard product={prod} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-earth-brown">Cargando rituales...</p>
          )}
        </div>
      </section>

      {/* SECCIÓN FAQ (Para cerrar la página con estilo) */}
      <section className="px-6 pb-12">
        <h2 className="text-3xl font-serif text-center mb-10 text-earth-brown opacity-80">
          {t.domestic.faqTitle}
        </h2>
        <FAQSlider />
      </section>
    </div>
  );
}