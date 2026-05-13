/**
 * validate-translations.mjs
 * Verifica que todas las claves de ES existan en EN y CA.
 * Ejecutar: node scripts/validate-translations.mjs
 */

import { translations } from "../src/lib/translations.js";

const LANGUAGES = ["es", "en", "ca"];
const BASE_LANG = "es";
const SKIP_KEYS = ["productsList"]; // Arrays compartidos via fallback

let errors = 0;
let warnings = 0;
const report = [];

// --- Utilidades ---

function flattenKeys(obj, prefix = "") {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return [];
  return Object.entries(obj).flatMap(([k, v]) => {
    const full = prefix ? `${prefix}.${k}` : k;
    return typeof v === "object" && !Array.isArray(v)
      ? flattenKeys(v, full)
      : [full];
  });
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, k) => acc?.[k], obj);
}

function isEmptyString(val) {
  return typeof val === "string" && val.trim() === "";
}

// --- Chequeo 1: Claves faltantes ---

function checkMissingKeys() {
  report.push("\n🔍 CHEQUEO 1: Claves faltantes\n");

  const baseKeys = flattenKeys(translations[BASE_LANG]).filter(
    (k) => !SKIP_KEYS.some((s) => k.startsWith(s))
  );

  LANGUAGES.filter((l) => l !== BASE_LANG).forEach((lang) => {
    const missing = baseKeys.filter(
      (key) => getNestedValue(translations[lang], key) === undefined
    );

    if (missing.length === 0) {
      report.push(`  ✅ ${lang.toUpperCase()}: Sin claves faltantes`);
    } else {
      missing.forEach((key) => {
        report.push(`  ❌ ${lang.toUpperCase()}: Falta "${key}"`);
        errors++;
      });
    }
  });
}

// --- Chequeo 2: Valores vacíos ---

function checkEmptyValues() {
  report.push("\n🔍 CHEQUEO 2: Valores vacíos o en blanco\n");
  let found = false;

  LANGUAGES.forEach((lang) => {
    const keys = flattenKeys(translations[lang]).filter(
      (k) => !SKIP_KEYS.some((s) => k.startsWith(s))
    );
    keys.forEach((key) => {
      const val = getNestedValue(translations[lang], key);
      if (isEmptyString(val)) {
        report.push(`  ⚠️  ${lang.toUpperCase()}: "${key}" está vacío`);
        warnings++;
        found = true;
      }
    });
  });

  if (!found) report.push("  ✅ Sin valores vacíos detectados");
}

// --- Chequeo 3: Valores no traducidos (igual que ES en otro idioma) ---

function checkUntranslated() {
  report.push("\n🔍 CHEQUEO 3: Posibles valores sin traducir (iguales al ES)\n");

  const baseKeys = flattenKeys(translations[BASE_LANG]).filter(
    (k) => !SKIP_KEYS.some((s) => k.startsWith(s))
  );

  // Secciones de datos (no texto UI) que es esperable que sean iguales
  const ALLOWED_EQUAL = [
    "footer.email",
    "footer.phone",
    "footer.location",
    "footer.whatsappLabel",
    "hero.title",
    "services.badge",
    "socialProof.author",
    // Nombres propios — no se traducen
    "philosophy.laiaBio.title",
    // Slogans que ya están en CA correctamente
    "cards.productsSub",
    // Frases que son válidas en CA igual que en ES
    "treatmentsPage.cta",
    "treatmentsPage.floatingCta",
  ];

  let found = false;
  LANGUAGES.filter((l) => l !== BASE_LANG).forEach((lang) => {
    baseKeys.forEach((key) => {
      if (ALLOWED_EQUAL.includes(key)) return;
      const baseVal = getNestedValue(translations[BASE_LANG], key);
      const langVal = getNestedValue(translations[lang], key);
      if (
        typeof baseVal === "string" &&
        typeof langVal === "string" &&
        baseVal === langVal &&
        baseVal.length > 10
      ) {
        report.push(
          `  ⚠️  ${lang.toUpperCase()}: "${key}" parece sin traducir → "${baseVal.slice(0, 50)}..."`
        );
        warnings++;
        found = true;
      }
    });
  });

  if (!found) report.push("  ✅ Sin valores sospechosos detectados");
}

// --- Chequeo 4: productsList disponible ---

function checkProductsList() {
  report.push("\n🔍 CHEQUEO 4: productsList disponible en todos los idiomas\n");

  LANGUAGES.forEach((lang) => {
    const list = translations[lang].productsList;
    const count = Array.isArray(list) ? list.length : 0;
    const icon = count > 0 ? "✅" : "❌";
    report.push(`  ${icon} ${lang.toUpperCase()}: ${count} productos`);
    if (count === 0) errors++;
  });
}

// --- Chequeo 5: Secciones requeridas ---

function checkRequiredSections() {
  report.push("\n🔍 CHEQUEO 5: Secciones requeridas presentes\n");

  const REQUIRED = ["nav", "hero", "footer", "ui", "products", "pro", "whatsapp"];

  LANGUAGES.forEach((lang) => {
    const missing = REQUIRED.filter((s) => !translations[lang][s]);
    if (missing.length === 0) {
      report.push(`  ✅ ${lang.toUpperCase()}: Todas las secciones presentes`);
    } else {
      missing.forEach((s) => {
        report.push(`  ❌ ${lang.toUpperCase()}: Falta sección "${s}"`);
        errors++;
      });
    }
  });
}

// --- Runner ---

function run() {
  console.log("═══════════════════════════════════════════");
  console.log("  🌍 TERRA SANTA EULALIA — TRANSLATION VALIDATOR");
  console.log("  Fecha:", new Date().toLocaleDateString("es-ES"));
  console.log("═══════════════════════════════════════════");

  checkRequiredSections();
  checkMissingKeys();
  checkEmptyValues();
  checkUntranslated();
  checkProductsList();

  report.forEach((line) => console.log(line));

  console.log("\n═══════════════════════════════════════════");

  if (errors === 0 && warnings === 0) {
    console.log("  🎉 RESULTADO: PERFECTO — Sin errores ni advertencias");
  } else {
    if (errors > 0) console.log(`  ❌ ERRORES: ${errors}`);
    if (warnings > 0) console.log(`  ⚠️  ADVERTENCIAS: ${warnings}`);
    const status = errors > 0 ? "REQUIERE ATENCIÓN" : "OK con advertencias";
    console.log(`  📋 ESTADO: ${status}`);
  }

  console.log("═══════════════════════════════════════════\n");

  if (errors > 0) process.exit(1);
}

run();
