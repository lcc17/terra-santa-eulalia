// Fase 1A — fetch de contenido en build time (estrategia build-time).
// Se ejecuta como "prebuild": descarga products/faqs/site_content de Supabase
// y los escribe en src/lib/content-generated.json para hornearlos en el HTML.
// REGLA: este script NUNCA rompe el build — si Supabase no está configurado
// o no responde, deja el snapshot existente y el sitio usa translations.js.

import { createClient } from "@supabase/supabase-js";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = path.join(root, "src/lib/content-generated.json");
const LOCALES = ["ca", "es", "en"];

// Carga manual de .env.local (los scripts de node no lo leen solos)
function loadEnvLocal() {
  const envPath = path.join(root, ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (match && !(match[1] in process.env)) {
      process.env[match[1]] = match[2];
    }
  }
}

function writeDefaultIfMissing() {
  if (!existsSync(OUT_FILE)) {
    writeFileSync(
      OUT_FILE,
      JSON.stringify({ generatedAt: null, ca: {}, es: {}, en: {} }, null, 2) + "\n"
    );
  }
}

async function main() {
  loadEnvLocal();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const configured =
    url.startsWith("https://") &&
    !url.includes("TU-PROYECTO") &&
    anonKey.length > 20 &&
    !anonKey.startsWith("REEMPLAZAR");

  if (!configured) {
    console.warn(
      "[fetch-content] Supabase sin configurar — el build usa el fallback translations.js"
    );
    writeDefaultIfMissing();
    return;
  }

  const supabase = createClient(url, anonKey);

  const [productsRes, faqsRes, contentRes] = await Promise.all([
    supabase
      .from("products")
      .select("slug, price, img, video, sort_order, featured, i18n")
      .eq("active", true)
      .order("sort_order"),
    supabase
      .from("faqs")
      .select("key, sort_order, i18n")
      .eq("active", true)
      .order("sort_order"),
    supabase.from("site_content").select("section_key, locale, data"),
  ]);

  for (const res of [productsRes, faqsRes, contentRes]) {
    if (res.error) throw new Error(res.error.message);
  }

  const out = { generatedAt: new Date().toISOString(), ca: {}, es: {}, en: {} };

  for (const locale of LOCALES) {
    out[locale].productsList = (productsRes.data || []).map((p) => ({
      id: p.slug,
      price: p.price != null ? Number(p.price) : null,
      img: p.img,
      video: p.video,
      featured: p.featured,
      ...(p.i18n?.[locale] || {}),
    }));
    out[locale].faqList = (faqsRes.data || []).map((f) => ({
      ...(f.i18n?.[locale] || {}),
    }));
  }

  for (const row of contentRes.data || []) {
    if (LOCALES.includes(row.locale) && row.section_key) {
      out[row.locale][row.section_key] = row.data;
    }
  }

  writeFileSync(OUT_FILE, JSON.stringify(out, null, 2) + "\n");
  console.log(
    `[fetch-content] Snapshot generado: ${productsRes.data?.length ?? 0} productos, ` +
      `${faqsRes.data?.length ?? 0} FAQs, ${contentRes.data?.length ?? 0} secciones de texto`
  );
}

main().catch((err) => {
  console.warn(
    `[fetch-content] Error consultando Supabase (${err.message}) — el build sigue con el snapshot/fallback existente`
  );
  writeDefaultIfMissing();
  process.exitCode = 0;
});
