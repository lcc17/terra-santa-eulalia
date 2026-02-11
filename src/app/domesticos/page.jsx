"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useApp } from "@/lib/context";
import { translations } from "@/lib/translations";
// Importaciones absolutas
import ProductCard from "@/components/domesticos/ProductCard";
import FAQSlider from "@/components/domesticos/FAQSlider";
import { Play, ArrowRight, MapPin } from "lucide-react";

// Metadatos para SEO (Se ejecutan en el servidor aunque el componente sea cliente en Next 13/14 suele requerir layout, pero aquí lo dejamos preparado)
// Nota: En "use client", metadata debe ir en layout.js o page.js padre. 
// Para simplificar, asumimos que este archivo renderiza el contenido visual.

export default function DomesticPage() {
  const { t, lang } = useApp();

  // Fallback seguro. Mostramos los 3 primeros como "Destacados"
  const products = (
    lang === "es"
      ? translations?.es?.productsList
      : translations?.en?.productsList
  )?.slice(0, 3) || [];

  return (
    <div className="bg-cream min-h-screen pb-20">
      
      {/* 1. HERO "AGRESIVO" E INMERSIVO (Actualización Visual) */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center">
        {/* Fondo de Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-90"
          >
             {/* Usa un video de textura suave (arena/agua) */}
             <source src="/videos/domesticos-natural.mp4" type="video/mp4" />
          </video>
          {/* Overlay para contraste */}
          <div className="absolute inset-0 bg-earth-brown/40 mix-blend-multiply" />
        </div>

        {/* Contenido Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-4xl mt-20"
        >
          <span className="text-sand-light uppercase tracking-[0.4em] text-xs block mb-4 font-bold shadow-black drop-shadow-md">
            Universo Terra
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6 drop-shadow-xl">
            {t.domestic.title}
          </h1>
          <p className="text-lg md:text-xl text-sand-light/90 font-light italic mb-10 max-w-2xl mx-auto drop-shadow-md">
            "{t.domestic.productsDesc}"
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/domesticos/productos">
              <button className="bg-cream text-earth-brown px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-olive-green hover:text-white transition-colors shadow-2xl">
                {t.domestic.viewMore}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SECCIÓN PRODUCTOS DESTACADOS (Fondo Oscuro) */}
      <section className="bg-earth-brown py-20 rounded-t-[50px] -mt-10 relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-sand-light/10 pb-6 gap-4">
            <div>
              <span className="text-olive-green text-xs tracking-widest uppercase">La Botica</span>
              <h2 className="text-3xl md:text-4xl font-serif text-sand-light mt-2">{t.domestic.productsTitle}</h2>
            </div>
            <Link href="/domesticos/productos" className="flex items-center gap-2 text-sand-light/70 hover:text-white transition-colors text-sm uppercase tracking-wide">
              Ver catálogo completo <ArrowRight size={16}/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products &&
              products.map((prod, index) => (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard product={prod} />
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN VIDEOS DIY (Rituales) */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-earth-brown mb-4">
            {t.domestic.diyTitle}
          </h2>
          <div className="w-20 h-1 bg-olive-green mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Video 1 */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative w-full aspect-video rounded-[30px] overflow-hidden shadow-2xl group cursor-pointer"
          >
            {/* Gradiente Corregido: Tonos Tierra */}
            <div className="absolute inset-0 bg-gradient-to-tr from-earth-brown to-olive-green opacity-20 group-hover:opacity-0 transition-opacity z-10 pointer-events-none" />
            
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/casXEgFpFRQ?controls=0"
              title="YouTube video player"
              className="absolute inset-0 w-full h-full object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            
            {/* Overlay estético (desaparece al interactuar si el iframe tuviera controles, pero aqui es visual) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="w-16 h-16 bg-cream/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="text-earth-brown fill-earth-brown ml-1" size={24} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
               <p className="text-white font-serif text-xl">Ritual de Preparación de Arcilla</p>
            </div>
          </motion.div>

          {/* Video 2 */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative w-full aspect-video rounded-[30px] overflow-hidden shadow-2xl group cursor-pointer"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-olive-green to-sand-dark opacity-20 group-hover:opacity-0 transition-opacity z-10 pointer-events-none" />
            
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=0"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="w-16 h-16 bg-cream/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="text-earth-brown fill-earth-brown ml-1" size={24} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
               <p className="text-white font-serif text-xl">Masaje Craneal Ayurvédico</p>
            </div>
          </motion.div>
        </div>

        {/* Call To Action Físico Mejorado */}
        <div className="bg-sand-light/30 rounded-[30px] p-8 md:p-12 text-center max-w-3xl mx-auto border border-sand-light">
          <MapPin size={32} className="text-earth-brown mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-earth-brown mb-2">Experiencia High Ticket en Tienda</h3>
          <p className="opacity-80 mb-6">
            Para un diagnóstico profundo y terapias de oxitocina, te esperamos en nuestro espacio físico.
          </p>
          <Link href="/contact"> {/* Ajustar ruta a tu contacto real */}
            <button className="bg-earth-brown text-sand-light px-8 py-3 rounded-full font-serif uppercase tracking-widest text-xs hover:bg-olive-green transition-colors">
              {t.domestic.visitUs}
            </button>
          </Link>
        </div>
      </section>

      {/* 4. Sección Preguntas Recurrentes */}
      <section className="py-12 px-6 border-t border-earth-brown/10">
        <h2 className="text-3xl font-serif text-center mb-10 text-earth-brown">
          {t.domestic.faqTitle}
        </h2>
        <FAQSlider />
      </section>
    </div>
  );
}