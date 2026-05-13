# 🖨️ MULTIMEDIA PDF GENERATION — Terra Santa Eulalia

> Genera un PDF visual con todas las miniaturas, rutas, ubicaciones y especificaciones técnicas de cada asset multimedia del proyecto.

---

## 🚀 Uso rápido

```bash
npm run multimedia:pdf
```

**Salida:** `MULTIMEDIA_INVENTORY.pdf` en la raíz del proyecto.

Tiempo aproximado: ~10-15 segundos (depende de la velocidad descargando las miniaturas externas).

---

## 📦 Qué hace el script

[`scripts/generate-multimedia-pdf.mjs`](scripts/generate-multimedia-pdf.mjs):

1. **Escanea** `public/` y recoge:
   - Videos locales (MP4, WebM)
   - Imágenes locales (PNG, JPG, WebP)
   - Logo y branding
2. **Lee** `MULTIMEDIA_INVENTORY.md` (información manual de URLs externas, YouTube, etc.)
3. **Descarga** las miniaturas externas (Unsplash, Pixabay, YouTube `hqdefault.jpg`) y las **incrusta como `data:` URLs base64** — el PDF queda autónomo (no depende de internet para verse).
4. **Construye** un HTML con tarjetas (grid 2 columnas), cada tarjeta tiene:
   - Miniatura del asset (~110×110px)
   - Nombre del archivo
   - Ruta web o URL
   - Dónde se usa (página/componente)
   - Función / descripción
   - Tags (peso, proveedor, tipo)
   - Advertencias (⚠️ si las hay)
5. **Lanza Puppeteer** (Chrome headless) y exporta a PDF A4.

---

## 🎨 Estructura del PDF generado

| Página | Contenido |
|--------|-----------|
| **Portada** | Cover con totales: archivos locales, URLs externas, YouTube embeds, peso total |
| **Sección 1** | 🎬 Videos locales (2) — hero-video.MP4 + domesticos-natural.mp4 |
| **Sección 2** | 🏷️ Logo & branding (1) |
| **Sección 3** | 👥 Equipo & retratos (4) — Laia, Manolo, retrato manos, who-we-are |
| **Sección 4** | 📦 Productos (17) — todos los productos del catálogo |
| **Sección 5** | 🌐 Imágenes y vídeos externos (9) — Unsplash + Pixabay + Pexels |
| **Sección 6** | 📺 YouTube embeds (2) — casXEgFpFRQ + LXb3EKWsInQ |

---

## ⚙️ Configuración técnica

| Parámetro | Valor |
|-----------|-------|
| Engine | Puppeteer 24.35.0 (ya instalado en `package.json`) |
| Formato | A4 con `printBackground: true` |
| Resolución imágenes | Originales (sin redimensionar) |
| Timeout descarga externa | 8 s por imagen, tolerante |
| Tamaño PDF resultante | ~25 MB (incluye todas las imágenes embebidas) |
| Node.js requerido | ≥ 18 (usa `fetch` y `AbortSignal.timeout` nativos) |

---

## 🔧 Personalización

Para cambiar el inventario, editar [`scripts/generate-multimedia-pdf.mjs`](scripts/generate-multimedia-pdf.mjs):

```javascript
const inventory = {
  videos: [...],     // ← Añadir nuevos videos locales aquí
  branding: [...],
  team: [...],
  products: [],      // ← Auto-cargados desde /public/images/products/
  external: [...],   // ← URLs externas (Unsplash, Pexels...)
  youtube: [...],    // ← IDs de YouTube y dónde se usan
};
```

Cada item soporta los campos:
- `kind`: `image` | `video` | `external-image` | `external-video` | `youtube`
- `file` / `absPath` / `webPath` (locales)
- `url` / `provider` (externos)
- `id` / `embed` (YouTube)
- `where`: dónde aparece en la web
- `role`: función / descripción
- `warning`: opcional, aparece como banda naranja

---

## 🧩 Cómo el cliente debe actualizar el inventario

### Al añadir una nueva imagen local
1. Subirla a `/public/images/...`
2. Si es producto, va a `/public/images/products/` → **se detecta automáticamente** en próxima ejecución
3. Si es otra categoría, editar el array correspondiente en el script (`team`, `branding`...) y añadir entrada
4. Ejecutar `npm run multimedia:pdf`

### Al añadir una imagen externa
1. Añadir entrada al array `external` en el script con `url`, `provider`, `where`, `role`
2. Ejecutar `npm run multimedia:pdf`

### Al cambiar un YouTube embed
1. Identificar nuevo ID (los 11 caracteres después de `?v=` en la URL)
2. Reemplazar en:
   - [`src/lib/translations.js`](src/lib/translations.js) (campo `video` de productos)
   - [`src/app/domesticos/page.jsx`](src/app/domesticos/page.jsx) (iframes embed)
   - [`src/app/domesticos/videos/page.jsx`](src/app/domesticos/videos/page.jsx) (componentes VideoEmbed)
   - El array `youtube` del script
3. Ejecutar `npm run multimedia:pdf`

---

## 🐛 Troubleshooting

### "Navigation timeout exceeded"
- Reduce el número de imágenes externas o aumenta el timeout en `setContent({ timeout: 90000 })`.
- Comprueba conexión a internet (descarga thumbnails de Unsplash/Pixabay).

### "Cannot find module 'puppeteer'"
```bash
npm install puppeteer
```

### "Failed to launch browser"
Linux/CI: Chrome necesita dependencias del sistema:
```bash
apt-get install -y libnss3 libxss1 libasound2 libatk-bridge2.0-0 libgtk-3-0
```

### PDF demasiado pesado (>25 MB)
Editar el script para redimensionar las imágenes antes de incrustarlas. Usar `sharp`:
```bash
npm install sharp
```
Y en `fileToDataURL`:
```javascript
import sharp from "sharp";
async function fileToDataURL(filePath) {
  const buf = await sharp(filePath).resize(220).webp({ quality: 70 }).toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}
```

---

## 📋 YouTube embeds — Referencia rápida

| ID | Título sugerido | Embed code | Cambiar en |
|----|-----------------|------------|------------|
| `casXEgFpFRQ` | Cómo aplicar arcilla | `<iframe src="https://www.youtube.com/embed/casXEgFpFRQ?controls=0" />` | translations.js (17 productos) + `domesticos/page.jsx` + `domesticos/videos/page.jsx` |
| `LXb3EKWsInQ` | Masaje craneal básico | `<iframe src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=0" />` | `domesticos/page.jsx` + `domesticos/videos/page.jsx` |

**Componente reutilizable:** [`src/components/domesticos/VideoEmbed.jsx`](src/components/domesticos/VideoEmbed.jsx)

---

## ✅ Comandos relacionados

```bash
# Generar inventario PDF visual
npm run multimedia:pdf

# Validar traducciones (i18n)
npm run validate:i18n

# Build / dev
npm run dev
npm run build
npm run lint
```

---

**Última actualización:** 2026-05-13
