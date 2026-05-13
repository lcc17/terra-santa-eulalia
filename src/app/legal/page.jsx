"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cookie, Shield, FileText, Scale, ArrowRight } from "lucide-react";
import { useApp } from "@/lib/context";

export default function LegalIndexPage() {
  const { t } = useApp();

  const items = [
    {
      href: "/legal/politica-cookies",
      icon: Cookie,
      title: t?.legal?.cookiesTitle || "Política de Cookies",
      desc: t?.legal?.cookiesDesc || "Cómo usamos las cookies en nuestra web.",
    },
    {
      href: "/legal/politica-privacidad",
      icon: Shield,
      title: t?.legal?.privacyTitle || "Política de Privacidad",
      desc: t?.legal?.privacyDesc || "Cómo tratamos tus datos personales (RGPD).",
    },
    {
      href: "/legal/terminos-condiciones",
      icon: FileText,
      title: t?.legal?.termsTitle || "Términos y Condiciones",
      desc: t?.legal?.termsDesc || "Condiciones de uso del sitio web.",
    },
    {
      href: "/legal/aviso-legal",
      icon: Scale,
      title: t?.legal?.noticeTitle || "Aviso Legal",
      desc: t?.legal?.noticeDesc || "Información legal según LSSI-CE.",
    },
  ];

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-16"
        >
          <span className="text-olive-green text-xs uppercase tracking-[0.3em] font-bold block mb-4">
            Terra Santa Eulalia
          </span>
          <h1 className="font-serif text-earth-brown text-4xl md:text-5xl mb-4">
            {t?.legal?.indexTitle || "Información Legal"}
          </h1>
          <p className="text-earth-brown/70 text-sm md:text-base max-w-xl mx-auto">
            {t?.legal?.indexSubtitle ||
              "Documentación legal y políticas de Terra Santa Eulalia"}
          </p>
        </motion.header>

        {/* Grid de documentos */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="group block h-full bg-white border border-sand-light hover:border-olive-green rounded-2xl p-8 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-olive-green/10 flex items-center justify-center group-hover:bg-olive-green/20 transition-colors">
                      <Icon size={20} className="text-olive-green" />
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-earth-brown/30 group-hover:text-olive-green group-hover:translate-x-1 transition-all duration-300"
                    />
                  </div>
                  <h2 className="font-serif text-earth-brown text-xl mb-2">
                    {item.title}
                  </h2>
                  <p className="text-earth-brown/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Back home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-widest text-earth-brown/60 hover:text-olive-green transition-colors"
          >
            {t?.legal?.backHome || "Volver al inicio"} →
          </Link>
        </div>
      </div>
    </div>
  );
}
