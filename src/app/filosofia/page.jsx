"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/context";
import { ArrowDown, ArrowRight } from "lucide-react";

// --- ASSETS (Reemplaza con tus fotos reales de Manolo y el Salón) ---
const IMG_HERO =
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200"; // Textura agua/tierra
const IMG_FOUNDER =
  "https://images.unsplash.com/photo-1599695669260-16167c13a30c?q=80&w=800"; // Retrato Manolo
const IMG_HANDS =
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600"; // Manos mezclando
const IMG_CLAY =
  "https://images.unsplash.com/photo-1616353957088-251f28b4c277?q=80&w=600"; // Textura Arcilla
const IMG_SALON =
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000"; // Espacio interior
const IMG_PLANT =
  "https://images.unsplash.com/photo-1509966774948-4389426f04c6?q=80&w=600"; // Planta detalle
const IMG_TEXTURE =
  "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?q=80&w=800"; // Textura final

export default function FilosofiaPage() {
  const { t } = useApp();
  const containerRef = useRef(null);

  // Hooks de Scroll Global
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transformaciones Parallax (Efecto Ultimatum)
  const yHero = useTransform(scrollYProgress, [0, 0.2], [0, 200]);
  const yText1 = useTransform(scrollYProgress, [0.1, 0.3], [100, -50]);
  const rotateSlight = useTransform(scrollYProgress, [0.2, 0.8], [0, 10]);

  return (
    <div
      ref={containerRef}
      className="bg-cream min-h-[300vh] overflow-hidden relative selection:bg-olive-green selection:text-cream"
    >
      {/* --- FONDO ORGÁNICO VIVO (SVG FLOTANTE) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-earth-brown/5 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-olive-green/5 blur-[100px]"
        />
      </div>

      {/* --- 1. HERO: EL ORIGEN (Minimalista Extremo) --- */}
      <section className="relative h-screen flex flex-col items-center justify-center z-10">
        <motion.div
          style={{ y: yHero }}
          className="relative z-20 text-center px-6"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-xs uppercase font-bold text-olive-green mb-8 block"
          >
            {t.philosophy.heroTitle}
          </motion.span>

          <h1 className="text-6xl md:text-9xl font-serif text-earth-brown leading-[0.8] mix-blend-multiply">
            Terra
            <br />
            <span className="italic font-light opacity-60">Memory</span>
          </h1>
        </motion.div>

        {/* Imagen Hero Flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 z-0 opacity-40"
        >
          <Image
            src={IMG_HERO}
            alt="Textura Origen"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-20 text-earth-brown/50"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* --- 2. MANIFIESTO (Texto Gigante Scroll) --- */}
      <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 md:col-start-3">
            <motion.p
              style={{ y: yText1 }}
              className="text-3xl md:text-6xl font-serif text-earth-brown leading-tight indent-20"
            >
              "{t.philosophy.manifesto}"
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- 3. EL ALQUIMISTA (Layout Asimétrico / Founder) --- */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1800px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Columna Imágenes (Collage) */}
          <div className="relative h-[800px] w-full">
            {/* Foto Manolo Principal */}
            <motion.div
              style={{ rotate: rotateSlight }}
              className="absolute top-0 left-0 md:left-20 w-[80%] h-[70%] bg-earth-brown overflow-hidden shadow-2xl z-10"
            >
              <Image
                src={IMG_FOUNDER}
                alt="Fundador"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Foto Manos Detalle (Parallax rápido) */}
            <ParallaxImage
              src={IMG_HANDS}
              alt="Manos trabajando"
              className="absolute bottom-20 right-0 md:right-20 w-[50%] h-[40%] border-8 border-cream shadow-xl z-20 grayscale hover:grayscale-0 transition-all duration-700"
              speed={-150}
            />

            {/* Elemento Decorativo SVG */}
            <div className="absolute -left-10 bottom-[20%] z-30">
              <svg
                width="150"
                height="150"
                viewBox="0 0 200 200"
                className="animate-spin-slow"
              >
                <path
                  id="curve"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="transparent"
                />
                <text width="500">
                  <textPath
                    href="#curve"
                    className="text-sm font-bold uppercase tracking-widest fill-earth-brown"
                  >
                    • Orgánico • Vivo • Artesanal • Eterno •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Columna Texto */}
          <div className="md:pr-20 mt-[-100px] md:mt-0 relative z-30 bg-cream/80 backdrop-blur-sm p-8 md:p-0 rounded-xl">
            <span className="text-olive-green uppercase tracking-widest text-xs font-bold mb-4 block">
              {t.philosophy.founderTitle}
            </span>
            <h2 className="text-6xl md:text-8xl font-serif text-earth-brown mb-8 font-light">
              Manolo
              <br />
              Díaz
            </h2>
            <div className="h-px w-20 bg-earth-brown mb-8"></div>
            <p className="text-xl leading-relaxed text-earth-brown/80 font-light mb-10">
              {t.philosophy.founderDesc}
            </p>
            <p className="font-serif italic text-2xl text-earth-brown/60">
              "El cabello no miente. Es la extensión de nuestras raíces."
            </p>
          </div>
        </div>
      </section>

      {/* --- 4. LOS VALORES (Scroll Horizontal Simulado / Grid Irregular) --- */}
      <section className="py-32 px-6 max-w-[1600px] mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* Card 1: TIERRA */}
          <ValueCard
            title={t.philosophy.values[0].title}
            desc={t.philosophy.values[0].desc}
            img={IMG_CLAY}
            mt="mt-0"
          />

          {/* Card 2: AGUA (Desplazada) */}
          <ValueCard
            title={t.philosophy.values[1].title}
            desc={t.philosophy.values[1].desc}
            img={IMG_TEXTURE}
            mt="md:mt-32" // Efecto escalera
          />

          {/* Card 3: TIEMPO (Más desplazada) */}
          <ValueCard
            title={t.philosophy.values[2].title}
            desc={t.philosophy.values[2].desc}
            img={IMG_PLANT}
            mt="md:mt-64" // Efecto escalera
          />
        </div>
      </section>

      {/* --- 5. EL ESPACIO (Imagen Full Width con CTA) --- */}
      <section className="relative h-[80vh] w-full mt-20 overflow-hidden flex items-center justify-center">
        <ParallaxImageBackground src={IMG_SALON} />

        <div className="relative z-10 text-center bg-cream/90 backdrop-blur-md p-16 md:p-24 rounded-[2px] shadow-2xl max-w-2xl mx-auto border border-sand-light">
          <h3 className="text-4xl md:text-5xl font-serif text-earth-brown mb-6">
            {t.philosophy.processTitle}
          </h3>
          <p className="text-lg text-earth-brown/70 mb-10 font-light">
            {t.philosophy.processDesc}
          </p>
          <Link href="/contact">
            <button className="group relative px-10 py-4 bg-earth-brown text-cream overflow-hidden">
              <span className="relative z-10 uppercase tracking-widest text-xs font-bold flex items-center gap-2">
                {t.philosophy.cta} <ArrowRight size={14} />
              </span>
              <div className="absolute inset-0 bg-olive-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

// --- SUBCOMPONENTES CON EFECTOS ---

// Imagen con Parallax Vertical
function ParallaxImage({ src, alt, className, speed = 100 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`overflow-hidden ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}

// Background Full con Parallax Suave
function ParallaxImageBackground({ src }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div ref={ref} style={{ y, scale }} className="absolute inset-0 z-0">
      <Image src={src} alt="Background" fill className="object-cover" />
    </motion.div>
  );
}

// Tarjeta de Valor
function ValueCard({ title, desc, img, mt }) {
  return (
    <div className={`flex flex-col gap-6 ${mt}`}>
      <div className="h-[400px] w-full relative overflow-hidden group">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-earth-brown/10 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="px-4">
        <h3 className="text-7xl font-serif text-earth-brown/20 mb-[-20px] relative z-0">
          {title.charAt(0)}
        </h3>
        <h4 className="text-2xl font-serif text-earth-brown relative z-10">
          {title}
        </h4>
        <p className="text-sm text-earth-brown/60 mt-2 font-sans border-l border-olive-green pl-4">
          {desc}
        </p>
      </div>
    </div>
  );
}
