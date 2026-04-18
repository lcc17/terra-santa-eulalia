"use client";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/lib/context";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { t, lang, toggleLang } = useApp();
  const [isOpen, setIsOpen] = useState(false); // Móvil
  const [isSelectionHover, setIsSelectionHover] = useState(false); // Hover Desktop
  
  // --- LÓGICA DE SCROLL ---
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });
  // ------------------------

  // Extraer categorías únicas
  const productList = t.productsList || [];
  const categories = [...new Set(productList.map((p) => p.category))];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 font-serif" onMouseLeave={() => setIsSelectionHover(false)}>
      
      {/* --- PISO 1: LOGOTIPO (COLAPSABLE) --- */}
      {/* Se oculta (height: 0, opacity: 0) cuando haces scroll */}
      <motion.div 
        animate={{ 
          height: isScrolled ? 0 : "auto",
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -50 : 0
        }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} // Curva Bezier suave
        className="bg-cream w-full flex justify-center items-center overflow-hidden relative z-50"
      >
        <div className="py-8 md:py-12"> {/* Padding interno aumentado para santuario del logo */}
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            <Image
              src="/logo-terra-santa-eulalia-cosmetica.png"
              alt="Terra Santa Eulalia Logo"
              width={200}
              height={70}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        
        {/* Botón Móvil (Hamburguesa) - Solo visible cuando NO hay scroll aquí, luego pasa al piso 2 */}
        {!isScrolled && (
          <div className="absolute right-6 top-1/2 -translate-y-1/2 md:hidden">
            <button className="text-earth-brown p-1" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        )}
      </motion.div>

      {/* --- PISO 2: NAVEGACIÓN (STICKY) --- */}
      {/* Cambia de apariencia al hacer scroll */}
      <motion.div 
        animate={{ 
          backgroundColor: isScrolled ? "rgba(248, 245, 242, 0.9)" : "rgba(248, 245, 242, 0.95)", // Cream con opacidad
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          borderBottomColor: isScrolled ? "rgba(139, 115, 85, 0.1)" : "rgba(139, 115, 85, 0.3)",
          boxShadow: isScrolled ? "0 4px 20px -2px rgba(0, 0, 0, 0.05)" : "inset 0 2px 8px rgba(139, 115, 85, 0.04)"
        }}
        transition={{ duration: 0.5 }}
        className="w-full px-6 py-5 md:py-6 relative z-40 border-y border-sand-light/30 flex items-end justify-between"
      >
        <div className="max-w-screen-2xl mx-auto w-full flex justify-between items-end text-sm md:text-base tracking-[0.2em] uppercase font-medium text-earth-brown">
          
          {/* Si hay scroll, mostramos un mini-logo a la izquierda para mantener branding */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="mr-8 hidden md:block font-bold text-lg font-serif"
              >
                <Link href="/">TERRA</Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* LADO IZQUIERDO (Links) */}
          <div className="hidden md:flex items-end gap-16">
            <div 
              className="relative h-full flex items-center cursor-pointer group"
              onMouseEnter={() => setIsSelectionHover(true)}
            >
              <Link
                href="/domesticos/productos"
                className="flex items-center gap-2 hover:text-olive-green hover:-translate-y-0.5 transition-all duration-600 ease-out py-2"
                onClick={() => setIsSelectionHover(false)}
              >
                {t.nav.selection}
                <ChevronDown size={12} className={`transition-transform duration-600 ${isSelectionHover ? 'rotate-180 text-olive-green' : 'opacity-40'}`} />
              </Link>
            </div>
            <Link href="/filosofia" className="hover:text-olive-green hover:-translate-y-0.5 transition-all duration-600 ease-out">
              {t.nav.aboutTerra}
            </Link>
          </div>

          {/* LADO DERECHO (Links) */}
          <div className="hidden md:flex items-end gap-16 ml-auto">
            <Link href="/domesticos/tratamientos" className="hover:text-olive-green hover:-translate-y-0.5 transition-all duration-600 ease-out">
              {t.nav.treatments}
            </Link>
            <Link href="/rituales" className="hover:text-olive-green hover:-translate-y-0.5 transition-all duration-600 ease-out">
              {t.nav.rituales}
            </Link>
            <Link href="/profesionales" className="hover:text-olive-green hover:-translate-y-0.5 transition-all duration-600 ease-out relative group">
              {t.nav.proAccess}
              <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-olive-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>
            <button onClick={toggleLang} className="border border-earth-brown/30 rounded-full w-9 h-9 flex items-center justify-center hover:bg-earth-brown hover:text-cream transition-all duration-600 ease-out text-[11px] font-bold">
              {lang}
            </button>
          </div>

          {/* Botón Móvil en Scroll (Aparece aquí cuando el logo grande desaparece) */}
          <div className="md:hidden ml-auto">
             <button className="text-earth-brown p-1" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.div>

      {/* --- MEGA MENU DESKTOP --- */}
      <AnimatePresence>
        {isSelectionHover && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-[100%] left-0 w-full bg-cream border-b border-sand-light shadow-xl z-30"
            onMouseEnter={() => setIsSelectionHover(true)}
            onMouseLeave={() => setIsSelectionHover(false)}
          >
             {/* ... (MISMO CONTENIDO DEL MEGA MENU ANTERIOR) ... */}
             <div className="max-w-screen-2xl mx-auto px-6 py-12 grid grid-cols-12 gap-10">
               <div className="col-span-3 border-r border-sand-light/30 pr-8">
                <h3 className="font-serif text-2xl text-earth-brown mb-4 italic">{t.domestic?.title || "La Botica"}</h3>
                <p className="text-sm text-earth-brown/70 mb-6 leading-relaxed font-sans normal-case">
                  {t.domestic?.productsDesc || "Fórmulas vivas que respiran. Selecciona tu ritual según la necesidad de tu cabello."}
                </p>
                <Link href="/domesticos/productos" className="text-olive-green text-xs font-bold uppercase tracking-widest hover:underline" onClick={() => setIsSelectionHover(false)}>
                  {t.domestic?.viewMore || "Ver todo el catálogo"} →
                </Link>
              </div>
              <div className="col-span-9 grid grid-cols-4 gap-6">
                {categories.length > 0 ? categories.map((cat, idx) => (
                  <Link key={idx} href={`/domesticos/productos`} className="group" onClick={() => setIsSelectionHover(false)}>
                    <div className="h-full p-4 hover:bg-white/50 rounded-sm transition-all border border-transparent hover:border-sand-light/30">
                      <span className="text-earth-brown font-serif text-lg group-hover:text-olive-green transition-colors block mb-1">{cat}</span>
                      <span className="text-[10px] uppercase tracking-wider text-earth-brown/40 group-hover:text-earth-brown/60">{t.domestic?.readMore || "Explorar"}</span>
                    </div>
                  </Link>
                )) : (<p className="text-sm opacity-50 col-span-4">Cargando categorías...</p>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MENU MÓVIL (Full Screen) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // Ajustamos el top dinámicamente o fijo seguro
            className="fixed inset-0 top-[60px] bg-cream z-40 md:hidden overflow-y-auto border-t border-sand-light/20 pt-10"
          >
             {/* ... (MISMO CONTENIDO MOVIL ANTERIOR) ... */}
             <div className="flex flex-col p-8 gap-8 text-center text-earth-brown font-serif">
              <Link href="/domesticos/productos" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase hover:text-olive-green">{t.nav.selection}</Link>
              <Link href="/filosofia" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase hover:text-olive-green">{t.nav.aboutTerra}</Link>
              <Link href="/domesticos/tratamientos" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase hover:text-olive-green">{t.nav.treatments}</Link>
              <Link href="/rituales" onClick={() => setIsOpen(false)} className="text-xl tracking-widest uppercase hover:text-olive-green">{t.nav.rituales}</Link>
              <div className="h-px w-10 mx-auto bg-earth-brown/20 my-2"></div>
              <Link href="/profesionales" onClick={() => setIsOpen(false)} className="text-lg font-bold text-olive-green uppercase tracking-widest">{t.nav.proAccess}</Link>
              <button onClick={() => { toggleLang(); setIsOpen(false); }} className="mt-6 mx-auto border border-earth-brown rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold hover:bg-earth-brown hover:text-cream uppercase">{lang}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}