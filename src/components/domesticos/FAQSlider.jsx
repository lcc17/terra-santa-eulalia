"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useApp } from "@/lib/context";

export default function FAQAccordion() {
  const { t } = useApp();
  const faqs = t.faqList || [];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  if (faqs.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-earth-brown rounded-[40px] p-8 md:p-12 relative shadow-2xl overflow-hidden text-center">
        {/* Decoración */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-olive-green/20 rounded-full blur-3xl" />

        <div className="mb-8 text-sand-light/50">
          <HelpCircle size={40} className="mx-auto" />
        </div>

        <div className="space-y-4 z-10 relative">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-sand-light/20 rounded-2xl overflow-hidden text-left"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-cream hover:bg-sand-light/10 transition-all"
                >
                  <span className="text-lg md:text-xl font-serif">
                    {faq?.q}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-cream/80 font-light">
                        {faq?.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
