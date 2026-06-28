# 📦 INVENTARIO MULTIMEDIA — Terra Santa Eulalia

> **Generado:** 2026-05-13  
> **Auditoría completa:** local + URLs externas + YouTube embeds

---

## 📊 RESUMEN

| Métrica | Cantidad |
|---------|----------|
| **Total archivos locales** | 24 (2 videos + 22 imágenes) |
| **Total URLs externas (imágenes)** | 9 (Unsplash + Pixabay) |
| **Total URLs externas (videos)** | 1 (Pexels) |
| **YouTube embeds únicos** | 2 (casXEgFpFRQ, LXb3EKWsInQ) |
| **Tamaño total local** | ~92 MB |
| **Formato dominante** | PNG (mayúsculas y minúsculas, mezclado) |

### 🚨 ALERTAS DE INTEGRIDAD

| # | Issue | Severidad |
|---|-------|-----------|
| 1 | `/images/rituales-hero.jpg` referenciado en [`rituales/page.jsx:13`](src/app/rituales/page.jsx) **NO EXISTE** en `/public/` | 🔴 ROTO |
| 2 | `hero-video.MP4` pesa **62.8 MB** — fuera del límite recomendado (20 MB) | 🟡 CRÍTICO |
| 3 | `retrato-terra-santa-eulalia.png` pesa **8.0 MB** sin comprimir | 🟡 CRÍTICO |
| 4 | `laia-salomon.png` pesa **7.3 MB** sin comprimir | 🟡 CRÍTICO |
| 5 | 17 productos comparten **el mismo vídeo YouTube** (casXEgFpFRQ) — placeholder evidente | 🟡 PRODUCTO |
| 6 | Mezcla de extensiones `.PNG` mayúsculas y `.png` minúsculas | 🟢 ORDEN |

---

## 🎬 VIDEOS

### Hero Video (Home)

| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `hero-video.MP4` |
| **Ruta** | `/public/videos/hero-video.MP4` |
| **Referencia en código** | `HERO_VIDEO = "/videos/hero-video.mp4"` ([page.jsx:13](src/app/page.jsx:13)) |
| **Tipo** | Video MP4 |
| **Tamaño** | **62.8 MB** ⚠️ |
| **Ubicación en web** | Home `/` — Hero section fullscreen |
| **Función** | Background video con overlay `bg-black/20` |
| **Configuración** | `autoPlay loop muted playsInline` |
| **⚠️ Crítico** | Extensión `.MP4` mayúsculas en disco, `.mp4` en código — funciona en macOS pero **rompe en Linux/Netlify** (case-sensitive) |
| **Recomendación** | Comprimir a 1080p ~10MB con HandBrake/ffmpeg + renombrar a `.mp4` minúsculas |

### Domésticos Natural

| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `domesticos-natural.mp4` |
| **Ruta** | `/public/videos/domesticos-natural.mp4` |
| **Tipo** | Video MP4 |
| **Tamaño** | 4.3 MB |
| **Ubicación en web** | `/domesticos` — sección hero ([domesticos/page.jsx:34](src/app/domesticos/page.jsx)) |
| **Función** | Background video sección productos |

### Video externo Pexels (Terapia Capilar)

| Propiedad | Valor |
|-----------|-------|
| **URL** | `https://videos.pexels.com/video-files/3756003/3756003-hd_1920_1080_25fps.mp4` |
| **Tipo** | Video MP4 externo (HD 1920x1080 25fps) |
| **Ubicación en web** | `/domesticos/terapia-capilar` ([page.jsx:19](src/app/domesticos/terapia-capilar/page.jsx:19)) |
| **Función** | Background video sección terapia |
| **Licencia** | Pexels (CC0 — uso comercial libre) |
| **⚠️ Riesgo** | Hot-link a CDN externo — si Pexels lo elimina, se rompe |
| **Recomendación** | Descargar y servir desde `/public/videos/terapia-capilar.mp4` |

---

## 📺 YOUTUBE EMBEDS

### Video 1 — "Cómo aplicar arcilla"

| Propiedad | Valor |
|-----------|-------|
| **YouTube ID** | `casXEgFpFRQ` |
| **URL pública** | `https://www.youtube.com/watch?v=casXEgFpFRQ` |
| **URL embed** | `https://www.youtube.com/embed/casXEgFpFRQ?controls=0` |
| **Ubicaciones en web** | • `/domesticos/videos` (vía `VideoEmbed`)<br>• `/domesticos` (iframe con `controls=0`)<br>• Asociado a **los 17 productos** en `translations.js` (campo `video`) |
| **Función** | Tutorial de uso de productos |
| **⚠️ Crítico** | Es el **mismo video** asignado a los 17 productos en `productsList` — placeholder, no son tutoriales reales por producto |

### Video 2 — "Masaje craneal básico"

| Propiedad | Valor |
|-----------|-------|
| **YouTube ID** | `LXb3EKWsInQ` |
| **URL pública** | `https://www.youtube.com/watch?v=LXb3EKWsInQ` |
| **URL embed** | `https://www.youtube.com/embed/LXb3EKWsInQ?controls=0` |
| **Ubicaciones en web** | • `/domesticos/videos`<br>• `/domesticos` (iframe) |
| **Función** | Tutorial de técnica de masaje |

#### Cómo cambiar un YouTube embed
1. Reemplazar el ID en la URL (`casXEgFpFRQ` → nuevo ID de 11 caracteres)
2. Para reemplazar el video por producto: editar `productsList[N].video` en [`src/lib/translations.js`](src/lib/translations.js)

---

## 🖼️ IMÁGENES — LOCALES

### Logo & Branding

| Archivo | Ruta | Tamaño | Ubicación | Función |
|---------|------|--------|-----------|---------|
| `logo-terra-santa-eulalia-cosmetica.png` | `/public/logo-terra-santa-eulalia-cosmetica.png` | 161 KB | Navbar (mobile + desktop), favicon | Identidad corporativa |

### Productos (17 imágenes — `/public/images/products/`)

| # | Producto | Archivo | Tamaño | Categoría |
|---|----------|---------|--------|-----------|
| 1 | Planta Índigo | `terra_santa_planta_indigo.PNG` | 163 KB | Coloración Vegetal |
| 2 | Planta Puro Cobre | `terra_santa_planta_puro_cobre.PNG` | 158 KB | Coloración Vegetal |
| 3 | Planta Rubio Luminoso | `terra_santa_planta_rubio_luminoso.PNG` | 139 KB | Mezcla Ayurvédica |
| 4 | Planta Rubio Miel | `terra_santa_planta_rubio_miel.PNG` | 148 KB | Mezcla Ayurvédica |
| 5 | Planta Castaña | `terra_santa_planta_castanya.PNG` | 149 KB | Mezcla Ayurvédica |
| 6 | Planta Castaña Oscuro | `terra_santa_planta_castaña_oscuro.PNG` ⚠️ | 148 KB | Mezcla Ayurvédica |
| 7 | Planta Fortalecedora | `terra_santa_planta_fortalecedora_brillante.PNG` | 161 KB | Cassia Obovata |
| 8 | Champú Gratitud | `terra_santa_shampo_gratitud_cabello_todo_tipo.PNG` ⚠️ | 79 KB | Higiene Capilar |
| 9 | Champú Abundancia | `terra_santa_shampoo_abundancia_todo_tipo_cabello.PNG` | 72 KB | Higiene Capilar |
| 10 | Green Detox | `terra_santa_tratamiento_capilar_green_detox.PNG` | 214 KB | Tratamiento Específico |
| 11 | Green Vitality | `terra_santa_tratamiento_capilar_green_vitality.PNG` | 198 KB | Tratamiento Específico |
| 12 | Green Curly | `terra_santa_tratamiento_capilar_green_curly.PNG` | 221 KB | Tratamiento Específico |
| 13 | Magical Green Curly | `terra_santa_tratamiento_capilar_magical_green_curly.PNG` | 152 KB | Tratamiento Específico |
| 14 | Acondicionador Spray | `terra_santa_acondicionador_sin_aclarado.PNG` | 79 KB | Hidratación y Cuerpo |
| 15 | Loción Capilar Aloe | `terra_santa_locion_capilar_aloe.PNG` | 118 KB | Hidratación y Cuerpo |
| 16 | Loción Aloe Vera Puro | `terra_santa_locion_aloe_vera_puro.PNG` | 120 KB | Hidratación y Cuerpo |
| 17 | Leche Regeneradora | `terra_santa_leche_corporal_regeneradora.PNG` | 138 KB | Hidratación y Cuerpo |

**Ubicación en web:** `/domesticos/productos` (grid filtrable), `/domesticos/productos/[id]` (detalle), Home `/` (Best Sellers)  
**Función:** Imágenes de catálogo (cards de producto)  
**Referencia código:** [`src/lib/translations.js`](src/lib/translations.js) campo `img` en `productsList`

> ⚠️ **Avisos de naming:**
> - Mezcla `.PNG` mayúsculas — funciona en macOS pero **case-sensitive en Linux** (Netlify/IONOS)
> - `castaña_oscuro` contiene `ñ` — algunos sistemas tienen problemas con tildes/eñes en URLs
> - `shampo` (sin segunda 'o') vs `shampoo` (inconsistencia en uno solo de los archivos)

### Equipo / Fundadores

| Archivo | Ruta | Tamaño | Ubicación | Descripción |
|---------|------|--------|-----------|-------------|
| `laia-salomon.png` | `/public/images/laia-salomon.png` | **7.3 MB** ⚠️ | Home `/` ([QuienesSomos.jsx:11](src/components/home/QuienesSomos.jsx:11)) | Retrato de Laia Salomó, fundadora |
| `manolo-retrato.png` | `/public/images/manolo-retrato.png` | 2.1 MB ⚠️ | `/filosofia` ([page.jsx:13](src/app/filosofia/page.jsx:13)) | Retrato Manolo Díaz (cofundador). **Comentario en código: "not working-cambiar img"** |
| `retrato-terra-santa-eulalia.png` | `/public/images/retrato-terra-santa-eulalia.png` | **8.0 MB** ⚠️ | `/filosofia` ([page.jsx:15](src/app/filosofia/page.jsx:15)) | "Manos mezclando" — proceso artesanal |
| `who-we-are.png` | `/public/images/who-we-are.png` | 1.9 MB | (no referenciado en código actual) | Imagen secundaria de equipo — **POSIBLE ASSET HUÉRFANO** |

---

## 🌐 IMÁGENES — URLs EXTERNAS

### Unsplash (Imágenes)

| URL | Ubicación | Descripción | Licencia |
|-----|-----------|-------------|----------|
| `images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800` | Home `/` — Servicio "Terapia Capilar" ([page.jsx:201](src/app/page.jsx:201)) | Hair / salon | Unsplash free |
| `/images/tratamientos-organicos-naturales.png` | Home `/` — Servicio "Spa" ([page.jsx:208](src/app/page.jsx:208)) | Spa atmosphere | Unsplash free |
| `/images/tratamientos-organicos-naturales.png` | `/domesticos/tratamientos` ([page.jsx:11](src/app/domesticos/tratamientos/page.jsx)) | Spa atmosphere (versión grande) | Unsplash free |
| `/images/tratamientos-organicos-naturales.png` | `/rituales` ([page.jsx:38](src/app/rituales/page.jsx:38)) | Spa atmosphere (versión hero) | Unsplash free |
| `images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200` | `/filosofia` ([page.jsx:11](src/app/filosofia/page.jsx:11)) | Textura agua/tierra | Unsplash free |
| `images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000` | `/filosofia` ([page.jsx:19](src/app/filosofia/page.jsx:19)) | Espacio interior | Unsplash free |

### Pixabay

| URL | Ubicación | Descripción | Licencia |
|-----|-----------|-------------|----------|
| `cdn.pixabay.com/photo/2020/06/26/08/28/soil-5342049_1280.jpg` | `/filosofia` ([page.jsx:17](src/app/filosofia/page.jsx:17)) | Textura arcilla | Pixabay free |
| `cdn.pixabay.com/photo/2019/08/26/10/10/leaves-4431306_1280.jpg` | `/filosofia` ([page.jsx:21](src/app/filosofia/page.jsx:21)) | Planta detalle | Pixabay free |
| `cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_1280.jpg` | `/filosofia` ([page.jsx:23](src/app/filosofia/page.jsx:23)) | Textura final / sunrise | Pixabay free |
| `cdn.pixabay.com/photo/2018/03/27/19/42/people-3267084_1280.jpg` | [QuienesSomos.jsx:14](src/components/home/QuienesSomos.jsx:14) | "Detalle textura orgánica" | Pixabay free |

> ⚠️ **Configuración Next.js requerida:**  
> Para que `<Image />` optimice estas URLs externas, deben estar registradas en `next.config.mjs` bajo `images.remotePatterns`. **Verificar antes de producción.**

---

## 📋 RESUMEN POR UBICACIÓN (PÁGINAS)

### `/` Home
- 🎬 1× Video hero local (`hero-video.MP4` — 62.8 MB) ⚠️
- 🖼️ 3× Imágenes Best Sellers (de `productsList` — Unsplash productos)
- 🖼️ 2× Unsplash externas (servicios capillary + spa)
- 🖼️ 1× Retrato Laia (`laia-salomon.png`) en sección "Quiénes Somos"
- 🖼️ 1× Pixabay externa (detalle textura)

### `/filosofia`
- 🖼️ 2× Locales (`manolo-retrato.png` + `retrato-terra-santa-eulalia.png`)
- 🖼️ 5× Externas (1 Unsplash + 3 Pixabay + 1 Unsplash espacio)

### `/rituales`
- 🖼️ **1× LOCAL ROTO** — `rituales-hero.jpg` 🔴 NO EXISTE
- 🖼️ 1× Unsplash (spa)

### `/domesticos`
- 🎬 1× Video local (`domesticos-natural.mp4`)
- 📺 2× YouTube embeds (`casXEgFpFRQ`, `LXb3EKWsInQ`)

### `/domesticos/productos`
- 🖼️ 17× Imágenes locales (catálogo `/public/images/products/*.PNG`)

### `/domesticos/productos/[id]`
- 🖼️ 1× Imagen por producto (mismo set anterior)

### `/domesticos/tratamientos`
- 🖼️ 1× Unsplash externa (spa)

### `/domesticos/terapia-capilar`
- 🎬 1× Video Pexels externo (HD 1080p)

### `/domesticos/videos`
- 📺 2× YouTube embeds (mismos IDs que `/domesticos`)

### `/domesticos/faq`
- ❌ Sin multimedia

### `/contact`
- ❌ Sin multimedia (revisado — solo formulario)

### `/profesionales` & `/profesionales/formacion`
- ❌ Sin multimedia (página en desarrollo)

### `/legal/*` (5 páginas)
- ❌ Sin multimedia (solo texto)

---

## 🔗 IMÁGENES EXTERNAS QUE EL CLIENTE DEBE INTERNALIZAR

Para no depender de CDNs de terceros (que pueden expirar), se recomienda descargar:

| URL externa | Guardar como | Razón |
|-------------|--------------|-------|
| `images.unsplash.com/photo-1515377905703-c4788e51af15` | `/public/images/services/capillary-service.jpg` | Aparece en Home hero servicios |
| `/images/tratamientos-organicos-naturales.png` | `/public/images/services/spa-service.jpg` | Usada 3 veces (Home, tratamientos, rituales) |
| `images.unsplash.com/photo-1518531933037-91b2f5f229cc` | `/public/images/philosophy/water-earth.jpg` | Filosofía — textura agua |
| `images.unsplash.com/photo-1560066984-138dadb4c035` | `/public/images/philosophy/space-interior.jpg` | Filosofía — espacio interior |
| `cdn.pixabay.com/photo/2020/06/26/08/28/soil-5342049_1280.jpg` | `/public/images/philosophy/clay-texture.jpg` | Filosofía — arcilla |
| `cdn.pixabay.com/photo/2019/08/26/10/10/leaves-4431306_1280.jpg` | `/public/images/philosophy/leaves.jpg` | Filosofía — hojas |
| `cdn.pixabay.com/photo/2016/05/03/16/10/morning-1369446_1280.jpg` | `/public/images/philosophy/morning.jpg` | Filosofía — amanecer |
| `cdn.pixabay.com/photo/2018/03/27/19/42/people-3267084_1280.jpg` | `/public/images/home/organic-detail.jpg` | Home — textura orgánica |
| `videos.pexels.com/.../3756003-hd_1920_1080_25fps.mp4` | `/public/videos/terapia-capilar.mp4` | Background terapia capilar |

**Tamaño estimado de descarga:** ~15-25 MB (las imágenes a 1080-1920px de ancho)

---

## ✅ CHECKLIST DE MULTIMEDIA PARA PRODUCCIÓN

### 🔴 Bloqueantes (resolver YA)
- [ ] **Crear `/public/images/rituales-hero.jpg`** o sustituir referencia en [rituales/page.jsx:13](src/app/rituales/page.jsx:13)
- [ ] **Comprimir `hero-video.MP4`** de 62.8 MB → 10-15 MB max (HandBrake H.264 calidad 22)
- [ ] **Renombrar `hero-video.MP4` → `hero-video.mp4`** (case-sensitivity en Linux)
- [ ] **Comprimir 4 PNG grandes** (laia, manolo, retrato, who-we-are) — pasar de 19 MB combinados a ~3 MB con `pngquant` o convertir a `.webp`

### 🟡 Importantes
- [ ] Estandarizar extensiones: `.PNG` → `.png` en todos los productos (renombrar + actualizar `translations.js`)
- [ ] Eliminar `ñ` de `terra_santa_planta_castaña_oscuro.PNG` → `castanya_oscuro.png`
- [ ] Decidir qué hacer con `who-we-are.png` (asset huérfano sin referencia en código)
- [ ] Descargar las 9 URLs externas y servirlas localmente
- [ ] Verificar que dominios externos están en `next.config.mjs` `images.remotePatterns`
- [ ] Reemplazar el placeholder YouTube por producto (todos comparten `casXEgFpFRQ`)

### 🟢 Mejoras
- [ ] Generar versiones `.webp` para todas las `.png` (50% reducción típica)
- [ ] Crear logo en blanco (sobre fondos oscuros — Footer es earth-brown)
- [ ] Crear favicon de varios tamaños (16, 32, 180, 512)
- [ ] Añadir `alt` text descriptivo en todas las imágenes (ahora algunos tienen `alt={product.name}` que es genérico)
- [ ] Generar `og-image.jpg` para social sharing (1200×630)

---

## 💾 PAQUETE DE ARCHIVOS A DESCARGAR/ACTUALIZAR

El cliente debe:

| # | Acción | Tamaño aprox |
|---|--------|-------------|
| 1 | Descargar `/public/videos/` actual | 67 MB |
| 2 | Descargar `/public/images/` actual | 25 MB |
| 3 | Internalizar las 9 URLs externas | +20 MB |
| 4 | **Comprimir todo lo anterior** | **objetivo: 30 MB total** |

**Total actual:** ~92 MB locales + ~20 MB externos = **~112 MB**  
**Total óptimo tras compresión:** ~30 MB

---

## 📐 ESPECIFICACIONES TÉCNICAS RECOMENDADAS

| Tipo | Formato | Calidad | Tamaño máx |
|------|---------|---------|-----------|
| Hero video | MP4 H.264 | CRF 22 / 1080p / 25fps | 15 MB |
| Background video secundario | MP4 H.264 | CRF 24 / 720p | 5 MB |
| Producto (card) | WebP + PNG fallback | 80% | 100 KB |
| Producto (detalle) | WebP + PNG fallback | 85% | 200 KB |
| Hero image | WebP | 75% / 1920×1080 | 250 KB |
| Retrato equipo | WebP | 85% / 800×1200 | 200 KB |
| Logo | PNG transparente | — | 50 KB |
| Favicon | ICO + PNG | 32×32 + 180×180 | 20 KB |

---

**Auditoría completada:** 2026-05-13  
**Próximo paso:** Generar PDF visual con [MULTIMEDIA_PDF_GENERATION.md](MULTIMEDIA_PDF_GENERATION.md)
