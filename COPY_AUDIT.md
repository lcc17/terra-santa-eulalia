# 📝 COPY AUDIT — Terra Santa Eulalia

> **Auditoría por sección de la web** — verifica si cada bloque de texto que se renderiza usa traducciones (`t.x`) o está hardcodeado.
>
> **Diferencia con [TRANSLATION_AUDIT.md](TRANSLATION_AUDIT.md):** Ese audita las **claves** del archivo `translations.js`. Este audita lo que **realmente se ve en la web** (algunos componentes ignoran las traducciones aunque las claves existan).
>
> **Generado:** 2026-05-13

---

## 📊 RESUMEN EJECUTIVO

| Sección | Componente | Multiidioma | Estado |
|---------|------------|------------|--------|
| Navbar | `ui/Navbar.jsx` | ✅ CA / ✅ ES / ✅ EN | OK |
| Footer | `ui/Footer.jsx` | ✅ / ✅ / ✅ | OK |
| Home Hero | `app/page.jsx` | ⚠️ | Algunos labels OK, textos cortos hardcoded |
| Home Best Sellers | `app/page.jsx` | ✅ | OK |
| Home Quiénes Somos | `home/QuienesSomos.jsx` | ⚠️ | Revisar |
| Home Services | `app/page.jsx` | ✅ | OK |
| Home Social Proof | `app/page.jsx` | ❌ | Hardcodeado en ES |
| Productos catálogo | `domesticos/productos/page.jsx` | ⚠️ | Hardcodeado "Catálogo Terra" + label "Todos" |
| Producto detalle | `domesticos/productos/[id]/page.jsx` | ⚠️ | Texto C/ Provença hardcoded |
| Tratamientos | `domesticos/tratamientos/page.jsx` | ✅ | OK |
| Rituales | `app/rituales/page.jsx` | ✅ | OK |
| Terapia Capilar | `domesticos/terapia-capilar/page.jsx` | ✅ | OK |
| Filosofía | `app/filosofia/page.jsx` | ✅ | OK |
| FAQ | `domesticos/faq/page.jsx` | ✅ | OK |
| Videos | `domesticos/videos/page.jsx` | ❌ | Hardcodeado en ES |
| Domésticos landing | `app/domesticos/page.jsx` | ⚠️ | Revisar |
| **Contact** | `contact/page.jsx` | 🔴 **CRÍTICO** | **Toda la página hardcodeada en ES** |
| Profesionales (login) | `profesionales/page.jsx` | ✅ | OK (resuelto Fase 2) |
| Profesionales formación | `profesionales/formacion/page.jsx` | ❓ | Sin revisar (página vacía) |
| Cookies Banner | `ui/CookiesBanner.jsx` | ✅ | OK |
| Legal (5 páginas) | `app/legal/*` | ✅ | OK |

**Veredicto:** Sólo la página `/contact` tiene un problema grave. El resto va de aceptable a perfecto.

---

## 🔴 PROBLEMAS CRÍTICOS

### 1. `/contact` — Toda la página hardcodeada en español

📄 [src/app/contact/page.jsx](src/app/contact/page.jsx)

Catalán y inglés **no se traducen NUNCA** en esta página. Listado exhaustivo de textos hardcodeados:

| Línea | Texto hardcodeado | Idioma |
|-------|-------------------|--------|
| 10 | `"Hola, me gustaría reservar una cita..."` | ES — fallback OK pero ignora `t.whatsapp.defaultMessage` |
| 30 | `"Concierge & Reservas"` | EN (parcial) |
| 37 | `"Hablemos."` | ES |
| 53 | `"Terra Santa Eulalia"` | brand (OK) |
| 56-58 | `"Un espacio de calma en el corazón de Barcelona. Ven a probar texturas, olores y a recibir tu diagnóstico personalizado."` | ES |
| 68 | `"Dirección"` | ES |
| 71-73 | `"Carrer de Provença, 213"` + `"08008 Barcelona"` | dir (OK pero **ver ⚠️ inconsistencia código postal**) |
| 84 | `"Horario Boutique"` | ES |
| 86 | `"Lun - Vie: 10:00 - 20:00"` | **⚠️ horarios completamente hardcoded sin equivalente i18n** |
| 87 | `"Sábados: 10:00 - 14:00"` | ES |
| 97 | `"Teléfono"` | ES |
| 136 | `"Envíanos un mensaje"` | ES |
| 148 | `"Nombre"` (label form) | ES |
| 158 | `"Email"` (label form) | ES |
| 170 | `"Asunto / Producto de interés"` (label) | ES |
| 181 | `"¿En qué podemos ayudarte?"` (label) | ES |
| 188 | `"Enviar Solicitud"` (botón) | ES |
| 196 | `"o también"` | ES |
| 206 | `"Chat WhatsApp"` | ES |
| 211-213 | `"Al contactar, aceptas nuestra política de privacidad..."` | ES |

**Acción requerida:** crear `t.contactPage.{...}` con ~20 nuevas claves en ES/EN/CA y reescribir el componente.

### 2. `/domesticos/videos` — Hardcoded ES

📄 [src/app/domesticos/videos/page.jsx](src/app/domesticos/videos/page.jsx)

| Línea | Texto |
|-------|-------|
| 9 | `title="Cómo aplicar arcilla"` |
| 10 | `title="Masaje craneal básico"` |

### 3. Home Social Proof (testimonio)

📄 [src/app/page.jsx:224-230](src/app/page.jsx:224)

```jsx
<p className="...italic mb-6">
  "Un antes y un después para mi cabello. La terapia de oxitocina no
  es solo estética, es salud real."
</p>
<p className="...">
  — Laura G., Cliente Verificada
</p>
```

**Existe en `translations.js`** como `t.socialProof.testimonial` y `t.socialProof.author` **pero el componente no las usa** — están traducidas en ca/es/en pero el JSX ignora la traducción y muestra ES hardcoded.

### 4. Productos catálogo

📄 [src/app/domesticos/productos/page.jsx](src/app/domesticos/productos/page.jsx)

| Línea | Texto | Idioma |
|-------|-------|--------|
| 13 | `useState("Todos")` — categoría inicial | ES (también en filtros UI línea 16, 22) |
| 33 | `"Catálogo Terra"` (badge) | ES |

### 5. Producto detalle

📄 [src/app/domesticos/productos/[id]/page.jsx:127](src/app/domesticos/productos/[id]/page.jsx)

```jsx
"Al hacer clic, contactarás con tienda para confirmar recogida en C/ Provença 213."
```

---

## ⚠️ INCONSISTENCIAS DETECTADAS

### CP de Barcelona — **DOS valores en el código**

| Lugar | Código Postal | Fuente |
|-------|---------------|--------|
| `contact/page.jsx:73` | **08008** | Hardcoded |
| `legal-content.js:18` | **08029** | BUSINESS_INFO |
| Google Maps embed (`contact/page.jsx:110`) | **08008** | URL |

**Acción:** Confirmar con cliente el CP real y unificar en `BUSINESS_INFO`.

### Mensaje WhatsApp por defecto — múltiples versiones

| Archivo | Fallback usado |
|---------|----------------|
| `page.jsx:22` | `"Hola, me gustaría información sobre Terra Santa Eulalia."` |
| `contact/page.jsx:10` | `"Hola, me gustaría reservar una cita o solicitar información..."` |
| `Footer.jsx:9` | `"Hola, me gustaría información sobre Terra Santa Eulalia."` |
| `WhatsAppButton.jsx:24` (post fix) | `t?.whatsapp?.messageTemplate` ✅ |

---

## ✅ SECCIONES VALIDADAS COMO OK

### Navbar [src/components/ui/Navbar.jsx](src/components/ui/Navbar.jsx)
- ✅ Todos los links usan `t.nav.*`
- ✅ Toggle de idioma funcional (ca → es → en → ca)
- ✅ Logo con `alt` adecuado
- ✅ Mega menú categorías dinámicas + `t.ui.loading`

### Footer [src/components/ui/Footer.jsx](src/components/ui/Footer.jsx)
- ✅ Subtítulo `t.hero.subtitle`
- ✅ `t.footer.contactLabel`, `t.footer.whatsappLabel`
- ✅ `t.footer.rights` (copyright)
- ✅ Nueva columna Legal con `t.legal.*`

### Home Best Sellers [src/app/page.jsx:148-180](src/app/page.jsx:148)
- ✅ `t.domestic.title`, `t.domestic.productsTitle`, `t.domestic.viewMore`
- ✅ Productos del `t.productsList` (mismo en 3 idiomas)

### Home Services [src/app/page.jsx:186-214](src/app/page.jsx:186)
- ✅ `t.services.title`, `t.services.capillary`, `t.services.spa`, etc.

### Rituales [src/app/rituales/page.jsx](src/app/rituales/page.jsx)
- ✅ `t.treatmentsPage.title`, `desc`, `cta`, listas...

### Tratamientos [src/app/domesticos/tratamientos/page.jsx](src/app/domesticos/tratamientos/page.jsx)
- ✅ Toda usa `t.treatmentsPage.*`

### Terapia Capilar [src/app/domesticos/terapia-capilar/page.jsx](src/app/domesticos/terapia-capilar/page.jsx)
- ✅ Usa `t.capillaryPage.*` (datos compartidos)

### Filosofía [src/app/filosofia/page.jsx](src/app/filosofia/page.jsx)
- ✅ `t.philosophy.heroTitle`, `manifesto`, `values`, `laiaBio.*`

### FAQ [src/app/domesticos/faq/page.jsx](src/app/domesticos/faq/page.jsx)
- ✅ Lista de preguntas viene de `t.faqList`

### Legal [src/app/legal/](src/app/legal/)
- ✅ 5 páginas usan `t.legal.*` + `legalContent[lang]`
- ✅ Banner de cookies multiidioma OK

### Profesionales (login) [src/app/profesionales/page.jsx](src/app/profesionales/page.jsx)
- ✅ Resuelto en Fase 2 — usa `t.pro.*`

---

## 📋 LISTA DE CLAVES A AGREGAR EN translations.js

Necesarias para resolver los 5 problemas de arriba. Estructura sugerida:

```javascript
// AGREGAR EN CADA IDIOMA (ca, es, en)
contactPage: {
  badge: "Concierge & Reservas",          // EN: "Concierge & Booking" / CA: "Concierge & Reserves"
  heroTitle: "Hablemos.",                  // EN: "Let's talk." / CA: "Parlem."
  intro: "Un espacio de calma en el corazón de Barcelona. Ven a probar texturas, olores y a recibir tu diagnóstico personalizado.",
  addressLabel: "Dirección",               // EN: "Address" / CA: "Adreça"
  scheduleLabel: "Horario Boutique",       // EN: "Boutique hours" / CA: "Horari Botiga"
  scheduleWeekdays: "Lun - Vie: 10:00 - 20:00",
  scheduleSaturday: "Sábados: 10:00 - 14:00",
  phoneLabel: "Teléfono",
  formTitle: "Envíanos un mensaje",
  formName: "Nombre",
  formEmail: "Email",
  formSubject: "Asunto / Producto de interés",
  formMessage: "¿En qué podemos ayudarte?",
  formSubmit: "Enviar Solicitud",
  formOr: "o también",
  formWhatsAppBtn: "Chat WhatsApp",
  formPrivacyNote: "Al contactar, aceptas nuestra política de privacidad. Tus datos se tratarán con el máximo respeto y confidencialidad.",
},

productsPage: {
  catalogBadge: "Catálogo Terra",
  filterAll: "Todos",                       // EN: "All" / CA: "Tots"
  pickupNotice: "Al hacer clic, contactarás con tienda para confirmar recogida en C/ Provença 213.",
},

videosPage: {
  videos: [
    { id: "casXEgFpFRQ", title: "Cómo aplicar arcilla" },
    { id: "LXb3EKWsInQ", title: "Masaje craneal básico" },
  ],
},
```

---

## 🔧 LISTA DE CAMBIOS DE CÓDIGO NECESARIOS

| Archivo | Líneas a modificar | Tarea |
|---------|-------------------|-------|
| `src/app/contact/page.jsx` | 17 cambios (líneas 10-213) | Sustituir todos los textos por `t?.contactPage?.*` |
| `src/app/page.jsx` | 224-230 | Usar `t.socialProof.testimonial` y `t.socialProof.author` |
| `src/app/domesticos/productos/page.jsx` | 13, 16, 22, 33 | Usar `t.productsPage.filterAll` y `t.productsPage.catalogBadge` |
| `src/app/domesticos/productos/[id]/page.jsx` | 127 | Usar `t.productsPage.pickupNotice` |
| `src/app/domesticos/videos/page.jsx` | 9, 10 | Usar `t.videosPage.videos[N].title` (iterar) |
| `src/lib/legal-content.js` o `BUSINESS_INFO` | 18 | **Unificar CP 08008/08029 con cliente** |
| `tailwind.config.js` | 19 | `texture-sand` background apunta a Unsplash externa — internalizar |

**Tiempo estimado total:** ~45-60 min.

---

## 🎯 PRIORIZACIÓN

| Prioridad | Tarea | Razón |
|-----------|-------|-------|
| 🔴 P0 | Traducir `/contact` | Página principal para conversión, no funciona en CA/EN |
| 🔴 P0 | Confirmar CP (08008 vs 08029) | Dato legal/factura — debe ser correcto |
| 🟡 P1 | Hooks de formulario contact | El form **no envía nada** (sin onSubmit) — añadir EmailJS |
| 🟡 P1 | Traducir social proof de Home | Aparece en hero, primer impacto |
| 🟢 P2 | Cambiar título de videos | Solo afecta `/domesticos/videos` |
| 🟢 P2 | Catálogo Terra + filtro "Todos" | Visible solo si el usuario entra a productos |

---

**Próximo paso recomendado:** Resolver P0 (contact + CP) antes de cualquier deploy a producción.
