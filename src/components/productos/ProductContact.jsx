"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "34631994318";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=C%2F+Proven%C3%A7a+213+Barcelona";

const WhatsAppIcon = ({ fill = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    className="w-4 h-4 shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ProductContact({ productId, productName, hasStock }) {
  if (!hasStock) return null;

  const whatsappGenericURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola! Me gustaría recibir información sobre vuestros productos de cosmética natural 🌿"
  )}`;

  const whatsappProductURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola! Me interesa el producto *${productName}* (ref: ${productId}) 🌿\n\n¿Podéis darme más información y confirmar disponibilidad?\n\nGracias!`
  )}`;

  const track = (eventName, label) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, {
        event_category: "producto_engagement",
        event_label: label,
      });
    }
  };

  const handleMapsClick = () => {
    track("maps_click", productId);
    window.open(MAPS_URL, "_blank", "noopener,noreferrer");
  };

  const handleWhatsApp = (type, url) => {
    track("whatsapp_click", `${type}__${productId}`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-10 pt-10 border-t border-sand-light space-y-4"
    >
      <p className="text-xs uppercase tracking-widest text-olive-green font-semibold mb-6">
        ¿Dudas sobre este producto?
      </p>

      {/* Dirección → Google Maps */}
      <button
        onClick={handleMapsClick}
        className="w-full flex items-center gap-3 px-4 py-3 border border-sand-light
          hover:border-olive-green hover:bg-cream transition-all duration-300 group text-left"
        aria-label="Ver ubicación en Google Maps"
      >
        <MapPin
          size={16}
          className="text-olive-green shrink-0 group-hover:scale-110 transition-transform"
        />
        <div>
          <p className="text-xs font-semibold tracking-wider text-earth-brown uppercase">
            Recogida en tienda
          </p>
          <p className="text-xs text-earth-brown/60 mt-0.5">
            C/ Provença 213, Barcelona (08029) →
          </p>
        </div>
      </button>

      {/* WhatsApp genérico — verde oficial */}
      <a
        href={whatsappGenericURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleWhatsApp("generic", whatsappGenericURL)}
        className="w-full flex items-center justify-center gap-3 px-4 py-3
          bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-all duration-300
          text-xs uppercase tracking-widest font-semibold"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon fill="white" />
        Contactar por WhatsApp
      </a>

      {/* WhatsApp por producto — colores Terra */}
      <a
        href={whatsappProductURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleWhatsApp("product", whatsappProductURL)}
        className="w-full flex items-center justify-center gap-3 px-4 py-3
          bg-earth-brown hover:bg-earth-brown/90 text-cream transition-all duration-300
          text-xs uppercase tracking-widest font-semibold border border-earth-brown"
        aria-label={`Preguntar por ${productName}`}
      >
        <WhatsAppIcon fill="#FDF8F0" />
        Preguntar por {productName}
      </a>

      <p className="text-[10px] text-earth-brown/40 text-center tracking-wide pt-1">
        Respondemos en menos de 24h · Recogida en tienda únicamente
      </p>
    </motion.div>
  );
}
