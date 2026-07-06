import { translations } from "./translations";
import generated from "./content-generated.json";

// Objetos se fusionan en profundidad; arrays y escalares se reemplazan
// (productsList de la DB sustituye por completo al hardcodeado).
function deepMerge(base, override) {
  if (
    !override ||
    typeof override !== "object" ||
    Array.isArray(override) ||
    !base ||
    typeof base !== "object" ||
    Array.isArray(base)
  ) {
    return override === undefined ? base : override;
  }
  const out = { ...base };
  for (const key of Object.keys(override)) {
    out[key] = deepMerge(base[key], override[key]);
  }
  return out;
}

// Contenido final por idioma: snapshot de Supabase (horneado en build por
// scripts/fetch-content.mjs) sobre el fallback de translations.js.
// Si la DB nunca se sincronizó, devuelve translations.js tal cual.
export function getContent(lang) {
  const base = translations[lang] || translations.es;
  const override = generated?.[lang] || {};
  return deepMerge(base, override);
}

export const contentGeneratedAt = generated?.generatedAt || null;
