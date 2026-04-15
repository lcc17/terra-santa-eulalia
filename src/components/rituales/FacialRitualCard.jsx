"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Check } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/**
 * Facial Ritual Card Component
 * Displays a facial ritual with selectable options (duration/price)
 * Each ritual has 2 options: Solo Facial or with Lavado + Masaje Capilar
 */
export default function FacialRitualCard({ ritual, index = 0 }) {
  const { title, desc, options } = ritual;
  const [selectedOption, setSelectedOption] = useState(0);

  const currentOption = options[selectedOption];

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
      className="bg-cream rounded-[20px] overflow-hidden shadow-lg border border-sand-light hover:border-olive-green/50 transition-all duration-500 flex flex-col"
    >
      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-2xl font-serif text-earth-brown leading-tight mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-earth-brown/70 leading-relaxed mb-6 flex-grow">
          {desc}
        </p>

        {/* Option Selector */}
        <div className="space-y-3 mb-6">
          {options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedOption(idx)}
              className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedOption === idx
                  ? "border-olive-green bg-olive-green/5"
                  : "border-sand-light/50 hover:border-olive-green/30"
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {/* Radio indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      selectedOption === idx
                        ? "border-olive-green"
                        : "border-sand-light"
                    }`}
                  >
                    {selectedOption === idx && (
                      <div className="w-2.5 h-2.5 rounded-full bg-olive-green" />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      selectedOption === idx
                        ? "text-earth-brown"
                        : "text-earth-brown/60"
                    }`}
                  >
                    {option.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-serif text-olive-green font-bold">
                    {option.price}
                  </span>
                  <span className="text-xs text-earth-brown/40 ml-2">
                    {option.time}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Summary */}
        <div className="bg-sand-light/10 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-olive-green" />
              <span className="text-sm text-earth-brown/80">
                {currentOption.name}
              </span>
            </div>
            <div className="flex items-center gap-1 text-earth-brown/60">
              <Clock size={14} />
              <span className="text-sm">{currentOption.time}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6 border-t border-sand-light/30">
          <WhatsAppButton
            ritualName={`${title} (${currentOption.name})`}
            className="w-full justify-center"
          />
        </div>
      </div>
    </motion.div>
  );
}