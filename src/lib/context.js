"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { getContent } from "./content";

const VALID_LANGUAGES = ["ca", "es", "en"];

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState("ca");
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);

  // Contenido final: snapshot de Supabase (build-time) sobre translations.js
  const t = useMemo(() => getContent(lang), [lang]);

  useEffect(() => {
    setMounted(true);
    const cookieMatch = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
    const cookieLang = cookieMatch?.[1];

    if (cookieLang && VALID_LANGUAGES.includes(cookieLang)) {
      setLang(cookieLang);
    } else {
      const pathLang = window.location.pathname.split("/")[1];
      if (pathLang && VALID_LANGUAGES.includes(pathLang)) {
        setLang(pathLang);
      }
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("terra_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "ca" ? "es" : prev === "es" ? "en" : "ca";
      // Opcional: Persistir el cambio en cookie para el middleware
      document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
      return next;
    });
  };

  return (
    <AppContext.Provider
      value={{ lang, setLang, toggleLang, t, user, setUser, mounted }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp debe usarse dentro de un AppProvider");
  }
  return context;
};
