"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function FormationPage() {
  const [email, setEmail] = useState("");

  const handleEnroll = (e) => {
    e.preventDefault();
    alert(`Gracias. Te enviaremos el programa a ${email}. (Simulated EmailJS)`);
  };

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto pb-20">
      <h1 className="text-4xl font-serif mb-4">Cursos de Formación</h1>
      <p className="mb-12 text-lg opacity-80">
        Profundiza en la filosofía Terra Santa Eulalia.
      </p>

      <div className="space-y-8">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-sm border border-sand-light flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="h-32 w-32 bg-olive-green/20 rounded-full flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-serif">Curso Nivel {i}: Orígenes</h3>
              <p className="opacity-70 mt-2">
                Duración: 4 Semanas. Incluye kit de inicio.
              </p>
            </div>
            <form
              onSubmit={handleEnroll}
              className="flex flex-col gap-2 w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Tu email..."
                className="p-2 border rounded-lg"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="primary">Solicitar Info</Button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
