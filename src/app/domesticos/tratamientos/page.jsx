"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/context";
import { ArrowRight, Clock, Sparkles, Star, Plus } from "lucide-react";

// Assets
const HERO_IMG =
  "/images/tratamientos-organicos-naturales.png";

export default function TratamientosPage() {
  const { t } = useApp();

  const data = t?.treatmentsPage;
  const hairRituals = data?.hairRituals?.list || [];
  const facialRituals = data?.facialRituals?.list || [];
  const extras = data?.extras || [];

  return (
    <div className="bg-cream min-h-screen pb-20">
      {/* 1. HERO SENSORIAL */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMG}
            alt="Rituales Terra"
            fill
            className="object-cover opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-earth-brown/50 mix-blend-multiply" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-2xl"
        >
          <span className="text-sand-light uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            {data?.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6 drop-shadow-lg">
            {data?.title}
          </h1>
          <p className="text-sand-light/90 text-lg font-light italic">
            {data?.desc}
          </p>
        </motion.div>
      </section>

      {/* 2. RITUALES CAPILARES (La Base) */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-earth-brown mb-4">
            {data?.hairRituals?.title}
          </h2>
          <p className="text-earth-brown/60 italic">
            {data?.hairRituals?.desc}
          </p>
        </div>

        <div className="grid gap-12">
          {hairRituals.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative bg-white border p-8 md:p-10 rounded-[2px] transition-all duration-500
                ${
                  item.isHighlight
                    ? "border-olive-green shadow-xl bg-olive-green/5"
                    : "border-sand-light/40 hover:shadow-lg"
                }`}
            >
              {item.isHighlight && (
                <div className="absolute top-0 right-0 bg-olive-green text-white text-[10px] uppercase font-bold px-4 py-1 tracking-widest">
                  Experiencia Signature
                </div>
              )}

              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles
                      size={16}
                      className={
                        item.isHighlight
                          ? "text-olive-green"
                          : "text-earth-brown"
                      }
                    />
                    <h3 className="text-2xl font-serif text-earth-brown">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-earth-brown/80 leading-relaxed font-light text-lg mb-4">
                    {item.desc}
                  </p>
                  {item.extra && (
                    <p className="text-sm text-olive-green font-medium mb-6 flex items-center gap-2">
                      <Plus size={14} /> {item.extra}
                    </p>
                  )}

                  <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-earth-brown/60 font-bold">
                    <span className="flex items-center gap-2">
                      <Clock size={14} /> {item.duration}
                    </span>
                    <span className="px-3 py-1 bg-sand-light/30 rounded-full text-earth-brown">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="flex items-center self-end md:self-center">
                  <Link href="/contact">
                    <button className="w-12 h-12 rounded-full border border-earth-brown/20 flex items-center justify-center hover:bg-earth-brown hover:text-cream transition-all group-hover:scale-110">
                      <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. RITUALES FACIALES DE LUZ (Nuevo Diseño con Opciones) */}
      {/* <section className="bg-sand-light/20 py-24 px-6 border-t border-earth-brown/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Star size={32} className="text-earth-brown mx-auto mb-4" />
            <h2 className="text-4xl font-serif text-earth-brown mb-4">
              {data?.facialRituals?.title}
            </h2>
            <p className="text-earth-brown/60 italic">
              {data?.facialRituals?.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facialRituals.map((ritual, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 border border-sand-light/30 shadow-sm rounded-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-serif text-earth-brown mb-3">
                    {ritual.title}
                  </h3>
                  <p className="text-earth-brown/70 font-light mb-6 text-sm">
                    {ritual.desc}
                  </p>
                </div>

                <div className="space-y-3 border-t border-sand-light/20 pt-4">
                  {ritual.options.map((opt, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-earth-brown/80">{opt.name}</span>
                      <div className="flex gap-3 text-xs font-bold text-olive-green">
                        <span>{opt.time}</span>
                        <span className="bg-sand-light/30 px-2 py-0.5 rounded">
                          {opt.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="text-xs uppercase tracking-widest text-earth-brown hover:text-olive-green font-bold border-b border-transparent hover:border-olive-green transition-all pb-1"
                  >
                    Reservar este ritual
                  </Link>
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* EXTRAS */}
          {/* <div className="mt-16 bg-white p-8 rounded-xl border border-sand-light/50 max-w-2xl mx-auto">
            <h4 className="text-center font-serif text-xl text-earth-brown mb-6">
              Complementos Express
            </h4>
            <div className="flex flex-col gap-4">
              {extras.map((extra, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-sand-light/20 pb-2 last:border-0"
                >
                  <span className="text-earth-brown font-medium">
                    {extra.title}
                  </span>
                  <div className="flex gap-4 text-xs font-bold text-olive-green">
                    <span>{extra.duration}</span>
                    <span>{extra.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Final */}
      <div className="text-center py-20 bg-cream">
        <Link href="/contact">
          <button className="bg-earth-brown text-cream px-12 py-4 uppercase tracking-widest text-xs font-bold hover:bg-olive-green transition-colors shadow-xl">
            {data?.cta}
          </button>
        </Link>
      </div>
    </div>
  );
}
