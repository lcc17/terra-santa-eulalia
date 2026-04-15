"use client";
import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/**
 * Hair Ritual Card Component
 * Displays a single hair ritual with duration, price, and booking CTA
 * Supports isHighlight prop for premium/signature rituals
 */
export default function RitualCard({ ritual, index = 0 }) {
  const { title, desc, extra, duration, price, isHighlight } = ritual;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: index * 0.15,
      }}
      whileHover={{ y: -8 }}
      className={`relative bg-cream rounded-[20px] overflow-hidden shadow-lg border transition-all duration-500 flex flex-col ${
        isHighlight
          ? "border-olive-green shadow-olive-green/20"
          : "border-sand-light hover:border-olive-green/50"
      }`}
    >
      {/* Highlight Badge */}
      {isHighlight && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-olive-green text-cream text-[10px] uppercase font-bold px-3 py-1 tracking-widest rounded-full flex items-center gap-1 shadow-md">
            <Sparkles size={12} />
            Signature
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Header: Title + Price */}
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-serif text-earth-brown leading-tight pr-4">
            {title}
          </h3>
          <div className="text-right flex-shrink-0">
            <span className="block text-2xl font-serif text-olive-green font-bold">
              {price}
            </span>
            <span className="text-xs text-earth-brown/50 uppercase tracking-wider">
              {duration}
            </span>
          </div>
        </div>

        {/* Duration Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Clock size={14} className="text-olive-green" />
          <span className="text-xs text-earth-brown/60 uppercase tracking-wider">
            {duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-earth-brown/70 leading-relaxed mb-4 flex-grow">
          {desc}
        </p>

        {/* Extra Info */}
        {extra && (
          <p className="text-xs text-olive-green/80 italic mb-6 border-l-2 border-olive-green/30 pl-3">
            {extra}
          </p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-sand-light/30">
          <WhatsAppButton
            ritualName={title}
            className="w-full justify-center"
          />
        </div>
      </div>

      {/* Decorative bottom line for highlights */}
      {isHighlight && (
        <div className="h-1 bg-gradient-to-r from-olive-green/50 via-olive-green to-olive-green/50" />
      )}
    </motion.div>
  );
}