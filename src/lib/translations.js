export const translations = {
  es: {
    nav: {
      home: "Inicio",
      domestic: "Quiénes Somos Terra",
      selection: "Nuestra Selección",
      aboutTerra: "Quiénes Somos Terra",
      treatments: "Tratamientos",
      rituales: "Rituales",
      filosofia: "Filosofía",
      contacto: "Contacto",
      proAccess: "Acceso Salones",
      pro: "Área Profesional",
      products: "Nuestra Selección",
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
    cards: {
      productsTitle: "NUESTROS\nPRODUCTOS",
      productsSub: "La Botica Natural",
      treatmentsTitle: "NUESTROS\nTRATAMIENTOS",
      treatmentsSub: "Spa Orgánico",
      therapyTitle: "TERAPIA\nCAPILAR",
      therapySub: "Green Zone",
    },
    about: {
      title: "Quiénes Somos",
      desc: "Un santuario de pureza, tierra y rituales. Creemos en el bienestar orgánico y el minimalismo cálido.",
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
      whatsappMessage: "Hola, me interesa reservar un ritual de Terra Santa Eulalia",
      floatingCta: "Reservar Cita",
      extrasTitle: "Añade a tu Ritual",
      extrasSubtitle: "Expres Express",

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
            isHighlight: true,
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
    services: {
      title: "Terapias de Alta Gamma",
      spa: "Rituales Faciales & Pindas",
      spaDesc:
        "Experiencia Signature (150€). Pindas herbales, lifting facial y desconexión absoluta.",
      capillary: "Terapia de Oxitocina",
      capillaryDesc: "Diagnóstico profundo y recuperación molecular.",
    },
    cta: {
      helpTitle: "¿Necesitas ayuda para elegir?",
      ritualWaiting: "Tu ritual te está esperando",
      helpDesc:
        "Nuestro equipo te ayudará a encontrar el tratamiento perfecto según las necesidades de tu cabello y piel. La primera consulta es gratuita.",
      bookFree: "Reservar Consulta Gratuita",
      filosofiaLink: "Conocer nuestra filosofía",
    },

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
      ctaRecoveryTitle: "Recupera la memoria vital de tu cabello",
      ctaRecoveryDesc: "Este tratamiento requiere cita previa y valoración de nuestros especialistas en C/ Provença 213.",
      ctaRecoveryBtn: "Reservar Valoración",
      scheduleRitual: "Agendar este ritual",
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
        desc: "Sérum calmante para cueros cabelludo sensibles, con picores o descamación.",
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
    nav: {
      home: "Home",
      domestic: "Terra Universe",
      selection: "Our Selection",
      aboutTerra: "Who is Terra",
      treatments: "Experiences",
      rituales: "Rituals",
      filosofia: "Philosophy",
      contacto: "Contact",
      proAccess: "Professional Access",
      pro: "Pro Area",
      products: "Our Selection",
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
    cards: {
      productsTitle: "OUR\nPRODUCTS",
      productsSub: "The Natural Apothecary",
      treatmentsTitle: "OUR\nTREATMENTS",
      treatmentsSub: "Organic Spa",
      therapyTitle: "CAPILLARY\nTHERAPY",
      therapySub: "Green Zone",
    },
    about: {
      title: "Who We Are",
      desc: "A sanctuary of purity, earth, and rituals. We believe in organic wellness and warm minimalism.",
    },
    pro: {
      welcome: "Welcome to the Professional Area",
      courses: "Training & Philosophy",
      budget: "Budgets",
    },
    footer: {
      rights: "All rights reserved.",
      location: "Carrer de Provença, 213, Barcelona",
    },
    treatmentsPage: {
      title: "Terra Rituals",
      subtitle: "Organic Hair & Facial Health",
      desc: "Botanical treatments designed to restore balance. No rush, with medicinal plants and ancestral techniques.",
      cta: "Book Appointment",
      whatsappMessage: "Hello, I'm interested in booking a ritual at Terra Santa Eulalia",
      floatingCta: "Book Appointment",
      extrasTitle: "Add to Your Ritual",
      extrasSubtitle: "Express Express",

      hairRituals: {
        title: "Organic Hair Rituals",
        desc: "Recover your hair's strength and health with clays and plants.",
        list: [
          {
            id: "ritual-detox",
            title: "Detox Ritual",
            desc: "Deep cleansing with medicinal plants. Specific for dermatitis, flaking, dandruff, or excess oil.",
            extra: "Includes facial or foot massage during exposure.",
            duration: "50 min",
            price: "85€",
          },
          {
            id: "ritual-fuerte",
            title: "Always Strong & Vital Ritual",
            desc: "Strength and vitality with Ayurvedic plants. For weak, lifeless hair lacking body.",
            extra: "Connect with peace and harmony. Includes facial or foot massage.",
            duration: "60 min",
            price: "95€",
          },
          {
            id: "ritual-rizos",
            title: "Perfect Curls Ritual",
            desc: "Recover curl structure and flexibility through specific herbs that restore life to hair.",
            extra: "Includes facial or foot massage.",
            duration: "50 min",
            price: "85€",
          },
          {
            id: "ritual-pindas",
            title: "Herbal Ritual with Pindas (Signature)",
            desc: "The ultimate disconnection experience. Body massage with sesame oil and hot herbal pindas on marma points.",
            extra: "Physical and mental balance. Includes scalp massage and washing.",
            duration: "75 min",
            price: "150€",
            isHighlight: true,
          },
        ],
      },

      facialRituals: {
        title: "Facial Light Rituals",
        desc: "Holistic treatments to restore youth and elasticity to the skin.",
        list: [
          {
            id: "luz-otono",
            title: "Autumn Light Ritual (Lifting)",
            desc: "Natural facial lifting with acupuncture. Restores lost light and youthful appearance.",
            options: [
              { name: "Facial Only", time: "75 min", price: "85€" },
              {
                name: "With Wash + Scalp Massage",
                time: "90 min",
                price: "125€",
              },
            ],
          },
          {
            id: "luz-manana",
            title: "Morning Light Ritual",
            desc: "Deep facial hygiene. Healthy skin always begins with proper cleansing.",
            options: [
              { name: "Facial Only", time: "75 min", price: "75€" },
              {
                name: "With Wash + Scalp Massage",
                time: "90 min",
                price: "115€",
              },
            ],
          },
          {
            id: "luz-interior",
            title: "Inner Light Ritual (Kobido)",
            desc: "Kobido facial massage to restore elasticity and improve skin quality.",
            options: [
              { name: "Facial Only", time: "60 min", price: "70€" },
              {
                name: "With Wash + Scalp Massage",
                time: "75 min",
                price: "110€",
              },
            ],
          },
          {
            id: "luz-mar",
            title: "Sea Light Ritual",
            desc: "Hydration and vitality for sensitive or dehydrated skin.",
            options: [
              { name: "Facial Only", time: "60 min", price: "65€" },
              {
                name: "With Wash + Scalp Massage",
                time: "75 min",
                price: "105€",
              },
            ],
          },
        ],
      },

      extras: [
        { title: "Spa Wash", duration: "15 min", price: "35€" },
        {
          title: "Facial Massage + Spa Wash",
          duration: "45 min",
          price: "50€",
        },
      ],
    },
    services: {
      title: "High Ticket Therapies",
      spa: "Facial Rituals & Pindas",
      spaDesc:
        "Signature Experience (150€). Herbal pindas, facial lifting, and absolute disconnection.",
      capillary: "Oxytocin Capillary Therapy",
      capillaryDesc: "Deep diagnosis and molecular recovery.",
    },
    cta: {
      helpTitle: "Need help choosing?",
      ritualWaiting: "Your ritual awaits",
      helpDesc:
        "Our team will help you find the perfect treatment for your hair and skin needs. The first consultation is free.",
      bookFree: "Book Free Consultation",
      filosofiaLink: "Know our philosophy",
    },
    capillaryPage: {
      title: "Oxytocin Therapy",
      subtitle: "Natural Engineering for Hair",
      desc: "Our flagship High Ticket service. A clinical-organic protocol to recover damaged hair, alopecia, or scalp imbalances.",
      diagnosisTitle: "The Diagnosis",
      diagnosisDesc:
        "We analyze your hair bulb with a microcamera to design your personalized recipe.",
      steps: [
        {
          title: "Cleansing",
          desc: "Detoxification of the follicle with volcanic clays.",
        },
        {
          title: "Nutrition",
          desc: "Injection of botanical actives and plant proteins.",
        },
        {
          title: "Sealing",
          desc: "Cuticle closure with ozonated oils and LED light.",
        },
      ],
      solutionsTitle: "Therapeutic Solutions",
      solutionsDesc:
        "Specific protocols for scalp pathologies.",
      solutions: [
        {
          title: "Detox Ritual",
          problem: "Dandruff · Oil · Dermatitis",
          desc: "Deep cleansing with detoxifying medicinal plants.",
          price: "85€",
        },
        {
          title: "Always Strong Ritual",
          problem: "Hair Loss · Weakness · Thinning",
          desc: "Strength and vitality with Ayurvedic plants. Stops hair loss.",
          price: "95€",
        },
      ],
      cta: "Request Diagnosis",
      ctaRecoveryTitle: "Restore the vital memory of your hair",
      ctaRecoveryDesc: "This treatment requires a prior appointment and evaluation by our specialists at C/ Provença 213.",
      ctaRecoveryBtn: "Book Evaluation",
      scheduleRitual: "Schedule this ritual",
    },
    philosophy: {
      heroTitle: "The Origin",
      heroSubtitle: "Where alchemy meets silence.",
      manifesto:
        "We don't believe in manufactured beauty. We believe in beauty revealed. Terra Santa Eulalia is not a brand, it's a return to the memory of the earth.",
      founderTitle: "Hands that listen",
      founderDesc:
        "Manolo Díaz doesn't cut hair, he sculpts energy. After years of watching chemistry extinguish the soul of hair, he decided to return to clay, to the root, to water.",
      values: [
        { title: "Earth", desc: "Living clays that purify without aggression." },
        { title: "Water", desc: "Real hydration that flows from within." },
        { title: "Time", desc: "The most luxurious ingredient: patience." },
      ],
      processTitle: "The Living Apothecary",
      processDesc:
        "Our blends are prepared on the spot. No preservatives that put the plant to sleep. It's living cosmetics for living people.",
      cta: "Come Experience It",
    },
    productsList: [],
    faqList: [
      {
        q: "How do I pick up my order?",
        a: "At checkout, select 'Store Pickup'. We are at C/ Provença 213, Barcelona.",
      },
      {
        q: "Do the products expire?",
        a: "Being organic without harsh preservatives, we recommend using them within 6-12 months after opening.",
      },
      {
        q: "Do I need a diagnosis?",
        a: "For High Ticket treatments (Oxytocin Therapy), yes. You can book an appointment on our website.",
      },
      {
        q: "Are they safe for pregnant women?",
        a: "Most are, but consult the technical sheet of each plant or contact us.",
      },
    ],
  },

  ca: {
    nav: {
      home: "Inici",
      domestic: "Qui Som Terra",
      selection: "La Nostra Selecció",
      aboutTerra: "Qui Som Terra",
      treatments: "Tractaments",
      rituales: "Rituals",
      filosofia: "Filosofia",
      contacto: "Contacte",
      proAccess: "Accés Centres",
      pro: "Àrea Professional",
      products: "La Nostra Selecció",
      faq: "Dubtes Frequients",
    },
    hero: {
      title: "Terra Santa Eulalia",
      subtitle: "Des de les Indies, a casa teva",
      cta: "Descobreix els Nostres Productes",
    },
    domestic: {
      title: "Productes Naturals",
      subtitle: "L'alquimia de la terra a casa teva",
      productsTitle: "Selecció Natural & Orgànica",
      productsDesc: "Benestar per al cos, ànima i cor.",
      readMore: "Saber més",
      viewMore: "Veure Catàleg Complet",
      diyTitle: "Fes-ho Tu Mateix",
      visitUs: "Visita'ns a C/ Provença 213",
      faqTitle: "Preguntes Recurrents",
    },
    cards: {
      productsTitle: "ELS NOSTRES\nPRODUCTES",
      productsSub: "La Botiga Natural",
      treatmentsTitle: "ELS NOSTRES\nTRACTAMENTS",
      treatmentsSub: "Spa Orgànic",
      therapyTitle: "TERÀPIA\nCAPIL·LAR",
      therapySub: "Green Zone",
    },
    about: {
      title: "Qui Som",
      desc: "Un santuari de puresa, terra i rituals. Creiem en el benestar orgànic i el minimalisme càlid.",
    },
    pro: {
      welcome: "Benvingut a l'Àrea Professional",
      courses: "Formació i Filosofia",
      budget: "Pressupostos",
    },
    footer: {
      rights: "Tots els drets reservats.",
      location: "Carrer de Provença, 213, Barcelona",
    },
    treatmentsPage: {
      title: "Rituals Terra",
      subtitle: "Salut Capil·lar i Facial Orgànica",
      desc: "Tractaments botànics dissenyats per recuperar l'equilibri. Sense presses, amb plantes medicinals i tècniques ancestrals.",
      cta: "Reservar Cita",
      whatsappMessage: "Hola, m'interessa reservar un ritual de Terra Santa Eulalia",
      floatingCta: "Reservar Cita",
      extrasTitle: "Afegeix al teu Ritual",
      extrasSubtitle: "Express Express",

      hairRituals: {
        title: "Rituals Capil·lars Orgànics",
        desc: "Recupera la força i salut del teu cabell amb barrets i plantes.",
        list: [
          {
            id: "ritual-detox",
            title: "Ritual Detox",
            desc: "Neteja profunda amb plantes medicinals. Específic per a dermatitis, descamació, caspa o excés de greix.",
            extra: "Inclou massatge facial o de peus durant l'exposició.",
            duration: "50 min",
            price: "85€",
          },
          {
            id: "ritual-fuerte",
            title: "Ritual Sempre Fort i Vital",
            desc: "Força i vitalitat amb plantes ayurvèdiques. Per a cabells febles, sense cos i mancats de vida.",
            extra: "Connecta amb la pau i harmonia. Inclou massatge facial o de peus.",
            duration: "60 min",
            price: "95€",
          },
          {
            id: "ritual-rizos",
            title: "Ritual Rissos Perfectes",
            desc: "Recupera l'estructura i flexibilitat del rís mitjançant herbes específiques que retornen la vida al cabell.",
            extra: "Inclou massatge facial o de peus.",
            duration: "50 min",
            price: "85€",
          },
          {
            id: "ritual-pindas",
            title: "Ritual Herbal amb Pindes (Signature)",
            desc: "L'experiència suprema de desconnexió. Massatge corporal amb oli de sèsam i pindes herbals calentes en punts marma.",
            extra: "Equilibri física i mental. Inclou massatge cranial i rentat.",
            duration: "75 min",
            price: "150€",
            isHighlight: true,
          },
        ],
      },

      facialRituals: {
        title: "Rituals Facials de Llum",
        desc: "Tractaments holístics per retornar la joventut i elasticitat a la pell.",
        list: [
          {
            id: "luz-otono",
            title: "Ritual Llum de Tardor (Lifting)",
            desc: "Lifting facial natural amb acupuntura. Retorna la llum i aparença juvenil perduda.",
            options: [
              { name: "Nom Facial", time: "75 min", price: "85€" },
              {
                name: "Amb Rentat + Massatge Capil·lar",
                time: "90 min",
                price: "125€",
              },
            ],
          },
          {
            id: "luz-manana",
            title: "Ritual Llum del Matí",
            desc: "Higiene facial profunda. Una pell saludable sempre comença amb una bona neteja.",
            options: [
              { name: "Nom Facial", time: "75 min", price: "75€" },
              {
                name: "Amb Rentat + Massatge Capil·lar",
                time: "90 min",
                price: "115€",
              },
            ],
          },
          {
            id: "luz-interior",
            title: "Ritual Llum Interior (Kobido)",
            desc: "Massatge facial Kobido per retornar l'elasticitat i millorar la qualitat de la pell.",
            options: [
              { name: "Nom Facial", time: "60 min", price: "70€" },
              {
                name: "Amb Rentat + Massatge Capil·lar",
                time: "75 min",
                price: "110€",
              },
            ],
          },
          {
            id: "luz-mar",
            title: "Ritual Llum del Mar",
            desc: "Hidratació i vitalitat per a pells sensibles o deshidratades.",
            options: [
              { name: "Nom Facial", time: "60 min", price: "65€" },
              {
                name: "Amb Rentat + Massatge Capil·lar",
                time: "75 min",
                price: "105€",
              },
            ],
          },
        ],
      },

      extras: [
        { title: "Rentat Spa", duration: "15 min", price: "35€" },
        {
          title: "Massatge Facial + Rentat Spa",
          duration: "45 min",
          price: "50€",
        },
      ],
    },
    services: {
      title: "Terapies d'Alta Gamma",
      spa: "Rituals Facials & Pindes",
      spaDesc:
        "Experiència Signature (150€). Pindes herbals, lifting facial i desconnexió absoluta.",
      capillary: "Teràpia Capil·lar d'Oxitocina",
      capillaryDesc: "Diagnòstic profund i recuperació molecular.",
    },
    cta: {
      helpTitle: "Necessites ajuda per triar?",
      ritualWaiting: "El teu ritual t'espera",
      helpDesc:
        "El nostre equip t'ajudarà a trobar el tractament perfecte segons les necessitats del teu cabell i pell. La primera consulta és gratuïta.",
      bookFree: "Reservar Consultes Gratuïta",
      filosofiaLink: "Conèixer la nostra filosofia",
    },
    capillaryPage: {
      title: "Teràpia d'Oxitocina",
      subtitle: "Enginyeria Natural per al Cabell",
      desc: "El nostre servei High Ticket per excel·lència. Un protocol clínic-orgànic per recuperar cabells danyats, alopècies o dessequilibris del cuir ciliat.",
      diagnosisTitle: "El Diagnòstic",
      diagnosisDesc:
        "Analitzem el teu bulb capil·lar amb microcàmera per dissenyar la teva recepta personalitzada.",
      steps: [
        {
          title: "Neteja",
          desc: "Dessintoxicació del fol·licle amb barrets volcànics.",
        },
        {
          title: "Nutrició",
          desc: "Injecció d'actius botànics i proteïnes vegetals.",
        },
        {
          title: "Segellat",
          desc: "Tancament de cutícula amb olis ozonitzats i llum LED.",
        },
      ],
      solutionsTitle: "Solucions Terapèutiques",
      solutionsDesc:
        "Protocols específics per a patologies del cuir ciliat.",
      solutions: [
        {
          title: "Ritual Detox",
          problem: "Caspa · Greix · Dermatitis",
          desc: "Neteja profunda amb plantes medicinals dessintoxicants.",
          price: "85€",
        },
        {
          title: "Ritual Sempre Fort",
          problem: "Caiguda · Feblesa · Afinament",
          desc: "Força i vitalitat amb plantes ayurvèdiques. Frena la caiguda.",
          price: "95€",
        },
      ],
      cta: "Sol·licitar Diagnòstic",
      ctaRecoveryTitle: "Recupera la memòria vital del teu cabell",
      ctaRecoveryDesc: "Aquest tractament requereix cita prèvia i valoració dels nostres especialistes a C/ Provença 213.",
      ctaRecoveryBtn: "Reservar Valoració",
      scheduleRitual: "Agendar aquest ritual",
    },
    philosophy: {
      heroTitle: "L'Origen",
      heroSubtitle: "On l'alquimia troba el silenci.",
      manifesto:
        "No creiem en la bellesa fabricades. Creiem en la bellesa revelada. Terra Santa Eulalia no és una marca, és un retorn a la memòria de la terra.",
      founderTitle: "Mans que escolten",
      founderDesc:
        "Manolo Díaz no tallar cabell, escup energia. Després d'anys observant com la química apagava l'ànima del cabell, va decidir tornar al barret, a l'arrel, a l'aigua.",
      values: [
        { title: "Terra", desc: "Argiles vives que purifiquen sense agreujar." },
        { title: "Aigua", desc: "La hidratació real que flueix des de dins." },
        { title: "Temps", desc: "L'ingredient més luxós: l'espera." },
      ],
      processTitle: "La Botiga Viva",
      processDesc:
        "Les nostres barreges es preparen al moment. Sense conservants que dormin la planta. És cosmètica viva per a gent viva.",
      cta: "Vine a Sentir-ho",
    },
    productsList: [],
    faqList: [
      {
        q: "Com recullo la meva comanda?",
        a: "En finalitzar la compra, selecciona 'Recollida a la Botiga'. Estem a C/ Provença 213, Barcelona.",
      },
      {
        q: "Els productes caduquen?",
        a: "En ser orgànics i sense conservants agressius, recomanem usar-los en 6-12 mesos desprès de l'obertura.",
      },
      {
        q: "Necessito diagnòstic?",
        a: "Per a tractaments High Ticket (Teràpia Oxitocina), sí. Pots reservar cita a la nostra web.",
      },
      {
        q: "Són aptes per a embarassades?",
        a: "La majoria sí, però consulta la fitxa tècnica de cada planta o consulta'ns.",
      },
    ],
  },
};

// Fallback para productos en EN y CA (compartimos la lista completa de ES)
translations.en.productsList = translations.es.productsList;
translations.ca.productsList = translations.es.productsList;
