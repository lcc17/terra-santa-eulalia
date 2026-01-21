"use client";
import Link from "next/link";
import { useApp } from "@/lib/context";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { t, lang, toggleLang } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 p-4">
      <div className="backdrop-blur-md bg-cream/80 border border-sand-light rounded-full px-6 py-3 flex justify-between items-center max-w-7xl mx-auto shadow-sm">
        <Link
          href="/"
          className="font-serif text-earth-brown text-lg md:text-xl font-bold tracking-tighter"
        >
          Terra Santa Eulalia
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-earth-brown tracking-wide">
          <Link
            href="/domesticos"
            className="hover:text-olive-green transition-colors"
          >
            {t.nav.domestic}
          </Link>
          <Link
            href="/profesionales"
            className="hover:text-olive-green transition-colors"
          >
            {t.nav.pro}
          </Link>
          <Link
            href="/domesticos/productos"
            className="hover:text-olive-green transition-colors"
          >
            {t.nav.products}
          </Link>
          <button
            onClick={toggleLang}
            className="border border-olive-green px-3 py-1 rounded-full text-xs font-bold text-olive-green hover:bg-olive-green hover:text-white transition-colors"
          >
            {lang.toUpperCase()}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-earth-brown"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 bg-cream rounded-3xl p-6 shadow-xl border border-sand-light md:hidden flex flex-col gap-4 text-center"
        >
          <Link href="/domesticos" onClick={() => setIsOpen(false)}>
            {t.nav.domestic}
          </Link>
          <Link href="/profesionales" onClick={() => setIsOpen(false)}>
            {t.nav.pro}
          </Link>
          <button
            onClick={() => {
              toggleLang();
              setIsOpen(false);
            }}
          >
            Switch to {lang === "es" ? "ENG" : "ESP"}
          </button>
        </motion.div>
      )}
    </nav>
  );
}
