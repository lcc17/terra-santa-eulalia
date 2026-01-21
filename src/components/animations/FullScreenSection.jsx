"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FullScreenSection({
  children,
  className = "",
  bgImage,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center ${className}`}
    >
      {bgImage && (
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      )}
      <div className="relative z-10 w-full max-w-7xl px-6">{children}</div>

      {/* Decorative Organic Curves */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream to-transparent z-20" />
    </section>
  );
}
