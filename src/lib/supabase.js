import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Placeholders de .env.local ("TU-PROYECTO", "REEMPLAZAR_...") no cuentan
// como configuración válida: el sitio funciona con el fallback local.
export const isSupabaseConfigured =
  url.startsWith("https://") &&
  !url.includes("TU-PROYECTO") &&
  anonKey.length > 20 &&
  !anonKey.startsWith("REEMPLAZAR");

export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null;
