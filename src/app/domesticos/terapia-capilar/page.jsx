"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/context";
import {
  Microscope,
  Activity,
  Droplets,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Assets
const CAPILLARY_VIDEO =
  "https://videos.pexels.com/video-files/3756003/3756003-hd_1920_1080_25fps.mp4";

export default function TerapiaCapilarPage() {
  const { t } = useApp();

  const data = t?.capillaryPage;
  const steps = data?.steps || [];
  const solutions = data?.solutions || []; // Cargamos las nuevas soluciones

  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* 1. HERO SPLIT */}
      <section className="relative h-[80vh] flex flex-col md:flex-row overflow-hidden">
        {/* Lado Video */}
        <div className="w-full md:w-1/2 relative bg-black order-2 md:order-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src={CAPILLARY_VIDEO} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* Lado Texto */}
        <div className="w-full md:w-1/2 bg-earth-brown flex flex-col justify-center px-10 md:px-20 order-1 md:order-2 text-sand-light">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-olive-green text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
              High Ticket Service
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-cream mb-6 leading-tight">
              {data?.title}
            </h1>
            <p className="text-lg font-light opacity-80 mb-10 leading-relaxed">
              {data?.desc}
            </p>
            <Link href="/contact">
              <button className="border border-sand-light px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-sand-light hover:text-earth-brown transition-colors">
                {data?.cta}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. EL DIAGNÓSTICO */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center border-b border-earth-brown/10">
        <div className="mb-16">
          <Microscope
            size={48}
            className="text-earth-brown mx-auto mb-6"
            strokeWidth={1}
          />
          <h2 className="text-4xl font-serif text-earth-brown mb-4">
            {data?.diagnosisTitle}
          </h2>
          <p className="text-xl text-olive-green italic">
            {data?.diagnosisDesc}
          </p>
        </div>

        {/* Pasos del Método (Iconos) */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 shadow-lg border-t-4 border-olive-green relative overflow-hidden group"
            >
              <span className="absolute -right-4 -top-4 text-9xl font-serif text-sand-light/20 group-hover:text-sand-light/40 transition-colors pointer-events-none">
                {idx + 1}
              </span>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-6 mx-auto">
                  {idx === 0 && (
                    <Activity className="text-earth-brown" size={20} />
                  )}
                  {idx === 1 && (
                    <Droplets className="text-earth-brown" size={20} />
                  )}
                  {idx === 2 && (
                    <CheckCircle2 className="text-earth-brown" size={20} />
                  )}
                </div>
                <h3 className="text-2xl font-serif text-earth-brown mb-3">
                  {step.title}
                </h3>
                <p className="text-earth-brown/70 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. NUEVA SECCIÓN: SOLUCIONES TERAPÉUTICAS (Detox & Vitalidad) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-olive-green text-xs uppercase tracking-widest font-bold">
            {t?.cards?.therapySub || "Green Zone"}
          </span>
          <h2 className="text-4xl font-serif text-earth-brown mt-2">
            {data?.solutionsTitle || "Soluciones Terapéuticas"}
          </h2>
          <p className="text-earth-brown/60 italic mt-2">
            {data?.solutionsDesc || "Protocolos para patologías específicas"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-earth-brown/5 rounded-2xl p-8 border border-earth-brown/10 hover:border-olive-green transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  {idx === 0 ? (
                    <ShieldCheck className="text-olive-green" size={24} />
                  ) : (
                    <Leaf className="text-olive-green" size={24} />
                  )}
                </div>
                <span className="bg-earth-brown text-cream text-sm font-bold px-3 py-1 rounded-full">
                  {sol.price}
                </span>
              </div>

              <h3 className="text-2xl font-serif text-earth-brown mb-2">
                {sol.title}
              </h3>
              <p className="text-olive-green text-xs font-bold uppercase tracking-widest mb-4">
                {sol.problem}
              </p>
              <p className="text-earth-brown/80 font-light mb-8">{sol.desc}</p>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-earth-brown text-sm font-bold uppercase tracking-wider hover:text-olive-green transition-colors"
              >
                {data?.scheduleRitual || "Agendar este ritual"} <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="bg-sand-light/20 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-serif text-earth-brown mb-6">
            {data?.ctaRecoveryTitle || "Recupera la memoria vital de tu cabello"}
          </h3>
          <p className="mb-8 opacity-80">
            {data?.ctaRecoveryDesc || "Este tratamiento requiere cita previa y valoración de nuestros especialistas en C/ Provença 213."}
          </p>
          <Link href="/contact">
            <button className="bg-olive-green text-white px-12 py-4 rounded-full uppercase tracking-widest text-sm font-bold shadow-xl hover:bg-earth-brown transition-colors">
              {data?.ctaRecoveryBtn || "Reservar Valoración"}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
