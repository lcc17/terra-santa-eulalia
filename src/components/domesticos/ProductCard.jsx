"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/lib/context";

export default function ProductCard({ product }) {
  const { t } = useApp();

  // LÓGICA DE STOCK Y NOVEDAD
  // Si no tiene precio definido o es 0, asumimos que no hay stock/está por llegar.
  const hasStock = product.price && product.price > 0;

  // Simulamos lógica de novedad (puedes añadir 'isNew: true' en translations.js a futuro)
  // Por ahora, asumimos que si el ID incluye "serum" o "locion", es novedad para el demo.
  const isNew = product.isNew || product.id.includes("serum");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-cream rounded-[20px] overflow-hidden shadow-lg border border-sand-light flex flex-col items-center text-center group hover:border-olive-green transition-all duration-500 h-full relative"
    >
      {/* --- ETIQUETAS FLOTANTES --- */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 items-end">
        {/* 1. Etiqueta de Precio / Estado */}
        <div
          className={`text-xs font-serif px-3 py-1 rounded-sm tracking-widest font-bold backdrop-blur-md
          ${
            hasStock
              ? "bg-earth-brown/90 text-cream"
              : "bg-sand-light/90 text-earth-brown border border-earth-brown/20"
          }`}
        >
          {hasStock ? `${product.price.toFixed(2)}€` : (t?.products?.comingSoon || "PRÓXIMAMENTE")}
        </div>

        {/* 2. Etiqueta de Novedad (Solo si aplica) */}
        {isNew && (
          <div className="bg-olive-green text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest shadow-sm">
            {t?.products?.newBadge || "Novedad"}
          </div>
        )}
      </div>

      {/* --- IMAGEN DEL PRODUCTO --- */}
      <div className="relative w-full aspect-square overflow-hidden bg-white">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-700 
            ${hasStock ? "group-hover:scale-110" : "grayscale opacity-80"}`} // Efecto visual si no hay stock
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay Hover (Solo si hay stock) */}
        {hasStock && (
          <div className="absolute inset-0 bg-olive-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>

      {/* --- INFORMACIÓN --- */}
      <div className="p-6 flex flex-col flex-grow w-full">
        <p className="text-xs text-olive-green uppercase tracking-widest mb-2">
          {product.category}
        </p>
        <h3 className="text-xl font-serif text-earth-brown mb-2 group-hover:text-olive-green transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-earth-brown/70 mb-6 line-clamp-2 flex-grow font-light">
          {product.desc}
        </p>

        {/* --- BOTÓN DE ACCIÓN --- */}
        <div className="mt-auto pt-4 border-t border-sand-light/50 w-full">
          <Link
            href={`/domesticos/productos/${product.id}`}
            className="block w-full"
          >
            <button
              className={`w-full border py-2 rounded-full text-xs uppercase tracking-widest transition-colors
              ${
                hasStock
                  ? "border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-cream"
                  : "border-gray-300 text-gray-400 cursor-default hover:bg-transparent"
              }`}
            >
              {hasStock ? t.domestic.readMore || "Ver Detalles" : "Sin Stock"}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
