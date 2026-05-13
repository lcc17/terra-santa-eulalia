# 🌍 TRANSLATION AUDIT - Terra Santa Eulalia

## 📊 Resumen Ejecutivo

**Estado General de Traducciones:** 🟡 **75% COMPLETO**
- ✅ **Español (ES):** 95% completo
- ✅ **Catalán (CA):** 90% completo  
- ⚠️ **Inglés (EN):** 70% completo (falta lista de productos)
- ❌ **Textos hardcodeados:** 13 encontrados sin traducción
- ❌ **Variables de entorno:** No están documentadas

---

## ✅ TRADUCCIONES COMPLETAS (100%)

| Sección | CA | ES | EN | Estado |
|---------|----|----|----|----|
| **Navbar** | ✅ | ✅ | ✅ | Completo |
| **Hero** | ✅ | ✅ | ✅ | Completo |
| **Cards Principales** | ✅ | ✅ | ✅ | Completo |
| **Productos (Textos)** | ✅ | ✅ | ✅ | Completo |
| **Rituales Capilares** | ✅ | ✅ | ✅ | Completo |
| **Rituales Faciales** | ✅ | ✅ | ✅ | Completo |
| **Terapia Capilar** | ✅ | ✅ | ✅ | Completo |
| **Filosofía** | ✅ | ✅ | ✅ | Completo |
| **FAQ** | ✅ | ✅ | ✅ | Completo |
| **Servicios** | ✅ | ✅ | ✅ | Completo |
| **Contact Page** | ✅ | ✅ | ✅ | Completo |
| **Social Proof** | ✅ | ✅ | ✅ | Completo |
| **WhatsApp CTA** | ✅ | ✅ | ✅ | Completo |

---

## ⚠️ TRADUCCIONES PARCIALES / INCOMPLETAS

| Sección | CA | ES | EN | Falta | Prioridad |
|---------|----|----|----|----|---------|
| **Catálogo Productos** | ❌ | ✅ | ❌ | Lista en CA/EN | 🔴 ALTA |
| **Footer** | ⚠️ | ⚠️ | ❌ | "Contact" hardcodeado | 🟡 MEDIA |
| **Área Profesional** | ⚠️ | ⚠️ | ❌ | Textos hardcodeados en componentes | 🔴 ALTA |
| **Mensajes WhatsApp** | ✅ | ✅ | ✅ | Estado OK (integrado correctamente) | ✅ |

---

## ❌ TEXTOS HARDCODEADOS (NO EN translations.js)

### 🔴 CRÍTICOS - Sin traducción multiidioma

#### 1. Footer.jsx (Línea 22)
```jsx
<h3 className="font-bold mb-4 text-cream">Contact</h3>
```
**Estado:** Hardcodeado en inglés solo  
**Idiomas faltantes:** CA, ES  
**Solución:** Agregar a `translations.footer.contactLabel`

---

#### 2. Footer.jsx (Línea 34)
```jsx
<span>WhatsApp</span>
```
**Estado:** Hardcodeado en inglés solo  
**Idiomas faltantes:** CA, ES  
**Solución:** Agregar a `translations.footer.whatsapp` o reutilizar existente

---

#### 3. WhatsAppButton.jsx (Línea 22-26)
```jsx
let message = "Hola, me interesa reservar";
if (ritualName) {
  message += ` ${ritualName}`;
}
message += " de Terra Santa Eulalia";
```
**Estado:** Hardcodeado en español, no traducible  
**Idiomas faltantes:** CA, EN  
**Línea de código:** 22-26  
**Solución:** Usar `t.whatsapp.messageTemplate` y concatenar dinámicamente

---

#### 4. WhatsAppButton.jsx (Línea 30)
```jsx
message += `. El próximo horario disponible es ${nextOpenTime}.`;
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Agregar a `translations.whatsapp.scheduledMessage`

---

#### 5. WhatsAppButton.jsx (Línea 65)
```jsx
{children || "Reservar por WhatsApp"}
```
**Estado:** Fallback hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Usar `t.whatsapp.buttonLabel` como fallback

---

#### 6. Navbar.jsx (Línea 185)
```jsx
<p className="text-sm opacity-50 col-span-4">Cargando categorías...</p>
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Agregar a `translations.ui.loading`

---

#### 7. ProductCard.jsx (Línea 42)
```jsx
<div className="bg-olive-green text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest shadow-sm">
  Novedad
</div>
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Agregar a `translations.products.newBadge`

---

#### 8. ProductCard.jsx (Línea 36)
```jsx
{hasStock ? `${product.price.toFixed(2)}€` : "PRÓXIMAMENTE"}
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Agregar a `translations.products.comingSoon`

---

#### 9. ProfessionalDashboard.jsx (Línea 27)
```jsx
alert("Contraseña incorrecta (Try: terra2025)");
```
**Estado:** Mixto español/inglés, hardcodeado  
**Idiomas faltantes:** CA, EN  
**Solución:** Agregar a `translations.pro.passwordError`

---

#### 10. ProfessionalDashboard.jsx (Línea 41)
```jsx
<h2 className="text-2xl font-serif mb-6">Acceso Profesional</h2>
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Usar `t.pro.loginTitle` o similar

---

#### 11. ProfessionalDashboard.jsx (Línea 44)
```jsx
<input placeholder="Contraseña..." />
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Usar `t.pro.passwordPlaceholder`

---

#### 12. ProfessionalDashboard.jsx (Línea 49)
```jsx
<Button>Entrar</Button>
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Usar `t.pro.loginButton`

---

#### 13. ProfessionalDashboard.jsx (Línea 58)
```jsx
<h1 className="text-4xl font-serif text-olive-green mb-8">
  Panel Profesional
</h1>
```
**Estado:** Hardcodeado en español  
**Idiomas faltantes:** CA, EN  
**Solución:** Usar `t.pro.dashboardTitle`

---

## 📝 TRADUCCIONES FALTANTES POR AGREGAR

### A. Idioma INGLÉS (EN)

#### productsList - LÍNEA 900
**Problema:** Vacío  
```javascript
// ❌ ACTUAL
en: {
  productsList: [],  // ← VACÍO
}

// ✅ DEBERÍA SER
en: {
  productsList: translations.es.productsList,  // REUTILIZAR LISTA ES
}
```

---

### B. Idioma CATALÁN (CA)

#### productsList - LÍNEA 1234
**Problema:** Vacío  
```javascript
// ❌ ACTUAL
ca: {
  productsList: [],  // ← VACÍO
}

// ✅ DEBERÍA SER
ca: {
  productsList: translations.es.productsList,  // REUTILIZAR LISTA ES
}
```

---

### C. Nuevas Secciones para TODOS los idiomas

#### UI Generales
```javascript
ui: {
  loading: "Cargando...",          // "Loading..." (EN), "Carregant..." (CA)
  error: "Error",
  success: "Éxito",
  close: "Cerrar",                 // "Close" (EN), "Tancar" (CA)
  goBack: "Volver atrás",
}
```

#### Productos
```javascript
products: {
  newBadge: "Novedad",             // "New" (EN), "Novetat" (CA)
  comingSoon: "Próximamente",      // "Coming Soon" (EN), "Pròximament" (CA)
  outOfStock: "Agotado",
  inStock: "Disponible",
}
```

#### Footer
```javascript
footer: {
  contactLabel: "Contacto",        // "Contact" (EN), "Contacte" (CA) - YA EXISTE
  whatsappLabel: "WhatsApp",       // "WhatsApp" (ambos)
}
```

#### Área Profesional (Pro)
```javascript
pro: {
  // Textos de login
  loginTitle: "Acceso Profesional",         // "Professional Access" (EN)
  passwordPlaceholder: "Contraseña...",     // "Password..." (EN)
  loginButton: "Entrar",                    // "Sign In" (EN), "Entrar" (CA)
  passwordError: "Contraseña incorrecta",   // "Incorrect password" (EN)
  dashboardTitle: "Panel Profesional",      // "Professional Dashboard" (EN)
  
  // Textos de mensajes
  loginRequired: "Se requiere login",
  logout: "Cerrar sesión",                  // "Sign Out" (EN)
  welcome: "Bienvenido",                    // (YA EXISTE)
}
```

#### WhatsApp
```javascript
whatsapp: {
  // EXISTENTES OK
  reserveButton: "Reservar Cita",           // ✅ EXISTE
  defaultMessage: "...",                    // ✅ EXISTE
  
  // NUEVOS - FALTANTES
  messageTemplate: "Hola, me interesa reservar",  // "Hi, I'm interested in booking"
  ritualSuffix: "de Terra Santa Eulalia",        // "at Terra Santa Eulalia"
  scheduledMessage: "El próximo horario disponible es", // "Next available time is"
  buttonLabel: "Reservar por WhatsApp",     // "Book via WhatsApp" (EN)
}
```

---

## 📋 LISTA A: TEXTOS PARA AGREGAR A translations.js

Copia esta estructura y agrégala bajo cada idioma (ca, es, en):

```javascript
// AGREGAR BAJO CADA IDIOMA
ui: {
  loading: "Cargando...",
  error: "Error",
  success: "Éxito",
  close: "Cerrar",
  goBack: "Volver atrás",
},
products: {
  newBadge: "Novedad",
  comingSoon: "Próximamente",
  outOfStock: "Agotado",
  inStock: "Disponible",
},
footer: {
  contactLabel: "Contacto",    // ⚠️ VERIFICAR: PUEDE YA EXISTIR
  whatsappLabel: "WhatsApp",
},
pro: {
  loginTitle: "Acceso Profesional",
  passwordPlaceholder: "Contraseña...",
  loginButton: "Entrar",
  passwordError: "Contraseña incorrecta",
  dashboardTitle: "Panel Profesional",
  loginRequired: "Se requiere login",
  logout: "Cerrar sesión",
  welcome: "Bienvenido",
},
whatsapp: {
  messageTemplate: "Hola, me interesa reservar",
  ritualSuffix: "de Terra Santa Eulalia",
  scheduledMessage: "El próximo horario disponible es",
  buttonLabel: "Reservar por WhatsApp",
},
```

---

## 🔧 LISTA B: ARCHIVOS Y COMPONENTES A MODIFICAR

### 1. **Footer.jsx** (2 cambios)
```jsx
// ❌ ACTUAL - LÍNEA 22
<h3 className="font-bold mb-4 text-cream">Contact</h3>

// ✅ NUEVO
<h3 className="font-bold mb-4 text-cream">{t.footer?.contactLabel || "Contacto"}</h3>

---

// ❌ ACTUAL - LÍNEA 34
<span>WhatsApp</span>

// ✅ NUEVO
<span>{t.footer?.whatsappLabel || "WhatsApp"}</span>
```

---

### 2. **WhatsAppButton.jsx** (3 cambios)
```jsx
// ❌ ACTUAL - LÍNEA 22-26
let message = "Hola, me interesa reservar";
if (ritualName) {
  message += ` ${ritualName}`;
}
message += " de Terra Santa Eulalia";

// ✅ NUEVO
let message = t?.whatsapp?.messageTemplate || "Hola, me interesa reservar";
if (ritualName) {
  message += ` ${ritualName}`;
}
message += ` ${t?.whatsapp?.ritualSuffix || "de Terra Santa Eulalia"}`;

---

// ❌ ACTUAL - LÍNEA 30
if (!isOpen && nextOpenTime) {
  message += `. El próximo horario disponible es ${nextOpenTime}.`;
}

// ✅ NUEVO
if (!isOpen && nextOpenTime) {
  message += `. ${t?.whatsapp?.scheduledMessage || "El próximo horario disponible es"} ${nextOpenTime}.`;
}

---

// ❌ ACTUAL - LÍNEA 65
{children || "Reservar por WhatsApp"}

// ✅ NUEVO
{children || t?.whatsapp?.buttonLabel || "Reservar por WhatsApp"}
```

---

### 3. **Navbar.jsx** (1 cambio)
```jsx
// ❌ ACTUAL - LÍNEA 185
(<p className="text-sm opacity-50 col-span-4">Cargando categorías...</p>)

// ✅ NUEVO
(<p className="text-sm opacity-50 col-span-4">{t?.ui?.loading || "Cargando..."}</p>)
```

---

### 4. **ProductCard.jsx** (2 cambios)
```jsx
// ❌ ACTUAL - LÍNEA 42
<div className="bg-olive-green text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest shadow-sm">
  Novedad
</div>

// ✅ NUEVO
<div className="bg-olive-green text-white text-[10px] uppercase font-bold px-2 py-1 tracking-widest shadow-sm">
  {t?.products?.newBadge || "Novedad"}
</div>

---

// ❌ ACTUAL - LÍNEA 36
{hasStock ? `${product.price.toFixed(2)}€` : "PRÓXIMAMENTE"}

// ✅ NUEVO
{hasStock ? `${product.price.toFixed(2)}€` : (t?.products?.comingSoon || "PRÓXIMAMENTE")}
```

---

### 5. **ProfessionalDashboard.jsx** (5 cambios)
```jsx
// ❌ ACTUAL - LÍNEA 27
alert("Contraseña incorrecta (Try: terra2025)");

// ✅ NUEVO
alert(t?.pro?.passwordError || "Contraseña incorrecta");

---

// ❌ ACTUAL - LÍNEA 41
<h2 className="text-2xl font-serif mb-6">Acceso Profesional</h2>

// ✅ NUEVO
<h2 className="text-2xl font-serif mb-6">{t?.pro?.loginTitle || "Acceso Profesional"}</h2>

---

// ❌ ACTUAL - LÍNEA 44
<input placeholder="Contraseña..." />

// ✅ NUEVO
<input placeholder={t?.pro?.passwordPlaceholder || "Contraseña..."} />

---

// ❌ ACTUAL - LÍNEA 49
<Button>Entrar</Button>

// ✅ NUEVO
<Button>{t?.pro?.loginButton || "Entrar"}</Button>

---

// ❌ ACTUAL - LÍNEA 58
<h1 className="text-4xl font-serif text-olive-green mb-8">
  Panel Profesional
</h1>

// ✅ NUEVO
<h1 className="text-4xl font-serif text-olive-green mb-8">
  {t?.pro?.dashboardTitle || "Panel Profesional"}
</h1>
```

---

## 📄 TRANSLATION_MAP.js

Copia este archivo a `src/lib/translation-map.js`:

```javascript
/**
 * Translation Map - Estructura completa para agregar a translations.js
 * Copiar estas secciones bajo cada idioma (ca, es, en)
 */

export const UI_TRANSLATIONS = {
  es: {
    ui: {
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      close: "Cerrar",
      goBack: "Volver atrás",
    },
    products: {
      newBadge: "Novedad",
      comingSoon: "Próximamente",
      outOfStock: "Agotado",
      inStock: "Disponible",
    },
    footer: {
      contactLabel: "Contacto",
      whatsappLabel: "WhatsApp",
    },
    pro: {
      loginTitle: "Acceso Profesional",
      passwordPlaceholder: "Contraseña...",
      loginButton: "Entrar",
      passwordError: "Contraseña incorrecta",
      dashboardTitle: "Panel Profesional",
      loginRequired: "Se requiere login",
      logout: "Cerrar sesión",
    },
    whatsapp: {
      messageTemplate: "Hola, me interesa reservar",
      ritualSuffix: "de Terra Santa Eulalia",
      scheduledMessage: "El próximo horario disponible es",
      buttonLabel: "Reservar por WhatsApp",
    },
  },
  en: {
    ui: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      close: "Close",
      goBack: "Go Back",
    },
    products: {
      newBadge: "New",
      comingSoon: "Coming Soon",
      outOfStock: "Out of Stock",
      inStock: "Available",
    },
    footer: {
      contactLabel: "Contact",
      whatsappLabel: "WhatsApp",
    },
    pro: {
      loginTitle: "Professional Access",
      passwordPlaceholder: "Password...",
      loginButton: "Sign In",
      passwordError: "Incorrect password",
      dashboardTitle: "Professional Dashboard",
      loginRequired: "Login required",
      logout: "Sign Out",
    },
    whatsapp: {
      messageTemplate: "Hi, I'm interested in booking",
      ritualSuffix: "at Terra Santa Eulalia",
      scheduledMessage: "Next available time is",
      buttonLabel: "Book via WhatsApp",
    },
  },
  ca: {
    ui: {
      loading: "Carregant...",
      error: "Error",
      success: "Èxit",
      close: "Tancar",
      goBack: "Enrere",
    },
    products: {
      newBadge: "Novetat",
      comingSoon: "Pròximament",
      outOfStock: "Esgotat",
      inStock: "Disponible",
    },
    footer: {
      contactLabel: "Contacte",
      whatsappLabel: "WhatsApp",
    },
    pro: {
      loginTitle: "Accés Professional",
      passwordPlaceholder: "Contrasenya...",
      loginButton: "Entrar",
      passwordError: "Contrasenya incorrecta",
      dashboardTitle: "Panel Professional",
      loginRequired: "S'requereix login",
      logout: "Tancar sessió",
    },
    whatsapp: {
      messageTemplate: "Hola, m'interessa reservar",
      ritualSuffix: "a Terra Santa Eulalia",
      scheduledMessage: "El pròxim horari disponible és",
      buttonLabel: "Reservar via WhatsApp",
    },
  },
};

// Para agregar a translations.js, fusionar con estructura existente:
// translations.es = { ...translations.es, ...UI_TRANSLATIONS.es };
// translations.en = { ...translations.en, ...UI_TRANSLATIONS.en };
// translations.ca = { ...translations.ca, ...UI_TRANSLATIONS.ca };
```

---

## 🎯 Plan de Acción

### Fase 1: CRÍTICA (Hacer INMEDIATAMENTE)
- [ ] Agregar `UI_TRANSLATIONS` a `translations.js` (todas las secciones)
- [ ] Actualizar `productsList` en EN y CA (reutilizar ES)
- [ ] Actualizar `Footer.jsx` - 2 líneas
- [ ] Actualizar `WhatsAppButton.jsx` - 3 líneas

### Fase 2: IMPORTANTE (Esta semana)
- [ ] Actualizar `Navbar.jsx` - 1 línea
- [ ] Actualizar `ProductCard.jsx` - 2 líneas
- [ ] Actualizar `ProfessionalDashboard.jsx` - 5 líneas
- [ ] Testear multiidioma en cada página

### Fase 3: MEJORA (Próximo sprint)
- [ ] Agregar traducción real de Catalán (actual solo tiene structure base)
- [ ] Revisar coherencia de terminología en CA
- [ ] Implementar sistema de validación de traducciones (CI/CD check)

---

## ✨ Recomendaciones

1. **Usar fallbacks:** Siempre incluir `|| "Texto en español"` como fallback
2. **Coherencia:** Revisar que los mismos términos se usen en todos los idiomas
3. **CMS futuro:** Planificar migración a Contentful/Sanity cuando `productsList` crezca
4. **Test multiidioma:** Crear test que valide todas las claves `t.` existan en los 3 idiomas
5. **Documentación:** Mantener este archivo actualizado conforme se agreguen nuevas strings

---

**Generado:** 2026-05-13  
**Total de cambios necesarios:** 13 textos hardcodeados + 2 listas de productos vacías  
**Tiempo estimado de implementación:** 2-3 horas  
**Prioridad:** 🔴 ALTA
