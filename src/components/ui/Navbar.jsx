"use client";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/lib/context";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock, User, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { t, lang, toggleLang } = useApp();
  const [isOpen, setIsOpen] = useState(false); // Móvil
  const [isProductsHover, setIsProductsHover] = useState(false); // Hover Desktop

  // Extraer categorías únicas de la lista de productos para el menú
  // Esto hace que el menú sea dinámico: si añades una categoría nueva en translations, aparece aquí.
  const productList = t.productsList || [];
  const categories = [...new Set(productList.map((p) => p.category))];

  return (
    <nav
      className="fixed w-full z-50 top-0 left-0"
      onMouseLeave={() => setIsProductsHover(false)} // Cierra el menú al salir del nav
    >
      {/* Barra principal */}
      <div className="bg-cream/95 backdrop-blur-md border-b border-sand-light/50 w-full px-6 py-4 relative z-50">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center relative">
          {/* 1. IZQUIERDA: Navegación Principal */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-start">
            {/* ENLACE "NUESTROS RITUALES" CON DROPDOWN */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsProductsHover(true)}
            >
              <Link
                href="/domesticos/productos"
                className="flex items-center gap-1 font-serif text-earth-brown hover:text-olive-green transition-colors text-sm tracking-wide uppercase py-2"
                onClick={() => setIsProductsHover(false)}
              >
                {t.nav.products}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isProductsHover ? "rotate-180 text-olive-green" : "opacity-50"}`}
                />
              </Link>
            </div>

            {/* ENLACE "UNIVERSO TERRA" (Doméstico Landing) */}
            <Link
              href="/domesticos"
              className="flex items-center gap-1 font-serif text-earth-brown hover:text-olive-green transition-colors text-sm tracking-wide uppercase"
            >
              {t.nav.domestic}
            </Link>
          </div>

          {/* 2. CENTRO: Logotipo */}
          <div className="flex-1 flex justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
            <Link href="/" className="block">
              <Image
                src="/logo-terra-santa-eulalia-cosmetica.png"
                alt="Terra Santa Eulalia Logo"
                width={180}
                height={60}
                className="h-14 md:h-16 w-auto object-contain" // Ajustado tamaño ligeramente para elegancia
                priority
              />
            </Link>
          </div>

          {/* 3. DERECHA: Utilidades y Área Profesional */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
            {/* Área Profesional */}
            <Link
              href="/profesionales"
              className="flex items-center gap-2 text-earth-brown hover:text-olive-green transition-colors group"
            >
              <Lock
                size={16}
                className="text-olive-green group-hover:scale-110 transition-transform"
              />
              <span className="text-sm font-medium tracking-wide">
                {t.nav.pro}
              </span>
            </Link>

            <div className="h-4 w-px bg-sand-light"></div>

            {/* Icono Usuario (Área Cliente/Login futuro) */}
            <Link
              href="/profesionales" // O link a login de cliente si existiera
              className="text-earth-brown hover:text-olive-green transition-colors"
            >
              <User size={18} />
            </Link>

            {/* Selector de Idioma */}
            <button
              onClick={toggleLang}
              className="ml-2 text-[10px] font-bold text-olive-green border border-olive-green rounded-full px-2 py-0.5 hover:bg-olive-green hover:text-cream transition-colors uppercase"
            >
              {lang}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden flex-1 justify-end">
            <button
              className="text-earth-brown p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MEGA MENU DESKTOP (Desplegable de Categorías) --- */}
      <AnimatePresence>
        {isProductsHover && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-[100%] left-0 w-full bg-cream border-b border-sand-light shadow-xl z-40"
            onMouseEnter={() => setIsProductsHover(true)}
            onMouseLeave={() => setIsProductsHover(false)}
          >
            <div className="max-w-screen-2xl mx-auto px-6 py-12 grid grid-cols-4 gap-8">
              {/* Columna 1: Intro */}
              <div className="col-span-1 border-r border-sand-light/30 pr-8">
                <h3 className="font-serif text-2xl text-earth-brown mb-4">
                  La Botica Natural
                </h3>
                <p className="text-sm opacity-70 mb-6 leading-relaxed">
                  Descubre nuestras fórmulas vivas. Plantas, arcillas y aceites
                  creados para nutrir sin dañar.
                </p>
                <Link
                  href="/domesticos/productos"
                  className="text-olive-green text-xs font-bold uppercase tracking-widest hover:underline"
                  onClick={() => setIsProductsHover(false)}
                >
                  Ver todo el catálogo →
                </Link>
              </div>

              {/* Columna 2 y 3: Categorías Dinámicas */}
              <div className="col-span-3 grid grid-cols-3 gap-6">
                {categories.length > 0 ? (
                  categories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={`/domesticos/productos`} // A futuro: ?category=${cat}
                      className="group"
                      onClick={() => setIsProductsHover(false)}
                    >
                      <div className="h-full p-4 rounded-xl hover:bg-sand-light/20 transition-colors">
                        <span className="text-olive-green font-serif text-lg group-hover:translate-x-1 transition-transform inline-block">
                          {cat}
                        </span>
                        <p className="text-xs opacity-50 mt-1">
                          Explorar {cat.toLowerCase()}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm opacity-50">Cargando categorías...</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MENU MÓVIL (Simple) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[70px] bg-cream z-40 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-8 gap-8 text-center text-earth-brown font-serif">
              <Link
                href="/domesticos/productos"
                onClick={() => setIsOpen(false)}
                className="text-2xl hover:text-olive-green"
              >
                {t.nav.products}
              </Link>

              {/* Categorías en móvil (simple lista) */}
              <div className="flex flex-col gap-3 text-sm opacity-70">
                {categories.map((cat, idx) => (
                  <span key={idx}>{cat}</span>
                ))}
              </div>

              <div className="h-px w-20 mx-auto bg-sand-light/50 my-2"></div>

              <Link
                href="/domesticos"
                onClick={() => setIsOpen(false)}
                className="text-2xl hover:text-olive-green"
              >
                {t.nav.domestic}
              </Link>

              <Link
                href="/profesionales"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 text-xl font-medium mt-4"
              >
                <Lock size={18} />
                {t.nav.pro}
              </Link>

              <button
                onClick={() => {
                  toggleLang();
                  setIsOpen(false);
                }}
                className="mt-8 text-xs tracking-widest uppercase text-olive-green border border-olive-green px-4 py-2 rounded-full w-fit mx-auto"
              >
                Idioma: {lang.toUpperCase()}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
