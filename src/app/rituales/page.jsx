"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/context";
import RitualCard from "@/components/rituales/RitualCard";
import FacialRitualCard from "@/components/rituales/FacialRitualCard";
import ExtrasCard from "@/components/rituales/ExtrasCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRight, MessageCircle } from "lucide-react";

// Assets
const HERO_IMG = "/images/rituales-hero.jpg";

export default function RitualesPage() {
  const { t } = useApp();
  const { scrollY } = useScroll();

  // Parallax effect for hero
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  // Get translations data
  const hairRituals = t?.treatmentsPage?.hairRituals?.list || [];
  const facialRituals = t?.treatmentsPage?.facialRituals?.list || [];
  const extras = t?.treatmentsPage?.extras || [];

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-cream pt-24">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[70vh] w-full overflow-hidden flex flex-col justify-end pb-16">
        {/* Background Image with Parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="/images/tratamientos-organicos-naturales.png"
            alt="Rituales Terra Santa Eulalia"
            fill
            className="object-cover scale-110"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-earth-brown/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
        </motion.div>

        {/* Floating WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-32 right-6 z-30"
        >
          <button
            onClick={() => {
              window.open(
                `https://wa.me/34631994318?text=${encodeURIComponent(t?.treatmentsPage?.whatsappMessage || "Hola, me interesa reservar un ritual de Terra Santa Eulalia")}`,
                "_blank",
              );
            }}
            className="flex items-center gap-3 group"
          >
            <span className="hidden md:block text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
              {t?.treatmentsPage?.floatingCta || "Reservar Cita"}
            </span>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:scale-110 transition-all duration-300 shadow-xl">
              <MessageCircle size={24} className="text-white" />
            </div>
          </button>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 w-full px-6 md:px-12 max-w-[1600px] mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl"
          >
            <span className="text-olive-green text-xs tracking-[0.3em] uppercase font-bold block mb-4">
              {t?.services?.title || "Experiencias Exclusivas"}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-earth-brown mb-4 leading-tight">
              {t?.treatmentsPage?.title || "Rituales Terra"}
            </h1>
            <p className="text-lg text-earth-brown/70 font-light max-w-lg mb-8">
              {t?.treatmentsPage?.subtitle || "Salud Capilar y Facial Orgánica"}
            </p>
            <p className="text-sm text-earth-brown/60 leading-relaxed mb-8 max-w-xl">
              {t?.treatmentsPage?.desc ||
                "Tratamientos botánicos diseñados para recuperar el equilibrio. Sin prisas, con plantas medicinales y técnicas ancestrales."}
            </p>
            <WhatsAppButton className="inline-flex">
              {t?.treatmentsPage?.cta || "Reservar Cita"}
            </WhatsAppButton>
          </motion.div>
        </motion.div>
      </section>

      {/* --- 2. HAIR RITUALS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-olive-green text-xs tracking-[0.3em] uppercase font-bold block mb-4">
              {t?.treatmentsPage?.hairRituals?.title || "Rituales Capilares"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-earth-brown mb-4">
              {t?.treatmentsPage?.hairRituals?.title ||
                "Rituales Orgánicos Capilares"}
            </h2>
            <p className="text-earth-brown/60 max-w-xl mx-auto">
              {t?.treatmentsPage?.hairRituals?.desc ||
                "Recupera la fuerza y salud de tu cabello con barros y plantas."}
            </p>
          </motion.div>
        </div>

        {/* Hair Rituals Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hairRituals.map((ritual, index) => (
            <RitualCard key={ritual.id} ritual={ritual} index={index} />
          ))}
        </div>
      </section>

      {/* --- 3. FACIAL RITUALS SECTION --- */}
      <section className="py-24 px-6 bg-red-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-olive-green text-xs tracking-[0.3em] uppercase font-bold block mb-4">
                {t?.treatmentsPage?.facialRituals?.title || "Rituales Faciales"}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-earth-brown mb-4">
                {t?.treatmentsPage?.facialRituals?.title ||
                  "Rituales Faciales de Luz"}
              </h2>
              <p className="text-earth-brown/60 max-w-xl mx-auto">
                {t?.treatmentsPage?.facialRituals?.desc ||
                  "Tratamientos holísticos para devolver la juventud y elasticidad a la piel."}
              </p>
            </motion.div>
          </div>

          {/* Facial Rituals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facialRituals.map((ritual, index) => (
              <FacialRitualCard key={ritual.id} ritual={ritual} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. EXTRAS SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-olive-green text-xs tracking-[0.3em] uppercase font-bold block mb-4">
              {t?.treatmentsPage?.extrasTitle || "Añade a tu Ritual"}
            </span>
            <h2 className="text-2xl font-serif text-earth-brown">
              {t?.treatmentsPage?.extrasSubtitle || "Expres Express"}
            </h2>
          </motion.div>
        </div>

        {/* Extras Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {extras.map((extra, index) => (
            <ExtrasCard key={index} extra={extra} index={index} />
          ))}
        </div>
      </section>

      {/* --- 5. CTA SECTION --- */}
      <section className="py-32 bg-earth-brown text-cream relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-olive-green/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-olive-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-olive-green text-xs tracking-[0.3em] uppercase font-bold block mb-6">
              {t?.cta?.helpTitle || "¿Necesitas ayuda para elegir?"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              {t?.cta?.ritualWaiting || "Tu ritual te está esperando"}
            </h2>
            <p className="text-sand-light/80 mb-10 max-w-xl mx-auto">
              {t?.cta?.helpDesc ||
                "Nuestro equipo te ayudará a encontrar el tratamiento perfecto según las necesidades de tu cabello y piel. La primera consulta es gratuita."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton className="inline-flex justify-center">
                {t?.cta?.bookFree || "Reservar Consulta Gratuita"}
              </WhatsAppButton>
              <Link
                href="/filosofia"
                className="px-6 py-3 rounded-full font-serif text-sm tracking-widest uppercase border border-sand-light/30 text-sand-light hover:bg-sand-light/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                {t?.cta?.filosofiaLink || "Conocer nuestra filosofía"}
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 6. STICKY MOBILE CTA --- */}
      <div className="fixed bottom-6 left-4 right-4 md:hidden z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <WhatsAppButton className="w-full justify-center shadow-2xl">
            {t?.treatmentsPage?.floatingCta || "Reservar por WhatsApp"}
          </WhatsAppButton>
        </motion.div>
      </div>
    </div>
  );
}
