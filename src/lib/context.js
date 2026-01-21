"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [user, setUser] = useState(null);

  const t = translations[lang];

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  // Check for client-side auth state (mock)
  useEffect(() => {
    const storedUser = localStorage.getItem("terra_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <AppContext.Provider
      value={{ lang, setLang, toggleLang, t, user, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
