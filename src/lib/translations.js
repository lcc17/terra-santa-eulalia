export const translations = {
  es: {
    nav: {
      home: "Inicio",
      domestic: "Quienes Somos Terra", // Antes "Doméstico" (Más inspiracional)
      selection: "Nuestra Selección", // Antes "Productos"
      aboutTerra: "Quiénes Somos Terra", // Nuevo
      treatments: "Tratamientos", // Nuevo en el menú principal
      proAccess: "Acceso Salones", // Nombre más profesional para el nicho
      pro: "Área Profesional",
      products: "Nuestra Selección", // Antes "Productos" (Más valor)"
      faq: "Dudas Frecuentes",
    },
    hero: {
      title: "Terra Santa Eulalia",
      subtitle: "Desde las Indias, a tu hogar",
      cta: "Descubre nuestros Productos",
    },
    domestic: {
      title: "Productos Naturales",
      subtitle: "La alquimia de la tierra en tu hogar",
      productsTitle: "Selección Natural & Orgánica",
      productsDesc: "Bienestar para el cuerpo, alma y corazón.",
      readMore: "Saber más",
      viewMore: "Ver Catálogo Completo",
      diyTitle: "Hazlo tú mismo",
      visitUs: "Visítanos en C/ Provença 213",
      faqTitle: "Preguntas Recurrentes",
    },
    about: {
      title: "Quiénes Somos",
      desc: "Un santuario de pureza, tierra y rituales. Creemos en el bienestar orgánico y el minimalismo cálido.",
    },
    services: {
      title: "High Ticket Therapies",
      spa: "Spa Orgánico",
      capillary: "Terapia Capilar Oxitocina",
    },
    pro: {
      welcome: "Bienvenido al Área Profesional",
      courses: "Formación y Filosofía",
      budget: "Presupuestos",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      location: "Carrer de Provença, 213, Barcelona",
    },
    treatmentsPage: {
      title: "Rituales Terra",
      subtitle: "Salud Capilar y Facial Orgánica",
      desc: "Tratamientos botánicos diseñados para recuperar el equilibrio. Sin prisas, con plantas medicinales y técnicas ancestrales.",
      cta: "Reservar Cita",

      // Categoría 1: Rituales Capilares (La base)
      hairRituals: {
        title: "Rituales Capilares Orgánicos",
        desc: "Recupera la fuerza y salud de tu cabello con barros y plantas.",
        list: [
          {
            id: "ritual-detox",
            title: "Ritual Detox",
            desc: "Limpieza profunda con plantas medicinales. Específico para dermatitis, descamación, caspa o exceso de grasa.",
            extra: "Incluye masaje facial o de pies durante la exposición.",
            duration: "50 min",
            price: "85€",
          },
          {
            id: "ritual-fuerte",
            title: "Ritual Siempre Fuerte y Vital",
            desc: "Fuerza y vitalidad con plantas ayurvédicas. Para cabellos débiles, sin cuerpo y faltos de vida.",
            extra:
              "Conecta con la paz y armonía. Incluye masaje facial o de pies.",
            duration: "60 min",
            price: "95€",
          },
          {
            id: "ritual-rizos",
            title: "Ritual Rizos Perfectos",
            desc: "Recupera la estructura y flexibilidad del rizo mediante hierbas específicas que devuelven la vida al cabello.",
            extra: "Incluye masaje facial o de pies.",
            duration: "50 min",
            price: "85€",
          },
          {
            id: "ritual-pindas",
            title: "Ritual Herbal con Pindas (Signature)",
            desc: "La experiencia suprema de desconexión. Masaje corporal con aceite de sésamo y pindas herbales calientes en puntos marma.",
            extra:
              "Equilibrio físico y mental. Incluye masaje craneal y lavado.",
            duration: "75 min",
            price: "150€",
            isHighlight: true, // Para destacarlo visualmente
          },
        ],
      },

      // Categoría 2: Rituales Faciales (Luz y Piel)
      facialRituals: {
        title: "Rituales Faciales de Luz",
        desc: "Tratamientos holísticos para devolver la juventud y elasticidad a la piel.",
        list: [
          {
            id: "luz-otono",
            title: "Ritual Luz de Otoño (Lifting)",
            desc: "Lifting facial natural con acupuntura. Devuelve la luz y apariencia juvenil perdida.",
            options: [
              { name: "Solo Facial", time: "75 min", price: "85€" },
              {
                name: "Con Lavado + Masaje Capilar",
                time: "90 min",
                price: "125€",
              },
            ],
          },
          {
            id: "luz-manana",
            title: "Ritual Luz de la Mañana",
            desc: "Higiene facial profunda. Una piel saludable comienza siempre con una buena limpieza.",
            options: [
              { name: "Solo Facial", time: "75 min", price: "75€" },
              {
                name: "Con Lavado + Masaje Capilar",
                time: "90 min",
                price: "115€",
              },
            ],
          },
          {
            id: "luz-interior",
            title: "Ritual Luz Interior (Kobido)",
            desc: "Masaje facial Kobido para devolver la elasticidad y mejorar la calidad de la piel.",
            options: [
              { name: "Solo Facial", time: "60 min", price: "70€" },
              {
                name: "Con Lavado + Masaje Capilar",
                time: "75 min",
                price: "110€",
              },
            ],
          },
          {
            id: "luz-mar",
            title: "Ritual Luz del Mar",
            desc: "Hidratación y vitalidad para pieles sensibles o deshidratadas.",
            options: [
              { name: "Solo Facial", time: "60 min", price: "65€" },
              {
                name: "Con Lavado + Masaje Capilar",
                time: "75 min",
                price: "105€",
              },
            ],
          },
        ],
      },

      // Extras Express
      extras: [
        { title: "Lavado Spa", duration: "15 min", price: "35€" },
        {
          title: "Masaje Facial + Lavado Spa",
          duration: "45 min",
          price: "50€",
        },
      ],
    },
    // 1. Actualizar textos de la Home (Services)
    services: {
      title: "High Ticket Therapies",
      // Actualizamos para mencionar Facial/Corporal y Pindas
      spa: "Rituales Faciales & Pindas",
      spaDesc:
        "Experiencia Signature (150€). Pindas herbales, lifting facial y desconexión absoluta.",
      capillary: "Terapia de Oxitocina",
      capillaryDesc: "Diagnóstico profundo y recuperación molecular.",
    },

    // 2. Actualizar página Capilar con las Soluciones Terapéuticas
    capillaryPage: {
      title: "Terapia de Oxitocina",
      subtitle: "Ingeniería Natural para el Cabello",
      desc: "Nuestro servicio High Ticket por excelencia. Un protocolo clínico-orgánico para recuperar cabellos dañados, alopecias o desequilibrios del cuero cabelludo.",
      diagnosisTitle: "El Diagnóstico",
      diagnosisDesc:
        "Analizamos tu bulbo capilar con microcámara para diseñar tu receta personalizada.",
      steps: [
        {
          title: "Limpieza",
          desc: "Desintoxicación del folículo con barros volcánicos.",
        },
        {
          title: "Nutrición",
          desc: "Inyección de activos botánicos y proteínas vegetales.",
        },
        {
          title: "Sellado",
          desc: "Cierre de cutícula con aceites ozonizados y luz LED.",
        },
      ],
      // NUEVA SECCIÓN: Soluciones Específicas
      solutionsTitle: "Soluciones Terapéuticas",
      solutionsDesc:
        "Protocolos específicos para patologías del cuero cabelludo.",
      solutions: [
        {
          title: "Ritual Detox",
          problem: "Caspa · Grasa · Dermatitis",
          desc: "Limpieza profunda con plantas medicinales desintoxicantes.",
          price: "85€",
        },
        {
          title: "Ritual Siempre Fuerte",
          problem: "Caída · Debilidad · Afinamiento",
          desc: "Fuerza y vitalidad con plantas ayurvédicas. Frena la caída.",
          price: "95€",
        },
      ],
      cta: "Solicitar Diagnóstico",
    },
    philosophy: {
      heroTitle: "El Origen",
      heroSubtitle: "Donde la alquimia encuentra el silencio.",
      manifesto:
        "No creemos en la belleza fabricada. Creemos en la belleza revelada. Terra Santa Eulalia no es una marca, es un retorno a la memoria de la tierra.",
      founderTitle: "Manos que escuchan",
      founderDesc:
        "Manolo Díaz no corta cabello, esculpe energía. Tras años observando cómo la química apagaba el alma del cabello, decidió volver al barro, a la raíz, al agua.",
      values: [
        { title: "Tierra", desc: "Arcillas vivas que purifican sin agredir." },
        { title: "Agua", desc: "La hidratación real que fluye desde dentro." },
        { title: "Tiempo", desc: "El ingrediente más lujoso: la espera." },
      ],
      processTitle: "La Botica Viva",
      processDesc:
        "Nuestras mezclas se preparan al momento. Sin conservantes que duerman la planta. Es cosmética viva para gente viva.",
      cta: "Ven a Sentirlo",
    },

    // LISTA COMPLETA DE PRODUCTOS CON PRECIOS Y VIDEOS
    productsList: [
      // --- LÍNEA PLANTAS (TINTES Y TRATAMIENTOS) ---
      {
        id: "planta-indigo",
        name: "Planta Índigo",
        category: "Coloración Vegetal",
        type: "100% Orgánico",
        price: 18.5,
        desc: "Pigmento puro vegetal para conseguir tonos oscuros profundos y negros azulados en combinación con otras plantas.",
        ingredients: "Indigofera Tinctoria Leaf Powder (Índigo puro).",
        usage:
          "Mezclar con agua a 50ºC. Usar solo o en dos pasos (primero henna, luego índigo) para cobertura de canas en negro. Tiempo: 60-90 min.",
        precautions: "No aplicar aceites antes. Uso externo.",
        img: "/images/products/terra_santa_planta_indigo.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
        isNew: false,
      },
      {
        id: "planta-puro-cobre",
        name: "Planta Puro Cobre",
        category: "Coloración Vegetal",
        type: "100% Orgánico",
        price: 18.5,
        desc: "Henna pura de alta calidad. Aporta un color cobrizo intenso, fuerza y un brillo espectacular.",
        ingredients: "Lawsonia Inermis Leaf Powder.",
        usage:
          "Mezclar con agua caliente (70-80ºC) y un ácido (limón). Reposar la mezcla. Aplicar 2-3 horas.",
        precautions: "Mancha la piel y ropa. Usar guantes.",
        img: "/images/products/terra_santa_planta_puro_cobre.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-rubio-luminoso",
        name: "Planta Rubio Luminoso",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 22.0,
        desc: "Mezcla de plantas para avivar reflejos dorados en cabellos claros y aportar tratamiento.",
        ingredients: "Cassia Obovata, Chamomilla Recutita, Rheum Officinale.",
        usage:
          "Mezclar con agua tibia o infusión de manzanilla. Aplicar 30-45 min para brillo.",
        precautions: "No aclara el cabello oscuro, solo aporta reflejo.",
        img: "/images/products/terra_santa_planta_rubio_luminoso.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-rubio-miel",
        name: "Planta Rubio Miel",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 22.0,
        desc: "Matiz cálido y dulce para cabellos rubios o castaños claros que buscan calidez.",
        ingredients: "Cassia, Lawsonia (baja proporción), Curcuma.",
        usage: "Mezclar con agua tibia. Tiempo de exposición: 30-60 min.",
        precautions: "Prueba de mechón recomendada.",
        img: "/images/products/terra_santa_planta_rubio_miel.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-castana",
        name: "Planta Castaña",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 22.0,
        desc: "Tono marrón medio natural. Ideal para unificar tonos y cubrir primeras canas con efecto barniz.",
        ingredients:
          "Indigofera Tinctoria, Lawsonia Inermis, Emblica Officinalis (Amla).",
        usage:
          "Mezclar con agua a 50ºC. Aplicar inmediatamente. Tiempo: 60-90 min.",
        precautions:
          "No usar champú las siguientes 24h para que el color asiente.",
        img: "/images/products/terra_santa_planta_castanya.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-castana-oscuro",
        name: "Planta Castaño Oscuro",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 22.0,
        desc: "Profundidad y cobertura para cabellos castaños. Aporta cuerpo y oscurece tonos claros.",
        ingredients:
          "Indigofera Tinctoria (alta proporción), Lawsonia Inermis, Juglans Regia.",
        usage:
          "Mezclar con agua a 50ºC. Aplicar generosamente. Tiempo: 90 min.",
        precautions: "Evitar utensilios metálicos.",
        img: "/images/products/terra_santa_planta_castaña_oscuro.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-fortalecedora",
        name: "Planta Fortalecedora",
        category: "Tratamiento en Polvo",
        type: "Cassia Obovata",
        price: 18.0,
        desc: "Conocida como 'Henna Neutra'. No tiñe, pero engrosa la fibra capilar y aporta brillo espejo.",
        ingredients: "Cassia Obovata Leaf Powder 100%.",
        usage:
          "Mezclar con agua tibia hasta formar barro. Aplicar 45 min. Ideal entre tintes.",
        precautions: "Apta para todo tipo de cabellos.",
        img: "/images/products/terra_santa_planta_fortalecedora_brillante.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },

      // --- LÍNEA CHAMPÚS Y LAVADO ---
      {
        id: "shampoo-gratitud",
        name: "Champú Gratitud",
        category: "Higiene Capilar",
        type: "Uso Frecuente",
        price: 24.0,
        desc: "Equilibrante para todo tipo de cabellos. Limpia suavemente respetando el manto hidrolipídico.",
        ingredients: "Lavanda, Aloe Vera, Tensioactivos de Coco.",
        usage:
          "Emulsionar en manos, aplicar en cuero cabelludo mojado. Aclarar.",
        precautions: "Evitar contacto con ojos.",
        img: "/images/products/terra_santa_shampo_gratitud_cabello_todo_tipo.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "shampoo-abundancia",
        name: "Champú Abundancia",
        category: "Higiene Capilar",
        type: "Volumen y Fuerza",
        price: 26.0,
        desc: "Formulado para cabellos finos o con caída. Estimula la raíz y aporta densidad.",
        ingredients: "Romero, Ortiga, Proteína de Trigo.",
        usage:
          "Masajear vigorosamente la raíz para activar circulación. Dejar actuar 2 min.",
        precautions: "Uso externo.",
        img: "/images/products/terra_santa_shampoo_abundancia_todo_tipo_cabello.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },

      // --- LÍNEA TRATAMIENTOS GREEN (ESPECÍFICOS) ---
      {
        id: "green-detox",
        name: "Green Detox",
        category: "Tratamiento Específico",
        type: "Purificante",
        price: 32.0,
        desc: "Mascarilla de arcillas y plantas para limpiar toxinas del cuero cabelludo graso o con caspa.",
        ingredients: "Arcilla Verde, Neem, Árbol de Té.",
        usage: "Aplicar en raíz antes del lavado (pre-poo). Dejar 20 min.",
        precautions: "No aplicar en puntas secas.",
        img: "/images/products/terra_santa_tratamiento_capilar_green_detox.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
        isNew: true,
      },
      {
        id: "green-vitality",
        name: "Green Vitality",
        category: "Tratamiento Específico",
        type: "Revitalizante",
        price: 34.0,
        desc: "Bomba de vitaminas para cabellos apagados. Recupera la elasticidad y juventud.",
        ingredients: "Amla, Brahmi, Moringa.",
        usage: "Mezclar con agua o yogur. Aplicar de raíz a puntas 30 min.",
        precautions: "Apto para método curly.",
        img: "/images/products/terra_santa_tratamiento_capilar_green_vitality.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "green-curly",
        name: "Green Curly",
        category: "Tratamiento Específico",
        type: "Rizos Definidos",
        price: 34.0,
        desc: "Hidratación y definición para el método curly. Evita el frizz sin apelmazar.",
        ingredients: "Linaza, Malvavisco, Aloe Vera.",
        usage:
          "Aplicar en cabello húmedo como leave-in o mascarilla con aclarado.",
        precautions: "Sin siliconas.",
        img: "/images/products/terra_santa_tratamiento_capilar_green_curly.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "magical-green-curly",
        name: "Magical Green Curly",
        category: "Tratamiento Específico",
        type: "Rizos Pro",
        price: 38.0,
        desc: "Versión intensiva para rizos muy secos o afro. Nutrición extrema.",
        ingredients: "Manteca de Karité, Aceite de Aguacate, Espirulina.",
        usage: "Mascarilla nocturna o pre-lavado intenso.",
        precautions: "Textura densa.",
        img: "/images/products/terra_santa_tratamiento_capilar_magical_green_curly.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
        isNew: true,
      },

      // --- LÍNEA FINALIZADO Y CUERPO ---
      {
        id: "acondicionador-sin-aclarado",
        name: "Acondicionador Spray",
        category: "Hidratación y Cuerpo",
        type: "Leave-In",
        price: 25.0,
        desc: "Bruma ligera que desenreda al instante y protege del calor y sol.",
        ingredients: "Hidrolatos florales, Aceite de Jojoba ligero.",
        usage: "Pulverizar sobre cabello húmedo o seco para reactivar peinado.",
        precautions: "Agitar antes de usar.",
        img: "/images/products/terra_santa_acondicionador_sin_aclarado.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "locion-capilar-aloe",
        name: "Loción Capilar Aloe",
        category: "Hidratación y Cuerpo",
        type: "Calmante",
        price: 28.0,
        desc: "Sérum calmante para cueros cabelludos sensibles, con picores o descamación.",
        ingredients: "Aloe Vera puro, Caléndula.",
        usage: "Aplicar pipeta en el cuero cabelludo y masajear. No aclarar.",
        precautions: "Sensación frescor inmediata.",
        img: "/images/products/terra_santa_locion_capilar_aloe.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "locion-aloe-vera-puro",
        name: "Loción Aloe Vera Puro",
        category: "Hidratación y Cuerpo",
        type: "Multiusos",
        price: 20.0,
        desc: "Gel puro regenerador. Sirve para piel, cabello, after-sun o post-depilación.",
        ingredients: "Aloe Barbadensis 99%.",
        usage: "Aplicar generosamente en la zona a tratar.",
        precautions: "Conservar en frío para mayor efecto.",
        img: "/images/products/terra_santa_locion_aloe_vera_puro.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "leche-corporal",
        name: "Leche Regeneradora",
        category: "Hidratación y Cuerpo",
        type: "Body Milk",
        price: 29.0,
        desc: "Hidratación corporal profunda con absorción rápida. Piel de seda.",
        ingredients: "Rosa Mosqueta, Aceite de Almendras, Vitamina E.",
        usage: "Masaje corporal diario tras la ducha.",
        precautions: "Uso externo.",
        img: "/images/products/terra_santa_leche_corporal_regeneradora.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
    ],
    faqList: [
      {
        q: "¿Cómo recojo mi pedido?",
        a: "Al finalizar la compra, selecciona 'Recogida en Tienda'. Estamos en C/ Provença 213, Barcelona.",
      },
      {
        q: "¿Los productos caducan?",
        a: "Al ser orgánicos y sin conservantes agresivos, recomendamos usarlos en 6-12 meses tras apertura.",
      },
      {
        q: "¿Necesito diagnóstico?",
        a: "Para tratamientos High Ticket (Terapia Oxitocina), sí. Puedes reservar cita en nuestra web.",
      },
      {
        q: "¿Son aptos para embarazadas?",
        a: "La mayoría sí, pero consulta la ficha técnica de cada planta o consúltanos.",
      },
    ],
  },

  en: {
    // (Estructura idéntica para evitar errores, textos pueden quedarse en ES por ahora)
    nav: {
      home: "Home",
      domestic: "Terra Universe",
      pro: "Pro Area",
      products: "Our Rituals",
      treatments: "Experiences",
      faq: "FAQ",
    },
    hero: {
      title: "Terra Santa Eulalia",
      subtitle: "More than a brand, a way of life",
      cta: "Discover the Ritual",
    },
    domestic: {
      title: "Natural Rituals",
      subtitle: "Earth alchemy in your home",
      productsTitle: "Natural & Organic Selection",
      productsDesc: "Well-being for body, soul, and heart.",
      readMore: "Read more",
      viewMore: "View Full Catalog",
      diyTitle: "Do It Yourself",
      visitUs: "Visit us at C/ Provença 213",
      faqTitle: "Frequent Questions",
    },
    footer: {
      rights: "All rights reserved.",
      location: "Carrer de Provença, 213, Barcelona",
    },
    productsList: [],
    faqList: [
      { q: "How do I pick up?", a: "Pick up at C/ Provença 213, Barcelona." },
    ],
  },
};

// Fallback para rellenar la lista en EN si está vacía, para que no rompa la app
translations.en.productsList = translations.es.productsList;
