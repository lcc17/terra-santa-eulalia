"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Check } from "lucide-react";
import { useApp } from "@/lib/context";

const STORAGE_KEY = "cookie_preferences";

const DEFAULT_PREFS = {
  technical: true,    // siempre activo
  analytics: false,
  marketing: false,
  functional: false,
  timestamp: null,
};

export default function CookiesBanner() {
  const { t } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);

  // Mostrar banner solo si no hay preferencias previas
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Pequeño retraso para no interferir con el hero
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (newPrefs) => {
    const finalPrefs = {
      ...newPrefs,
      technical: true, // siempre forzado a true
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPrefs));
    setPrefs(finalPrefs);
    setIsVisible(false);
    setShowModal(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      technical: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      technical: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const togglePref = (key) => {
    if (key === "technical") return; // no se puede desactivar
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible && !showModal) return null;

  return (
    <>
      {/* Banner sticky */}
      <AnimatePresence>
        {isVisible && !showModal && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 md:px-6 md:pb-6"
          >
            <div className="max-w-5xl mx-auto bg-cream border border-olive-green/30 rounded-2xl shadow-2xl p-5 md:p-7">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
                {/* Icono + texto */}
                <div className="flex-1 flex items-start gap-3">
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-olive-green/10 items-center justify-center flex-shrink-0">
                    <Cookie size={20} className="text-olive-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-earth-brown text-base md:text-lg mb-1">
                      {t?.legal?.bannerTitle || "Tu privacidad importa"}
                    </h3>
                    <p className="text-earth-brown/70 text-xs md:text-sm leading-relaxed">
                      {t?.legal?.bannerText || "Usamos cookies para mejorar tu experiencia."}{" "}
                      <Link
                        href="/legal/politica-cookies"
                        className="text-olive-green underline hover:text-earth-brown transition-colors"
                      >
                        {t?.legal?.cookiesPolicyLink || "Política de Cookies"}
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Botones */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 md:flex-shrink-0">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-xs uppercase tracking-widest text-earth-brown/70 hover:text-earth-brown transition-colors duration-300 border border-earth-brown/20 rounded-full hover:border-earth-brown/40"
                  >
                    {t?.legal?.rejectAll || "Rechazar"}
                  </button>
                  <button
                    onClick={handleOpenModal}
                    className="px-4 py-2 text-xs uppercase tracking-widest text-earth-brown border border-earth-brown rounded-full hover:bg-earth-brown hover:text-cream transition-all duration-300"
                  >
                    {t?.legal?.configure || "Configurar"}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-xs uppercase tracking-widest text-cream bg-olive-green rounded-full hover:bg-earth-brown transition-all duration-300 shadow-md"
                  >
                    {t?.legal?.acceptAll || "Aceptar todo"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de configuración */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-earth-brown/40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="bg-cream rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-cream border-b border-sand-light px-6 py-5 flex items-center justify-between rounded-t-2xl">
                <h2 className="font-serif text-earth-brown text-xl">
                  {t?.legal?.modalTitle || "Configuración de Cookies"}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-sand-light/50 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} className="text-earth-brown" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                <p className="text-earth-brown/70 text-sm mb-6 leading-relaxed">
                  {t?.legal?.modalDesc ||
                    "Elige qué tipo de cookies aceptas."}
                </p>

                <div className="space-y-4">
                  <CookieRow
                    label={t?.legal?.technicalLabel || "Técnicas"}
                    desc={
                      t?.legal?.technicalDesc ||
                      "Necesarias para el funcionamiento básico."
                    }
                    enabled={true}
                    required
                    requiredLabel={t?.legal?.required || "Obligatorias"}
                  />
                  <CookieRow
                    label={t?.legal?.analyticsLabel || "Analíticas"}
                    desc={t?.legal?.analyticsDesc || "Google Analytics."}
                    enabled={prefs.analytics}
                    onToggle={() => togglePref("analytics")}
                  />
                  <CookieRow
                    label={t?.legal?.marketingLabel || "Marketing"}
                    desc={t?.legal?.marketingDesc || "Contenido personalizado."}
                    enabled={prefs.marketing}
                    onToggle={() => togglePref("marketing")}
                  />
                  <CookieRow
                    label={t?.legal?.functionalLabel || "Funcionales"}
                    desc={t?.legal?.functionalDesc || "Preferencias de usuario."}
                    enabled={prefs.functional}
                    onToggle={() => togglePref("functional")}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-cream border-t border-sand-light px-6 py-4 flex flex-col sm:flex-row gap-2 rounded-b-2xl">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-2.5 text-xs uppercase tracking-widest text-earth-brown/70 hover:text-earth-brown transition-colors border border-earth-brown/20 rounded-full hover:border-earth-brown/40"
                >
                  {t?.legal?.rejectAll || "Rechazar"}
                </button>
                <button
                  onClick={() => savePreferences(prefs)}
                  className="flex-1 px-4 py-2.5 text-xs uppercase tracking-widest text-cream bg-olive-green hover:bg-earth-brown transition-colors rounded-full shadow-md"
                >
                  {t?.legal?.saveSettings || "Guardar preferencias"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CookieRow({ label, desc, enabled, onToggle, required, requiredLabel }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-sand-light/50 last:border-b-0">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-serif text-earth-brown text-sm">{label}</h4>
          {required && (
            <span className="text-[9px] uppercase tracking-widest text-olive-green font-bold bg-olive-green/10 px-2 py-0.5 rounded-full">
              {requiredLabel}
            </span>
          )}
        </div>
        <p className="text-earth-brown/60 text-xs leading-relaxed">{desc}</p>
      </div>
      <button
        type="button"
        onClick={onToggle}
        disabled={required}
        aria-pressed={enabled}
        className={`relative w-12 h-7 rounded-full transition-colors duration-300 flex-shrink-0 ${
          enabled ? "bg-olive-green" : "bg-earth-brown/20"
        } ${required ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:opacity-90"}`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`absolute top-0.5 w-6 h-6 bg-cream rounded-full shadow-md flex items-center justify-center ${
            enabled ? "right-0.5" : "left-0.5"
          }`}
        >
          {enabled && <Check size={12} className="text-olive-green" />}
        </motion.span>
      </button>
    </div>
  );
}
