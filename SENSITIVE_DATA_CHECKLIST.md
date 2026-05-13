# 🔐 SENSITIVE DATA CHECKLIST — Terra Santa Eulalia

> Inventario completo de datos sensibles, credenciales y valores hardcodeados que deberían moverse a variables de entorno o ser revisados antes de producción.
>
> **Generado:** 2026-05-13

---

## 📊 RESUMEN

| Categoría | Total | Hardcodeado | En `.env.local` | Falta mover |
|-----------|-------|-------------|-----------------|-------------|
| Emails | 1 dirección única | 7 ocurrencias | 0 | 0 (público) |
| Teléfonos | 2 números | 13 ocurrencias | 0 | 1 candidato |
| Direcciones | 1 (+ inconsistencia) | 11 ocurrencias | 0 | 0 |
| Horarios | 2 líneas | 2 ocurrencias | 0 | 0 (público) |
| Secretos JWT | 1 | 1 (fallback) | 1 | 🔴 **CRÍTICO** |
| Conexión BD | 1 | 0 | 1 | 🟡 No producción |
| EmailJS keys | 3 esperadas | 0 | 0 | ❌ **No configurado** |
| Google Maps embed | 1 | 1 | 0 | 🟡 Internalizar |
| Nombres reales | 2 | 6 ocurrencias | 0 | ✅ Confirmar |
| CIF / NIF | 1 | placeholder | 0 | 🔴 Pendiente cliente |

---

## 🔴 BLOQUEANTES PARA PRODUCCIÓN

### 1. JWT_SECRET con fallback débil

📄 [middleware.js:5](middleware.js:5)

```javascript
const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key"
);
```

📄 `.env.local`:
```
JWT_SECRET=terra-santa-secret-key-change-this
```

| Problema | Severidad |
|----------|-----------|
| El fallback `"fallback-secret-key"` es literal en el código — si la env no se setea en Netlify/IONOS, **cualquiera puede forjar tokens JWT** | 🔴 ALTO |
| El valor actual en `.env.local` contiene literalmente la palabra "change-this" — clave débil y predecible | 🔴 ALTO |
| Si los profesionales acceden con un solo password compartido (visto en `profesionales/page.jsx:27`: alert "Try: terra2025"), basta forjar un JWT con secret "fallback-secret-key" para entrar | 🔴 ALTO |

**Acciones:**
1. Generar secret aleatorio fuerte: `openssl rand -base64 64`
2. Setearlo en variables de entorno del proveedor (IONOS / Netlify)
3. **Eliminar el fallback** del middleware o lanzar error si está ausente
4. **NO commitear** el valor real al `.env.local` versionado

### 2. Contraseña profesional embebida en código

📄 [src/app/profesionales/page.jsx:27](src/app/profesionales/page.jsx:27)

```javascript
alert("Contraseña incorrecta (Try: terra2025)");
```

**El alert literalmente revela la contraseña al usuario** que falla el login. Aunque ahora usa `t.pro.passwordError`, el texto `"terra2025"` sugiere que ESA es la password real en el endpoint `/api/auth/login`.

**Acciones:**
1. Verificar el código del endpoint `/api/auth/login` (no encontrado en `src/app/api/` — ¿está en algún sitio?)
2. Cambiar a un sistema con usuarios reales y bcrypt (la dependencia ya está instalada: `bcryptjs: ^3.0.3`)
3. Eliminar cualquier "hint" en mensajes de error

### 3. CP de Barcelona inconsistente

| Archivo | Valor | Línea |
|---------|-------|-------|
| `contact/page.jsx` | **08008** | 73 |
| `legal-content.js` (BUSINESS_INFO) | **08029** | 18 |
| Google Maps URL | **08008** | 110 |

**Acción:** Verificar con cliente (probablemente 08008 — L'Eixample) y unificar a uno solo en `BUSINESS_INFO.address`.

### 4. Placeholders legales pendientes

📄 [src/lib/legal-content.js:14-25](src/lib/legal-content.js:14)

```javascript
legalName: "[PLACEHOLDER: Razón social completa]",
cif: "[PLACEHOLDER: CIF/NIF — ej. B-XXXXXXXX]",
owner: "[PLACEHOLDER: Nombre del responsable]",
dpoEmail: "[PLACEHOLDER: dpo@terrasantaeulalia.com o mismo email]",
registry: "[PLACEHOLDER: Registro Mercantil de Barcelona, Tomo X, Folio X]",
```

**Aparecen visibles en las 4 páginas legales** (`/legal/aviso-legal`, `/legal/politica-privacidad`, etc.).

**Acción:** Reunirse con cliente para obtener estos datos. Requeridos por **LSSI-CE art. 10**.

---

## 📋 TABLA EXHAUSTIVA DE DATOS HARDCODEADOS

| # | Tipo | Valor | Ubicación | ¿Sensible? | ¿Acción? |
|---|------|-------|-----------|------------|----------|
| 1 | Email cliente | `hola@terrasantaeulalia.com` | `Footer.jsx:24-25`, `translations.js:53,707,1106`, `legal-content.js:20` | ❌ Público | ✅ OK |
| 2 | Email DPO | `[PLACEHOLDER]` | `legal-content.js:21` | 🟡 GDPR | Rellenar |
| 3 | Tel fijo | `+34 93 518 42 36` (mostrado) | `contact/page.jsx:100`, `Footer.jsx:27-28`, `translations.js:54,708,1107`, `legal-content.js:19` | ❌ Público | ✅ OK |
| 4 | Tel `tel:` link | `+34935184236` | `contact/page.jsx:99`, `Footer.jsx:27` | ❌ Público | ✅ OK |
| 5 | WhatsApp ID | `34631994318` | `page.jsx:21`, `contact/page.jsx:9`, `rituales/page.jsx:59`, `terapia-capilar/page.jsx:30`, `Footer.jsx:9`, `WhatsAppButton.jsx:7` | ⚠️ Personal | Centralizar en `BUSINESS_INFO` o `.env` |
| 6 | Dirección | `C/ Provença 213` | 11 ocurrencias en código + traducciones | ❌ Público | ✅ OK |
| 7 | CP Barcelona | `08008` ó `08029` | Inconsistente | ⚠️ Legal | **Unificar** |
| 8 | Horario L-V | `"Lun - Vie: 10:00 - 20:00"` | `contact/page.jsx:86` | ❌ Público | Traducir |
| 9 | Horario Sáb | `"Sábados: 10:00 - 14:00"` | `contact/page.jsx:87` | ❌ Público | Traducir |
| 10 | Nombre fundadora | `"Laia Salomó"` | `translations.js:309,889,1227`, `MULTIMEDIA_INVENTORY.md` | ⚠️ PII | ✅ Confirmar con cliente |
| 11 | Nombre cofundador | `"Manolo Díaz"` | `translations.js:298,876,1212` | ⚠️ PII | ✅ Confirmar |
| 12 | Testimonio | `"Laura G., Cliente Verificada"` | `page.jsx:229`, `translations.js:190,770,1104` | 🟡 Verificar | ¿Existe cliente real? |
| 13 | JWT_SECRET fallback | `"fallback-secret-key"` | `middleware.js:5` | 🔴 SECRET | **Eliminar fallback** |
| 14 | JWT_SECRET env | `terra-santa-secret-key-change-this` | `.env.local` | 🔴 SECRET | **Cambiar antes de prod** |
| 15 | MONGODB_URI | `mongodb://localhost:27017/terra` | `.env.local` | 🟡 DEV | Configurar producción |
| 16 | CIF/NIF | `[PLACEHOLDER]` | `legal-content.js:15` | 🟡 Legal | Rellenar |
| 17 | Registro Mercantil | `[PLACEHOLDER]` | `legal-content.js:23` | 🟡 Legal | Rellenar |
| 18 | Google Maps embed | URL hardcoded con coords | `contact/page.jsx:110` | ❌ Público | Considerar `.env` para mantener |
| 19 | Texture Unsplash | URL Unsplash | `tailwind.config.js:19` | ❌ Público | Internalizar |
| 20 | EmailJS service ID | **NO CONFIGURADO** | — | 🟡 Pública | El form `/contact` **no envía** |
| 21 | EmailJS template ID | **NO CONFIGURADO** | — | 🟡 Pública | Idem |
| 22 | EmailJS public key | **NO CONFIGURADO** | — | 🟡 Pública | Idem |
| 23 | Google Analytics ID | **NO CONFIGURADO** | — | 🟡 Pública | Pendiente activar |

---

## 🟡 AUDITORÍA DE VARIABLES DE ENTORNO

### Actuales en `.env.local`

```env
JWT_SECRET=terra-santa-secret-key-change-this
MONGODB_URI=mongodb://localhost:27017/terra
```

### Recomendado para producción

```env
# === SEGURIDAD ===
JWT_SECRET=<openssl rand -base64 64>     # 🔴 Generar nuevo, NO usar el actual

# === BASE DE DATOS ===
MONGODB_URI=mongodb+srv://...             # 🟡 Cambiar a producción si se usa

# === FORMULARIO DE CONTACTO ===
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx     # ❌ Falta
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx   # ❌ Falta
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_xxx      # ❌ Falta

# === ANALYTICS (opcional, si se activa Google Analytics) ===
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX                 # ❌ Falta

# === BUSINESS (centralizar para fácil cambio) ===
NEXT_PUBLIC_WHATSAPP_NUMBER=34631994318        # ❌ Hardcoded en 6 lugares
NEXT_PUBLIC_CONTACT_EMAIL=hola@terrasantaeulalia.com
NEXT_PUBLIC_CONTACT_PHONE=+34935184236
```

---

## 🧪 EL FORMULARIO DE CONTACTO **NO FUNCIONA**

📄 [src/app/contact/page.jsx:139-214](src/app/contact/page.jsx:139)

```jsx
<form className="space-y-8">
  {/* inputs sin onChange, sin onSubmit */}
  <button>Enviar Solicitud</button>  {/* sin handler */}
</form>
```

**Problemas identificados:**

1. ❌ No tiene `onSubmit`
2. ❌ No tiene `useState` para los campos (inputs no controlados)
3. ❌ `@emailjs/browser` está instalado en `package.json` pero **nunca se importa**
4. ❌ Al pulsar "Enviar Solicitud" el formulario se envía al action="" (recarga la página)
5. ❌ No hay validación, ni feedback visual de éxito/error
6. ⚠️ `react-hook-form` instalado pero no se usa

**Acción urgente:** Integrar EmailJS con react-hook-form (ya está la dep) y crear template en EmailJS.

---

## 🗝️ ¿QUÉ NO ES SENSIBLE (queda como está)?

Estos datos están públicos por diseño y deben permanecer accesibles en el código:

- ✅ Dirección física (es un negocio público)
- ✅ Email comercial (publicado en footer y contact)
- ✅ Teléfono fijo (idem)
- ✅ Horarios (información pública del negocio)
- ✅ Nombres comerciales de productos / rituales / precios

---

## ✅ CHECKLIST DE ACCIÓN ANTES DE PRODUCCIÓN

### 🔴 P0 — Bloqueantes
- [ ] Generar nuevo `JWT_SECRET` aleatorio fuerte (64 bytes base64)
- [ ] Configurarlo en variables de entorno del hosting (IONOS / Netlify)
- [ ] Eliminar fallback `"fallback-secret-key"` de [`middleware.js:5`](middleware.js:5)
- [ ] Confirmar CP correcto (08008 vs 08029) y unificar
- [ ] Verificar contraseña del área profesional (no debería ser "terra2025")
- [ ] Rellenar `[PLACEHOLDER]` en `legal-content.js`:
  - [ ] Razón social
  - [ ] CIF / NIF
  - [ ] Owner / responsable
  - [ ] Email DPO
  - [ ] Datos de registro mercantil

### 🟡 P1 — Importantes
- [ ] Configurar credenciales EmailJS y conectar formulario `/contact`
- [ ] Centralizar WhatsApp ID en `BUSINESS_INFO` o `.env` (6 lugares hardcoded)
- [ ] Verificar que MongoDB URI apunta a producción (o eliminar si no se usa)
- [ ] Confirmar testimonio Laura G. (¿cliente real con permiso?)
- [ ] Activar Google Analytics + configurar consentimiento (cookies banner ya está listo)

### 🟢 P2 — Mejoras
- [ ] Mover texture-sand de tailwind.config a asset local
- [ ] Considerar mover Google Maps embed a variable de entorno para fácil cambio
- [ ] Audit de `.env.local` en `.gitignore` (verificar que NUNCA se commitee)
- [ ] Crear `.env.example` documentando todas las variables necesarias

---

## 📁 ARCHIVO `.env.example` RECOMENDADO

Crear en raíz para que cualquier desarrollador sepa qué variables son necesarias:

```env
# .env.example — Copia este archivo a .env.local y rellena los valores

# Seguridad
JWT_SECRET=<generar con: openssl rand -base64 64>

# Base de datos (solo si se activa área profesional con login real)
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/terra

# EmailJS (formulario de contacto)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=

# Business
NEXT_PUBLIC_WHATSAPP_NUMBER=34631994318
NEXT_PUBLIC_CONTACT_EMAIL=hola@terrasantaeulalia.com
```

---

**Hallazgo más importante:** El sistema de autenticación profesional tiene secret débil y password adivinable. Si se va a publicar el área profesional, refactorizar antes.

**Siguiente paso:** Reunión con cliente para conseguir CIF, razón social, owner y datos registrales.
