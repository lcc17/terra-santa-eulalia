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
      readMore: "Solicitar información",
      viewMore: "Ver Catálogo Completo",
      diyTitle: "Hazlo tú mismo",
      visitUs: "Visítanos en C/ Provença 213",
      faqTitle: "Preguntas Recurrentes",
    },
    cards: {
      productsTitle: "NUESTROS\nPRODUCTOS",
      productsSub: "SELECCIÓ NATURAL & ORGÀNICA",
      treatmentsTitle: "NUESTROS\nTRATAMIENTOS",
      treatmentsSub: "ESPACIO BOTÁNICO",
      therapyTitle: "TERAPIA CAPILAR\nORGÁNICA",
      therapySub: "CLÍNICA CAPILAR",
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
      email: "hola@terrasantaeulalia.com",
      phone: "+34 93 518 42 36",
    },
    treatmentsPage: {
      title: "Rituales Terra",
      subtitle: "Salud Capilar y Facial Orgánica",
      desc: "Tratamientos botánicos diseñados para recuperar el equilibrio. Sin prisas, con plantas medicinales y técnicas ancestrales.",
      cta: "Reservar Cita",
      whatsappMessage:
        "Hola, me interesa reservar un ritual de Terra Santa Eulalia",
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
            desc: "Este es un tratamiento capilar en polvo de la marca Terra Santa Eulàlia, formulado con una mezcla de plantas de la medicina tradicional ayurvédica. Es un producto de cosmética natural, libre de sulfratos, siliconas, perfumes sintéticos, colorantes artificiales, derivados del petróleo. Ingredientes de origen animal y conservantes irritantes..",
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
        { title: "Lavado Botánico", duration: "15 min", price: "35€" },
        {
          title: "Masaje Facial + Lavado Botánico",
          duration: "45 min",
          price: "50€",
        },
      ],
    },
    services: {
      title: "Terapias de Alta Gamma",
      spa: "Rituales Faciales & Pindas",
      spaDesc:
        "Experiencia Signature (150€). Pindas herbales, lifting facial y déconexión absoluta.",
      capillary: "Terapia Capilar Avanzada",
      capillaryDesc: "Diagnóstico botànico y recuperación molecular.",
      badge: "Signature Experience",
    },
    socialProof: {
      testimonial:
        "Un antes y un después para mi cabello. La terapia de oxitocina no es solo estética, es salud real.",
      author: "Laura G., Cliente Verificada",
    },
    whatsapp: {
      reserveButton: "Reservar Cita",
      defaultMessage:
        "Hola, me gustaría información sobre Terra Santa Eulalia — Terapia Capilar Avanzada y Bienestar Orgánico.",
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
      badge: "Servicio High Ticket",
      title: "Terapia Capilar Orgánica",
      subtitle: "Diagnóstico Botánico & Recuperación Molecular",
      desc: "Protocolo clínico-orgánico para recuperar cabellos dañados, alopecias o desequilibrios del cuero cabelludo. Un enfoque científico y completamente natural.",
      diagnosisTitle: "Estudio Dermatológico Capilar",
      diagnosisDesc:
        "Analizamos tu bulbo capilar con microcámara para diseñar tu receta personalizada.",
      vipServicesTitle: "Diagnóstico Profesional",
      vipServicesDesc: "Tecnología avanzada meets botànica:",
      vipServices: [
        {
          title: "Estudio Dermatológico con Microcámara",
          desc: "Observación ampliada del cuero cabelludo y bulbo capilar. Identificamos dermatitis, descamación, exceso de sebo, folliculitis y desequilibrios microscópicos.",
          icon: "Microscope",
        },
        {
          title: "Escáner Bioeléctrico Capilar",
          desc: "Medición de los niveles de hidratación, sebo y densidad capilar mediante tecnología bioeléctrica. Informe completo en 15 minutos.",
          icon: "Activity",
        },
      ],
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
      ritualsTitle: "Rituales Capilares Orgánicos",
      ritualsDesc:
        "Tratamientos específicos para cada necesidad. Protocolos botânicos de alta eficacia.",
      ritualsList: [
        {
          id: "ritual-detox",
          title: "Ritual Detox",
          desc: "Limpieza profunda con plantas medicinales. Específico para dermatitis, descamación, caspa o exceso de grasa.",
          duration: "50 min",
          price: "85€",
        },
        {
          id: "ritual-fuerte",
          title: "Ritual Siempre Fuerte",
          desc: "Fuerza y vitalidad con plantas ayurvédicas. Para cabellos débiles, sin cuerpo y faltos de vida.",
          duration: "60 min",
          price: "95€",
        },
        {
          id: "ritual-rizos",
          title: "Ritual Rizos Perfectos",
          desc: "Recupera la estructura y flexibilidad del rizo mediante hierbas específicas que devuelven la vida al cabello.",
          duration: "50 min",
          price: "85€",
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
      ctaRecoveryDesc:
        "Este tratamiento requiere cita previa y valoración de nuestros especialistas en C/ Provença 213.",
      ctaRecoveryBtn: "Reservar Diagnóstico",
      scheduleRitual: "Agendar este ritual",
      whatsappCta: "Reservar Diagnóstico vía WhatsApp",
      whatsappMessage:
        "Hola, me interesa reservar un diagnóstico de Terapia Capilar Avanzada en Terra Santa Eulalia.",
    },
    philosophy: {
      heroTitle: "El Origen",
      heroSubtitle: "Donde la alquimia encuentra el silencio.",
      manifesto:
        "No creemos en la belleza fabricada. Creemos en la belleza revelada. Terra Santa Eulalia no es una marca, es un retorno a la memoria de la tierra.",
      founderTitle: "Manos que escuchan",
      founderDesc:
        "Después de muchos años dedicados a la peluquería consciente, en Manolo Días Green Zone y Manolo Días Healthy Salón creamos nuestra propia marca, Terra Santa Eulàlia, enfocada en la terapia capilar natural, saludable y energética, creada desde la experiencia, el respeto por la naturaleza y el bienestar profundo del cabello y el cuero cabelludo.\n\nEn Terra Santa Eulàlia cada tratamiento es único y totalmente personalizado, porque entendemos que cada cabello, cada cuero cabelludo y cada persona necesitan un cuidado diferente.\n\nPor eso, invitamos a cada cliente a ponerse en contacto co nosotros para poder valorar de forma consciente qué tratamiento necesita realmente y acompañarle desde una atención cercana y personalizada.",
      values: [
        { title: "Tierra", desc: "Arcillas vivas que purifican sin agresir." },
        { title: "Agua", desc: "La hidratación real que fluye desde dentro." },
        { title: "Tiempo", desc: "El ingrediente más luxoso: la espera." },
      ],
      processTitle: "La Botica Viva",
      processDesc:
        "Nuestras mezclas se preparan al momento. Sin conservantes que duerman la planta. Es cosmética viva para gente viva.",
      cta: "Ven a Sentirlo",
      laiaBio: {
        title: "Laia Salomó",
        role: "Fundadora & Director Creativo",
        inspiration:
          "Me inspiró observar cómo muchas personas buscan verse bien, pero también necesitan sentirse en paz, recuperar su energía y reconectar consigo mismas. Comprendí que la belleza verdadera aparece cuando una persona se siente cuidada, escuchada y en armonía con su esencia.",
        nature:
          "También me inspiró la naturaleza, su sabiduría, sus ritmos y su capacidad constante de renovarse. La tierra nos enseña que todo florece cuando recibe el cuidado adecuado. Desde esa visión nace Terra Santa Eulalia: como un lugar donde cada persona pueda renovarse desde dentro hacia fuera.",
        vision:
          "Quise crear un espacio diferente, donde la peluquería y el bienestar caminaran juntos, donde cada gesto tuviera intención, donde el respeto por la salud y por el entorno fueran fundamentales, y donde la energía que se transmite fuera tan importante como el resultado final. La terapia Organica Capilar en Terra Santa Eulalia es el reflejo.",
        mission:
          "Terra Santa Eulalia es el reflejo de mi misión de vida: ayudar a las personas a descubrir su belleza natural, elevar su energía vital y recordar que cuidarse también es una forma de amor propio. Aquí no solo transformamos imagen, acompañamos procesos, despertamos confianza y sembramos bienestar.",
      },
    },

    productsList: [
      // --- LÍNEA PLANTAS (TINTES Y TRATAMIENTOS) ---
      {
        id: "planta-fortalecedora",
        name: "Planta Fortalecedora y Brillante",
        category: "Tratamiento en Polvo",
        type: "Cassia Obovata",
        price: 28,
        desc: "Conocida como 'Henna Neutra'. No tiñe, pero aporta brillo y ayuda a fortalecer la fibra capilar.",
        ingredients: "Cassia Obovata Leaf Powder.",
        usage:
          "Mezclar 2 o 3 cucharadas de la planta con agua tibia hasta formar una pasta cremosa. Opcionalmente, añadir 3-4 cucharaditas de un aceite vegetal prensado en frío para nutrir el cabello con más vitaminas. Dejarlo enfriar y aplicarlo desde el cuero cabelludo hasta la punta del cabello. Se recomienda dejarlo actuar durante aproximadamente 1 hora antes de lavar con un champú suave.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_planta_fortalecedora_brillante.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-rubio-luminoso",
        name: "Planta Rubio Luminoso",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 28,
        desc: "Mezcla de plantas para avivar reflejos dorados en cabellos claros y aportar tratamiento.",
        ingredients:
          "Cassia Italica Leaf Powder, Lawsonia Inermis Powder, Chamomilla Recutita Flower Powder, Curcuma Longa Root Powder.",
        usage:
          "En un bol grande, mezclar el polvo gradualmente con agua tibia (aproximadamente a 30 °C) hasta obtener una consistencia similar a la del yogur. Aplicar inmediatamente sobre el cabello limpio, seco y perfectamente desenredado, desde la raíz hasta las puntas. Dejar actuar entre 20 y 40 minutos, según la intensidad de color deseada. A continuación, aclarar y lavar con un champú suave.",
        precautions:
          "Solo para uso externo. Evitar el contacto directo con los ojos. Este producto no aclara el cabello, ya que no contiene oxidantes ni agentes blanqueadores químicos. Se recomienda realizar una prueba de sensibilidad sobre la piel antes de su uso para descartar posibles reacciones alérgicas. El resultado puede variar según el color base y la textura de cada cabello. Conservar en un lugar fresco y seco, protegido de la luz solar.",
        img: "/images/products/terra_santa_planta_rubio_luminoso.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-rubio-miel",
        name: "Planta Rubio Miel",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 28,
        desc: "Matiz cálido y dulce para cabellos rubios o castaños claros que buscan calidez.",
        ingredients:
          "Cassia Italica Leaf Powder, Lawsonia Inermis Powder, Indigofera Tinctoria Leaf Powder, Aloe Barbadensis Leaf Powder, Emblica Officinalis Fruit Powder, Ziziphus Jujuba Powder.",
        usage:
          "En un bol grande mezclar las plantas con agua tibia a unos 30ºC poco a poco hasta que la mezcla tenga la consistencia del yogur. Aplicar inmediatamente sobre el cabello limpio, seco y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 40–50 minutos (dependiendo de la intensidad de color que se desee) antes de lavar con agua.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_planta_rubio_miel.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-puro-cobre",
        name: "Planta Puro Cobre",
        category: "Coloración Vegetal",
        type: "100% Orgánico",
        price: 28,
        desc: "Henna pura de alta calidad. Aporta un color cobrizo intenso, fuerza y un brillo espectacular.",
        ingredients: "Lawsonia Inermis Leaf Powder.",
        usage:
          "En un bol grande mezclar las plantas con agua tibia a unos 50–70ºC poco a poco hasta que la mezcla tenga la consistencia del yogur. Aplicar sobre el cabello limpio, seco y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 60–90 minutos (dependiendo de la intensidad de color que se desee) antes de lavar solo con un champú suave.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_planta_puro_cobre.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-marron-dorado",
        name: "Planta Marrón Dorado",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 28,
        desc: "Mezcla vegetal para conseguir tonos marrón dorado cálidos y naturales. Aporta matices de color, brillo y cuerpo al cabello.",
        ingredients:
          "Lawsonia Intermis Powder, Indigofera Tinctoria Leaf Powder, Juglans Regia Shell Powder, Emblica Officinalis Fruit Powder, Ziziphus Jujuba Powder, Aloe Barbadenis Leaf Powder, Curcuma Longa Root Powder.",
        usage:
          "En un bol grande mezclar las plantas con agua tibia a unos 50–70ºC poco a poco hasta que la mezcla tenga la consistencia del yogur. Aplicar sobre el cabello limpio, seco y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 60–90 minutos (dependiendo de la intensidad de color que se desee) antes de lavar solo con agua. Para retener el color, es importante esperar un mínimo de 24 horas antes de lavar el cabello con un champú suave.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_planta_marron_dorado.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-castana",
        name: "Planta Castaña",
        category: "Coloración Vegetal",
        type: "Mezcla Ayurvédica",
        price: 28,
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
        price: 28,
        desc: "Profundidad y cobertura para cabellos castaños. Aporta cuerpo y oscurece tonos claros.",
        ingredients:
          "Indigofera Tinctoria Leaf Powder, Lawsonia Inermis Powder, Emblica Officinalis Fruit Powder.",
        usage:
          "En un bol grande mezclar las plantas con agua tibia a unos 50–70ºC poco a poco hasta que la mezcla tenga la consistencia del yogur. Aplicar sobre el cabello limpio, seco y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 60–90 minutos (dependiendo de la intensidad de color que se desee) antes de lavar solo con agua. Para retener el color, es importante esperar un mínimo de 24 horas antes de lavar el cabello con un champú suave.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_planta_castaña_oscuro.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "planta-indigo",
        name: "Planta Índigo",
        category: "Coloración Vegetal",
        type: "100% Orgánico",
        price: 28,
        desc: "Pigmento puro vegetal para conseguir tonos oscuros profundos y negros azulados en combinación con otras plantas.",
        ingredients: "Indigofera Tinctoria Leaf Powder (Índigo puro).",
        usage:
          "En un bol grande mezclar las plantas con agua tibia a unos 50 – 70ºC poco a poco hasta que la mezcla tenga la consistencia del yogur. Aplicar sobre el cabello limpio, seco y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 60 – 90 minutos (dependiendo de la intensidad de color que se desee) antes de lavar solo con agua. Para retener el color, es importante esperar un mínimo de 12 horas antes de lavar el cabello con un champú suave. Mezclar con agua a 50ºC. Usar solo o en dos pasos (primero henna, luego índigo) para cobertura de canas en negro. Tiempo: 60-90 min.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_planta_indigo.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
        isNew: false,
      },
      // --- LÍNEA TRATAMIENTOS GREEN (ESPECÍFICOS) ---
      {
        id: "green-detox",
        name: "Green Detox",
        category: "Tratamiento Específico",
        type: "Purificante",
        price: 32.0,
        desc: "Tratamiento capilar natural y orgánico a base de plantas para purificar y cuidar el cabello y cuero cabelludo.",
        ingredients:
          "Vigna Radiata Seed Powder, Ziziphus Jujuba Leaf Powder, Emblica Officinalis Fruit Powder, Azadirachta Indica Leaf Powder, Rubia Cordifolia Root Powder, Glycyrrhiza Glabra Root Powder.",
        usage:
          "Mezclar con agua tibia hasta formar una pasta cremosa. Opcionalmente, añadir 2-3 cucharaditas de un aceite capilar orgánico para aportar hidratación al cabello. Aplicar sobre el cabello limpio y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 30–45 minutos antes de lavar solo con agua.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
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
        desc: "Tratamiento capilar natural y orgánico para revitalizar el cabello, aportando nutrición, brillo y vitalidad.",
        ingredients:
          "Emblica Officinalis Fruit Powder, Bacopa Monnieri Leaf Powder, Trigonella Foenum-Graecum Seed Powder, Cassia Italica Leaf Powder, Acacia Concinna Fruit Powder, Citrus Sinensis Fruit Powder, Rose Damascena Flower Powder.",
        usage:
          "Mezclar con agua tibia hasta formar una pasta cremosa. Opcionalmente, añadir 2-3 cucharaditas de un aceite capilar orgánico para aportar hidratación al cabello. Aplicar sobre el cabello limpio y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 30–45 minutos antes de lavar solo con agua.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_tratamiento_capilar_green_vitality.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "green-curly",
        name: "Green Curly",
        category: "Tratamiento Específico",
        type: "Rizos Definidos",
        price: 34.0,
        desc: "Tratamiento capilar natural y orgánico para cuidar y definir los rizos, aportando hidratación, suavidad y vitalidad al cabello.",
        ingredients:
          "Bacopa Monnieri Leaf Powder, Emblica Officinalis Fruit Powder, Moringa Oleifera Leaf Powder, Acacia Concinna Fruit Powder, Nymphaea Lotus Root Powder, Aloe Barbadensis Leaf Powder, Astragalus Gummifer Gum Powder.",
        usage:
          "Mezclar con agua tibia hasta formar una pasta cremosa. Opcionalmente, añadir 2-3 cucharaditas de un aceite capilar orgánico para aportar hidratación al cabello. Aplicar sobre el cabello limpio y bien desenredado, desde la raíz hasta la punta del cabello, y esperar entre 30–45 minutos antes de lavar solo con agua.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_tratamiento_capilar_green_curly.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "magical-green-curly",
        name: "Magical Green Curly",
        category: "Tratamiento Específico",
        type: "Rizos Pro",
        price: 38.0,
        desc: "Tratamiento capilar natural y orgánico para definir y cuidar los rizos, aportando hidratación y una textura más manejable.",
        ingredients: "Astragalus Gummifer Gum Powder.",
        usage:
          "Mezclar 5 gr de producto con unos 200 ml de agua tibia hasta formar una pasta cremosa. Aplicar sobre el cabello limpio y mojado, y distribuir bien. Secar con secador o al aire.",
        precautions:
          "Sólo para uso externo. Evitar el contacto directo con los ojos. El producto no aclara el cabello ya que no contiene oxidantes ni químicos blanqueadores. Se recomienda realizar una prueba sobre la piel para asegurarse de que no existen alergias a este producto. El resultado puede variar de un cabello a otro dependiendo del color base y textura de cada cabello. Guardar en lugar seco y fresco, protegido de la luz solar.",
        img: "/images/products/terra_santa_tratamiento_capilar_magical_green_curly.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
        isNew: true,
      },

      // --- LÍNEA CHAMPÚS Y LAVADO ---
      {
        id: "shampoo-gratitud",
        name: "Champú Gratitud",
        category: "Higiene Capilar",
        type: "Uso Frecuente",
        price: 24.0,
        desc: "Champú natural y orgánico para todo tipo de cabello. Limpia suavemente mientras hidrata y ayuda a equilibrar el cuero cabelludo.",
        ingredients:
          "Aqua, Decyl Glucoside, Lauryl Glucoside, Disodium Cocoamphoacetate, Lavandula Hybrida Grosso Herb Oil*, Argania Spinosa Kernel Oil*, Erythritol, Inulin, Aloe Barbadensis Leaf Juice*, Sodium Cocoyl Hydrolyzed Wheat Protein, Glycerin, Xanthan Gum, Benzyl Alcohol, Coco-Glucoside, Glyceryl Oleate, Potassium Sorbate, Sodium Benzoate, Panthenol, Citric Acid, Tocopherol, Alcohol, Limonene**, Linalool**, Malus Pumila Bach Flower Extract, Scleranthus Annus Bach Flower Extract, Juglans Regia Bach Flower Extract. (*Orgánico / **De aceites esenciales puros)",
        usage:
          "Masajear suavemente sobre el cabello húmedo. Dejar actuar unos instantes y aclarar. Si es necesario, repetir una segunda aplicación con menos cantidad.",
        precautions:
          "Uso externo. No ingerir. Evitar el contacto con los ojos.",
        img: "/images/products/terra_santa_shampo_gratitud_cabello_todo_tipo.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "shampoo-abundancia",
        name: "Champú Abundancia",
        category: "Higiene Capilar",
        type: "Volumen y Fuerza",
        price: 26.0,
        desc: "Champú natural y orgánico para fortalecer y cuidar el cabello. Aporta fuerza, nutrición y ayuda a mejorar la apariencia de densidad capilar.",
        ingredients:
          "Aqua, Decyl Glucoside, Lauryl Glucoside, Disodium Cocoamphoacetate, Limonene, Citrus Sinensis Peel Oil Expressed*, Glycerin, Erythritol, Inulin, Helianthus Annuus Seed Oil, Sodium Cocoyl Hydrolyzed Wheat Protein, Alcohol, Xanthan Gum, Benzyl Alcohol, Coco-Glucoside, Emblica Officinalis Fruit Powder*, Glyceryl Oleate, Citrus Paradisii Peel Oil, Eucalyptus Globulus Leaf Oil*, Panthenol, Potassium Sorbate, Sodium Benzoate, Equisetum Arvense Extract*, Lepidium Meyenii Root Extract, Rosmarinus Officinalis Extract*, Salvia Officinalis Leaf Extract*, Urtica Dioica Leaf Extract*, Citric Acid, Citral, Citronellol, Linalool, Tocopherol, Carpinus Betulus Flower Extract, Larix Decidua Flower Extract, Malus Sylvestris Flower Extract, Olea Europaea Flower Extract. (*Orgánico / ^De aceites esenciales puros)",
        usage:
          "Masajear suavemente sobre el cabello húmedo. Dejar actuar unos instantes y aclarar. Si es necesario, repetir una segunda aplicación con menos cantidad.",
        precautions:
          "Uso externo. No ingerir. Evitar el contacto con los ojos.",
        img: "/images/products/terra_santa_shampoo_abundancia_todo_tipo_cabello.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },

      // --- LÍNEA FINALIZADO Y CUERPO ---
      {
        id: "acondicionador-sin-aclarado",
        name: "Acondicionador sin aclarado",
        category: "Hidratación y Cuerpo",
        type: "Leave-In",
        price: 25.0,
        desc: "Acondicionador natural y orgánico sin aclarado que hidrata, facilita el peinado y ayuda a minimizar el encrespamiento.",
        ingredients:
          "Aqua, Urtica Dioica Leaf Extract*, Helianthus Annuus Seed Oil, Cocos Nucifera Oil*, Inulin, Glycerin, Citrus Sinensis Peel Oil Expressed*, Lavandula Hybrida Grosso Herb Oil*, Limonene^, Behenamidopropyldimethylamine, Benzyl Alcohol, Emblica Officinalis Fruit Powder, Potassium Sorbate, Sodium Benzoate, Litsea Cubeba Fruit Oil*, Biosaccharide Gum-1, Porphyra Umbilicalis Extract, Sodium Levulinate, Caesalpinia Spinosa Gum, Glyceryl Caprylate, Sodium Anisate, Citral^, Citronellol^, Linalool^, Farnesol^, Geraniol^, Alcohol, Leuconostoc/Radish Root Ferment Filtrate, Carpinus Betulus Flower Extract, Ilex Aquifolium Flower Extract, Olea Europaea Flower Extract, Scleranthus Annuus Flower Extract, Gentiana Amarella Flower Extract, Juglans Regia Flower Extract, Prunus Cerasifera Flower Extract. (*Orgánico / ^De aceites esenciales puros)",
        usage:
          "Sobre el cabello húmedo recién lavado, aplicar el acondicionador con el spray por todo el cabello y distribuir con las manos para cubrir toda la superficie. Se puede secar el cabello después si se desea.",
        precautions:
          "Uso externo. No ingerir. Evitar el contacto con los ojos.",
        img: "/images/products/terra_santa_acondicionador_sin_aclarado.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "serum-en-aceite",
        name: "Serum en Aceite",
        category: "Tratamiento Capilar",
        type: "Nutrición y Reparación",
        price: 32.0,
        desc: "Mezcla de aceites vegetales vírgenes y orgánicos que nutre, aporta brillo y ayuda a fortalecer el cabello desde la raíz hasta las puntas. Ideal para cabellos secos, encrespados y rizos.",
        ingredients:
          "Cocos Nucifera Oil*, Ricinus Communis Seed Oil*, Helianthus Annuus Seed Oil*, Sesamum Indicum Seed Oil*, Argania Spinosa Kernel Oil*, Emblica Officinalis Powder, Rosmarinus Officinalis Leaf Oil*, Lavandula Hybrida Grosso Herb Oil*, Linalool^, Eucalyptus Globulus Leaf/Stem Oil*, Mentha Arvensis Herb Oil*, Thymus Zygis Herb Oil*, Cupressus Sempervirens Leaf/Nut/Stem Oil, Limonene^, Geraniol^, Coumarin^, Eugenol^, Citral^, Alcohol, Olea Europaea Flower Extract, Centaurium Umbellatum Flower Extract, Carpinus Betulus Flower Extract, Scleranthus Annus Flower Extract. (*Orgánico / ^De aceites esenciales puros)",
        usage:
          "Puntas secas o abiertas: aplicar 2 o 3 gotas en las puntas, masajear y dejar actuar unos 20 minutos. Se puede lavar después o no. Cabello seco o encrespado: aplicar 3-4 gotas en las manos, frotar para calentar el serum y aplicar suavemente sobre todo el cabello hasta 2 veces al día. Cuero cabelludo seco y caída capilar: masajear unas gotas sobre el cuero cabelludo con movimientos circulares, dejar actuar mínimo 30 minutos o tantas horas como se desee y lavar después. Rizos: aplicar unas gotas en las manos, frotar y presionar los rizos de abajo hacia arriba para definirlos suavemente. No aclarar.",
        precautions:
          "Uso externo. No ingerir. Evitar el contacto con los ojos.",
        img: "/images/products/terra_santa_serum_en_aceite.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "locion-capilar-aloe",
        name: "Loción Capilar Aloe",
        category: "Hidratación y Cuerpo",
        type: "Calmante",
        price: 28.0,
        desc: "Loción capilar para todo tipo de cabellos. Fortalece, hidrata y ayuda a eliminar impurezas del cabello y cuero cabelludo.",
        ingredients:
          "Aloe Barbadensis Leaf Juice*, Cannabis Sativa Seed Oil*, Benzyl Alcohol, Simmondsia Chinesis Seed Oil*, Xanthan Gum, Rosmarinus Officinalis Leaf Oil*, Thymus Zygis Oil*, Ascorbic Acid, Dehydroacetic Acid, Sodium Metabisulfite, Limonene**, Linalool**, Pinene*, Beta Caryophyllene**, Camphor**, Alfa Terpineol*. (*Ingrediente ecológico certificado / **Ingrediente natural contenido en los aceites esenciales)",
        usage:
          "Aplicar una pequeña cantidad en la palma de la mano, frotar en ambas manos y aplicar en el cuero cabelludo, dando un suave y penetrante masaje. Se puede añadir más cantidad y aplicar por el resto del cabello. Dejar actuar unos veinte minutos y después lavar.",
        precautions:
          "Para todo tipo de cabellos. Evitar el contacto con los ojos. Uso externo.",
        img: "/images/products/terra_santa_locion_capilar_aloe.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "locion-aloe-vera-puro",
        name: "Loción Aloe Vera Puro",
        category: "Hidratación y Cuerpo",
        type: "Multiusos",
        price: 20.0,
        desc: "Loción de Aloe Vera elaborada con hojas frescas de Aloe de Almería. Hidratante y regeneradora, ayuda a aumentar la elasticidad y firmeza de la piel.",
        ingredients:
          "Aloe Barbadensis Leaf Juice*, Xanthan Gum, Benzyl Alcohol, Ascorbic Acid, Dehydroacetic Acid, Sodium Metabisulfite. (*Ingrediente ecológico certificado)",
        usage: "Aplicar sobre la piel seca dando un suave masaje.",
        precautions:
          "Una vez abierto mantener en lugar fresco y oscuro. Indicado para todo tipo de pieles.",
        img: "/images/products/terra_santa_locion_aloe_vera_puro.PNG",
        video: "https://www.youtube.com/watch?v=casXEgFpFRQ",
      },
      {
        id: "leche-corporal",
        name: "Leche Corporal Regeneradora",
        category: "Hidratación y Cuerpo",
        type: "Body Milk",
        price: 29.0,
        desc: "Leche corporal regeneradora con Aloe de Almería, Rosa Mosqueta y aceites vegetales ecológicos. Hidrata, nutre y ayuda a cuidar las zonas dañadas de la piel.",
        ingredients:
          "Aloe Barbadensis Leaf Juice*, Rosa Canina Seed Oil*, Lavandula Angustifolia Flower Water*, Glycine Max Oil*, Cannabis Sativa Seed Oil*, Glyceryl Stearate Citrate, Benzyl Alcohol, Lavandula Angustifolia Oil*, Xanthan Gum, Ascorbic Acid, Dehydroacetic Acid, Linalyl Acetate**, Linalool**, Terpineol**, Geraniol**, Limonene**. (*Ingrediente ecológico certificado / **Ingrediente natural contenido en los aceites esenciales)",
        usage:
          "Aplicar sobre la piel seca dando un suave masaje. Uso diario como hidratante corporal.",
        precautions:
          "Una vez abierto mantener en lugar fresco y oscuro. Indicado para zonas dañadas de la piel. Se puede usar como aftersun y después de la depilación.",
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
    legal: {
      // Cookies banner
      bannerTitle: "Tu privacidad importa",
      bannerText:
        "Usamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. Consulta nuestra",
      cookiesPolicyLink: "Política de Cookies",
      acceptAll: "Aceptar todo",
      rejectAll: "Rechazar",
      configure: "Configurar",
      // Cookies modal
      modalTitle: "Configuración de Cookies",
      modalDesc:
        "Elige qué tipo de cookies aceptas. Las cookies técnicas son imprescindibles para el funcionamiento del sitio.",
      technicalLabel: "Técnicas",
      technicalDesc:
        "Necesarias para el funcionamiento básico (idioma, sesión).",
      analyticsLabel: "Analíticas",
      analyticsDesc: "Google Analytics — para entender cómo se usa el sitio.",
      marketingLabel: "Marketing",
      marketingDesc: "Permiten mostrar contenido relevante en otros sitios.",
      functionalLabel: "Funcionales",
      functionalDesc: "Recuerdan tus preferencias (idioma, vistas).",
      required: "Obligatorias",
      saveSettings: "Guardar preferencias",
      // Legal index
      indexTitle: "Información Legal",
      indexSubtitle: "Documentación legal y políticas de Terra Santa Eulalia",
      cookiesTitle: "Política de Cookies",
      cookiesDesc: "Cómo usamos las cookies en nuestra web.",
      privacyTitle: "Política de Privacidad",
      privacyDesc: "Cómo tratamos tus datos personales (RGPD).",
      termsTitle: "Términos y Condiciones",
      termsDesc: "Condiciones de uso del sitio web.",
      noticeTitle: "Aviso Legal",
      noticeDesc: "Información legal según LSSI-CE.",
      // Common
      lastUpdated: "Última actualización",
      backHome: "Volver al inicio",
      readMore: "Leer más",
    },
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
      readMore: "Request information",
      viewMore: "View Full Catalog",
      diyTitle: "Do It Yourself",
      visitUs: "Visit us at C/ Provença 213",
      faqTitle: "Frequent Questions",
    },
    cards: {
      productsTitle: "OUR\nPRODUCTS",
      productsSub: "NATURAL & ORGANIC SELECTION",
      treatmentsTitle: "OUR\nTREATMENTS",
      treatmentsSub: "BOTANICAL SPACE",
      therapyTitle: "ORGANIC\nCAPILLARY THERAPY",
      therapySub: "HAIR CLINIC",
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
      email: "hola@terrasantaeulalia.com",
      phone: "+34 93 518 42 36",
    },
    treatmentsPage: {
      title: "Terra Rituals",
      subtitle: "Organic Hair & Facial Health",
      desc: "Botanical treatments designed to restore balance. No rush, with medicinal plants and ancestral techniques.",
      cta: "Book Appointment",
      whatsappMessage:
        "Hello, I'm interested in booking a ritual at Terra Santa Eulalia",
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
            extra:
              "Connect with peace and harmony. Includes facial or foot massage.",
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
            extra:
              "Physical and mental balance. Includes scalp massage and washing.",
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
        { title: "Botanical Wash", duration: "15 min", price: "35€" },
        {
          title: "Facial Massage + Botanical Wash",
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
      capillary: "Advanced Capillary Therapy",
      capillaryDesc: "Botanical diagnosis and molecular recovery.",
      badge: "Signature Experience",
    },
    socialProof: {
      testimonial:
        "A before and after for my hair. Oxytocin therapy is not just aesthetics, it's real health.",
      author: "Laura G., Verified Client",
    },
    whatsapp: {
      reserveButton: "Book Appointment",
      defaultMessage:
        "Hello, I would like information about Terra Santa Eulalia — Advanced Capillary Therapy & Organic Wellness.",
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
      badge: "High Ticket Service",
      title: "Organic Capillary Therapy",
      subtitle: "Botanical Diagnosis & Molecular Recovery",
      desc: "Clinical-organic protocol to recover damaged hair, alopecia, or scalp imbalances. A scientific and completely natural approach.",
      diagnosisTitle: "Dermatological Hair Study",
      diagnosisDesc:
        "We analyze your hair bulb with a microcamera to design your personalized recipe.",
      vipServicesTitle: "Professional Diagnosis",
      vipServicesDesc: "Advanced technology meets botany:",
      vipServices: [
        {
          title: "Dermatological Study with Microcamera",
          desc: "Magnified observation of the scalp and hair bulb. We identify dermatitis, flaking, excess sebum, folliculitis, and microscopic imbalances.",
          icon: "Microscope",
        },
        {
          title: "Bioelectric Hair Scanner",
          desc: "Measurement of hydration levels, sebum, and hair density using bioelectric technology. Complete report in 15 minutes.",
          icon: "Activity",
        },
      ],
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
      ritualsTitle: "Organic Hair Rituals",
      ritualsDesc:
        "Specific treatments for each need. High-efficacy botanical protocols.",
      ritualsList: [
        {
          id: "ritual-detox",
          title: "Detox Ritual",
          desc: "Deep cleansing with medicinal plants. Specific for dermatitis, flaking, dandruff, or excess oil.",
          duration: "50 min",
          price: "85€",
        },
        {
          id: "ritual-fuerte",
          title: "Always Strong Ritual",
          desc: "Strength and vitality with Ayurvedic plants. For weak, lifeless hair lacking body.",
          duration: "60 min",
          price: "95€",
        },
        {
          id: "ritual-rizos",
          title: "Perfect Curls Ritual",
          desc: "Recover curl structure and flexibility through specific herbs that restore life to hair.",
          duration: "50 min",
          price: "85€",
        },
      ],
      solutionsTitle: "Therapeutic Solutions",
      solutionsDesc: "Specific protocols for scalp pathologies.",
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
      ctaRecoveryDesc:
        "This treatment requires a prior appointment and evaluation by our specialists at C/ Provença 213.",
      ctaRecoveryBtn: "Book Diagnosis",
      scheduleRitual: "Schedule this ritual",
      whatsappCta: "Book Diagnosis via WhatsApp",
      whatsappMessage:
        "Hello, I'm interested in booking an Advanced Capillary Therapy diagnosis at Terra Santa Eulalia.",
    },
    philosophy: {
      heroTitle: "The Origin",
      heroSubtitle: "Where alchemy meets silence.",
      manifesto:
        "We don't believe in manufactured beauty. We believe in beauty revealed. Terra Santa Eulalia is not a brand, it's a return to the memory of the earth.",
      founderTitle: "Hands that listen",
      founderDesc:
        "After many years dedicated to conscious hairdressing, at Manolo Días Green Zone and Manolo Días Healthy Salon we created our own brand, Terra Santa Eulàlia, focused on natural, healthy, and energetic hair therapy, born from experience, respect for nature, and the profound well-being of the hair and scalp.\n\nAt Terra Santa Eulàlia, each treatment is unique and completely personalized because we understand that every hair type, every scalp, and every person needs different care.\n\nThat's why we invite each client to contact us so we can consciously assess which treatment they truly need and support them with attentive and personalized care.",
      values: [
        {
          title: "Earth",
          desc: "Living clays that purify without aggression.",
        },
        { title: "Water", desc: "Real hydration that flows from within." },
        { title: "Time", desc: "The most luxurious ingredient: patience." },
      ],
      processTitle: "The Living Apothecary",
      processDesc:
        "Our blends are prepared on the spot. No preservatives that put the plant to sleep. It's living cosmetics for living people.",
      cta: "Come Experience It",
      laiaBio: {
        title: "Laia Salomó",
        role: "Founder & Creative Director",
        inspiration:
          "I was inspired by observing how many people seek to look good, but also need to feel at peace, recover their energy, and reconnect with themselves. I understood that true beauty appears when a person feels cared for, heard, and in harmony with their essence.",
        nature:
          "I was also inspired by nature, its wisdom, its rhythms, and its constant capacity to renew itself. The earth teaches us that everything flourishes when it receives the right care. From this vision Terra Santa Eulalia was born: as a place where each person can renew themselves from the inside out.",
        vision:
          "I wanted to create a different space, where hairdressing and well-being walked together, where every gesture had intention, where respect for health and for the environment were fundamental, and where the energy transmitted was as important as the final result. Organic Hair Therapy at Terra Santa Eulalia is a reflection.",
        mission:
          "Terra Santa Eulalia is the reflection of my life mission: to help people discover their natural beauty, elevate their vital energy, and remember that self-care is also a form of self-love. Here we don't just transform image, we accompany processes, awaken confidence, and sow well-being.",
      },
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
    legal: {
      bannerTitle: "Your privacy matters",
      bannerText:
        "We use cookies to improve your experience, analyse traffic and personalise content. See our",
      cookiesPolicyLink: "Cookie Policy",
      acceptAll: "Accept all",
      rejectAll: "Reject",
      configure: "Configure",
      modalTitle: "Cookie Settings",
      modalDesc:
        "Choose which cookies you accept. Technical cookies are essential for the site to work.",
      technicalLabel: "Technical",
      technicalDesc:
        "Required for basic site functionality (language, session).",
      analyticsLabel: "Analytics",
      analyticsDesc: "Google Analytics — to understand how the site is used.",
      marketingLabel: "Marketing",
      marketingDesc: "Allow showing relevant content on other sites.",
      functionalLabel: "Functional",
      functionalDesc: "Remember your preferences (language, views).",
      required: "Required",
      saveSettings: "Save preferences",
      indexTitle: "Legal Information",
      indexSubtitle: "Legal documentation and policies of Terra Santa Eulalia",
      cookiesTitle: "Cookie Policy",
      cookiesDesc: "How we use cookies on our website.",
      privacyTitle: "Privacy Policy",
      privacyDesc: "How we handle your personal data (GDPR).",
      termsTitle: "Terms & Conditions",
      termsDesc: "Conditions for using this website.",
      noticeTitle: "Legal Notice",
      noticeDesc: "Legal information under Spanish LSSI-CE.",
      lastUpdated: "Last updated",
      backHome: "Back to home",
      readMore: "Read more",
    },
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
      readMore: "Sol·licitar informació",
      viewMore: "Veure Catàleg Complet",
      diyTitle: "Fes-ho Tu Mateix",
      visitUs: "Visita'ns a C/ Provença 213",
      faqTitle: "Preguntes Recurrents",
    },
    cards: {
      productsTitle: "ELS NOSTRES\nPRODUCTES",
      productsSub: "SELECCIÓ NATURAL & ORGÀNICA",
      treatmentsTitle: "ELS NOSTRES\nTRACTAMENTS",
      treatmentsSub: "ESPAI BOTÀNIC",
      therapyTitle: "TERÀPIA CAPIL·LAR\nORGÀNICA",
      therapySub: "CLÍNICA CAPIL·LAR",
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
      email: "hola@terrasantaeulalia.com",
      phone: "+34 93 518 42 36",
    },
    treatmentsPage: {
      title: "Rituals Terra",
      subtitle: "Salut Capil·lar i Facial Orgànica",
      desc: "Tractaments botànics dissenyats per recuperar l'equilibri. Sense presses, amb plantes medicinals i tècniques ancestrals.",
      cta: "Reservar Cita",
      whatsappMessage:
        "Hola, m'interessa reservar un ritual de Terra Santa Eulalia",
      floatingCta: "Reservar Cita",
      extrasTitle: "Afegeix al teu Ritual",
      extrasSubtitle: "Express Express",

      hairRituals: {
        title: "Rituals Capil·lars Orgànics",
        desc: "Recupera la força i salut del teu cabell amb fangs i plantes.",
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
            extra:
              "Connecta amb la pau i harmonia. Inclou massatge facial o de peus.",
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
            extra:
              "Equilibri física i mental. Inclou massatge cranial i rentat.",
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
              { name: "Sols Facial", time: "75 min", price: "85€" },
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
              { name: "Sols Facial", time: "75 min", price: "75€" },
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
              { name: "Sols Facial", time: "60 min", price: "70€" },
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
              { name: "Sols Facial", time: "60 min", price: "65€" },
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
        { title: "Rentat Botànic", duration: "15 min", price: "35€" },
        {
          title: "Massatge Facial + Rentat Botànic",
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
      capillary: "Teràpia Capil·lar Orgànica",
      capillaryDesc: "Diagnòstic botànic i recuperació molecular.",
      badge: "Signature Experience",
    },
    socialProof: {
      testimonial:
        "Un abans i un després per al meu cabell. La teràpia d'oxitocina no és només estètica, és salut real.",
      author: "Laura G., Client Verificat",
    },
    whatsapp: {
      reserveButton: "Reservar Cita",
      defaultMessage:
        "Hola, m'agradaria informació sobre Terra Santa Eulalia — Teràpia Capil·lar Avançada i Benestar Orgànic.",
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
      badge: "Servei High Ticket",
      title: "Teràpia Capil·lar Orgànica",
      subtitle: "Diagnòstic Botànic & Recuperació Molecular",
      desc: "Protocol clínic-orgànic per recuperar cabells danyats, alopècies o dessequilibris del cuir ciliat. Un enfocament científic i completament natural.",
      diagnosisTitle: "Estudi Dermatològic Capil·lar",
      diagnosisDesc:
        "Analitzem el teu bulb capil·lar amb microcàmera per dissenyar la teva recepta personalitzada.",
      vipServicesTitle: "Diagnòstic Professional",
      vipServicesDesc: "Tecnologia avançada meet botànica:",
      vipServices: [
        {
          title: "Estudi Dermatològic amb Microcàmera",
          desc: "Observació ampliada del cuir ciliat i bulb capil·lar. Identifiquem dermatitis, descamació, excés de greix, folliculitis i dessequilibris microscòpics.",
          icon: "Microscope",
        },
        {
          title: "Escàner Bioelèctric Capil·lar",
          desc: "Mesura dels nivells d'hidratació, greix i densitat capil·lar mitjançant tecnologia bioelèctrica. Informe complet en 15 minuts.",
          icon: "Activity",
        },
      ],
      steps: [
        {
          title: "Neteja",
          desc: "Desintoxicació del fol·licle amb fangs volcànics.",
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
      ritualsTitle: "Rituals Capil·lars Orgànics",
      ritualsDesc:
        "Tractaments específics per a cada necessitat. Protocols botànics d'alta eficàcia.",
      ritualsList: [
        {
          id: "ritual-detox",
          title: "Ritual Detox",
          desc: "Neteja profunda amb plantes medicinals. Específic per a dermatitis, descamació, caspa o excés de greix.",
          duration: "50 min",
          price: "85€",
        },
        {
          id: "ritual-fuerte",
          title: "Ritual Sempre Fort",
          desc: "Força i vitalitat amb plantes ayurvèdiques. Per a cabells febles, sense cos i mancats de vida.",
          duration: "60 min",
          price: "95€",
        },
        {
          id: "ritual-rizos",
          title: "Ritual Rissos Perfectes",
          desc: "Recupera l'estructura i flexibilitat del rís mitjançant herbes específiques que retornen la vida al cabell.",
          duration: "50 min",
          price: "85€",
        },
      ],
      solutionsTitle: "Solucions Terapèutiques",
      solutionsDesc: "Protocols específics per a patologies del cuir ciliat.",
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
      ctaRecoveryDesc:
        "Aquest tractament requereix cita prèvia i valoració dels nostres especialistes a C/ Provença 213.",
      ctaRecoveryBtn: "Reservar Diagnòstic",
      scheduleRitual: "Agendar aquest ritual",
      whatsappCta: "Reservar Diagnòstic vía WhatsApp",
      whatsappMessage:
        "Hola, m'interessa reservar un diagnòstic de Teràpia Capil·lar Avançada a Terra Santa Eulalia.",
    },
    philosophy: {
      heroTitle: "L'Origen",
      heroSubtitle: "On l'alquimia troba el silenci.",
      manifesto:
        "No creiem en la bellesa fabricades. Creiem en la bellesa revelada. Terra Santa Eulalia no és una marca, és un retorn a la memòria de la terra.",
      founderTitle: "Mans que escolten",
      founderDesc:
        "Després de molts anys dedicats a la perruqueria conscient, a Manolo Dies Green Zone i Manolo Dies Healthy Salón vam crear la nostra pròpia marca, Terra Santa Eulàlia, enfocada a la teràpia capil·lar natural, saludable i energètica, creada des de l'experiència, el respecte per la natura i el benestar profund del cabell i el cuir.\n\nA Terra Santa Eulàlia cada tractament és únic i totalment personalitzat, perquè entenem que cada cabell, cada cuir cabellut i cada persona necessiten una cura diferent.\n\nPer això, convidem a cada client a posar-se en contacte amb nosaltres per poder valorar de forma conscient quin tractament necessita realment i acompanyar-lo des d'una atenció propera i personalitzada.",
      values: [
        {
          title: "Terra",
          desc: "Argiles vives que purifiquen sense agreujar.",
        },
        { title: "Aigua", desc: "La hidratació real que flueix des de dins." },
        { title: "Temps", desc: "L'ingredient més luxós: l'espera." },
      ],
      processTitle: "La Botiga Viva",
      processDesc:
        "Les nostres barreges es preparen al moment. Sense conservants que dormin la planta. És cosmètica viva per a gent viva.",
      cta: "Vine a Sentir-ho",
      laiaBio: {
        title: "Laia Salomó",
        role: "Fundadora & Director Creatiu",
        inspiration:
          "Em va inspirar observar com moltes persones busquen veure's bé, però també necessiten sentir-se en pau, recuperar la seva energia i reconnectar amb elles mateixes. Compress que la bellesa vertadera apareix quan una persona se sent cuidada, escoltada i en harmonia amb la seva essència.",
        nature:
          "També em va inspirar la natura, la seva saviesa, els seus ritmes i la seva capacitat constant de renovar-se. La terra ens ensenya que tot floreix quan rep la cura adequada. Des d'aquesta visió neix Terra Santa Eulalia: com un lloc on cada persona pugui renovar-se des de dins cap a fora.",
        vision:
          "Vaig voler crear un espai diferent, on la perruqueria i el benestar caminessin junts, on cada gest tingués intenció, on el respecte per la salut i per l'entorn fossin fonamentals, i on l'energia que es transmetés fos tan important com el resultat final. La teràpia Organica Capilar a Terra Santa Eulàlia és el reflex.",
        mission:
          "Terra Santa Eulalia és el reflex de la meva missió de vida: ajudar les persones a descobrir la seva bellesa natural, elevar la seva energia vital i recordar que cuidar-se també és una forma d'amor propi. Aquí no només transformem imatge, acompanyem processos, despertem confiança i sembrem benestar.",
      },
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
      loginRequired: "Es requereix autenticació",
      logout: "Tancar sessió",
    },
    whatsapp: {
      messageTemplate: "Hola, m'interessa reservar",
      ritualSuffix: "a Terra Santa Eulalia",
      scheduledMessage: "El pròxim horari disponible és",
      buttonLabel: "Reservar via WhatsApp",
    },
    legal: {
      bannerTitle: "La teva privacitat importa",
      bannerText:
        "Utilitzem cookies per millorar la teva experiència, analitzar el trànsit i personalitzar el contingut. Consulta la nostra",
      cookiesPolicyLink: "Política de Cookies",
      acceptAll: "Acceptar tot",
      rejectAll: "Rebutjar",
      configure: "Configurar",
      modalTitle: "Configuració de Cookies",
      modalDesc:
        "Tria quines cookies acceptes. Les cookies tècniques són imprescindibles pel funcionament del lloc.",
      technicalLabel: "Tècniques",
      technicalDesc: "Necessàries pel funcionament bàsic (idioma, sessió).",
      analyticsLabel: "Analítiques",
      analyticsDesc: "Google Analytics — per entendre com s'utilitza el lloc.",
      marketingLabel: "Màrqueting",
      marketingDesc: "Permeten mostrar contingut rellevant en altres llocs.",
      functionalLabel: "Funcionals",
      functionalDesc: "Recorden les teves preferències (idioma, vistes).",
      required: "Obligatòries",
      saveSettings: "Desar preferències",
      indexTitle: "Informació Legal",
      indexSubtitle: "Documentació legal i polítiques de Terra Santa Eulalia",
      cookiesTitle: "Política de Cookies",
      cookiesDesc: "Com utilitzem les cookies al nostre web.",
      privacyTitle: "Política de Privacitat",
      privacyDesc: "Com tractem les teves dades personals (RGPD).",
      termsTitle: "Termes i Condicions",
      termsDesc: "Condicions d'ús del lloc web.",
      noticeTitle: "Avís Legal",
      noticeDesc: "Informació legal segons LSSI-CE.",
      lastUpdated: "Última actualització",
      backHome: "Tornar a l'inici",
      readMore: "Llegir més",
    },
  },
};

// Fallback para productos en EN y CA (compartimos la lista completa de ES)
translations.en.productsList = translations.es.productsList;
translations.ca.productsList = translations.es.productsList;

// Verificación: confirmar que productsList está disponible en todos los idiomas
if (
  !translations.es.productsList ||
  translations.es.productsList.length === 0
) {
  console.warn("⚠️ TRANSLATION WARNING: productsList is empty in ES");
}
