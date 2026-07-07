// Fase 1B — migra las imágenes de producto de /public a Supabase Storage.
// Sube cada imagen al bucket 'product-images' como <slug>.png y actualiza
// products.img con la URL pública. Idempotente: los productos cuyo img ya
// apunta a Storage se saltan; las subidas usan upsert.
// Requiere SUPABASE_SERVICE_ROLE_KEY en .env.local. Uso: node scripts/upload-images.mjs

import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

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

if (!url.startsWith("https://") || serviceKey.length < 20) {
  console.error("[upload-images] Falta NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local");
  process.exit(1);
}

const supabase = createClient(url, serviceKey);
const BUCKET = "product-images";

const { data: products, error } = await supabase
  .from("products")
  .select("id, slug, img");
if (error) {
  console.error(`[upload-images] Error leyendo productos: ${error.message}`);
  process.exit(1);
}

let uploaded = 0;
let skipped = 0;
let missing = 0;

for (const product of products) {
  if (!product.img) {
    skipped++;
    continue;
  }
  if (product.img.startsWith("http")) {
    skipped++; // ya migrada
    continue;
  }
  const localPath = path.join(root, "public", product.img);
  if (!existsSync(localPath)) {
    console.warn(`[upload-images] NO ENCONTRADA: ${product.img} (${product.slug})`);
    missing++;
    continue;
  }
  const key = `${product.slug}.png`;
  const file = readFileSync(localPath);
  const { error: upErr } = await supabase.storage
    .from(BUCKET)
    .upload(key, file, { contentType: "image/png", upsert: true });
  if (upErr) {
    console.error(`[upload-images] Error subiendo ${key}: ${upErr.message}`);
    continue;
  }
  const { data: pub } = supabase.storage.from(BUCKET).getPublicUrl(key);
  const { error: updErr } = await supabase
    .from("products")
    .update({ img: pub.publicUrl })
    .eq("id", product.id);
  if (updErr) {
    console.error(`[upload-images] Error actualizando ${product.slug}: ${updErr.message}`);
    continue;
  }
  console.log(`[upload-images] ${product.slug} → ${pub.publicUrl}`);
  uploaded++;
}

console.log(
  `[upload-images] Completado: ${uploaded} subidas, ${skipped} saltadas, ${missing} no encontradas`
);
