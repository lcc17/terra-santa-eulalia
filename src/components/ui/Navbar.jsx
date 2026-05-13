"use client";
import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/lib/context";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

// Custom 2-line hamburger icon for Quiet Luxury aesthetic
const HamburgerIcon = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="4" y1="16" x2="20" y2="16" />
  </svg>
);

export default function Navbar() {
  const { t, lang, toggleLang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectionHover, setIsSelectionHover] = useState(false);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 1);
  });

  const productList = t.productsList || [];
  const categories = [...new Set(productList.map((p) => p.category))];

  // Mobile logo: 25% larger than desktop base, with expansive padding
  const mobileLogoHeight = isScrolled ? 'h-14' : 'h-20';
  const desktopLogoHeight = isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-28';

  return (
    <nav className="fixed w-full z-50 top-0 left-0 font-serif" onMouseLeave={() => setIsSelectionHover(false)}>
      
      {/* UNIFIED BAR: Clean, borderless, embossed paper effect */}
      <motion.div 
        animate={{ 
          backgroundColor: isScrolled ? "rgba(245, 245, 241, 0.95)" : "rgba(245, 245, 241, 0.98)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)",
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="w-full relative z-40"
        style={{
          boxShadow: isScrolled 
            ? "0 2px 12px rgba(139, 115, 85, 0.08)" 
            : "0 1px 4px rgba(139, 115, 85, 0.04)"
        }}
      >
        {/* Mobile Layout */}
        <div className="md:hidden relative w-full flex items-center justify-center px-6 py-5">
          
          {/* LOGO: Perfectly centered, 25% larger on mobile */}
          <motion.div 
            animate={{ scale: isScrolled ? 0.95 : 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10"
          >
            <Link href="/" className="block">
              <Image
                src="/logo-terra-santa-eulalia-cosmetica.png"
                alt="Terra Santa Eulalia Logo"
                width={350}
                height={125}
                className={`${mobileLogoHeight} w-auto object-contain transition-all duration-700`}
                priority
                sizes="(max-width: 768px) 280px, 350px"
              />
            </Link>
          </motion.div>

          {/* HAMBURGER MENU: Absolute right, 44x44px touch target */}
          <motion.button
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full hover:bg-earth-brown/5 active:bg-earth-brown/10 transition-colors duration-300"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-earth-brown" strokeWidth={1.5} />
            ) : (
              <HamburgerIcon className="w-6 h-6 text-earth-brown" />
            )}
          </motion.button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block max-w-screen-2xl mx-auto w-full px-12 py-6">
          <div className="relative flex items-center justify-between">
            
            {/* LEFT: Qui Som + Accés */}
            <div className="flex items-center gap-12 lg:gap-16">
              <Link href="/filosofia" className="hover:text-olive-green hover:-translate-y-0.5 transition-all duration-1000 ease-out py-2">
                <span className="text-base tracking-[0.15em] uppercase font-medium text-earth-brown">
                  {t.nav.aboutTerra}
                </span>
              </Link>
              <Link href="/profesionales" className="hover:text-olive-green hover:-translate-y-0.5 transition-all duration-1000 ease-out py-2">
                <span className="text-base tracking-[0.15em] uppercase font-medium text-earth-brown">
                  {t.nav.proAccess}
                </span>
              </Link>
            </div>

            {/* LOGO (Centered) */}
            <motion.div 
              animate={{ scale: isScrolled ? 0.95 : 1 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="absolute left-1/2 -translate-x-1/2 z-10"
            >
              <Link href="/" className="block">
                <Image
                  src="/logo-terra-santa-eulalia-cosmetica.png"
                  alt="Terra Santa Eulalia Logo"
                  width={280}
                  height={100}
                  className={`${desktopLogoHeight} w-auto object-contain transition-all duration-700`}
                  priority
                />
              </Link>
            </motion.div>

            {/* RIGHT: Language Toggle */}
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleLang} 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-earth-brown/20 hover:bg-earth-brown hover:text-cream hover:border-earth-brown transition-all duration-700 ease-out text-[11px] font-bold"
                aria-label="Toggle language"
              >
                {lang}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MEGA MENU DESKTOP */}
      <AnimatePresence>
        {isSelectionHover && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="hidden md:block absolute top-[100%] left-0 w-full bg-cream border-b border-sand-light z-30"
            style={{
              boxShadow: "inset 0 2px 8px rgba(139, 115, 85, 0.04), 0 1px 0 rgba(255,255,255,0.5)"
            }}
            onMouseEnter={() => setIsSelectionHover(true)}
            onMouseLeave={() => setIsSelectionHover(false)}
          >
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
                )) : (<p className="text-sm opacity-50 col-span-4">{t?.ui?.loading || "Cargando..."}</p>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU DRAWER (Premium, Full-Height) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 top-0 right-0 z-40 md:hidden bg-cream overflow-y-auto"
          >
            {/* Close button overlay area */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream to-transparent pointer-events-none" />
            
            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-8 py-20">
              <div className="flex flex-col items-center gap-8 text-center w-full max-w-sm">

                {/* 1. Qui Som Terra — Primary */}
                <Link
                  href="/filosofia"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase text-earth-brown hover:text-olive-green transition-colors duration-500 py-2"
                >
                  {t.nav.aboutTerra}
                </Link>

                <div className="w-px h-12 bg-earth-brown/20" />

                {/* 2. Secondary nav links — uniform hierarchy */}
                <div className="flex flex-col items-center gap-8">
                  <Link
                    href="/domesticos/tratamientos"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-serif tracking-[0.15em] uppercase text-earth-brown/80 hover:text-olive-green transition-colors duration-500"
                  >
                    {t.nav.treatments}
                  </Link>

                  <Link
                    href="/domesticos/productos"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-serif tracking-[0.15em] uppercase text-earth-brown/80 hover:text-olive-green transition-colors duration-500"
                  >
                    {t.nav.products}
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-serif tracking-[0.15em] uppercase text-earth-brown/80 hover:text-olive-green transition-colors duration-500"
                  >
                    {t.nav.contacto}
                  </Link>
                </div>

                <div className="w-16 h-px bg-earth-brown/20" />

                {/* 3. Pro Access — Tertiary */}
                <Link
                  href="/profesionales"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-serif tracking-[0.15em] uppercase text-olive-green hover:text-earth-brown transition-colors duration-500"
                >
                  {t.nav.proAccess}
                </Link>

                {/* Language Toggle */}
                <button
                  onClick={() => { toggleLang(); setIsOpen(false); }}
                  className="mt-6 mx-auto w-12 h-12 flex items-center justify-center rounded-full border border-earth-brown/30 hover:bg-earth-brown hover:text-cream hover:border-earth-brown transition-all duration-700 text-xs font-bold uppercase tracking-wider"
                  aria-label="Toggle language"
                >
                  {lang}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
