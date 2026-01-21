"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Importación dinámica para evitar errores de Build y SSR (Server Side Rendering)
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false, // Esto le dice a Next.js que NO intente renderizar el player en el servidor
  loading: () => (
    <div className="w-full h-full bg-sand-light/20 animate-pulse" />
  ), // Skeleton mientras carga
});

export default function VideoEmbed({ url, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="rounded-3xl overflow-hidden border-4 border-sand-light shadow-xl bg-black"
    >
      <div className="aspect-video relative">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          light={true} // Shows thumbnail first
        />
      </div>
      <div className="p-4 bg-cream">
        <h4 className="font-serif text-earth-brown">{title}</h4>
      </div>
    </motion.div>
  );
}
