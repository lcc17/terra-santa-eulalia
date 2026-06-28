"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "../lib/context";
import { translations } from "@/lib/translations";
import ProductCard from "@/components/domesticos/ProductCard";
import QuienesSomos from "@/components/home/QuienesSomos";
import { ArrowRight, Star, MessageCircle } from "lucide-react";

// estoy ansioso que esto funcione :D

const HERO_VIDEO = "/videos/hero-video.mp4";

export default function Home() {
  const { t, lang } = useApp();

  const bestSellers = t?.productsList?.slice(0, 3) || [];

  const handleWhatsAppClick = () => {
    const phoneNumber = "34631994318";
    const message =
      t?.whatsapp?.defaultMessage ||
      "Hola, me gustaría información sobre Terra Santa Eulalia.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-cream pt-32">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[85vh] w-full overflow-hidden flex flex-col justify-end">
        {/* Fullscreen video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            suppressHydrationWarning={true}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* CTA WHATSAPP */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={handleWhatsAppClick}
          className="absolute top-28 right-6 md:top-32 md:right-10 z-30 group flex items-center gap-3"
          aria-label={t?.whatsapp?.reserveButton || "Reservar Cita"}
        >
          <span className="hidden md:block text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            {t?.whatsapp?.reserveButton || "Reservar Cita"}
          </span>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:scale-110 transition-all duration-1000 ease-out shadow-xl">
            <MessageCircle size={24} className="text-white" />
          </div>
        </motion.button>

        {/* --- CLEAN 3-CARD GRID --- */}
        <div className="relative z-20 w-full px-4 md:px-8 max-w-[1600px] mx-auto pb-8 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {/* CARD 1: PRODUCTOS — Earth Brown */}
            <Link href="/domesticos/productos" className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative h-48 md:h-56 bg-earth-brown rounded-xl overflow-hidden shadow-xl group-hover:-translate-y-2 transition-transform duration-500 ease-out"
              >
                {/* Arrow icon top-right */}
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-cream/70 group-hover:text-cream group-hover:translate-x-1 transition-all duration-300" />
                </div>
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-cream font-serif text-xl md:text-2xl tracking-[0.15em] whitespace-pre-line mb-1">
                    {t?.cards?.productsTitle || "NUESTROS\nPRODUCTOS"}
                  </h3>
                  <p className="text-cream/60 text-[9px] uppercase tracking-widest font-bold">
                    {t?.cards?.productsSub || "SELECCIÓ NATURAL & ORGÀNICA"}
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* CARD 2: TRATAMIENTOS — Cream */}
            <Link href="/domesticos/tratamientos" className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative h-48 md:h-56 bg-cream rounded-xl overflow-hidden shadow-xl group-hover:-translate-y-2 transition-transform duration-500 ease-out"
              >
                {/* Arrow icon top-right */}
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-earth-brown/70 group-hover:text-earth-brown group-hover:translate-x-1 transition-all duration-300" />
                </div>
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-earth-brown font-serif text-xl md:text-2xl tracking-[0.15em] whitespace-pre-line mb-1">
                    {t?.cards?.treatmentsTitle || "NUESTROS\nTRATAMIENTOS"}
                  </h3>
                  <p className="text-earth-brown/60 text-[9px] uppercase tracking-widest font-bold">
                    {t?.cards?.treatmentsSub || "SPA ORGÀNICO"}
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* CARD 3: TERAPIA CAPILAR — Olive Green */}
            <Link href="/domesticos/terapia-capilar" className="group block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="relative h-48 md:h-56 bg-olive-green rounded-xl overflow-hidden shadow-xl group-hover:-translate-y-2 transition-transform duration-500 ease-out"
              >
                {/* Arrow icon top-right */}
                <div className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-cream/70 group-hover:text-cream group-hover:translate-x-1 transition-all duration-300" />
                </div>
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-cream font-serif text-xl md:text-2xl tracking-[0.15em] whitespace-pre-line mb-1">
                    {t?.cards?.therapyTitle || "TERAPIA\nCAPILAR"}
                  </h3>
                  <p className="text-cream/60 text-[9px] uppercase tracking-widest font-bold">
                    {t?.cards?.therapySub || "GREEN ZONE"}
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- 2. BEST SELLERS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 px-2 border-b border-earth-brown/10 pb-4">
          <div>
            <span className="text-olive-green text-xs uppercase tracking-widest font-bold block mb-2">
              {t?.domestic?.title || "La Botica"}
            </span>
            <h2 className="text-earth-brown text-3xl font-serif">
              {t?.domestic?.productsTitle || "Favoritos de la Botica"}
            </h2>
          </div>
          <Link
            href="/domesticos/productos"
            className="text-earth-brown/70 text-xs uppercase tracking-wider hover:text-olive-green flex items-center gap-1 transition-colors duration-1000"
          >
            {t?.domestic?.viewMore || "Ver colección"} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              viewport={{ once: true }}
            >
              <ProductCard product={prod} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. QUIENES SOMOS (FILOSOFÍA) --- */}
      <QuienesSomos />

      {/* --- 4. HIGH TICKET SERVICES --- */}
      <section className="py-32 bg-earth-brown text-sand-light relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-olive-green text-xs tracking-[0.3em] uppercase block mb-4">
              {t.services.badge || "Signature Experience"}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream">
              {t.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title={t.services.capillary}
              desc={t.services.capillaryDesc}
              img="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800"
              href="/domesticos/terapia-capilar"
            />

            <ServiceCard
              title={t.services.spa}
              desc={t.services.spaDesc}
              img="/images/tratamientos-organicos-naturales.png"
              href="/domesticos/tratamientos"
              badge={t.services.badge}
            />
          </div>
        </div>
      </section>

      {/* --- 5. SOCIAL PROOF --- */}
      <section className="py-24 bg-sand-light/10 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 text-olive-green mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-serif text-earth-brown italic mb-6">
            "Un antes y un después para mi cabello. La terapia de oxitocina no
            es solo estética, es salud real."
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-earth-brown/60">
            — Laura G., Cliente Verificada
          </p>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc, img, href }) {
  return (
    <Link
      href={href}
      className="group relative h-[400px] overflow-hidden rounded-[4px]"
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-60"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-10 w-full">
        <h3 className="text-3xl font-serif text-cream mb-2 group-hover:translate-x-2 transition-transform duration-1000">
          {title}
        </h3>
        <p className="text-sand-light/80 font-light text-sm max-w-xs">{desc}</p>
        <div className="mt-6 w-12 h-px bg-olive-green group-hover:w-24 transition-all duration-1000" />
      </div>
    </Link>
  );
}
