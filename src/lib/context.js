"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const VALID_LANGUAGES = ["ca", "es", "en"];

const AppContext = createContext();

export function AppProvider({ children }) {
  // Initial state is Catalan - matches server render
  const [lang, setLang] = useState("ca");
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);

  // Sync language from cookie or URL on mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Check for NEXT_LOCALE cookie set by middleware
    const cookieMatch = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
    const cookieLang = cookieMatch?.[1];

    if (cookieLang && VALID_LANGUAGES.includes(cookieLang)) {
      setLang(cookieLang);
      return;
    }

    // Fallback: check URL pathname for locale prefix
    const pathLang = window.location.pathname.split("/")[1];
    if (pathLang && VALID_LANGUAGES.includes(pathLang)) {
      setLang(pathLang);
    }
  }, []);

  // Check for client-side auth state (mock)
  useEffect(() => {
    const storedUser = localStorage.getItem("terra_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => {
      if (prev === "ca") return "es";
      if (prev === "es") return "en";
      return "ca";
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

export const useApp = () => useContext(AppContext);
