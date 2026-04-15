"use client";
import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/**
 * Extras Card Component
 * Compact cards for express treatments (Lavado Spa, Masaje Facial + Lavado)
 * Shorter duration, quick booking
 */
export default function ExtrasCard({ extra, index = 0 }) {
  const { title, duration, price } = extra;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: index * 0.1,
      }}
      className="bg-cream rounded-[16px] overflow-hidden shadow-md border border-sand-light/50 hover:border-olive-green/30 transition-all duration-400 flex flex-col"
    >
      <div className="p-6 flex flex-col flex-grow">
        {/* Express Badge */}
        <div className="flex items-center gap-1.5 mb-4">
          <Zap size={14} className="text-olive-green" />
          <span className="text-[10px] uppercase tracking-widest text-olive-green font-bold">
            Express
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif text-earth-brown mb-2">{title}</h3>

        {/* Duration & Price Row */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex items-center gap-1.5 text-earth-brown/50">
            <Clock size={12} />
            <span className="text-xs">{duration}</span>
          </div>
          <span className="text-xl font-serif text-olive-green font-bold">
            {price}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <WhatsAppButton
            ritualName={title}
            className="w-full justify-center text-xs py-2"
          />
        </div>
      </div>
    </motion.div>
  );
}