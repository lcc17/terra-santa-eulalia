"use client";
import FullScreenSection from "@/components/animations/FullScreenSection";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useApp } from "../lib/context";
import { motion } from "framer-motion";
import Link from "next/link";

// Image Constants
const HERO_IMG =
  "https://images.unsplash.com/photo-1718472755595-c44ce650288a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVycmElMjBkZXNpZXJ0b3xlbnwwfHwwfHx8MA%3D%3D";
const TEXTURE_IMG =
  "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=2000";
const WHOWEARE_IMG =
  "https://cdn.pixabay.com/photo/2015/12/21/04/12/restaurant-1102039_1280.jpg";

export default function Home() {
  const { t } = useApp();

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <FullScreenSection bgImage={HERO_IMG}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest italic opacity-90">
            {t.hero.subtitle}
          </p>
          <div className="pt-8 flex justify-center gap-4">
            <Link href="/domesticos">
              <Button variant="primary">{t.hero.cta}</Button>
            </Link>
            <Link href="/profesionales">
              <Button className="bg-white/20 backdrop-blur text-white border-white hover:bg-white hover:text-earth-brown">
                Area Profesional
              </Button>
            </Link>
          </div>
        </motion.div>
      </FullScreenSection>

      {/* QUIENES SOMOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative h-[500px] w-full rounded-[60px] overflow-hidden"
        >
          <div className="absolute inset-0 bg-olive-green/20 z-10 mix-blend-multiply" />
          <img
            src={WHOWEARE_IMG}
            alt="Salon Interior"
            fill
            className="object-cover w-full h-full"
            // sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-serif text-olive-green">
            {t.about.title}
          </h2>
          <p className="text-lg leading-relaxed text-earth-brown/80">
            {t.about.desc}
          </p>
          <ul className="space-y-2 list-disc pl-5 text-olive-dark">
            <li>Rituales de tierra y agua</li>
            <li>Cosmética viva y orgánica</li>
            <li>Silencio y desconexión</li>
          </ul>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-sand-light/20 rounded-t-[80px]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-16">
            {t.services.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card title={t.services.capillary} image={TEXTURE_IMG} />
            <Card
              title={t.services.spa}
              image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800"
            />
            <Card
              title="Formación"
              subtitle="Para Profesionales"
              image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
