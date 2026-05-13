/**
 * generate-multimedia-pdf.mjs
 *
 * Genera un PDF visual con todos los assets multimedia del proyecto.
 * Cada asset aparece como una tarjeta con miniatura, ruta, peso, ubicación
 * en la web y función.
 *
 * Uso:  node scripts/generate-multimedia-pdf.mjs
 * O:    npm run multimedia:pdf
 *
 * Salida: MULTIMEDIA_INVENTORY.pdf en la raíz del proyecto.
 */

import puppeteer from "puppeteer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUTPUT_PDF = path.join(ROOT, "MULTIMEDIA_INVENTORY.pdf");

// === Utilidades ===

const MIME = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  svg: "image/svg+xml",
  webp: "image/webp",
  mp4: "video/mp4",
  webm: "video/webm",
};

function fileToDataURL(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = MIME[ext] || "application/octet-stream";
  const buf = fs.readFileSync(filePath);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileStats(absPath) {
  const st = fs.statSync(absPath);
  return { size: st.size, sizeHuman: humanSize(st.size) };
}

// === Inventario en memoria ===

const inventory = {
  videos: [
    {
      kind: "video",
      file: "hero-video.MP4",
      absPath: path.join(PUBLIC_DIR, "videos/hero-video.MP4"),
      webPath: "/videos/hero-video.MP4",
      where: "Home / — Hero section fullscreen",
      role: "Background video con autoPlay loop muted",
      warning: "⚠️ 62.8 MB — comprimir y renombrar a .mp4 minúsculas",
    },
    {
      kind: "video",
      file: "domesticos-natural.mp4",
      absPath: path.join(PUBLIC_DIR, "videos/domesticos-natural.mp4"),
      webPath: "/videos/domesticos-natural.mp4",
      where: "/domesticos — Sección hero productos",
      role: "Background video de sección",
    },
  ],
  branding: [
    {
      kind: "image",
      file: "logo-terra-santa-eulalia-cosmetica.png",
      absPath: path.join(PUBLIC_DIR, "logo-terra-santa-eulalia-cosmetica.png"),
      webPath: "/logo-terra-santa-eulalia-cosmetica.png",
      where: "Navbar (mobile + desktop), favicon (layout.jsx)",
      role: "Identidad corporativa principal",
    },
  ],
  team: [
    {
      kind: "image",
      file: "laia-salomon.png",
      absPath: path.join(PUBLIC_DIR, "images/laia-salomon.png"),
      webPath: "/images/laia-salomon.png",
      where: "Home / — sección 'Quiénes Somos'",
      role: "Retrato de Laia Salomó (fundadora)",
      warning: "⚠️ 7.3 MB — comprimir",
    },
    {
      kind: "image",
      file: "manolo-retrato.png",
      absPath: path.join(PUBLIC_DIR, "images/manolo-retrato.png"),
      webPath: "/images/manolo-retrato.png",
      where: "/filosofia — sección 'Manos que escuchan'",
      role: "Retrato de Manolo Díaz",
      warning: "⚠️ 2.1 MB + comentario en código 'not working-cambiar img'",
    },
    {
      kind: "image",
      file: "retrato-terra-santa-eulalia.png",
      absPath: path.join(PUBLIC_DIR, "images/retrato-terra-santa-eulalia.png"),
      webPath: "/images/retrato-terra-santa-eulalia.png",
      where: "/filosofia",
      role: "Manos mezclando (proceso artesanal)",
      warning: "⚠️ 8.0 MB — comprimir",
    },
    {
      kind: "image",
      file: "who-we-are.png",
      absPath: path.join(PUBLIC_DIR, "images/who-we-are.png"),
      webPath: "/images/who-we-are.png",
      where: "(huérfano — no referenciado en código)",
      role: "Imagen secundaria de equipo",
      warning: "⚠️ Asset sin uso — evaluar eliminación",
    },
  ],
  products: [],
  external: [
    {
      kind: "external-image",
      url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800",
      provider: "Unsplash",
      where: "Home / — Servicio 'Terapia Capilar'",
      role: "Imagen de cabello/salón",
    },
    {
      kind: "external-image",
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200",
      provider: "Unsplash",
      where: "Home / + /domesticos/tratamientos + /rituales (3 lugares)",
      role: "Ambiente spa",
    },
    {
      kind: "external-image",
      url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200",
      provider: "Unsplash",
      where: "/filosofia",
      role: "Textura agua / tierra",
    },
    {
      kind: "external-image",
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000",
      provider: "Unsplash",
      where: "/filosofia",
      role: "Espacio interior",
    },
    {
      kind: "external-image",
      url: "https://cdn.pixabay.com/photo/2020/06/26/08/28/soil-5342049_1280.jpg",
      provider: "Pixabay",
      where: "/filosofia",
      role: "Textura arcilla",
    },
    {
      kind: "external-image",
      url: "https://cdn.pixabay.com/photo/2019/08/26/10/10/leaves-4431306_1280.jpg",
      provider: "Pixabay",
      where: "/filosofia",
      role: "Planta detalle",
    },
    {
      kind: "external-image",
      url: "https://cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_1280.jpg",
      provider: "Pixabay",
      where: "/filosofia",
      role: "Textura final / amanecer",
    },
    {
      kind: "external-image",
      url: "https://cdn.pixabay.com/photo/2018/03/27/19/42/people-3267084_1280.jpg",
      provider: "Pixabay",
      where: "Home / — QuienesSomos detalle textura",
      role: "Detalle textura orgánica",
    },
    {
      kind: "external-video",
      url: "https://videos.pexels.com/video-files/3756003/3756003-hd_1920_1080_25fps.mp4",
      provider: "Pexels",
      where: "/domesticos/terapia-capilar",
      role: "Background video sección terapia (HD 1080p)",
    },
  ],
  youtube: [
    {
      kind: "youtube",
      id: "casXEgFpFRQ",
      url: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      embed: "https://www.youtube.com/embed/casXEgFpFRQ?controls=0",
      where: "/domesticos/videos + /domesticos + asociado a 17 productos en translations.js",
      role: "Tutorial 'Cómo aplicar arcilla'",
      warning: "⚠️ Mismo video para los 17 productos — es placeholder",
    },
    {
      kind: "youtube",
      id: "LXb3EKWsInQ",
      url: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
      embed: "https://www.youtube.com/embed/LXb3EKWsInQ?controls=0",
      where: "/domesticos/videos + /domesticos",
      role: "Tutorial 'Masaje craneal básico'",
    },
  ],
};

// Carga dinámica de productos
const productsDir = path.join(PUBLIC_DIR, "images/products");
if (fs.existsSync(productsDir)) {
  for (const fname of fs.readdirSync(productsDir).sort()) {
    if (fname.startsWith(".")) continue;
    inventory.products.push({
      kind: "image",
      file: fname,
      absPath: path.join(productsDir, fname),
      webPath: `/images/products/${fname}`,
      where: "/domesticos/productos (catálogo) + /domesticos/productos/[id]",
      role: "Imagen de producto en card y detalle",
    });
  }
}

// Anota tamaños para los items locales
function annotateSize(item) {
  if (item.absPath && fs.existsSync(item.absPath)) {
    const stats = getFileStats(item.absPath);
    item.size = stats.size;
    item.sizeHuman = stats.sizeHuman;
  }
}
[...inventory.videos, ...inventory.branding, ...inventory.team, ...inventory.products].forEach(annotateSize);

// === HTML builder ===

async function urlToDataURL(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") || "image/jpeg";
    const buf = Buffer.from(await res.arrayBuffer());
    return `data:${ct};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

async function buildCard(item) {
  let thumb = "";
  if (item.kind === "image" && item.absPath) {
    try {
      const dataUrl = fileToDataURL(item.absPath);
      thumb = `<img src="${dataUrl}" alt="${item.file}" />`;
    } catch {
      thumb = `<div class="placeholder">⚠️ no encontrado</div>`;
    }
  } else if (item.kind === "video") {
    thumb = `<div class="placeholder video"><span>🎬</span><small>VIDEO MP4</small></div>`;
  } else if (item.kind === "external-image") {
    const dataUrl = await urlToDataURL(item.url);
    thumb = dataUrl
      ? `<img src="${dataUrl}" alt="${item.provider}" />`
      : `<div class="placeholder"><span>🌐</span><small>${item.provider}<br>(no descargado)</small></div>`;
  } else if (item.kind === "external-video") {
    thumb = `<div class="placeholder video"><span>🎬</span><small>${item.provider}</small></div>`;
  } else if (item.kind === "youtube") {
    const dataUrl = await urlToDataURL(`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`);
    thumb = dataUrl
      ? `<img src="${dataUrl}" alt="YouTube ${item.id}" />`
      : `<div class="placeholder"><span>📺</span><small>YouTube</small></div>`;
  }

  const title = item.file || item.url?.split("/").pop()?.split("?")[0] || item.id;
  const meta = [];
  if (item.sizeHuman) meta.push(`<span class="tag">${item.sizeHuman}</span>`);
  if (item.provider) meta.push(`<span class="tag provider">${item.provider}</span>`);
  if (item.kind === "youtube") meta.push(`<span class="tag yt">YouTube</span>`);
  if (item.kind === "external-video") meta.push(`<span class="tag video">video externo</span>`);
  if (item.kind === "video") meta.push(`<span class="tag video">video local</span>`);

  return `
    <article class="card">
      <div class="thumb">${thumb}</div>
      <div class="body">
        <h3>${title}</h3>
        <p class="path">${item.webPath || item.url || item.embed || ""}</p>
        <p class="where"><strong>Dónde:</strong> ${item.where}</p>
        <p class="role"><strong>Función:</strong> ${item.role}</p>
        <div class="meta">${meta.join("")}</div>
        ${item.warning ? `<p class="warn">${item.warning}</p>` : ""}
      </div>
    </article>
  `;
}

async function section(title, items) {
  if (!items.length) return "";
  const cards = await Promise.all(items.map(buildCard));
  return `
    <section>
      <h2>${title} <small>(${items.length})</small></h2>
      <div class="grid">${cards.join("")}</div>
    </section>
  `;
}

const totalSize =
  [...inventory.videos, ...inventory.branding, ...inventory.team, ...inventory.products]
    .reduce((acc, it) => acc + (it.size || 0), 0);

async function buildHTML() {
  const sections = await Promise.all([
    section("🎬 Videos locales", inventory.videos),
    section("🏷️ Logo & branding", inventory.branding),
    section("👥 Equipo & retratos", inventory.team),
    section("📦 Productos", inventory.products),
    section("🌐 Imágenes y vídeos externos", inventory.external),
    section("📺 YouTube embeds", inventory.youtube),
  ]);

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<title>Inventario Multimedia — Terra Santa Eulalia</title>
<style>
  @page { size: A4; margin: 12mm; }
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, "Helvetica Neue", Arial, sans-serif;
    color: #3a2e22;
    background: #f5f5f1;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  header.cover {
    text-align: center;
    padding: 60px 40px;
    background: linear-gradient(180deg, #3a2e22 0%, #5a4a36 100%);
    color: #f5f5f1;
    page-break-after: always;
  }
  header.cover h1 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 42px;
    margin: 0 0 12px;
    font-weight: normal;
    letter-spacing: 2px;
  }
  header.cover .subtitle {
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    opacity: 0.7;
    margin-bottom: 40px;
  }
  header.cover .summary {
    display: inline-grid;
    grid-template-columns: repeat(2, auto);
    gap: 12px 40px;
    text-align: left;
    margin-top: 30px;
    padding: 30px 40px;
    border: 1px solid rgba(245,245,241,0.2);
    border-radius: 8px;
  }
  header.cover .summary strong { color: #c5b890; font-weight: normal; }

  main { padding: 8mm; }
  h2 {
    font-family: Georgia, serif;
    font-size: 20px;
    border-bottom: 1px solid #d4c8a8;
    padding-bottom: 6px;
    margin: 24px 0 14px;
    color: #3a2e22;
    font-weight: normal;
  }
  h2 small { color: #8b9a6b; font-size: 13px; margin-left: 8px; }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .card {
    display: flex;
    border: 1px solid #e2dccb;
    border-radius: 6px;
    background: #fff;
    overflow: hidden;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  .card .thumb {
    width: 110px;
    height: 110px;
    flex-shrink: 0;
    background: #f5f5f1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .card .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card .thumb .placeholder {
    color: #8b9a6b;
    font-size: 11px;
    text-align: center;
  }
  .card .thumb .placeholder span { display:block; font-size: 30px; margin-bottom: 4px; }
  .card .thumb .placeholder.video { background: #3a2e22; color: #c5b890; }

  .card .body {
    flex: 1;
    padding: 8px 12px;
    font-size: 10.5px;
    min-width: 0;
  }
  .card h3 {
    margin: 0 0 4px;
    font-family: Georgia, serif;
    font-size: 12px;
    font-weight: normal;
    word-break: break-word;
  }
  .card .path {
    font-family: "SF Mono", Menlo, monospace;
    font-size: 9.5px;
    color: #8b9a6b;
    margin: 0 0 6px;
    word-break: break-all;
  }
  .card p { margin: 2px 0; line-height: 1.35; color: #3a2e22; }
  .card strong { color: #5a4a36; font-weight: 600; }
  .card .meta { margin-top: 6px; }
  .card .tag {
    display: inline-block;
    font-size: 9px;
    padding: 1px 6px;
    border-radius: 8px;
    margin-right: 4px;
    background: #f0eddc;
    color: #5a4a36;
  }
  .card .tag.video { background: #3a2e22; color: #c5b890; }
  .card .tag.yt { background: #ff0000; color: #fff; }
  .card .tag.provider { background: #c5b890; color: #3a2e22; }
  .card .warn {
    margin-top: 6px;
    padding: 4px 6px;
    background: #fff4e0;
    border-left: 2px solid #d9a85a;
    color: #7a5a20;
    font-size: 9.5px;
  }

  footer.foot {
    text-align: center;
    margin-top: 30px;
    padding: 20px;
    font-size: 11px;
    color: #8b9a6b;
    border-top: 1px solid #d4c8a8;
  }
</style>
</head>
<body>
  <header class="cover">
    <h1>Inventario Multimedia</h1>
    <div class="subtitle">Terra Santa Eulalia · Barcelona</div>
    <div class="summary">
      <strong>Generado</strong><span>${new Date().toLocaleDateString("es-ES")}</span>
      <strong>Archivos locales</strong><span>${inventory.videos.length + inventory.branding.length + inventory.team.length + inventory.products.length}</span>
      <strong>URLs externas</strong><span>${inventory.external.length}</span>
      <strong>YouTube embeds</strong><span>${inventory.youtube.length}</span>
      <strong>Tamaño local total</strong><span>${humanSize(totalSize)}</span>
    </div>
  </header>

  <main>
    ${sections.join("\n")}

    <footer class="foot">
      Documento generado automáticamente por <code>scripts/generate-multimedia-pdf.mjs</code> ·
      Para regenerar: <code>npm run multimedia:pdf</code>
    </footer>
  </main>
</body>
</html>`;
}

// === Render con Puppeteer ===

async function main() {
  console.log("🎨 Descargando miniaturas externas (Unsplash / Pixabay / YouTube)...");
  const html = await buildHTML();
  console.log("🖨️  Renderizando PDF...");

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    // El HTML es voluminoso (data: URLs en base64). domcontentloaded es suficiente.
    await page.setContent(html, { waitUntil: "domcontentloaded", timeout: 90000 });
    // Pequeño respiro para que el layout se asiente
    await new Promise((r) => setTimeout(r, 500));
    await page.pdf({
      path: OUTPUT_PDF,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    console.log(`✅ PDF generado: ${OUTPUT_PDF}`);
    console.log(`   ${humanSize(fs.statSync(OUTPUT_PDF).size)}`);
  } catch (err) {
    console.error("❌ Error generando PDF:", err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
