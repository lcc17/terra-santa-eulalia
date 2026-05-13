"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useApp } from "@/lib/context";

export default function ProfessionalDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { t } = useApp();

  // Basic client check
  useEffect(() => {
    // In a real app, middleware handles protection, but we sync state here
    // Check if cookie exists is harder in client, so we rely on API response
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsLoggedIn(true);
      window.location.reload(); // Refresh to pass middleware check cleanly
    } else {
      alert(t?.pro?.passwordError || "Contraseña incorrecta");
    }
  };

  if (!isLoggedIn) {
    // If middleware allows this page to render, it means we are either authenticated
    // OR we are handling the login form here.
    // *Note: Real implementation would have a separate /login page.*
    return (
      <div className="h-screen flex items-center justify-center bg-sand-light/30">
        <form
          onSubmit={handleLogin}
          className="bg-cream p-12 rounded-[40px] shadow-xl text-center"
        >
          <h2 className="text-2xl font-serif mb-6">{t?.pro?.loginTitle || "Acceso Profesional"}</h2>
          <input
            type="password"
            placeholder={t?.pro?.passwordPlaceholder || "Contraseña..."}
            className="w-full p-3 rounded-xl border border-sand-dark mb-4 bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>{t?.pro?.loginButton || "Entrar"}</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-serif text-olive-green mb-8">
        {t?.pro?.dashboardTitle || "Panel Profesional"}
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-cream p-8 rounded-3xl border border-sand-dark">
          <h3 className="text-xl font-bold mb-4">18 Plantas</h3>
          <p className="text-sm opacity-70 mb-4">
            Fichas técnicas de plantas y barros.
          </p>
          <Button variant="outline" className="w-full">
            Ver Catálogo
          </Button>
        </div>
        <div className="bg-cream p-8 rounded-3xl border border-sand-dark">
          <h3 className="text-xl font-bold mb-4">Formación</h3>
          <p className="text-sm opacity-70 mb-4">
            Cursos de filosofía y técnica.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => router.push("/profesionales/formacion")}
          >
            Ir a Cursos
          </Button>
        </div>
        <div className="bg-cream p-8 rounded-3xl border border-sand-dark">
          <h3 className="text-xl font-bold mb-4">Videos Privados</h3>
          <p className="text-sm opacity-70 mb-4">
            Diagnósticos y masterclasses.
          </p>
          <Button variant="outline" className="w-full">
            Ver Videos
          </Button>
        </div>
      </div>
    </div>
  );
}
