import { motion } from "framer-motion";
import Image from "next/image";

export default function Card({ title, subtitle, image, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className="bg-cream rounded-[40px] overflow-hidden shadow-lg border border-sand-light cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-earth-brown/10 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="p-8 text-center">
        <h3 className="text-xl font-serif text-earth-brown mb-2">{title}</h3>
        {subtitle && (
          <p className="text-sm text-olive-green uppercase tracking-wider">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
