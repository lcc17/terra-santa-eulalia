"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useApp } from "../../lib/context";
import { translations } from "@/lib/translations"; // Importar datos directos para mapear
import ProductCard from "./ProductCard";
import FAQSlider from "./FAQSlider";
import { Play } from "lucide-react";

export default function DomesticPage() {
  const { t, lang } = useApp();
  const products =
    lang === "es" ? translations.es.productsList : translations.en.productsList;

  return (
    <div className="bg-sand-light/30 min-h-screen pb-20">
      {/* 1. Header (Título centrado) */}
      <section className="pt-32 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-earth-brown"
        >
          {t.domestic.title}
        </motion.h1>
      </section>

      {/* 2. Sección Productos (Fondo oscuro según captura) */}
      <section className="bg-earth-brown/90 py-16 rounded-t-[50px] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products &&
              products.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
          </div>

          {/* Botón Ver Más centrado abajo */}
          <div className="mt-12 text-center">
            <Link href="/domesticos/productos">
              <button className="bg-olive-green/20 border border-sand-light text-sand-light px-8 py-3 rounded-full hover:bg-sand-light hover:text-earth-brown transition-all font-serif tracking-widest uppercase">
                {t.domestic.viewMore}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Sección Videos DIY (Estilo ancho con gradiente) */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl font-serif text-center text-earth-brown">
          {t.domestic.diyTitle}
        </h2>

        {/* Video 1 */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer bg-gradient-to-r from-olive-green to-blue-900" // Gradiente simulando la captura
        >
          {/* Simulación de Video o Iframe Real */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/casXEgFpFRQ?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none md:pointer-events-auto"
          ></iframe>

          {/* Botón Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="text-white fill-white ml-1" size={32} />
            </div>
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white font-serif text-xl z-20">
            Video &quot;Hazlo tú mismo&quot; en Youtube 1
          </p>
        </motion.div>

        {/* Video 2 (Duplicado para layout) */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="relative w-full aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl group bg-gradient-to-r from-blue-900 to-olive-green"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=0"
            className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
              <Play className="text-white fill-white ml-1" size={32} />
            </div>
          </div>
          <p className="absolute bottom-6 left-0 right-0 text-center text-white font-serif text-xl z-20">
            Video &quot;Hazlo tú mismo&quot; en Youtube 2
          </p>
        </motion.div>

        <div className="text-center">
          <Link href="/espacio-fisico">
            <button className="bg-earth-brown text-sand-light px-10 py-4 rounded-lg font-serif uppercase tracking-widest hover:bg-olive-green transition-colors">
              {t.domestic.visitUs}
            </button>
          </Link>
        </div>
      </section>

      {/* 4. Sección Preguntas Recurrentes */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-serif text-center mb-10 text-earth-brown">
          {t.domestic.faqTitle}
        </h2>
        <FAQSlider />
      </section>
    </div>
  );
}