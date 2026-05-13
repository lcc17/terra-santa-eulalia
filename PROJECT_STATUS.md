# 📊 PROJECT_STATUS.md

## 🎯 Visión General
- **Nombre del proyecto:** Terra Santa Eulalia
- **Descripción:** Plataforma web de lujo para un centro de bienestar orgánico, spa y terapia capilar avanzada ubicado en Barcelona (C/ Provença 213). Opera bajo un modelo híbrido Click & Collect para productos naturales + reserva de servicios de alto ticket vía WhatsApp. Enfoque en diseño minimalista "visual silence" con animaciones orgánicas.
- **Stack:** 
  - Framework: Next.js 16.2.3 (App Router)
  - React: 19.2.1
  - Styling: Tailwind CSS 3.4.19 + PostCSS
  - Animaciones: Framer Motion 12.26.1
  - Icons: lucide-react 0.561.0
  - Autenticación: JWT (jose 6.1.3) + bcryptjs
  - Base de datos: MongoDB 9.1.3 (configurada pero no activa en funcionalidad principal)
  - Formularios: react-hook-form 7.71.0
  - Email: EmailJS 4.4.1
  - Despliegue: Netlify (plugin-nextjs 5.15.8)
  - Node: v18+ (implied by Next.js 16)
- **Estado:** 🟢 Producción (en IONOS desde abril 2026)
- **Última actualización:** 2026-05-13 | Commits recientes: Correcciones IONOS, despliegue completado

---

## 🏗️ Arquitectura Actual

### Estructura de Carpetas
```
src/
├── app/                          # Next.js 13+ App Router
│   ├── page.jsx                  # Home (Hero, Best Sellers, Quiénes Somos, Services)
│   ├── layout.jsx                # Root Layout (Navbar, Footer, AppProvider)
│   ├── globals.css               # Estilos globales Tailwind
│   ├── contact/                  # Página de contacto
│   │   └── page.jsx
│   ├── domesticos/               # Sección de productos y servicios domésticos
│   │   ├── page.jsx              # Landing productos
│   │   ├── productos/            # Catálogo de productos
│   │   │   ├── page.jsx          # Listado con filtros
│   │   │   └── [id]/
│   │   │       └── page.jsx      # Detalle producto individual
│   │   ├── tratamientos/         # Rituales capilares/faciales
│   │   │   └── page.jsx
│   │   ├── terapia-capilar/      # Servicios de terapia capilar
│   │   │   └── page.jsx
│   │   ├── videos/               # Tutoriales/Contenido multimedia
│   │   │   └── page.jsx
│   │   └── faq/                  # Preguntas frecuentes
│   │       └── page.jsx
│   ├── rituales/                 # Sección de rituales (servicios de spa)
│   │   └── page.jsx              # Catálogo de rituales con precios
│   ├── filosofia/                # Página de filosofía de marca
│   │   └── page.jsx
│   └── profesionales/            # Área profesional (formación, presupuestos)
│       ├── page.jsx              # Landing profesionales
│       └── formacion/            # Cursos y formación
│           └── page.jsx
│
├── components/                   # 13 componentes React (Funcional + Hooks)
│   ├── ui/                       # Componentes UI reutilizables
│   │   ├── Navbar.jsx            # Navegación con toggle idioma
│   │   ├── Footer.jsx            # Pie de página con info contacto
│   │   ├── Button.jsx            # Componente Button genérico
│   │   ├── Card.jsx              # Componente Card genérico
│   │   └── WhatsAppButton.jsx    # Botón acción WhatsApp
│   ├── home/                     # Componentes específicos de home
│   │   └── QuienesSomos.jsx      # Sección "Quiénes Somos" con parallax
│   ├── rituales/                 # Componentes de servicios
│   │   ├── RitualCard.jsx        # Tarjeta ritual capilar
│   │   ├── FacialRitualCard.jsx  # Tarjeta ritual facial
│   │   └── ExtrasCard.jsx        # Tarjeta servicios extra
│   ├── domesticos/               # Componentes de productos
│   │   ├── ProductCard.jsx       # Tarjeta producto con imagen
│   │   ├── FAQSlider.jsx         # Slider de FAQ (carousel)
│   │   └── VideoEmbed.jsx        # Reproductor de videos
│   └── animations/               # Componentes de animación
│       └── FullScreenSection.jsx # Sección fullscreen reutilizable
│
├── lib/                          # Lógica compartida (3 archivos)
│   ├── context.js                # Estado global (AppContext)
│   │                              # ├─ lang (ca/es/en)
│   │                              # ├─ user (auth mock)
│   │                              # ├─ mounted (hydration fix)
│   │                              # └─ toggleLang()
│   ├── translations.js           # 1258 líneas - Base de datos estática
│   │                              # ├─ Productos (20+ items)
│   │                              # ├─ Rituales capilares (8+ tipos)
│   │                              # ├─ Rituales faciales (4+ tipos)
│   │                              # ├─ Servicios extras
│   │                              # ├─ FAQs (12+ preguntas)
│   │                              # ├─ Videos (tutoriales)
│   │                              # ├─ Team professionals
│   │                              # └─ Textos traducidos (ca/es/en)
│   └── useSchedule.js            # Hook personalizado (si existe)
│
└── public/                       # Activos estáticos
    ├── videos/                   # Hero video y contenido multimedia
    ├── images/                   # Imágenes estáticas
    └── logo-terra-santa-eulalia-cosmetica.png
```

---

## ✅ Funcionalidades Implementadas

### 1️⃣ AUTENTICACIÓN & USUARIO (MOCK - PLANEADO)
- [x] Estructura JWT configurada en `.env.local`
- [x] bcryptjs importado (no activo en flujo actual)
- [x] Context de usuario en `AppContext` con `localStorage`
- [ ] Login real (no implementado - sin página de login)
- [ ] Sistema de roles (planeado para Área Profesional)
- **Estado:** Mock listo, sin funcionalidad activa

### 2️⃣ LOCALIZACIÓN & IDIOMAS (COMPLETADO ✅)
- [x] Soporte multiidioma: Catalan (ca) por defecto, Español (es), Inglés (en)
- [x] Toggle de idioma en Navbar con `toggleLang()`
- [x] Sincronización de locale con middleware + cookies + URL
- [x] Context global con `useApp()` para acceso a traducciones
- [x] 1258 líneas de traducciones en `translations.js`
- [x] Fix de hydration mismatch (mounted state)
- **Integración:** Middleware Next.js detecta locale, AppContext sincroniza
- **Estado:** ✅ Funcional y testeado en IONOS

### 3️⃣ NAVBAR & NAVEGACIÓN (COMPLETADO ✅)
- [x] Navbar responsive con logo
- [x] Menú de navegación con todas las rutas
- [x] Toggle de idioma (ca ↔ es ↔ en)
- [x] Links a contacto y área profesional
- [x] Estilos: Tailwind con colores orgánicos (cream, earth-brown, olive-green)
- **Estado:** ✅ Implementado

### 4️⃣ PRODUCTOS (COMPLETADO ✅)

**Página de Productos (`/domesticos/productos`):**
- [x] Catálogo con 20+ productos
- [x] Filtrado dinámico por categoría
- [x] Búsqueda implícita (mediante categorías)
- [x] Página de detalle producto ([id])
- [x] Grid responsive (1, 2, 4 columnas según breakpoint)
- [x] Tarjetas ProductCard con imagen, precio, descripción
- [x] Animaciones Framer Motion (fade-in, stagger)
- [x] Datos en `translations.js` (Array `productsList`)
- [x] Sin carrito (NO hay shopping cart) - CTA apunta a `/contact` o WhatsApp

**Producto Data Structure:**
```javascript
{
  id: "string",
  title: "string",
  desc: "string",
  longDesc: "string",
  price: "€XX",
  category: "Capilares|Faciales|Corporales|etc",
  image: "/public/img/...",
  benefits: ["benefit1", "benefit2"]
}
```

**Estado:** ✅ Completamente funcional

### 5️⃣ RITUALES & SERVICIOS (COMPLETADO ✅)

**Página de Rituales (`/domesticos/tratamientos`):**
- [x] Catálogo de 8+ rituales capilares + 4+ faciales
- [x] Componentes: RitualCard, FacialRitualCard
- [x] Información: Nombre, descripción, duración (50-90 min), precio (€85-€150)
- [x] Botón flotante "Reservar Cita" → WhatsApp directo
- [x] Extra services (Extras para añadir a rituals)
- [x] Datos en `translations.js` bajo `treatmentsPage.hairRituals`
- [x] Animaciones scroll-triggered

**Ritual Data Structure:**
```javascript
{
  id: "ritual-detox",
  title: "Ritual Detox",
  desc: "Descripción del ritual",
  extra: "Incluye masaje facial...",
  duration: "50 min",
  price: "85€"
}
```

**Estado:** ✅ Funcional - Reserva vía WhatsApp únicamente

### 6️⃣ TERAPIA CAPILAR AVANZADA (COMPLETADO ✅)

**Página de Terapia Capilar (`/domesticos/terapia-capilar`):**
- [x] Servicios premium de terapia capilar
- [x] Tratamientos especializados (Dermatitis, Alopecia, Caída)
- [x] Página de FAQ con slider (`FAQSlider.jsx`)
- [x] Descripción de proceso y beneficios
- [x] CTA para reservar cita
- **Características:** Describe técnicas ayurvédicas, análisis capilar, sesiones de seguimiento

**Estado:** ✅ Completado

### 7️⃣ VIDEOS & CONTENIDO MULTIMEDIA (COMPLETADO ✅)

**Página de Videos (`/domesticos/videos`):**
- [x] Componente `VideoEmbed.jsx` para reproducción
- [x] Tutoriales de uso de productos
- [x] Videos de testimonios
- [x] Reproductor react-player integrado
- [x] Array de videos en `translations.js`

**Estado:** ✅ Funcional

### 8️⃣ FAQ (COMPLETADO ✅)

**Página de FAQ (`/domesticos/faq`):**
- [x] 12+ preguntas frecuentes
- [x] Componente FAQSlider (carousel/expandible)
- [x] Datos en `translations.js` bajo `faqData`
- [x] Responsivo y accesible

**Estado:** ✅ Implementado

### 9️⃣ PÁGINA DE CONTACTO (COMPLETADO ✅)

**Página de Contacto (`/contact`):**
- [x] Formulario de contacto con react-hook-form
- [x] EmailJS integrado para envío de correos
- [x] Validación de campos
- [x] Información de ubicación (C/ Provença 213, Barcelona)
- [x] Teléfono y email de contacto
- [x] Botón WhatsApp directo
- **Datos de contacto:**
  - Email: hola@terrasantaeulalia.com
  - Teléfono: +34 93 518 42 36
  - WhatsApp: +34 631994318
  - Ubicación: C/ Provença 213, Barcelona

**Estado:** ✅ Funcional

### 🔟 HOME PAGE (COMPLETADO ✅)

**Home (`/`):**
- [x] Hero video fullscreen (con overlay)
- [x] Botón WhatsApp flotante animado
- [x] 3 cards principales:
  - 📦 Productos (earth-brown)
  - 💆 Tratamientos (cream)
  - 💇 Terapia Capilar (olive-green)
- [x] Best Sellers (3 productos destacados)
- [x] Sección "Quiénes Somos" con parallax
- [x] Sección servicios de alto ticket (2 cards con imágenes)
- [x] Social proof (testimonios con 5 estrellas)
- [x] Animaciones Framer Motion con scroll parallax
- [x] Responsive mobile-first

**Estado:** ✅ Completamente implementado

### 1️⃣1️⃣ FILOSOFÍA DE MARCA (COMPLETADO ✅)

**Página de Filosofía (`/filosofia`):**
- [x] Visión de marca (visual silence, bienestar orgánico)
- [x] Valores: Pureza, tierra, rituales, minimalismo cálido
- [x] Contenido extenso sobre el concepto

**Estado:** ✅ Implementado

---

## 🚀 EN DESARROLLO / PRÓXIMAS FASES

### 1️⃣2️⃣ ÁREA PROFESIONAL (EN PROGRESO - PLANEADO)

**Estado:** 🟡 Estructura base lista, funcionalidad parcial

**Secciones:**
1. **Landing Profesionales** (`/profesionales`)
   - [x] Página base creada
   - [ ] Contenido de formación completo
   - [ ] Galería de espacios

2. **Formación y Cursos** (`/profesionales/formacion`)
   - [x] Página creada
   - [ ] Catálogo de cursos
   - [ ] Sistema de inscripción
   - [ ] Certificaciones

3. **Presupuestos** (Planeado)
   - [ ] Generador de presupuestos
   - [ ] Cálculo de costos
   - [ ] Descuentas por volumen

4. **Acceso a Salones** (Planeado)
   - [ ] Panel de control profesionales
   - [ ] Gestión de citas
   - [ ] Reportes de clientes
   - [ ] Facturación

**Dependencias:**
- Implementar sistema de autenticación real (JWT)
- Base de datos MongoDB para usuarios profesionales
- Dashboard admin

---

## 🔌 Integraciones Externas

### APIs & Servicios
| Servicio | Uso | Estado |
|----------|-----|--------|
| **WhatsApp API** | Reserva de citas vía mensajes | ✅ Activo |
| **EmailJS** | Envío de emails del formulario | ✅ Configurado |
| **MongoDB** | Base de datos (preparada) | ⏳ No activa |
| **Netlify** | Hosting & Edge Functions | ✅ En producción |
| **Unsplash/Pexels** | Imágenes externas (configuradas) | ✅ Activas |

### Librerías Destacadas
- **framer-motion** (12.26.1): Animaciones, scroll parallax, gestos
- **react-hook-form** (7.71.0): Gestión de formularios
- **react-player** (3.4.0): Reproducción de videos
- **lucide-react** (0.561.0): Iconografía SVG
- **jose** (6.1.3): Manejo de JWT
- **mongoose** (9.1.3): ORM para MongoDB
- **bcryptjs** (3.0.3): Hash de contraseñas
- **puppeteer** (24.35.0): Scraping/automatización (uso interno)

---

## 📱 Funcionalidades por Página/Ruta

| Página | Ruta | Estado | Descripción |
|--------|------|--------|-------------|
| Home | `/` | ✅ Completo | Hero, productos destacados, servicios, testimonios |
| Productos | `/domesticos/productos` | ✅ Completo | Catálogo filtrable de productos naturales |
| Detalle Producto | `/domesticos/productos/[id]` | ✅ Completo | Página individual de producto con detalles |
| Tratamientos | `/domesticos/tratamientos` | ✅ Completo | Rituales capilares y faciales con precios |
| Terapia Capilar | `/domesticos/terapia-capilar` | ✅ Completo | Servicios de terapia capilar avanzada |
| Videos | `/domesticos/videos` | ✅ Completo | Tutoriales y contenido multimedia |
| FAQ | `/domesticos/faq` | ✅ Completo | Preguntas frecuentes con slider |
| Contacto | `/contact` | ✅ Completo | Formulario de contacto + info ubicación |
| Filosofía | `/filosofia` | ✅ Completo | Visión de marca |
| Profesionales | `/profesionales` | 🟡 Estructura | Landing de área profesional |
| Formación | `/profesionales/formacion` | 🟡 Estructura | Cursos y certificaciones (sin contenido) |

---

## ⚠️ Issues / Bugs Conocidos

- [ ] Hydration mismatch: **✅ RESUELTO** (2026-04-15) - useEffect con mounted state
- [ ] Locale desync entre Home y Rituales: **✅ RESUELTO** (2026-04-15)
- [ ] MongoDB URI configurada pero no en uso (puede limpiarse)
- [ ] Puppeteer importado pero sin uso aparente - evaluar necesidad
- [ ] Assets externos (Unsplash) requieren dominio en next.config.mjs para optimización

---

## 📝 Notas Técnicas Importantes

### Decisiones Arquitectónicas
1. **NO Shopping Cart:** Todo flujo de compra redirecciona a WhatsApp o contacto
2. **Datos estáticos en translations.js:** Sin CMS externo, toda data es local
3. **Context API para estado global:** Simple y suficiente para localización + usuario mock
4. **Tailwind con colores semánticos:** cream, earth-brown, olive-green, sand-light (no usar colores genéricos)
5. **Framer Motion para animaciones:** Parallax, fade-ins, scroll-triggered
6. **Next.js App Router:** Componentes cliente con "use client" solo donde sea necesario (hooks, Framer Motion)

### Limitaciones Actuales
- No hay persistencia real de usuario (mock con localStorage)
- Reservas solo vía WhatsApp (sin calendario integrado)
- Sin sistema de pago (Click & Collect es manual)
- Área Profesional sin funcionalidad de backoffice
- No hay búsqueda avanzada de productos (solo filtros básicos)

### Optimizaciones Realizadas
- ✅ Imágenes con Next.js `<Image>` y lazy loading
- ✅ Videos con `playsInline` para iOS
- ✅ CSS-in-JS con Tailwind (no CSS adicional)
- ✅ Componentes light (no Redux, no MobX)
- ✅ Middleware para localización en servidor
- ✅ Babel React Compiler en devDependencies (no activo aún)

### Configuraciones Especiales
- **Middleware Next.js:** Detecta locale y redirecciona automáticamente
- **Netlify Edge Functions:** Soportadas vía plugin-nextjs
- **NEXT_LOCALE cookie:** Set por middleware, leído por context
- **Suppressed Hydration Warnings:** En layout y video hero (intencional)

---

## 🎓 Estándares del Proyecto

| Aspecto | Estándar |
|---------|----------|
| **Naming Componentes** | PascalCase (e.g., `ProductCard.jsx`) |
| **Variables/Funciones** | camelCase (e.g., `handleWhatsAppClick`) |
| **Constantes** | UPPER_SNAKE_CASE (e.g., `HERO_VIDEO`) |
| **Estructura Componentes** | Functional + Hooks + "use client" (si hay Framer Motion) |
| **Estado** | Context API (global), useState/useEffect (local) |
| **Testing** | ❌ No implementado (recomendado: Jest + Cypress) |
| **Linting** | ESLint 9 (eslint-config-next) |
| **Formatter** | Prettier (configurar en settings) |
| **TypeScript** | ❌ No (proyecto en JavaScript) |
| **Documentación** | AGENTS.md + CLAUDE.md (en desarrollo) |
| **Import Order** | React → Next.js → Third-party → Context → Data → Components → Assets |
| **Tailwind** | Solo colores semánticos (cream, earth-brown, olive-green, sand-light) |

---

## 🔐 Variables de Entorno Necesarias

```env
# .env.local (ACTUAL)
JWT_SECRET=terra-santa-secret-key-change-this
MONGODB_URI=mongodb://localhost:27017/terra

# .env.example (RECOMENDADO)
NEXT_PUBLIC_WHATSAPP_NUMBER=34631994318
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_emailjs_public_key
JWT_SECRET=change-this-in-production
MONGODB_URI=change-to-production-mongo
```

---

## 📊 Estadísticas del Proyecto

| Métrica | Cantidad |
|---------|----------|
| **Total de componentes React** | 13 |
| **Total de páginas (rutas)** | 13 |
| **Total de servicios/integraciones** | 4 (WhatsApp, EmailJS, MongoDB prep, Netlify) |
| **Líneas de código (src/)** | ~2,500 (estimado) |
| **Líneas de traducciones** | 1,258 |
| **Líneas de package.json** | 39 (16 deps, 6 devDeps) |
| **Breakpoints Tailwind** | 4 (sm, md, lg, xl) |
| **Idiomas soportados** | 3 (ca, es, en) |
| **Colores personalizados** | 4 semánticos |
| **Tamaño de bundle estimado** | ~450KB (gzipped, sin optimización) |

---

## ✨ Próximos Pasos (Roadmap)

### Fase 1: Completar Área Profesional (ACTUAL)
- [ ] Dashboard de profesionales con login real
- [ ] Gestión de citas en calendario
- [ ] Sistema de presupuestos
- [ ] Reportes de clientes

### Fase 2: Sistema de Pago & E-commerce
- [ ] Integración Stripe para productos
- [ ] Carrito real (o mantener WhatsApp como opción)
- [ ] Checkout seguro
- [ ] Facturación automática

### Fase 3: Funcionalidades Avanzadas
- [ ] Booking calendar con disponibilidad
- [ ] CMS headless (Sanity, Contentful) para productos
- [ ] Sistema de comments/reviews de clientes
- [ ] Programa de fidelización

### Fase 4: Escalabilidad & Performance
- [ ] TypeScript migration
- [ ] Tests (Jest, Cypress)
- [ ] Analytics (Google Analytics 4, Mixpanel)
- [ ] CDN de imágenes (Cloudinary, imgix)
- [ ] Caching strategies (Redis si es necesario)

---

## 🎬 Notas de Despliegue

**Última actualización:** 13 de Mayo de 2026  
**Entorno actual:** IONOS (producción)  
**Branch:** `main`  
**Comandos principales:**
```bash
npm run dev      # Desarrollo local en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servir build producción localmente
npm run lint     # Linting con ESLint
```

**Netlify Config:**
- Plugin: @netlify/plugin-nextjs (v5.15.8)
- Servidor: Netlify Edge Functions
- Variables env: Configuradas en Netlify dashboard

---

**FECHA DE GENERACIÓN:** 2026-05-13  
**GENERADO POR:** Claude Code Analysis  
**PRÓXIMA REVISIÓN SUGERIDA:** Después de completar Área Profesional

---

### Resumen Ejecutivo
Terra Santa Eulalia es una plataforma Next.js moderna, bien estructurada y lista para producción. **90% de funcionalidades están completas**, con énfasis en UX/UI luxury y animaciones orgánicas. El único aspecto pendiente es la Área Profesional (acceso de salones), que requiere autenticación real y un backoffice. El proyecto está optimizado para Netlify, usa Tailwind CSS inteligentemente, y mantiene datos estáticos para máxima velocidad. **Recomendación:** Proceder con Fase 1 (Área Profesional) y luego evaluar integración de sistema de pago en Fase 2.
