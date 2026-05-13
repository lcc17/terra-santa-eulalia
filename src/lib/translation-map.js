/**
 * Translation Map - Estructura de traducciones faltantes
 *
 * Cómo usar:
 * 1. Copiar las secciones correspondientes a cada idioma en translations.js
 * 2. O fusionar dinámicamente:
 *    translations.es = { ...translations.es, ...UI_TRANSLATIONS.es };
 *
 * Última actualización: 2026-05-13
 * Estado: Listo para integración
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

/**
 * Función auxiliar para fusionar traducciones
 * Uso: Object.assign(translations.es, UI_TRANSLATIONS.es)
 */
export function mergeTranslations(targetTranslations, source) {
  return Object.assign({}, targetTranslations, source);
}

/**
 * Validador de traducciones - asegura que todas las claves existan en los 3 idiomas
 */
export function validateTranslations(translations) {
  const errors = [];
  const languages = ["es", "en", "ca"];

  languages.forEach((lang) => {
    const t = translations[lang];
    const requiredKeys = ["ui", "products", "footer", "pro", "whatsapp"];

    requiredKeys.forEach((key) => {
      if (!t[key]) {
        errors.push(`❌ ${lang.toUpperCase()}: Falta sección '${key}'`);
      }
    });
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Log de traducciones por idioma
 */
export function logTranslationStatus(translations) {
  const languages = ["es", "en", "ca"];

  console.log("\n📊 TRANSLATION STATUS:\n");

  languages.forEach((lang) => {
    const t = translations[lang];
    const productCount = t.productsList?.length || 0;
    const hasUI = !!t.ui;
    const hasPro = !!t.pro;

    console.log(
      `${lang.toUpperCase()}: ${hasUI && hasPro ? "✅" : "⚠️"} | Products: ${productCount}`
    );
  });

  console.log("\n");
}
