"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "../../lib/context";

export default function ProductCard({ product }) {
  const { t } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-cream rounded-[30px] p-6 shadow-lg border border-sand-light flex flex-col items-center text-center group hover:border-olive-green transition-colors duration-300"
    >
      {/* Imagen superior redondeada como en la captura */}
      <div className="relative w-full h-48 rounded-[20px] overflow-hidden mb-6 shadow-inner">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-xl font-serif text-earth-brown mb-2">
        {product.name}
      </h3>
      <p className="text-sm text-earth-brown/70 mb-6 line-clamp-3">
        {product.desc}
      </p>

      {/* Botón alineado a la derecha/abajo como en la captura */}
      <div className="mt-auto w-full flex justify-end">
        <Link href={`/domesticos/productos/${product.id}`}>
          <button className="bg-olive-green text-white px-6 py-2 rounded-full text-sm hover:bg-olive-dark transition-colors">
            {t.domestic.readMore}
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
