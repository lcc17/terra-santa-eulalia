"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { useApp } from "@/lib/context"; // Asegúrate que la ruta sea correcta

export default function FAQSlider() {
  const { t } = useApp(); // 't' ya contiene las traducciones del idioma actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // SOLUCIÓN: Usamos t.faqList directamente
  const faqs = t.faqList || [];

  const next = () => setCurrentIndex((prev) => (prev + 1) % faqs.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + faqs.length) % faqs.length);

  // Evitar error si no hay preguntas
  if (faqs.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-earth-brown rounded-[40px] p-8 md:p-12 relative shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-center items-center text-center">
        {/* Decoración */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-olive-green/20 rounded-full blur-3xl" />

        <div className="mb-6 text-sand-light/50">
          <HelpCircle size={40} className="mx-auto" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-cream z-10"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-4">
              {faqs[currentIndex]?.q}
            </h3>
            <p className="text-lg opacity-80 font-light">
              {faqs[currentIndex]?.a}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controles */}
        <div className="flex gap-4 mt-8 z-10">
          <button
            onClick={prev}
            className="p-3 rounded-full border border-sand-light/30 text-sand-light hover:bg-sand-light hover:text-earth-brown transition-all"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full border border-sand-light/30 text-sand-light hover:bg-sand-light hover:text-earth-brown transition-all"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
