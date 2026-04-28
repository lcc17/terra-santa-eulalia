"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, MessageCircle } from "lucide-react";
import { useApp } from "@/lib/context";

export default function ContactPage() {
  const { t } = useApp();
  const handleWhatsApp = () => {
    const phone = "34631994318";
    const text = t?.whatsapp?.defaultMessage || "Hola, me gustaría reservar una cita o solicitar información sobre Terra Santa Eulalia.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Fondo Decorativo Sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-olive-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-earth-brown/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Título Principal */}
      <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-olive-green text-xs uppercase tracking-[0.3em] font-bold"
        >
          Concierge & Reservas
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif text-earth-brown mt-2"
        >
          Hablemos.
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
        {/* --- COLUMNA IZQUIERDA: INFO & MAPA (5 Columnas) --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 bg-earth-brown text-sand-light rounded-[30px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Info de contacto */}
          <div className="relative z-10 space-y-10">
            <div>
              <h3 className="text-cream font-serif text-2xl mb-6">
                Terra Santa Eulalia
              </h3>
              <p className="font-light opacity-80 leading-relaxed">
                Un espacio de calma en el corazón de Barcelona. Ven a probar
                texturas, olores y a recibir tu diagnóstico personalizado.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-olive-green transition-colors">
                  <MapPin className="text-cream" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">
                    Dirección
                  </span>
                  <p className="text-lg">
                    Carrer de Provença, 213
                    <br />
                    08008 Barcelona
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-olive-green transition-colors">
                  <Clock className="text-cream" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">
                    Horario Boutique
                  </span>
                  <p className="text-sm">Lun - Vie: 10:00 - 20:00</p>
                  <p className="text-sm">Sábados: 10:00 - 14:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-olive-green transition-colors">
                  <Phone className="text-cream" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-1">
                    Teléfono
                  </span>
                  <a href="tel:+34935184236" className="text-lg hover:text-olive-green transition-colors">
                    +34 93 518 42 36
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MAPA INTEGRADO (Estilo Dark Mode visualmente) */}
          <div className="mt-12 h-64 w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.186638548774!2d2.155866176569106!3d41.39176379986348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a292f156372f%3A0x608051253457064!2sCarrer%20de%20Proven%C3%A7a%2C%20213%2C%20L&#39;Eixample%2C%2008008%20Barcelona!5e0!3m2!1ses!2ses!4v1709600000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(100%) contrast(1.2) opacity(0.8)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
            {/* Overlay interactivo */}
            <div className="absolute inset-0 bg-earth-brown/20 group-hover:bg-transparent pointer-events-none transition-colors" />
          </div>
        </motion.div>

        {/* --- COLUMNA DERECHA: FORMULARIO & WHATSAPP (7 Columnas) --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-7 pl-0 lg:pl-10"
        >
          <div className="bg-white p-8 md:p-12 rounded-[30px] border border-sand-light/30 shadow-sm">
            <h2 className="text-3xl font-serif text-earth-brown mb-8">
              Envíanos un mensaje
            </h2>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-earth-brown/20 py-3 text-earth-brown focus:outline-none focus:border-olive-green transition-colors"
                  />
                  <label className="absolute left-0 top-3 text-earth-brown/50 text-xs uppercase tracking-widest pointer-events-none peer-focus:-top-4 peer-focus:text-olive-green peer-focus:text-[10px] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                    Nombre
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-earth-brown/20 py-3 text-earth-brown focus:outline-none focus:border-olive-green transition-colors"
                  />
                  <label className="absolute left-0 top-3 text-earth-brown/50 text-xs uppercase tracking-widest pointer-events-none peer-focus:-top-4 peer-focus:text-olive-green peer-focus:text-[10px] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-earth-brown/20 py-3 text-earth-brown focus:outline-none focus:border-olive-green transition-colors"
                />
                <label className="absolute left-0 top-3 text-earth-brown/50 text-xs uppercase tracking-widest pointer-events-none peer-focus:-top-4 peer-focus:text-olive-green peer-focus:text-[10px] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                  Asunto / Producto de interés
                </label>
              </div>

              <div className="relative group">
                <textarea
                  rows="4"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-earth-brown/20 py-3 text-earth-brown focus:outline-none focus:border-olive-green transition-colors resize-none"
                ></textarea>
                <label className="absolute left-0 top-3 text-earth-brown/50 text-xs uppercase tracking-widest pointer-events-none peer-focus:-top-4 peer-focus:text-olive-green peer-focus:text-[10px] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">
                  ¿En qué podemos ayudarte?
                </label>
              </div>

              <div className="pt-4 flex flex-col md:flex-row gap-6 items-center">
                {/* BOTÓN PRINCIPAL (EMAIL) */}
                <button className="w-full md:w-auto bg-earth-brown text-cream px-10 py-4 rounded-full uppercase text-xs tracking-widest hover:bg-olive-green transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                  <span>Enviar Solicitud</span>
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <span className="text-earth-brown/40 text-xs font-serif italic">
                  o también
                </span>

                {/* BOTÓN SECUNDARIO (WHATSAPP) */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full md:w-auto border border-green-600/30 bg-green-50 text-green-800 px-8 py-4 rounded-full uppercase text-xs tracking-widest hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle size={18} />
                  <span>Chat WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-earth-brown/40 pt-4 border-t border-earth-brown/10">
                Al contactar, aceptas nuestra política de privacidad. Tus datos
                se tratarán con el máximo respeto y confidencialidad.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
