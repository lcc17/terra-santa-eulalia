# Contexto del Proyecto: Terra Santa Eulalia

**Documento de Arquitectura y Directrices para el Agente de IA (OpenCode / Cursor / Windsurf)**

## 1. Descripción General del Proyecto

Terra Santa Eulalia es una plataforma web "High-End / Luxury Wellness" para un salón de cosmética natural, spa orgánico y terapia capilar ubicado en Barcelona.
El modelo de negocio es híbrido: actúa como catálogo de productos retail ("Click & Collect") y generador de leads/reservas para servicios "High Ticket" (Terapias Capilares y Faciales).
**No tiene carrito de compras clásico**; el flujo de conversión prioriza el contacto directo (WhatsApp, Formulario) y la reserva física.

## 2. Stack Tecnológico Exacto

- **Framework Core**: Next.js 13+ (Usando `App Router` en la carpeta `src/app/`).
- **Librería UI**: React 18+ (Componentes funcionales, Client Components declarados con `"use client"` cuando hay interactividad o animaciones).
- **Estilos**: Tailwind CSS (PostCSS). Uso intensivo de utilidades para layouts fluidos, grid asimétricos y modos de mezcla (`mix-blend-multiply`).
- **Animaciones**: Framer Motion (`motion`, `useScroll`, `useTransform`, `AnimatePresence`).
- **Iconografía**: `lucide-react` (Iconos minimalistas en formato SVG).
- **Gestión de Estado y Contexto**: Context API de React (`src/lib/context.js` expone el hook `useApp`).
- **Despliegue**: Netlify (Conectado vía GitHub).
- **Gestión de Versiones**: Git / GitHub.

## 3. Arquitectura y Estructura de Carpetas

```text
/ (Raíz)
├── .next/                  # Carpeta de build (Ignorada en Git)
├── public/                 # Assets públicos
│   ├── images/
│   │   ├── products/       # Imágenes locales de los productos (.png/.jpg)
│   │   └── who-we-are.png  # Imágenes de recursos generales
│   ├── videos/             # Videos locales (ej. hero-video.mp4)
│   └── logo-terra-santa-eulalia-cosmetica.png
├── src/
│   ├── app/                # Rutas de Next.js (App Router)
│   │   ├── page.jsx        # Home (Hero Atmosférico + Navegación High Ticket)
│   │   ├── filosofia/      # Página asimétrica/parallax del origen de la marca
│   │   ├── contact/        # Formulario Split Editorial + Google Maps + WhatsApp
│   │   ├── profesionales/  # Área de acceso restringido / B2B
│   │   └── domesticos/
│   │       ├── productos/  # Catálogo con filtros de categorías
│   │       ├── tratamientos/# Menú Spa (Rituales Capilares y Faciales)
│   │       └── terapia-capilar/ # Landing "Green Zone" (Diagnóstico y Soluciones)
│   ├── components/         # Componentes aislados
│   │   ├── ui/             # Componentes compartidos (ej. Navbar.jsx collapsable)
│   │   ├── home/           # Bloques específicos de la Home
│   │   └── domesticos/     # Componentes de retail (ej. ProductCard.jsx)
│   └── lib/
│       ├── context.js      # Contexto global
│       └── translations.js # "Headless CMS" local. Contiene todo el copy y data.
├── next.config.mjs         # Configuración (remotePatterns para Unsplash/Pexels)
└── tailwind.config.js      # Extensión de colores corporativos y tipografías

## 4. Filosofía de Diseño y UI/UX (Reglas Estrictas)
- **Silencio Visual**: Diseños "Editoriales". Menos es más. Espacios en blanco amplios. Textos legibles pero no invasivos.
- **Paleta de Colores Custom**:
  - `cream` (Fondo principal, aporta luz).
  - `earth-brown` (Color principal para texto y fondos de contraste profundo. Representa la tierra).
  - `olive-green` (Acentos, botones, highlights. Representa la planta viva/Green Zone).
  - `sand-light` (Tonos secundarios para bordes, textos atenuados).
- **Tipografía**: Combinación de `font-serif` (Títulos, elegancia, clásicos) y fuentes `sans` (Datos técnicos, botones, legibilidad).
- **Layouts Asimétricos**: Evitar grids cuadrados perfectos. Usar "Split Screens" (Pantalla dividida) y elementos "fuera de la caja" (ej. `mt-32`, `mt-64` en tarjetas adyacentes).
- **Animaciones "Chill"**: Todo debe respirar. Usar `framer-motion` para transiciones suaves (duraciones entre `0.5s` y `1.2s`), efectos parallax en el scroll y fondos con blobs difuminados (`blur-[100px] animate-pulse`).
- **Navegación**: El Navbar implementa un "Collapsing Header" (Logo gigante arriba que desaparece al hacer scroll, dejando una barra glassmorphism pegajosa).

## 5. Gestión de Datos (translations.js)
Dado que no hay base de datos externa, TODO el contenido vive en `src/lib/translations.js`.
El agente NO DEBE codificar en crudo (hardcode) textos descriptivos largos o listas de productos/servicios en los componentes `.jsx`.

- **Estructura**: Dividido por idiomas (`es`, `en`).
- **E-Commerce Doméstico (`productsList`)**: Array de objetos con la lógica de retail.
- **Servicios de Salón (`treatmentsPage`)**: Dividido en `hairRituals` (Base orgánica y Pindas), `facialRituals` (Luz y Piel) y `extras`.
- **Green Zone (`capillaryPage`)**: Enfocada en soluciones a patologías capilares clínicas bajo "Terapia de Oxitocina".

## 6. Directrices Operativas para el Agente (System Prompt)
Cuando actúes sobre este código, debes cumplir las siguientes reglas:

- **Preserva las importaciones**: Si usas un icono nuevo, asegúrate de importarlo desde `lucide-react`. Si usas animación, importa `motion` de `framer-motion` y declara `"use client"` al principio del archivo.
- **Estilizado Tailwind**: Mantén la cohesión de la marca. No uses colores genéricos de Tailwind como `bg-blue-500` o `text-gray-700`. Usa EXCLUSIVAMENTE variables semánticas: `earth-brown`, `cream`, `olive-green`, `sand-light`.
- **Respeto a la UX Híbrida**: No añadas lógica de "Carrito de Compra" genérica. Las acciones de venta deben derivar hacia `/contact` o disparar llamadas a la API de WhatsApp (`window.open('https://wa.me/...')`).
- **Imágenes**: Usa el componente `<Image>` de `next/image` siempre con propiedades `fill` y `object-cover` en contenedores relativos (`relative`). Las imágenes externas deben estar permitidas en `next.config.mjs`.
- **Idioma por defecto**: Todo el código de UI, comentarios y traducciones por defecto deben generarse en Español.

## 7. Reglas de Integración de Terceros
- **WhatsApp**: Usar la API de URLs (`https://wa.me/NUMERO?text=MENSAJE`) en botones nativos.
- **Google Maps**: Integrado vía `<iframe>` con filtros de Tailwind (`filter: grayscale(100%) contrast(1.2) opacity(0.8)`) para mantener la identidad visual "High-End".
- **Videos de Fondo**: Usar `<video autoPlay loop muted playsInline>`. El `playsInline` es obligatorio para evitar problemas en iOS.
```
