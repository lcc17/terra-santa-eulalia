# 🌐 EXTERNAL ASSETS INVENTORY — Terra Santa Eulalia

> Inventario completo de **todos los recursos externos** que la web consume: imágenes, vídeos, scripts, fuentes, APIs y servicios cloud.
>
> Importante para: GDPR (cookies de terceros), performance (CDNs ajenos), continuidad (hot-links), CSP (Content Security Policy).
>
> **Generado:** 2026-05-13  
> **Complementa:** [MULTIMEDIA_INVENTORY.md](MULTIMEDIA_INVENTORY.md) (audita los archivos multimedia con miniaturas)

---

## 📊 RESUMEN

| Categoría | Cantidad | Estado |
|-----------|----------|--------|
| 🖼️ Imágenes externas | 10 (Unsplash × 6, Pixabay × 4) | ⚠️ Hot-linked, no internalizadas |
| 🎬 Vídeos externos | 1 (Pexels) | ⚠️ Hot-linked |
| 📺 YouTube embeds | 2 únicos | ⚠️ Cookies de terceros |
| 🗺️ Mapas embebidos | 1 (Google Maps) | ⚠️ Cookies de terceros |
| 🔤 Fuentes web | 2 declaradas, **0 cargadas** | 🔴 Bug |
| 📦 Scripts/CDN | 0 (ninguno directo) | ✅ |
| 🛠️ APIs externas (planeadas) | 3 (EmailJS, MongoDB, JWT) | ⚠️ EmailJS no integrado |
| ☁️ Servicios cloud | 2 (Netlify, IONOS) | ✅ Activo |

---

## A) 🖼️ IMÁGENES EXTERNAS

### Unsplash (6 URLs)

| # | URL | Ubicación en código | Función | Licencia |
|---|-----|---------------------|---------|----------|
| 1 | `images.unsplash.com/photo-1515377905703-c4788e51af15` | [`page.jsx:201`](src/app/page.jsx:201) | Card "Terapia Capilar" en home | Unsplash Free |
| 2 | `images.unsplash.com/photo-1540555700478-4be289fbecef` (w=800) | [`page.jsx:208`](src/app/page.jsx:208) | Card "Spa" en home | Unsplash Free |
| 3 | `images.unsplash.com/photo-1540555700478-4be289fbecef` (w=1200) | [`tratamientos/page.jsx:11`](src/app/domesticos/tratamientos/page.jsx:11) | Hero tratamientos | Unsplash Free |
| 4 | `images.unsplash.com/photo-1540555700478-4be289fbecef` (w=1920) | [`rituales/page.jsx:38`](src/app/rituales/page.jsx:38) | Hero rituales (versión XL) | Unsplash Free |
| 5 | `images.unsplash.com/photo-1518531933037-91b2f5f229cc` | [`filosofia/page.jsx:11`](src/app/filosofia/page.jsx:11) | Textura agua/tierra | Unsplash Free |
| 6 | `images.unsplash.com/photo-1560066984-138dadb4c035` | [`filosofia/page.jsx:19`](src/app/filosofia/page.jsx:19) | Espacio interior | Unsplash Free |
| 7 ⚠️ | `images.unsplash.com/photo-1604689598793-b6547190d67a` | [`tailwind.config.js:19`](tailwind.config.js:19) | **`bg-texture-sand`** (clase Tailwind) | Unsplash Free |

> ⚠️ **#7 es especialmente problemática**: vive en `tailwind.config.js` como `backgroundImage` — buscar usos con `grep "texture-sand" src/` (actualmente parece no usarse en JSX, pero podría aparecer en cualquier componente).

### Pixabay (3 URLs)

| # | URL | Ubicación | Función |
|---|-----|-----------|---------|
| 1 | `cdn.pixabay.com/photo/2020/06/26/.../soil-5342049_1280.jpg` | [`filosofia/page.jsx:17`](src/app/filosofia/page.jsx:17) | Textura arcilla |
| 2 | `cdn.pixabay.com/photo/2019/08/26/.../leaves-4431306_1280.jpg` | [`filosofia/page.jsx:21`](src/app/filosofia/page.jsx:21) | Planta detalle |
| 3 | `cdn.pixabay.com/photo/2016/05/03/.../morning-1369446_1280.jpg` | [`filosofia/page.jsx:23`](src/app/filosofia/page.jsx:23) | Textura final / amanecer |
| 4 | `cdn.pixabay.com/photo/2018/03/27/.../people-3267084_1280.jpg` | [`QuienesSomos.jsx:14`](src/components/home/QuienesSomos.jsx:14) | Detalle textura orgánica |

### Configuración Next.js requerida

📄 [next.config.mjs](next.config.mjs):

```javascript
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,  // ⚠️ desactiva optimización de imágenes
  },
  reactCompiler: true,
};
```

**Observaciones:**
- ✅ `images.unoptimized: true` evita que Next.js intente optimizar las imágenes externas (necesario con `output: "export"`)
- ❌ Pero **NO está configurado `remotePatterns`** — si en el futuro se quita el flag `unoptimized`, las imágenes externas dejarán de funcionar
- ⚠️ `output: "export"` significa que es un **sitio estático**, lo cual descarta SSR y API routes (importante para `middleware.js`/login profesional)

---

## B) 🎬 VÍDEOS EXTERNOS

### Pexels

| URL | Ubicación | Función | Licencia |
|-----|-----------|---------|----------|
| `videos.pexels.com/video-files/3756003/3756003-hd_1920_1080_25fps.mp4` | [`terapia-capilar/page.jsx:19`](src/app/domesticos/terapia-capilar/page.jsx:19) | Background video sección terapia (1080p HD) | Pexels Free |

**Riesgo:** Pexels puede retirar el vídeo en cualquier momento → recomendación: descargar y servir desde `/public/videos/`.

---

## C) 📺 YOUTUBE EMBEDS

| ID | URL embed | Ubicaciones | Cookies de terceros |
|----|-----------|-------------|---------------------|
| `casXEgFpFRQ` | `youtube.com/embed/casXEgFpFRQ?controls=0` | [`domesticos/page.jsx:119`](src/app/domesticos/page.jsx:119), [`domesticos/videos/page.jsx:9`](src/app/domesticos/videos/page.jsx:9), 17 productos en `translations.js` | ✅ Sí (Google) |
| `LXb3EKWsInQ` | `youtube.com/embed/LXb3EKWsInQ?controls=0` | [`domesticos/page.jsx:147`](src/app/domesticos/page.jsx:147), [`domesticos/videos/page.jsx:10`](src/app/domesticos/videos/page.jsx:10) | ✅ Sí (Google) |

### ⚠️ Implicaciones GDPR

YouTube embeds normales (`youtube.com/embed/...`) inyectan cookies de Google **antes** de que el usuario acepte el banner. Para cumplir RGPD:

**Opción A — Modo privacy enhanced (recomendado):**
```jsx
src="https://www.youtube-nocookie.com/embed/casXEgFpFRQ"
```
No setea cookies hasta que el usuario pulsa play.

**Opción B — Carga diferida tras consentimiento:**
Comprobar `localStorage.cookie_preferences` → `marketing: true` antes de renderizar el iframe.

**Estado actual:** ❌ Embeds normales sin protección. **Bloqueante real para GDPR estricto.**

### Cómo cambiar un YouTube embed

1. Reemplazar el ID en la URL (11 caracteres después de `?v=` / `/embed/`)
2. Si es para producto: editar `productsList[N].video` en [`src/lib/translations.js`](src/lib/translations.js)
3. Si es para `/domesticos/videos`: editar [`domesticos/videos/page.jsx`](src/app/domesticos/videos/page.jsx)
4. Si es para `/domesticos` (hero secundario): editar [`domesticos/page.jsx:119,147`](src/app/domesticos/page.jsx:119)

---

## D) 🗺️ MAPAS EMBEBIDOS

### Google Maps iframe

📄 [`contact/page.jsx:110`](src/app/contact/page.jsx:110)

```jsx
<iframe src="https://www.google.com/maps/embed?pb=..." />
```

| Propiedad | Valor |
|-----------|-------|
| Dirección mostrada | Carrer de Provença, 213, **08008** Barcelona |
| Cookies de Google | ✅ Sí (igual que YouTube) |
| Estilo | `filter: grayscale(100%) contrast(1.2) opacity(0.8)` (visual dark mode) |
| Lazy load | ✅ `loading="lazy"` |

**Implicaciones GDPR:** Igual que YouTube — carga cookies de Google al renderizar.

**Alternativas:**
- OpenStreetMap (Leaflet) — sin cookies
- Mapa estático (imagen) + botón "Abrir en Google Maps"
- Esperar al consentimiento de cookies marketing antes de renderizar

---

## E) 🔤 FUENTES WEB

### Declaradas pero NO cargadas

📄 [`tailwind.config.js:16-17`](tailwind.config.js:16):

```javascript
fontFamily: {
  serif: ["Playfair Display", "serif"],
  sans: ["Roboto", "sans-serif"],
},
```

| Fuente | Declarada | Cargada |
|--------|-----------|---------|
| Playfair Display | ✅ | ❌ |
| Roboto | ✅ | ❌ |

**Verificación realizada:**
- `src/app/globals.css` → solo `@tailwind base/components/utilities` + reset scrollbar
- `src/app/layout.jsx` → **NO** importa `next/font/google`
- **NO** hay `<link rel="stylesheet" href="https://fonts.googleapis.com">` en ningún sitio

**🔴 Bug crítico de diseño:**

Cuando se aplica la clase `font-serif` (usada en TÍTULOS de toda la web — heros, headlines de productos, etc.), el navegador usa la fuente **serif del sistema** (Times New Roman en Windows, Times en macOS), NO Playfair Display.

El look "luxury editorial" pretendido se está perdiendo. **Es ¡un bug visual masivo!**

### Cómo arreglarlo (Next.js 13+ con App Router)

📄 `src/app/layout.jsx`:

```javascript
import { Playfair_Display, Roboto } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${roboto.variable}`}>
      {/* ... */}
```

📄 `tailwind.config.js`:

```javascript
fontFamily: {
  serif: ["var(--font-serif)", "Georgia", "serif"],
  sans: ["var(--font-sans)", "system-ui", "sans-serif"],
},
```

**Ventaja:** Las fuentes se sirven desde el mismo dominio (no Google Fonts CDN) → **0 cookies de Google**, GDPR-friendly por defecto.

---

## F) 📦 SCRIPTS / CDN EXTERNOS

### Búsqueda exhaustiva realizada

```bash
grep -rEn "fonts.googleapis|fonts.gstatic|cdnjs|jsdelivr|unpkg|google-analytics|googletagmanager|hotjar|tagmanager|stripe|paypal|gtag|fbcdn" src/
```

**Resultado:** ✅ **No se cargan scripts externos directamente** desde el HTML/JSX.

**Solo aparecen:**
- En `package-lock.json` (registry.npmjs.org — esto es solo npm, no se sirve al navegador)
- Una referencia paypal de `faisalman` en metadata de dependencia (irrelevante)

**Conclusión:** La web no inyecta ningún script de seguimiento de terceros actualmente.

**Cuando se active Google Analytics**, agregar a `app/layout.jsx`:

```jsx
import Script from "next/script";

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="ga" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || []; ...`}
</Script>
```

Y controlar la carga según `localStorage.cookie_preferences.analytics`.

---

## G) 🛠️ APIs EXTERNAS / INTEGRACIONES

| API | Estado | Dónde se usa | Riesgo |
|-----|--------|--------------|--------|
| **EmailJS** | ⚠️ Instalado, no integrado | Formulario `/contact` debería usarlo | El form `<form>` no envía nada |
| **WhatsApp wa.me** | ✅ Activo | 6 lugares (deep-link, no API auth) | — |
| **MongoDB Atlas** | 🟡 Preparado, no activo | URI `localhost:27017/terra` en `.env.local` | No conectado en producción |
| **JWT (jose)** | 🟡 Middleware listo | Login profesional | Secret débil (ver SENSITIVE_DATA) |
| **bcryptjs** | ⚠️ Instalado, no usado | Login profesional | Aún no se crean usuarios reales |
| **Puppeteer** | 🟢 Dev-only | `scripts/generate-multimedia-pdf.mjs` | — |
| **Google Maps Embed** | ✅ Activo (iframe) | `/contact` | Cookies Google |
| **YouTube IFrame Embed** | ✅ Activo | `/domesticos`, `/domesticos/videos`, productos | Cookies Google |

### Dependencias declaradas pero no usadas en código

📄 `package.json`:

| Paquete | Versión | Usado en código |
|---------|---------|-----------------|
| `@emailjs/browser` | ^4.4.1 | ❌ No importado |
| `bcryptjs` | ^3.0.3 | ❌ No importado |
| `mongoose` | ^9.1.3 | ❌ No importado |
| `react-hook-form` | ^7.71.0 | ❌ No importado |
| `react-player` | ^3.4.0 | ❌ No importado (videos usan `<video>` o `<iframe>`) |

> ⚠️ 5 dependencias instaladas que aumentan el bundle size sin aportar nada. Considerar `npm uninstall` o usar.

---

## H) ☁️ SERVICIOS CLOUD / HOSTING

| Servicio | Uso | Configuración |
|----------|-----|---------------|
| **IONOS** | Hosting actual producción | Visible en commits recientes (`build: correccion ionos`) |
| **Netlify** | Plugin instalado (`@netlify/plugin-nextjs ^5.15.8`) | Backup / alternativa |
| **Vercel** | Solo carpeta `.vercel/` presente | Posible despliegue previo |

**Recomendación:** Decidir un solo proveedor para evitar configuraciones huérfanas.

---

## 🛡️ CONTENT SECURITY POLICY (CSP) RECOMENDADA

Para producción, añadir cabeceras CSP en `netlify.toml` o vía middleware:

```
Content-Security-Policy:
  default-src 'self';
  img-src 'self' data: blob:
    https://images.unsplash.com
    https://cdn.pixabay.com
    https://i.ytimg.com;
  media-src 'self'
    https://videos.pexels.com;
  frame-src 'self'
    https://www.youtube.com
    https://www.youtube-nocookie.com
    https://www.google.com;
  font-src 'self' data:;
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  connect-src 'self'
    https://api.emailjs.com;
```

---

## 📥 PLAN DE INTERNALIZACIÓN (orden recomendado)

### Fase 1 — Branding crítico (esta semana)
1. **Cargar Playfair Display + Roboto** vía `next/font/google` (15 min, transforma el look)
2. **YouTube → youtube-nocookie.com** en los 4 sitios (5 min, mejora GDPR)

### Fase 2 — Independencia de terceros (próximo sprint)
3. Descargar las 10 imágenes externas → `/public/images/external/`
4. Descargar vídeo Pexels → `/public/videos/terapia-capilar.mp4`
5. Sustituir referencias en código

### Fase 3 — Privacy avanzado (post-lanzamiento)
6. Sustituir Google Maps iframe por:
   - Mapa estático (PNG) + link a Google Maps
   - O OpenStreetMap (Leaflet)
7. Cargar YouTube embeds solo tras consentimiento de cookies marketing
8. Activar CSP completo en headers HTTP

---

## ✅ CHECKLIST CONSOLIDADO

| Tarea | Estado | Prioridad |
|-------|--------|-----------|
| Cargar Playfair Display + Roboto | ❌ | 🔴 P0 (afecta TODO el look) |
| YouTube → privacy enhanced (`-nocookie`) | ❌ | 🔴 P0 (GDPR) |
| Internalizar 10 imágenes externas | ❌ | 🟡 P1 |
| Internalizar vídeo Pexels | ❌ | 🟡 P1 |
| Activar EmailJS en formulario contact | ❌ | 🔴 P0 (form no funciona) |
| Configurar CSP headers | ❌ | 🟡 P1 |
| Eliminar deps no usadas | ❌ | 🟢 P2 |
| Mapa: alternativa privacy-friendly | ❌ | 🟢 P2 |
| Documentar `.env.example` | ❌ | 🟡 P1 |

---

**Resumen de hallazgos críticos:**
1. 🔴 Las fuentes serif/sans declaradas en Tailwind **no se cargan**. Toda la web muestra fuentes de sistema en vez de Playfair Display + Roboto.
2. 🔴 YouTube embeds **sin** modo nocookie → cookies de Google antes del consentimiento.
3. 🔴 Formulario `/contact` **no envía nada** (sin onSubmit, sin EmailJS importado).
4. 🟡 10 imágenes + 1 vídeo dependiendo de CDNs externos.
5. 🟢 No hay scripts de terceros inyectados — buen punto de partida para GDPR.

Ver [SENSITIVE_DATA_CHECKLIST.md](SENSITIVE_DATA_CHECKLIST.md) para datos sensibles y [COPY_AUDIT.md](COPY_AUDIT.md) para traducciones por sección.
