/**
 * legal-content.js
 * Contenido completo de las páginas legales en CA / ES / EN.
 *
 * IMPORTANTE: Los campos marcados con [PLACEHOLDER: ...] deben ser rellenados
 * por el responsable del proyecto antes de ir a producción.
 *
 * Cumplimiento: RGPD (UE) 2016/679 + LOPDGDD 3/2018 + LSSI-CE 34/2002.
 * Última revisión legal: 2026-05-13
 */

// === DATOS DEL NEGOCIO (rellenar antes de publicar) ===
export const BUSINESS_INFO = {
  name: "Terra Santa Eulalia",
  legalName: "[PLACEHOLDER: Razón social completa]",
  cif: "[PLACEHOLDER: CIF/NIF — ej. B-XXXXXXXX]",
  owner: "[PLACEHOLDER: Nombre del responsable]",
  address: "C/ Provença 213, 08029 Barcelona, España",
  phone: "+34 93 518 42 36",
  email: "hola@terrasantaeulalia.com",
  dpoEmail: "[PLACEHOLDER: dpo@terrasantaeulalia.com o mismo email]",
  registry: "[PLACEHOLDER: Registro Mercantil de Barcelona, Tomo X, Folio X]",
  jurisdiction: "Barcelona, España",
  lastUpdated: "13 de mayo de 2026",
};

// === TABLA DE COOKIES (común a los 3 idiomas) ===
export const COOKIES_TABLE = [
  { name: "_ga", type: "Analytics", duration: "2 años / 2 years / 2 anys", purpose: { es: "Google Analytics — identificación de usuarios", en: "Google Analytics — user identification", ca: "Google Analytics — identificació d'usuaris" } },
  { name: "_ga_*", type: "Analytics", duration: "2 años / 2 years / 2 anys", purpose: { es: "Google Analytics — estado de sesión", en: "Google Analytics — session state", ca: "Google Analytics — estat de sessió" } },
  { name: "NEXT_LOCALE", type: "Técnica / Technical / Tècnica", duration: "1 año / 1 year / 1 any", purpose: { es: "Recordar el idioma seleccionado", en: "Remember selected language", ca: "Recordar l'idioma seleccionat" } },
  { name: "cookie_preferences", type: "Técnica / Technical / Tècnica", duration: "1 año / 1 year / 1 any", purpose: { es: "Guardar preferencias del banner", en: "Save banner preferences", ca: "Desar preferències del bànner" } },
];

// === POLÍTICA DE COOKIES ===
export const cookiesPolicy = {
  es: {
    intro: "Esta Política de Cookies explica qué son las cookies, cómo las usamos en este sitio web y cómo puedes gestionarlas. Al continuar navegando aceptas el uso de cookies de acuerdo con esta política.",
    sections: [
      {
        heading: "1. ¿Qué son las cookies?",
        paragraphs: [
          "Las cookies son pequeños archivos de texto que los sitios web colocan en tu dispositivo cuando los visitas. Permiten al sitio recordar tus acciones y preferencias durante un período de tiempo.",
        ],
      },
      {
        heading: "2. Tipos de cookies que utilizamos",
        paragraphs: [
          "Utilizamos cookies propias y de terceros con distintas finalidades. Puedes ver el detalle en la tabla siguiente:",
        ],
      },
      {
        heading: "3. Gestión de cookies",
        paragraphs: [
          "Puedes aceptar, rechazar o configurar las cookies mediante el banner que aparece al entrar en el sitio. También puedes modificar tu elección en cualquier momento desde la configuración de tu navegador.",
          "Si rechazas las cookies no técnicas, algunas funcionalidades pueden no estar disponibles o ser limitadas.",
        ],
      },
      {
        heading: "4. Cookies de terceros",
        paragraphs: [
          "Google Analytics: utilizamos esta herramienta para analizar el uso del sitio. Los datos se anonimizan en la medida posible. Más información en policies.google.com/privacy.",
        ],
      },
      {
        heading: "5. Actualizaciones",
        paragraphs: [
          "Esta política puede actualizarse para reflejar cambios técnicos o legales. Te recomendamos revisarla periódicamente.",
        ],
      },
    ],
  },
  en: {
    intro: "This Cookie Policy explains what cookies are, how we use them on this website and how you can manage them. By continuing to browse you accept the use of cookies in accordance with this policy.",
    sections: [
      {
        heading: "1. What are cookies?",
        paragraphs: [
          "Cookies are small text files that websites place on your device when you visit them. They allow the site to remember your actions and preferences for a period of time.",
        ],
      },
      {
        heading: "2. Types of cookies we use",
        paragraphs: [
          "We use first-party and third-party cookies for different purposes. See the details in the table below:",
        ],
      },
      {
        heading: "3. Managing cookies",
        paragraphs: [
          "You can accept, reject or configure cookies through the banner that appears when you enter the site. You can also change your choice at any time from your browser settings.",
          "If you reject non-technical cookies, some features may be unavailable or limited.",
        ],
      },
      {
        heading: "4. Third-party cookies",
        paragraphs: [
          "Google Analytics: we use this tool to analyse site usage. Data is anonymised where possible. More info at policies.google.com/privacy.",
        ],
      },
      {
        heading: "5. Updates",
        paragraphs: [
          "This policy may be updated to reflect technical or legal changes. We recommend reviewing it periodically.",
        ],
      },
    ],
  },
  ca: {
    intro: "Aquesta Política de Cookies explica què són les cookies, com les utilitzem en aquest lloc web i com pots gestionar-les. En continuar navegant acceptes l'ús de cookies d'acord amb aquesta política.",
    sections: [
      {
        heading: "1. Què són les cookies?",
        paragraphs: [
          "Les cookies són petits arxius de text que els llocs web col·loquen al teu dispositiu quan els visites. Permeten al lloc recordar les teves accions i preferències durant un període de temps.",
        ],
      },
      {
        heading: "2. Tipus de cookies que utilitzem",
        paragraphs: [
          "Utilitzem cookies pròpies i de tercers amb diferents finalitats. Pots veure el detall a la taula següent:",
        ],
      },
      {
        heading: "3. Gestió de cookies",
        paragraphs: [
          "Pots acceptar, rebutjar o configurar les cookies mitjançant el bànner que apareix en entrar al lloc. També pots modificar la teva elecció en qualsevol moment des de la configuració del teu navegador.",
          "Si rebutges les cookies no tècniques, algunes funcionalitats poden no estar disponibles o ser limitades.",
        ],
      },
      {
        heading: "4. Cookies de tercers",
        paragraphs: [
          "Google Analytics: utilitzem aquesta eina per analitzar l'ús del lloc. Les dades s'anonimitzen en la mesura possible. Més informació a policies.google.com/privacy.",
        ],
      },
      {
        heading: "5. Actualitzacions",
        paragraphs: [
          "Aquesta política pot ser actualitzada per reflectir canvis tècnics o legals. Et recomanem revisar-la periòdicament.",
        ],
      },
    ],
  },
};

// === POLÍTICA DE PRIVACIDAD ===
export const privacyPolicy = {
  es: {
    intro: "En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos sobre el tratamiento de tus datos personales.",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        paragraphs: [
          `${BUSINESS_INFO.legalName} (en adelante, "Terra Santa Eulalia").`,
          `CIF: ${BUSINESS_INFO.cif}`,
          `Dirección: ${BUSINESS_INFO.address}`,
          `Email: ${BUSINESS_INFO.email}`,
          `Contacto DPO: ${BUSINESS_INFO.dpoEmail}`,
        ],
      },
      {
        heading: "2. Finalidades del tratamiento",
        paragraphs: [
          "Tratamos tus datos para las siguientes finalidades:",
          "• Gestionar consultas y reservas realizadas a través del formulario de contacto o WhatsApp.",
          "• Enviar comunicaciones comerciales si nos has dado tu consentimiento expreso.",
          "• Analizar el uso de nuestra web mediante herramientas analíticas (cookies).",
          "• Cumplir con obligaciones legales aplicables.",
        ],
      },
      {
        heading: "3. Base legal",
        paragraphs: [
          "El tratamiento se basa en:",
          "• Tu consentimiento (art. 6.1.a RGPD), revocable en cualquier momento.",
          "• La ejecución de un contrato o relación pre-contractual (art. 6.1.b RGPD).",
          "• Nuestro interés legítimo en mantener la relación comercial (art. 6.1.f RGPD).",
          "• El cumplimiento de obligaciones legales (art. 6.1.c RGPD).",
        ],
      },
      {
        heading: "4. Plazo de conservación",
        paragraphs: [
          "Conservaremos tus datos mientras dure la relación contractual o comercial y, posteriormente, durante los plazos legales aplicables. Las cookies analíticas tienen una retención máxima de 2 años.",
        ],
      },
      {
        heading: "5. Destinatarios",
        paragraphs: [
          "Tus datos no se cederán a terceros salvo obligación legal. Los proveedores que tratan datos por nuestra cuenta (encargados del tratamiento) cumplen el RGPD:",
          "• EmailJS (envío de formularios)",
          "• Google Analytics (analítica web)",
          "• Netlify / IONOS (hosting)",
        ],
      },
      {
        heading: "6. Derechos del usuario",
        paragraphs: [
          "Tienes derecho a: acceder a tus datos, rectificarlos, suprimirlos (olvido), oponerte al tratamiento, limitarlo, portar los datos a otro responsable y retirar el consentimiento. Puedes ejercerlos enviando un email a " + BUSINESS_INFO.email + " adjuntando copia de tu DNI o documento identificativo.",
          "Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
      {
        heading: "7. Seguridad",
        paragraphs: [
          "Aplicamos medidas técnicas y organizativas adecuadas para garantizar la seguridad de tus datos y prevenir su pérdida, alteración o acceso no autorizado.",
        ],
      },
    ],
  },
  en: {
    intro: "In compliance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD), we inform you about the processing of your personal data.",
    sections: [
      {
        heading: "1. Data Controller",
        paragraphs: [
          `${BUSINESS_INFO.legalName} (hereinafter, "Terra Santa Eulalia").`,
          `Tax ID: ${BUSINESS_INFO.cif}`,
          `Address: ${BUSINESS_INFO.address}`,
          `Email: ${BUSINESS_INFO.email}`,
          `DPO contact: ${BUSINESS_INFO.dpoEmail}`,
        ],
      },
      {
        heading: "2. Purposes of processing",
        paragraphs: [
          "We process your data for the following purposes:",
          "• Manage enquiries and bookings made through the contact form or WhatsApp.",
          "• Send commercial communications if you have given express consent.",
          "• Analyse the use of our website via analytics tools (cookies).",
          "• Comply with applicable legal obligations.",
        ],
      },
      {
        heading: "3. Legal basis",
        paragraphs: [
          "Processing is based on:",
          "• Your consent (art. 6.1.a GDPR), revocable at any time.",
          "• The performance of a contract or pre-contractual relationship (art. 6.1.b GDPR).",
          "• Our legitimate interest in maintaining the business relationship (art. 6.1.f GDPR).",
          "• Compliance with legal obligations (art. 6.1.c GDPR).",
        ],
      },
      {
        heading: "4. Retention period",
        paragraphs: [
          "We will keep your data for as long as the contractual or commercial relationship lasts and, afterwards, for the applicable legal periods. Analytics cookies have a maximum retention of 2 years.",
        ],
      },
      {
        heading: "5. Recipients",
        paragraphs: [
          "Your data will not be transferred to third parties except by legal obligation. The providers that process data on our behalf (data processors) comply with the GDPR:",
          "• EmailJS (form submissions)",
          "• Google Analytics (web analytics)",
          "• Netlify / IONOS (hosting)",
        ],
      },
      {
        heading: "6. Your rights",
        paragraphs: [
          "You have the right to: access your data, rectify it, erase it (right to be forgotten), object to processing, restrict it, port the data to another controller and withdraw consent. You can exercise these by emailing " + BUSINESS_INFO.email + " attaching a copy of your ID document.",
          "If you consider that processing does not comply with regulations, you can file a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
      {
        heading: "7. Security",
        paragraphs: [
          "We apply appropriate technical and organisational measures to ensure the security of your data and prevent its loss, alteration or unauthorised access.",
        ],
      },
    ],
  },
  ca: {
    intro: "En compliment del Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD), t'informem sobre el tractament de les teves dades personals.",
    sections: [
      {
        heading: "1. Responsable del tractament",
        paragraphs: [
          `${BUSINESS_INFO.legalName} (en endavant, "Terra Santa Eulalia").`,
          `CIF: ${BUSINESS_INFO.cif}`,
          `Adreça: ${BUSINESS_INFO.address}`,
          `Email: ${BUSINESS_INFO.email}`,
          `Contacte DPO: ${BUSINESS_INFO.dpoEmail}`,
        ],
      },
      {
        heading: "2. Finalitats del tractament",
        paragraphs: [
          "Tractem les teves dades per a les finalitats següents:",
          "• Gestionar consultes i reserves realitzades a través del formulari de contacte o WhatsApp.",
          "• Enviar comunicacions comercials si ens has donat el teu consentiment exprés.",
          "• Analitzar l'ús del nostre web mitjançant eines analítiques (cookies).",
          "• Complir amb obligacions legals aplicables.",
        ],
      },
      {
        heading: "3. Base legal",
        paragraphs: [
          "El tractament es basa en:",
          "• El teu consentiment (art. 6.1.a RGPD), revocable en qualsevol moment.",
          "• L'execució d'un contracte o relació precontractual (art. 6.1.b RGPD).",
          "• El nostre interès legítim en mantenir la relació comercial (art. 6.1.f RGPD).",
          "• El compliment d'obligacions legals (art. 6.1.c RGPD).",
        ],
      },
      {
        heading: "4. Termini de conservació",
        paragraphs: [
          "Conservarem les teves dades mentre duri la relació contractual o comercial i, posteriorment, durant els terminis legals aplicables. Les cookies analítiques tenen una retenció màxima de 2 anys.",
        ],
      },
      {
        heading: "5. Destinataris",
        paragraphs: [
          "Les teves dades no es cediran a tercers excepte per obligació legal. Els proveïdors que tracten dades pel nostre compte (encarregats del tractament) compleixen el RGPD:",
          "• EmailJS (enviament de formularis)",
          "• Google Analytics (analítica web)",
          "• Netlify / IONOS (hosting)",
        ],
      },
      {
        heading: "6. Drets de l'usuari",
        paragraphs: [
          "Tens dret a: accedir a les teves dades, rectificar-les, suprimir-les (oblit), oposar-te al tractament, limitar-lo, portar les dades a un altre responsable i retirar el consentiment. Pots exercir-los enviant un email a " + BUSINESS_INFO.email + " adjuntant còpia del teu DNI o document identificatiu.",
          "Si consideres que el tractament no s'ajusta a la normativa, pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
        ],
      },
      {
        heading: "7. Seguretat",
        paragraphs: [
          "Apliquem mesures tècniques i organitzatives adequades per garantir la seguretat de les teves dades i prevenir-ne la pèrdua, alteració o accés no autoritzat.",
        ],
      },
    ],
  },
};

// === TÉRMINOS Y CONDICIONES ===
export const termsConditions = {
  es: {
    intro: "Las presentes condiciones generales regulan el uso del sitio web de Terra Santa Eulalia. Al acceder y utilizar este sitio aceptas estas condiciones en su totalidad.",
    sections: [
      {
        heading: "1. Objeto",
        paragraphs: [
          "Este sitio web tiene como finalidad ofrecer información sobre los servicios y productos de Terra Santa Eulalia, así como facilitar la reserva de servicios a través de WhatsApp o el formulario de contacto.",
        ],
      },
      {
        heading: "2. Uso del sitio",
        paragraphs: [
          "El usuario se compromete a utilizar el sitio de manera lícita, sin contravenir la legislación vigente, la moral y el orden público. Queda prohibido el uso del sitio con fines fraudulentos o que puedan dañar al titular o a terceros.",
        ],
      },
      {
        heading: "3. Responsabilidad del usuario",
        paragraphs: [
          "El usuario es responsable de la veracidad de los datos que proporcione a través de los formularios. Terra Santa Eulalia no se hace responsable de las consecuencias derivadas de información falsa o inexacta.",
        ],
      },
      {
        heading: "4. Limitación de responsabilidad",
        paragraphs: [
          "Terra Santa Eulalia no garantiza la disponibilidad y continuidad ininterrumpida del sitio web ni se hace responsable de los daños derivados de su uso, incluidos virus, fallos técnicos o interrupciones del servicio.",
        ],
      },
      {
        heading: "5. Propiedad intelectual",
        paragraphs: [
          "Todos los contenidos del sitio (textos, imágenes, logotipos, diseño) son propiedad de Terra Santa Eulalia o de sus titulares legítimos. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.",
        ],
      },
      {
        heading: "6. Modificaciones",
        paragraphs: [
          "Terra Santa Eulalia se reserva el derecho a modificar estas condiciones, los contenidos o los servicios del sitio en cualquier momento sin previo aviso.",
        ],
      },
      {
        heading: "7. Legislación aplicable",
        paragraphs: [
          `Estas condiciones se rigen por la legislación española. Las partes se someten a los Juzgados y Tribunales de ${BUSINESS_INFO.jurisdiction} para la resolución de cualquier controversia.`,
        ],
      },
    ],
  },
  en: {
    intro: "These general terms govern the use of the Terra Santa Eulalia website. By accessing and using this site you accept these terms in full.",
    sections: [
      {
        heading: "1. Purpose",
        paragraphs: [
          "This website aims to provide information about Terra Santa Eulalia's services and products, and to facilitate service bookings via WhatsApp or the contact form.",
        ],
      },
      {
        heading: "2. Use of the site",
        paragraphs: [
          "The user agrees to use the site lawfully, without contravening current legislation, morality or public order. Use of the site for fraudulent purposes or that may harm the owner or third parties is prohibited.",
        ],
      },
      {
        heading: "3. User responsibility",
        paragraphs: [
          "The user is responsible for the accuracy of the data provided through the forms. Terra Santa Eulalia is not responsible for consequences arising from false or inaccurate information.",
        ],
      },
      {
        heading: "4. Limitation of liability",
        paragraphs: [
          "Terra Santa Eulalia does not guarantee the uninterrupted availability and continuity of the website nor is responsible for damages arising from its use, including viruses, technical failures or service interruptions.",
        ],
      },
      {
        heading: "5. Intellectual property",
        paragraphs: [
          "All site contents (text, images, logos, design) are the property of Terra Santa Eulalia or its legitimate owners. Reproduction, distribution or transformation without express authorisation is prohibited.",
        ],
      },
      {
        heading: "6. Changes",
        paragraphs: [
          "Terra Santa Eulalia reserves the right to modify these terms, contents or services of the site at any time without prior notice.",
        ],
      },
      {
        heading: "7. Applicable law",
        paragraphs: [
          `These terms are governed by Spanish law. The parties submit to the Courts and Tribunals of ${BUSINESS_INFO.jurisdiction} for the resolution of any dispute.`,
        ],
      },
    ],
  },
  ca: {
    intro: "Les presents condicions generals regulen l'ús del lloc web de Terra Santa Eulalia. En accedir i utilitzar aquest lloc acceptes aquestes condicions en la seva totalitat.",
    sections: [
      {
        heading: "1. Objecte",
        paragraphs: [
          "Aquest lloc web té com a finalitat oferir informació sobre els serveis i productes de Terra Santa Eulalia, així com facilitar la reserva de serveis a través de WhatsApp o el formulari de contacte.",
        ],
      },
      {
        heading: "2. Ús del lloc",
        paragraphs: [
          "L'usuari es compromet a utilitzar el lloc de manera lícita, sense contravenir la legislació vigent, la moral i l'ordre públic. Queda prohibit l'ús del lloc amb finalitats fraudulentes o que puguin perjudicar el titular o tercers.",
        ],
      },
      {
        heading: "3. Responsabilitat de l'usuari",
        paragraphs: [
          "L'usuari és responsable de la veracitat de les dades que proporcioni a través dels formularis. Terra Santa Eulalia no es fa responsable de les conseqüències derivades d'informació falsa o inexacta.",
        ],
      },
      {
        heading: "4. Limitació de responsabilitat",
        paragraphs: [
          "Terra Santa Eulalia no garanteix la disponibilitat i continuïtat ininterrompuda del lloc web ni es fa responsable dels danys derivats del seu ús, inclosos virus, fallades tècniques o interrupcions del servei.",
        ],
      },
      {
        heading: "5. Propietat intel·lectual",
        paragraphs: [
          "Tots els continguts del lloc (textos, imatges, logotips, disseny) són propietat de Terra Santa Eulalia o dels seus titulars legítims. Queda prohibida la seva reproducció, distribució o transformació sense autorització expressa.",
        ],
      },
      {
        heading: "6. Modificacions",
        paragraphs: [
          "Terra Santa Eulalia es reserva el dret a modificar aquestes condicions, els continguts o els serveis del lloc en qualsevol moment sense previ avís.",
        ],
      },
      {
        heading: "7. Legislació aplicable",
        paragraphs: [
          `Aquestes condicions es regeixen per la legislació espanyola. Les parts se sotmeten als Jutjats i Tribunals de ${BUSINESS_INFO.jurisdiction} per a la resolució de qualsevol controvèrsia.`,
        ],
      },
    ],
  },
};

// === AVISO LEGAL (LSSI-CE) ===
export const legalNotice = {
  es: {
    intro: "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ofrece a continuación la información legal del prestador de servicios.",
    sections: [
      {
        heading: "1. Identificación del titular",
        paragraphs: [
          `Denominación social: ${BUSINESS_INFO.legalName}`,
          `Nombre comercial: ${BUSINESS_INFO.name}`,
          `CIF/NIF: ${BUSINESS_INFO.cif}`,
          `Domicilio social: ${BUSINESS_INFO.address}`,
          `Teléfono: ${BUSINESS_INFO.phone}`,
          `Email: ${BUSINESS_INFO.email}`,
          `Datos registrales: ${BUSINESS_INFO.registry}`,
        ],
      },
      {
        heading: "2. Objeto del sitio",
        paragraphs: [
          "El sitio web informa sobre los servicios de bienestar orgánico, spa y terapia capilar avanzada que ofrece Terra Santa Eulalia, así como sobre su catálogo de productos naturales.",
        ],
      },
      {
        heading: "3. Propiedad intelectual e industrial",
        paragraphs: [
          "Todos los elementos que conforman el sitio (incluyendo, a título enunciativo, textos, imágenes, audios, vídeos, código fuente, diseño y selección de contenidos) están protegidos por derechos de propiedad intelectual o industrial titularidad del prestador o de terceros que han autorizado su uso.",
        ],
      },
      {
        heading: "4. Limitación de responsabilidad",
        paragraphs: [
          "El prestador no se responsabiliza de los daños y perjuicios que pudieran derivarse del uso del sitio, de la presencia de virus u otros elementos lesivos, ni de las opiniones o contenidos publicados por terceros.",
        ],
      },
      {
        heading: "5. Enlaces externos",
        paragraphs: [
          "El sitio puede contener enlaces a páginas de terceros. El prestador no se hace responsable del contenido ni del funcionamiento de dichas páginas.",
        ],
      },
      {
        heading: "6. Legislación y jurisdicción",
        paragraphs: [
          `El acceso y uso del sitio se rige por la legislación española. Para la resolución de cualquier conflicto las partes se someten a los Juzgados y Tribunales de ${BUSINESS_INFO.jurisdiction}.`,
        ],
      },
    ],
  },
  en: {
    intro: "In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the legal information of the service provider is offered below.",
    sections: [
      {
        heading: "1. Owner identification",
        paragraphs: [
          `Legal name: ${BUSINESS_INFO.legalName}`,
          `Trade name: ${BUSINESS_INFO.name}`,
          `Tax ID: ${BUSINESS_INFO.cif}`,
          `Registered address: ${BUSINESS_INFO.address}`,
          `Phone: ${BUSINESS_INFO.phone}`,
          `Email: ${BUSINESS_INFO.email}`,
          `Registry: ${BUSINESS_INFO.registry}`,
        ],
      },
      {
        heading: "2. Purpose of the site",
        paragraphs: [
          "The website provides information about the organic wellness, spa and advanced hair therapy services offered by Terra Santa Eulalia, as well as its catalogue of natural products.",
        ],
      },
      {
        heading: "3. Intellectual and industrial property",
        paragraphs: [
          "All elements of the site (including, by way of illustration, texts, images, audio, video, source code, design and content selection) are protected by intellectual or industrial property rights owned by the provider or by third parties who have authorised their use.",
        ],
      },
      {
        heading: "4. Limitation of liability",
        paragraphs: [
          "The provider is not responsible for damages that may arise from the use of the site, the presence of viruses or other harmful elements, or opinions or contents published by third parties.",
        ],
      },
      {
        heading: "5. External links",
        paragraphs: [
          "The site may contain links to third-party pages. The provider is not responsible for the content or operation of such pages.",
        ],
      },
      {
        heading: "6. Law and jurisdiction",
        paragraphs: [
          `Access to and use of the site is governed by Spanish law. To resolve any dispute the parties submit to the Courts and Tribunals of ${BUSINESS_INFO.jurisdiction}.`,
        ],
      },
    ],
  },
  ca: {
    intro: "En compliment de la Llei 34/2002, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'ofereix a continuació la informació legal del prestador de serveis.",
    sections: [
      {
        heading: "1. Identificació del titular",
        paragraphs: [
          `Denominació social: ${BUSINESS_INFO.legalName}`,
          `Nom comercial: ${BUSINESS_INFO.name}`,
          `CIF/NIF: ${BUSINESS_INFO.cif}`,
          `Domicili social: ${BUSINESS_INFO.address}`,
          `Telèfon: ${BUSINESS_INFO.phone}`,
          `Email: ${BUSINESS_INFO.email}`,
          `Dades registrals: ${BUSINESS_INFO.registry}`,
        ],
      },
      {
        heading: "2. Objecte del lloc",
        paragraphs: [
          "El lloc web informa sobre els serveis de benestar orgànic, spa i teràpia capil·lar avançada que ofereix Terra Santa Eulalia, així com sobre el seu catàleg de productes naturals.",
        ],
      },
      {
        heading: "3. Propietat intel·lectual i industrial",
        paragraphs: [
          "Tots els elements que conformen el lloc (incloent-hi, a títol enunciatiu, textos, imatges, àudios, vídeos, codi font, disseny i selecció de continguts) estan protegits per drets de propietat intel·lectual o industrial titularitat del prestador o de tercers que han autoritzat el seu ús.",
        ],
      },
      {
        heading: "4. Limitació de responsabilitat",
        paragraphs: [
          "El prestador no es responsabilitza dels danys i perjudicis que es poguessin derivar de l'ús del lloc, de la presència de virus o altres elements lesius, ni de les opinions o continguts publicats per tercers.",
        ],
      },
      {
        heading: "5. Enllaços externs",
        paragraphs: [
          "El lloc pot contenir enllaços a pàgines de tercers. El prestador no es fa responsable del contingut ni del funcionament d'aquestes pàgines.",
        ],
      },
      {
        heading: "6. Legislació i jurisdicció",
        paragraphs: [
          `L'accés i ús del lloc es regeix per la legislació espanyola. Per a la resolució de qualsevol conflicte les parts se sotmeten als Jutjats i Tribunals de ${BUSINESS_INFO.jurisdiction}.`,
        ],
      },
    ],
  },
};
