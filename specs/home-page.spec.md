# Spec: Página de Inicio (`/`)

**Ruta:** `src/app/page.jsx`  
**Locale:** Catalán por defecto (servido en `/`). El contenido proviene de `translations[lang]` vía `useApp()`.

---

## Requisitos Funcionales

### RF-01 · Hero con vídeo de fondo
- Reproduce `hero-video.mp4` en bucle, silenciado, sin controles, con `playsInline` (obligatorio en iOS).
- Overlay negro (`bg-black/20`) para garantizar contraste sobre el vídeo.
- Altura fija: `85vh`.

### RF-02 · Botón WhatsApp flotante (Hero)
- Posición: esquina superior derecha del hero, fija visualmente dentro de la sección.
- Al hacer clic abre `https://wa.me/34631994318?text=<mensaje_localizado>` en nueva pestaña.
- Número de teléfono: **34631994318** (sin `+` ni espacios).
- El texto del mensaje se obtiene de `t.whatsapp.defaultMessage`; fallback: `"Hola, me gustaría información sobre Terra Santa Eulalia."`.
- En desktop muestra la etiqueta `t.whatsapp.reserveButton` al hover; en móvil solo el icono.

### RF-03 · Grid de 3 tarjetas de navegación (Hero)
| Tarjeta | Color fondo | Destino |
|---|---|---|
| Productos | `earth-brown` | `/domesticos/productos` |
| Tratamientos | `cream` | `/domesticos/tratamientos` |
| Terapia Capilar | `olive-green` | `/domesticos/terapia-capilar` |

- Título y subtítulo localizados desde `t.cards.*`.
- Icono `ArrowRight` que se desplaza `+1` en X al hover.
- Al hover la tarjeta sube `-translate-y-2`.

### RF-04 · Sección Best Sellers
- Muestra los **3 primeros productos** de `t.productsList` (slice 0–2).
- Cada producto se renderiza con `<ProductCard>`.
- Enlace "Ver colección" (`t.domestic.viewMore`) → `/domesticos/productos`.
- Si `t.productsList` está vacío o es `undefined`, renderiza un array vacío sin error (guard `|| []`).

### RF-05 · Sección Quiénes Somos
- Componente autónomo: `<QuienesSomos>` (`src/components/home/QuienesSomos.jsx`).
- Muestra imagen de la fundadora (local `/images/laia-salomon.png`) + imagen de textura (externa Pixabay).
- CTA "Descubrir nuestra historia" → `/filosofia`.
- Parallax: imagen principal sube `y: [0, -100]`, imagen de textura sube `y: [0, -200]` según scroll global.

### RF-06 · Sección High Ticket Services
- Fondo `earth-brown`, dos tarjetas `<ServiceCard>` en grid de 2 columnas (1 columna en móvil).
- Imágenes externas (Unsplash) con `fill` + `object-cover`.
- Hover: imagen hace zoom (`scale-110`), línea inferior crece de `w-12` a `w-24`.
- Tarjeta Capillary → `/domesticos/terapia-capilar`; tarjeta Spa → `/domesticos/tratamientos`.
- Textos de `t.services.*` (title, badge, capillary, capillaryDesc, spa, spaDesc).

### RF-07 · Sección Social Proof
- 5 estrellas rellenas con `lucide-react/Star`.
- Texto de testimonio y nombre de cliente: actualmente **hardcodeados** (pendiente de pasar a `translations.js`).

---

## Requisitos No Funcionales

### RNF-01 · Rendimiento
- El vídeo hero no bloquea el render; se carga tras la hidratación.
- Las 3 secciones inferiores (Best Sellers, Quiénes Somos, Servicios) usan `whileInView` con `viewport={{ once: true }}` para diferir animaciones.
- Todas las imágenes usan `<Image>` de Next.js. Dado que el build es `output: "export"` con `unoptimized: true`, los tamaños deben definirse con el prop `sizes` para que el navegador seleccione el recurso adecuado.

### RNF-02 · Hidratación sin mismatch
- La página es `"use client"` completa. El servidor siempre renderiza catalán; el cliente sincroniza el idioma desde la cookie `NEXT_LOCALE` en el primer `useEffect` de `AppProvider`.
- El prop `suppressHydrationWarning={true}` está aplicado en el `<video>` para evitar warnings del atributo `playsInline`.

### RNF-03 · Accesibilidad
- El botón WhatsApp lleva `aria-label` localizado (`t.whatsapp.reserveButton`).
- Las tarjetas de navegación usan `<Link>` de Next.js (elementos `<a>` semánticamente correctos).
- Imágenes con prop `alt` descriptivo.

### RNF-04 · Localización
- **Ningún texto visible puede estar hardcodeado** excepto el testimonio de Social Proof (ver RF-07, deuda técnica pendiente).
- Acceso exclusivo vía `useApp()` → `t.*`. Siempre con optional chaining y fallback string.

### RNF-05 · Animaciones
- Duración estándar: `1s–1.2s`, easing: `[0.76, 0, 0.24, 1]` o `[0.43, 0.13, 0.23, 0.96]`.
- Sin bounces ni transiciones rápidas. El orbe decorativo en `QuienesSomos` rota en bucle infinito a `20s`.

---

## Estructura de Componentes

```
src/app/page.jsx  ("use client")
│
├── <section> Hero (85vh)
│   ├── <video> hero-video.mp4
│   ├── <motion.button> WhatsApp flotante
│   └── <motion.div> Grid 3 tarjetas
│       ├── <Link> → /domesticos/productos
│       ├── <Link> → /domesticos/tratamientos
│       └── <Link> → /domesticos/terapia-capilar
│
├── <section> Best Sellers
│   ├── Header (título + link "Ver colección")
│   └── Grid 3 columnas
│       └── <ProductCard> × 3    [src/components/domesticos/ProductCard.jsx]
│
├── <QuienesSomos>               [src/components/home/QuienesSomos.jsx]
│   ├── Imagen fundadora (parallax)
│   ├── Imagen textura (parallax)
│   ├── Orbe SVG rotante
│   └── Bloque de texto + CTA → /filosofia
│
├── <section> High Ticket Services  (bg earth-brown)
│   └── Grid 2 columnas
│       ├── <ServiceCard> Terapia Capilar    [definido inline en page.jsx]
│       └── <ServiceCard> Spa Orgánico
│
└── <section> Social Proof
    └── Testimonio estático (5 estrellas + cita + nombre)
```

**Componentes reutilizables externos:**
- `<ProductCard>` — recibe `{ product }` con shape `{ id, name, desc, img, price, category, isNew? }`.
- `<ServiceCard>` — recibe `{ title, desc, img, href, badge? }`, definido dentro de `page.jsx` (no exportado).

---

## Criterios de Aceptación

| ID | Criterio | Cómo verificar |
|---|---|---|
| CA-01 | El vídeo hero se reproduce automáticamente en móvil iOS sin abrir pantalla completa | Probar en Safari iOS real o simulador |
| CA-02 | El botón WhatsApp abre la URL con el número `34631994318` y el mensaje localizado correctamente codificado | Inspeccionar la URL generada en DevTools al hacer clic |
| CA-03 | Las 3 tarjetas del hero navegan a sus rutas sin recarga de página | Clic en cada tarjeta y verificar que Next.js hace client-side navigation |
| CA-04 | Best Sellers muestra exactamente 3 productos con imagen, nombre, categoría y precio | Comparar con los primeros 3 ítems de `t.productsList` en `translations.js` |
| CA-05 | Si `t.productsList` es `undefined`, la sección renderiza un grid vacío sin error de JS | Eliminar temporalmente `productsList` de translations y hacer build |
| CA-06 | La imagen de la fundadora carga desde `/images/laia-salomon.png` (ruta local) sin fallback roto | Abrir Network tab y confirmar status 200 |
| CA-07 | Las animaciones `whileInView` se disparan una sola vez al hacer scroll (no se repiten al subir) | Hacer scroll hacia abajo y volver arriba |
| CA-08 | `npm run build` completa sin errores ni warnings de hidratación en la consola del servidor | Ejecutar `npm run build` localmente |
| CA-09 | Al cambiar de idioma (toggle en Navbar), todos los textos de la página se actualizan sin reload | Hacer toggle en Navbar y verificar cada sección |
| CA-10 | El texto del testimonio (Social Proof) se mueve a `translations.js` antes del siguiente release | Deuda técnica — issue pendiente |
