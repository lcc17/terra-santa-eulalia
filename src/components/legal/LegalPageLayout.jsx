"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useApp } from "@/lib/context";
import { BUSINESS_INFO } from "@/lib/legal-content";

/**
 * Layout reutilizable para páginas legales.
 * Recibe título, intro y array de secciones (cada una con heading + paragraphs).
 * Opcionalmente acepta un slot `extra` para tablas u otros bloques especiales.
 */
export default function LegalPageLayout({ title, intro, sections = [], extra = null }) {
  const { t } = useApp();

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        {/* Volver */}
        <Link
          href="/legal"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-earth-brown/60 hover:text-olive-green transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {t?.legal?.indexTitle || "Información Legal"}
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="mb-12 pb-8 border-b border-sand-light"
        >
          <h1 className="font-serif text-earth-brown text-3xl md:text-4xl mb-3">
            {title}
          </h1>
          <p className="text-xs uppercase tracking-widest text-earth-brown/50">
            {t?.legal?.lastUpdated || "Última actualización"}: {BUSINESS_INFO.lastUpdated}
          </p>
        </motion.header>

        {/* Intro */}
        {intro && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-earth-brown/80 text-base leading-relaxed mb-10 italic font-serif"
          >
            {intro}
          </motion.p>
        )}

        {/* Secciones */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <h2 className="font-serif text-earth-brown text-xl md:text-2xl mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3 text-earth-brown/80 text-sm md:text-base leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Slot extra para tablas u otros bloques */}
        {extra}

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-sand-light text-center">
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-widest text-olive-green hover:text-earth-brown transition-colors"
          >
            {t?.legal?.backHome || "Volver al inicio"} →
          </Link>
        </footer>
      </article>
    </div>
  );
}
