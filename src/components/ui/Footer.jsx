"use client";
import { useApp } from "@/lib/context";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const { t } = useApp();
  const handleWhatsApp = () => {
    const phone = "34631994318";
    const text = t?.whatsapp?.defaultMessage || "Hola, me gustaría información sobre Terra Santa Eulalia.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
  };
  return (
    <footer className="bg-earth-brown text-sand-light py-12 rounded-t-[50px] mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-serif text-2xl mb-4 text-cream">
            Terra Santa Eulalia
          </h2>
          <p className="text-sm opacity-80">{t.hero.subtitle}</p>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-cream">{t.footer?.contactLabel || "Contacto"}</h3>
          <a href="mailto:hola@terrasantaeulalia.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity block">
            hola@terrasantaeulalia.com
          </a>
          <a href="tel:+34935184236" className="text-sm opacity-80 hover:opacity-100 transition-opacity block">
            +34 93 518 42 36
          </a>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 mt-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            <MessageCircle size={14} />
            {t.footer?.whatsappLabel || "WhatsApp"}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
