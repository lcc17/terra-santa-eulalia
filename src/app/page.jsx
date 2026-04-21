"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "../lib/context";
import { translations } from "@/lib/translations";
import ProductCard from "@/components/domesticos/ProductCard";
import QuienesSomos from "@/components/home/QuienesSomos";
import { ArrowRight, Star, MessageCircle, ArrowUpRight } from "lucide-react";

const WHOWEARE_IMG = "/images/who-we-are.png";
const HERO_VIDEO = "/videos/hero-video.mp4";

// Hero card images — each tells a different brand story
const CARD_IMGS = {
  products: "/images/products/terra_santa_planta_indigo.PNG",
  treatments: "/images/retrato-terra-santa-eulalia.png",
  therapy: "/images/who-we-are.png",
};

export default function Home() {
  const { t, lang } = useApp();
  const { scrollY } = useScroll();

  const bestSellers = t?.productsList?.slice(0, 3) || [];

  const handleWhatsAppClick = () => {
    const phoneNumber = "34602468686";
    const message = "Hola, me gustaría información sobre Terra Santa Eulalia.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-cream pt-32">
      {/* --- 1. HERO SECTION (ATMOSFÉRICO / SIN TEXTO) --- */}
      <section className="relative h-[85vh] w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-earth-brown/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* CTA WHATSAPP */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={handleWhatsAppClick}
          className="absolute top-28 right-6 md:top-32 md:right-10 z-30 group flex items-center gap-3"
        >
          <span className="hidden md:block text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            Reservar Cita
          </span>
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-green-600 hover:border-green-600 hover:scale-110 transition-all duration-1000 ease-out shadow-xl">
            <MessageCircle size={24} className="text-white" />
          </div>
        </motion.button>

        {/* --- STAGGERED MASONRY CARDS --- */}
        <div className="relative z-20 w-full px-6 md:px-12 max-w-[1600px] mx-auto">

          {/* ATMOSPHERIC GHOST BLOB — repositioned as grid child */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
            style={{
              width: "1000px",
              height: "1000px",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "rgba(74, 58, 36, 0.05)",
              filter: "blur(120px)",
            }}
          />

          {/* GRID: 3-col asymmetric masonry with staggered vertical offsets */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 items-end"
          >
            {/* CARD 1: PRODUCTOS — Left, standard position, min-h 450px */}
            <Link href="/domesticos/productos" className="group md:mt-0 block">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="relative min-h-[450px] md:h-[60vh] overflow-hidden shadow-2xl group-hover:-translate-y-4 transition-transform duration-1000 ease-out"
                style={{ borderRadius: "40% 60% 70% 30% / 50%" }}
              >
                {/* Background image */}
                <Image
                  src={CARD_IMGS.products}
                  alt={t?.cards?.productsTitle || "Productos"}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-earth-brown/20 to-transparent" />
                {/* Text at absolute bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-cream font-serif text-3xl md:text-5xl tracking-[0.1em] whitespace-pre-line mb-3">
                    {t?.cards?.productsTitle || "NUESTROS\nPRODUCTOS"}
                  </h3>
                  <p className="text-sand-light/70 text-[10px] uppercase tracking-widest font-bold">
                    {t?.cards?.productsSub || "La Botica Natural"}
                  </p>
                  <div className="mt-6 w-8 h-px bg-sand-light/50 group-hover:w-20 transition-all duration-1000 ease-out" />
                </div>
              </motion.div>
            </Link>

            {/* CARD 2: TRATAMIENTOS — Center, translate-y-12, floating animation */}
            <Link href="/domesticos/tratamientos" className="group md:translate-y-12 block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: [0, -15, 0] }}
                transition={{
                  delay: 0.7,
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="relative min-h-[450px] md:h-[60vh] overflow-hidden shadow-2xl group-hover:-translate-y-4 transition-transform duration-1000 ease-out"
                style={{ borderRadius: "60% 40% 30% 70% / 60%" }}
              >
                {/* Background image */}
                <Image
                  src={CARD_IMGS.treatments}
                  alt={t?.cards?.treatmentsTitle || "Tratamientos"}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-earth-brown/20 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-cream font-serif text-3xl md:text-5xl tracking-[0.1em] whitespace-pre-line mb-3">
                    {t?.cards?.treatmentsTitle || "NUESTROS\nTRATAMIENTOS"}
                  </h3>
                  <p className="text-sand-light/70 text-[10px] uppercase tracking-widest font-bold">
                    {t?.cards?.treatmentsSub || "Spa Orgánico"}
                  </p>
                  <div className="mt-6 w-8 h-px bg-sand-light/50 group-hover:w-20 transition-all duration-1000 ease-out" />
                </div>
              </motion.div>
            </Link>

            {/* CARD 3: TERAPIA CAPILAR — Right, -translate-y-8, slight horizontal offset */}
            <Link href="/domesticos/terapia-capilar" className="group md:-translate-y-8 md:ml-auto block">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="relative min-h-[450px] md:h-[60vh] overflow-hidden shadow-2xl group-hover:-translate-y-4 transition-transform duration-1000 ease-out"
                style={{ borderRadius: "50% 50% 70% 30% / 40%" }}
              >
                {/* Background image */}
                <Image
                  src={CARD_IMGS.therapy}
                  alt={t?.cards?.therapyTitle || "Terapia Capilar"}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/80 via-earth-brown/20 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <h3 className="text-cream font-serif text-3xl md:text-5xl tracking-[0.1em] whitespace-pre-line mb-3">
                    {t?.cards?.therapyTitle || "TERAPIA\nCAPILAR"}
                  </h3>
                  <p className="text-sand-light/70 text-[10px] uppercase tracking-widest font-bold">
                    {t?.cards?.therapySub || "Green Zone"}
                  </p>
                  <div className="mt-6 w-8 h-px bg-sand-light/50 group-hover:w-20 transition-all duration-1000 ease-out" />
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
              transition={{ delay: index * 0.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
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
              Experiencias Exclusivas
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-cream">
              {t.services.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title={t.services.capillary}
              desc={
                t.services.capillaryDesc ||
                "Diagnóstico profundo y recuperación molecular con oxitocina."
              }
              img="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800"
              href="/domesticos/terapia-capilar"
            />

            <ServiceCard
              title={t.services.spa}
              desc={
                t.services.spaDesc ||
                "Descubre nuestro Ritual Signature con Pindas (150€) y Lifting Facial."
              }
              img="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800"
              href="/domesticos/tratamientos"
              badge="Signature Experience"
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
