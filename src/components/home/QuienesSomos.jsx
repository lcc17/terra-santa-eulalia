"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/context";
import { ArrowRight } from "lucide-react";

// Assets (Asegúrate de tener estas imágenes o cámbialas por las tuyas)
// FOTO 1: Retrato de la fundadora o alguien trabajando con plantas (Vertical)
const FOUNDER_IMG =
  "/images/laia-salomon.png";
// FOTO 2: Detalle de textura (Barro, manos, planta) (Cuadrada/Pequeña)
const TEXTURE_IMG =
  "https://cdn.pixabay.com/photo/2018/03/27/19/42/people-3267084_1280.jpg";

export default function QuienesSomos() {
  const { t } = useApp();
  const { scrollYProgress } = useScroll();

  // --- EFECTOS PARALLAX ---
  // La imagen principal sube suavemente
  const yFounder = useTransform(scrollYProgress, [0, 1], [0, -100]);
  // La imagen de textura sube más rápido (sensación de profundidad)
  const yTexture = useTransform(scrollYProgress, [0, 1], [0, -200]);
  // El texto aparece suavemente
  const opacityText = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section className="relative py-32 overflow-hidden bg-cream">
      {/* 1. ELEMENTO DECORATIVO DE FONDO (Mancha orgánica que respira) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-earth-brown/5 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- BLOQUE VISUAL (IZQUIERDA) --- */}
          <div className="relative h-[600px] w-full hidden md:block">
            {/* Imagen Principal (Fundadora) */}
            <motion.div
              style={{ y: yFounder }}
              className="absolute left-0 top-0 w-[80%] h-[90%] rounded-[4px] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src={FOUNDER_IMG}
                alt="Fundadora Terra Santa Eulalia"
                fill
                className="object-cover"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-earth-brown/10 mix-blend-multiply" />
            </motion.div>

            {/* Imagen Secundaria (Textura Flotante) */}
            <motion.div
              style={{ y: yTexture }}
              className="absolute right-0 bottom-10 w-[50%] h-[40%] rounded-[4px] overflow-hidden shadow-xl border-4 border-cream z-20"
            >
              <Image
                src={TEXTURE_IMG}
                alt="Detalle Textura Orgánica"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Círculo Gráfico "Since" o "Organic" */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -left-10 bottom-20 w-32 h-32 rounded-full border border-earth-brown/30 flex items-center justify-center z-0"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full p-2 opacity-50"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="text-[12px] uppercase tracking-widest fill-earth-brown font-bold">
                  <textPath href="#circlePath" startOffset="0%">
                    • Natural Soul • Organic Care • Terra •
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Versión Móvil (Imagen Simple) */}
          <div className="md:hidden h-[400px] relative rounded-[40px] overflow-hidden mb-8">
            <Image
              src={FOUNDER_IMG}
              alt="Fundadora"
              fill
              className="object-cover"
            />
          </div>

          {/* --- BLOQUE DE TEXTO (DERECHA) --- */}
          <motion.div style={{ opacity: opacityText }} className="relative">
            <span className="text-olive-green text-xs font-bold tracking-[0.3em] uppercase block mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-olive-green"></span>
              El Origen
            </span>

            <h2 className="text-5xl md:text-7xl font-serif text-earth-brown mb-8 leading-[0.9]">
              Manos que
              <br />
              <span className="italic opacity-80">escuchan</span> la tierra.
            </h2>

            <p className="text-xl text-earth-brown/80 font-light leading-relaxed mb-8">
              "Terra no nació en un laboratorio, nació de la necesidad de volver
              al origen. Soy{" "}
              <span className="font-semibold text-olive-green">
                Laia Salomon
              </span>
              , y creo firmemente que la verdadera belleza es el resultado de la
              salud, el silencio y el respeto por los tiempos de la naturaleza."
            </p>

            <div className="flex flex-col gap-6">
              <div className="pl-6 border-l border-earth-brown/20 space-y-2">
                <p className="text-sm font-serif italic text-earth-brown/60">
                  Fundadora & Directora Creativa
                </p>
                {/* Aquí iría la firma si tienes la imagen .png */}
                <h3 className="text-3xl font-handwriting text-earth-brown font-light">
                  Laia Salomon
                </h3>
              </div>

              <div className="mt-8">
                <Link href="/filosofia">
                  {" "}
                  {/* O la ruta que definas */}
                  <button className="group flex items-center gap-4 text-earth-brown uppercase tracking-widest text-xs font-bold hover:text-olive-green transition-colors">
                    <span className="border-b border-earth-brown group-hover:border-olive-green pb-1 transition-colors">
                      Descubrir nuestra historia
                    </span>
                    <div className="w-8 h-8 rounded-full border border-earth-brown/30 flex items-center justify-center group-hover:bg-olive-green group-hover:border-olive-green group-hover:text-white transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
