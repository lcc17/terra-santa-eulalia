"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useSchedule } from "@/lib/useSchedule";

const PHONE_NUMBER = "34602468686";

/**
 * Reusable WhatsApp CTA button for booking
 * Formats message with encoded ritual name
 * Shows next available time slot when business is closed
 */
export default function WhatsAppButton({
  ritualName = "",
  variant = "default",
  className = "",
  children,
}) {
  const { isOpen, nextOpenTime } = useSchedule();

  const handleWhatsAppClick = () => {
    let message = "Hola, me interesa reservar";
    if (ritualName) {
      message += ` ${ritualName}`;
    }
    message += " de Terra Santa Eulalia";

    // Add next available time if closed
    if (!isOpen && nextOpenTime) {
      message += `. El próximo horario disponible es ${nextOpenTime}.`;
    }

    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Variant styles
  const variants = {
    default: {
      container: "bg-olive-green text-cream hover:bg-olive-dark shadow-md",
      icon: "text-cream",
    },
    floating: {
      container: "bg-white/10 backdrop-blur-md border border-white/30 hover:bg-green-600 hover:border-green-600",
      icon: "text-white",
    },
    outline: {
      container: "border border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-cream",
      icon: "text-earth-brown",
    },
  };

  const style = variants[variant] || variants.default;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      className={`px-6 py-3 rounded-full font-serif transition-all duration-300 text-sm tracking-widest uppercase flex items-center gap-2 ${style.container} ${className}`}
    >
      <MessageCircle size={18} className={style.icon} />
      {children || "Reservar por WhatsApp"}
    </motion.button>
  );
}