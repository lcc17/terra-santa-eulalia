// Fase 1A — seed inicial: vuelca src/lib/translations.js a Supabase.
// Requiere SUPABASE_SERVICE_ROLE_KEY en .env.local (bypassa RLS; solo local).
// Idempotente: upsert por slug (products), key (faqs) y section_key+locale.
// Uso: npm run seed

import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { translations } from "../src/lib/translations.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const LOCALES = ["ca", "es", "en"];
// Estas dos secciones viven en tablas propias, no en site_content
const TABLE_SECTIONS = ["productsList", "faqList"];

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

loadEnvLocal();
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (
  !url.startsWith("https://") ||
  url.includes("TU-PROYECTO") ||
  serviceKey.length < 20 ||
  serviceKey.startsWith("REEMPLAZAR")
) {
  console.error(
    "[seed] Falta configuración real en .env.local:\n" +
      "  NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY\n" +
      "  (ver supabase/README.md, paso 3)"
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey);

// Campos de producto que son texto localizado → van dentro de i18n
const PRODUCT_I18N_FIELDS = [
  "name",
  "category",
  "type",
  "desc",
  "ingredients",
  "usage",
  "precautions",
  "origin",
];

async function seedProducts() {
  const canonical = translations.es?.productsList || [];
  const rows = canonical.map((esProduct, index) => {
    const i18n = {};
    for (const locale of LOCALES) {
      const list = translations[locale]?.productsList || [];
      const match = list.find((p) => p.id === esProduct.id) || {};
      i18n[locale] = {};
      for (const field of PRODUCT_I18N_FIELDS) {
        if (match[field] !== undefined) i18n[locale][field] = match[field];
      }
    }
    return {
      slug: esProduct.id,
      price: esProduct.price ?? null,
      img: esProduct.img ?? null,
      video: esProduct.video ?? null,
      sort_order: index,
      active: true,
      i18n,
    };
  });
  const { error } = await supabase
    .from("products")
    .upsert(rows, { onConflict: "slug" });
  if (error) throw new Error(`products: ${error.message}`);
  console.log(`[seed] ${rows.length} productos`);
}

async function seedFaqs() {
  const count = (translations.es?.faqList || []).length;
  const rows = Array.from({ length: count }, (_, index) => {
    const i18n = {};
    for (const locale of LOCALES) {
      i18n[locale] = translations[locale]?.faqList?.[index] || {};
    }
    return { key: `faq-${index + 1}`, sort_order: index, active: true, i18n };
  });
  const { error } = await supabase.from("faqs").upsert(rows, { onConflict: "key" });
  if (error) throw new Error(`faqs: ${error.message}`);
  console.log(`[seed] ${rows.length} FAQs`);
}

async function seedSiteContent() {
  const rows = [];
  for (const locale of LOCALES) {
    const source = translations[locale] || {};
    for (const [sectionKey, data] of Object.entries(source)) {
      if (TABLE_SECTIONS.includes(sectionKey)) continue;
      rows.push({ section_key: sectionKey, locale, data });
    }
  }
  const { error } = await supabase
    .from("site_content")
    .upsert(rows, { onConflict: "section_key,locale" });
  if (error) throw new Error(`site_content: ${error.message}`);
  console.log(`[seed] ${rows.length} secciones de texto (${LOCALES.join("/")})`);
}

try {
  await seedProducts();
  await seedFaqs();
  await seedSiteContent();
  console.log("[seed] Completado. Ejecutá 'npm run build' para hornear el contenido.");
} catch (err) {
  console.error(`[seed] Error: ${err.message}`);
  process.exit(1);
}
