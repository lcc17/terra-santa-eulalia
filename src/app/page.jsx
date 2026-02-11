"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Importante para optimización
import { useApp } from "../lib/context";
import { translations } from "@/lib/translations"; // Para sacar los productos reales
import Button from "@/components/ui/Button";
import ProductCard from "@/components/domesticos/ProductCard"; // Reutilizamos tu componente estrella
import { ChevronDown, ArrowRight, Star } from "lucide-react";

// Assets
const WHOWEARE_IMG = "/images/who-we-are.png";
// Video de stock (Pexels) de texturas de arena/tierra en movimiento lento
const HERO_VIDEO = "/videos/hero-video.mp4"; // Usamos el link directo .mp4

export default function Home() {
  const { t, lang } = useApp();
  const { scrollY } = useScroll();

  // Obtener productos para "Best Sellers" (Tomamos los 3 primeros de la lista)
  const bestSellers = (lang === "es" ? translations.es.productsList : translations.en.productsList)?.slice(0, 3) || [];

  // Efecto Parallax suave
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-cream">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        <motion.div style={{ y: yText, opacity: opacityText }} className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
            className="text-sand-light uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-sans shadow-black drop-shadow-md"
          >
            {t.hero.subtitle}
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-cream leading-[0.9] tracking-tight mb-10 mix-blend-overlay"
          >
            Natural<br/><span className="italic font-light"> Hair Care</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <Link href="/domesticos">
              <Button className="bg-sand-light text-earth-brown hover:bg-cream px-10 py-4 text-sm tracking-widest uppercase font-bold min-w-[200px] shadow-xl">
                {t.hero.cta}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={40} strokeWidth={1} />
        </motion.div>
      </section>

      {/* --- 2. BEST SELLERS (TU IDEA IMPLEMENTADA) --- */}
      {/* Explicación: Puente inmediato entre la inspiración y la compra */}
      <section className="py-20 px-6 max-w-7xl mx-auto -mt-20 relative z-20">
        <div className="flex items-end justify-between mb-8 px-2">
           <h2 className="text-sand-light text-sm uppercase tracking-widest font-bold drop-shadow-md">
             Favoritos de la Botica
           </h2>
           <Link href="/domesticos/productos" className="text-sand-light/80 text-xs uppercase tracking-wider hover:text-white flex items-center gap-1 drop-shadow-md">
             Ver colección <ArrowRight size={12}/>
           </Link>
        </div>
        
        {/* Usamos un grid responsive para mostrar las ProductCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((prod, index) => (
             <motion.div
               key={prod.id}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.2 }}
               viewport={{ once: true }}
             >
               {/* Reutilizamos tu componente ProductCard tal cual */}
               <ProductCard product={prod} />
             </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. QUIENES SOMOS (FILOSOFÍA) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="relative h-[600px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-earth-brown/10 z-10 mix-blend-multiply" />
          <Image
            src={WHOWEARE_IMG}
            alt="Salon Interior"
            fill
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-olive-green text-xs font-bold tracking-widest uppercase border-b border-olive-green pb-2">
            Nuestra Filosofía
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-earth-brown leading-none">
            {t.about.title}
          </h2>
          <p className="text-xl leading-relaxed text-earth-brown/70 font-light">
            {t.about.desc}
          </p>
          <ul className="space-y-4 pt-4">
            {["Rituales de tierra y agua", "Cosmética viva y orgánica", "Silencio y desconexión"].map((item, i) => (
               <li key={i} className="flex items-center gap-4 text-earth-brown font-medium">
                 <span className="w-2 h-2 bg-olive-green rounded-full" />
                 {item}
               </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* --- 4. HIGH TICKET SERVICES (REDISEÑADO) --- */}
      {/* Ya no son cards pequeñas. Son paneles grandes que venden experiencia. */}
      <section className="py-32 bg-earth-brown text-sand-light relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-olive-green text-xs tracking-[0.3em] uppercase block mb-4">Experiencias Exclusivas</span>
             <h2 className="text-4xl md:text-5xl font-serif text-cream">{t.services.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Servicio 1: Terapia Capilar */}
            <ServiceCard 
              title={t.services.capillary}
              desc="Diagnóstico profundo y recuperación molecular con oxitocina."
              img="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800"
              href="/contact"
            />
            {/* Servicio 2: Spa Orgánico */}
            <ServiceCard 
              title={t.services.spa}
              desc="Desconexión total. Rituales de agua, masaje craneal y silencio."
              img="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800"
              href="/contact"
            />
          </div>

          <div className="mt-16 text-center">
            <Link href="/profesionales">
               <span className="inline-block border-b border-sand-light/30 pb-1 text-xs uppercase tracking-widest hover:text-white hover:border-white transition-all cursor-pointer">
                 ¿Eres profesional? Accede a formación
               </span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 5. SOCIAL PROOF (NUEVO) --- */}
      <section className="py-24 bg-sand-light/10 text-center px-6">
        <div className="max-w-2xl mx-auto">
           <div className="flex justify-center gap-1 text-olive-green mb-6">
             {[...Array(5)].map((_,i) => <Star key={i} size={20} fill="currentColor"/>)}
           </div>
           <p className="text-2xl md:text-3xl font-serif text-earth-brown italic mb-6">
             "Un antes y un después para mi cabello. La terapia de oxitocina no es solo estética, es salud real."
           </p>
           <p className="text-xs font-bold uppercase tracking-widest text-earth-brown/60">
             — Laura G., Cliente Verificada
           </p>
        </div>
      </section>

    </div>
  );
}

// Subcomponente Local para High Ticket (Diseño Editorial)
function ServiceCard({ title, desc, img, href }) {
  return (
    <Link href={href} className="group relative h-[400px] overflow-hidden rounded-[4px]">
      <Image 
        src={img} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-10 w-full">
        <h3 className="text-3xl font-serif text-cream mb-2 group-hover:translate-x-2 transition-transform">{title}</h3>
        <p className="text-sand-light/80 font-light text-sm max-w-xs">{desc}</p>
        <div className="mt-6 w-12 h-px bg-olive-green group-hover:w-24 transition-all duration-500" />
      </div>
    </Link>
  );
}