export const artistInfo = {
  name: "Pilar González",
  brandName: "ARTE PILAR",
  tagline: "Artes Plásticas, Expresionismo Abstracto y Gráfica Contemporánea",
  manifestoQuote: "El arte no reproduce lo visible; hace visible lo que late en la memoria de la materia y el color.",
  statement: {
    title: "Declaración del Artista (Artist Statement)",
    lead: "Mi investigación plástica explora la tensión entre el caos orgánico y la geometría emocional de los paisajes urbanos e interiores.",
    paragraphs: [
      "Trabajo desde la materia cruda: pigmentos minerales, óleo puro, resinas naturales y veladuras superpuestas sobre lino belga y papel de algodón artesanal. Para mí, el lienzo no es una superficie pasiva, sino un campo de batalla poético donde el gesto visceral dialoga con la precisión botánica y tipográfica.",
      "Inspirada por la gráfica popular latinoamericana, la fuerza del muralismo callejero y la introspección del neoexpresionismo, cada pieza busca detener el ruido cotidiano y confrontar al espectador con una vibración cromática inmersiva que desafía la fugacidad digital."
    ]
  },
  bio: {
    city: "Lima & Madrid",
    experienceYears: "14 años de trayectoria",
    disciplines: ["Óleo & Mixta", "Gran Formato / Mural", "Serigrafía Artesanal", "Grabado"],
    avatar: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
    studioImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=85"
  },
  contact: {
    email: "estudio@artepilar.com",
    phone: "+51 987 654 321",
    whatsapp: "+51987654321",
    instagram: "@arte.pilar",
    location: "Estudio & Galería: Barranco, Lima — Visitas con cita previa"
  }
};

export const artworksData = [
  {
    id: "obra-01",
    title: "Resonancia del Fuego Nocturno",
    year: 2024,
    category: "pintura",
    categoryLabel: "Pintura & Óleo",
    technique: "Óleo empastado y pigmentos minerales sobre lino belga",
    dimensions: "180 x 140 cm",
    materials: "Lino belga de 450g, óleo Winsor & Newton, polvo de mica, barniz dammar",
    series: "Serie 'Territorios Ocultos'",
    status: "disponible", // disponible | coleccion_privada | bajo_cotizacion
    statusLabel: "Pieza Original Disponible",
    price: "$3,800 USD",
    hasPrints: true,
    printPrice: "$340 USD",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=85",
    description: "Exploración de la luz que persiste en la sombra densa. Construida a través de más de doce capas de veladuras y empastes a espátula.",
    curatorNotes: "Seleccionada para la Bienal de Arte Contemporáneo 2024. Obra central de la muestra individual en Galería Forum."
  },
  {
    id: "obra-02",
    title: "Grito Botánico en Magenta",
    year: 2024,
    category: "gran-formato",
    categoryLabel: "Gran Formato & Mural",
    technique: "Acrílico industrial, tintas tipográficas y carbón vegetal sobre madera prensada",
    dimensions: "240 x 200 cm (Díptico)",
    materials: "Paneles de madera sellada, spray Montana Gold, tintas resistentes UV",
    series: "Serie 'Fuerza Vital'",
    status: "bajo_cotizacion",
    statusLabel: "Bajo Cotización para Coleccionistas",
    price: "Consultar",
    hasPrints: true,
    printPrice: "$420 USD",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1600&q=85",
    description: "Homenaje a la flora andina reinterpretada con la bravura del cartelismo callejero y tipografía gestual de trazo continuo.",
    curatorNotes: "Presentada en la feria internacional Art Lima. Una pieza que domina el espacio arquitectónico con energía vibrante."
  },
  {
    id: "obra-03",
    title: "El Abrazo de la Caligrafía Invisible",
    year: 2023,
    category: "serigrafia",
    categoryLabel: "Serigrafía & Gráfica",
    technique: "Serigrafía a 6 tintas directas sobre papel algodón Hahnemühle",
    dimensions: "70 x 100 cm",
    materials: "Papel de algodón 300g, tintas ecológicas con acabado mate aterciopelado",
    series: "Edición Limitada (Serie de 25 ejemplares)",
    status: "disponible",
    statusLabel: "Prints Disponibles (Quedan 4/25)",
    price: "$290 USD",
    hasPrints: true,
    printPrice: "$290 USD",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&w=1600&q=85",
    description: "Cada pliego fue estampado a mano uno a uno por la artista en su taller de grabado, firmado, sellado en seco y numerado.",
    curatorNotes: "Incluye Certificado de Autenticidad foliado y holograma de seguridad."
  },
  {
    id: "obra-04",
    title: "Sedimentos del Tiempo y la Ceniza",
    year: 2023,
    category: "mixta",
    categoryLabel: "Técnica Mixta & Escultura",
    technique: "Arena volcánica, óxidos ferrosos, pan de oro 22k y cera de abejas",
    dimensions: "120 x 120 cm",
    materials: "Bastidor de cedro, tela de yute grueso, tierras naturales, resina polimérica",
    series: "Serie 'Vestigios Minerales'",
    status: "coleccion_privada",
    statusLabel: "Colección Privada (Madrid)",
    price: "Vendida",
    hasPrints: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    description: "Una meditación táctil sobre la erosión geológica y los ciclos de decadencia y regeneración de la tierra.",
    curatorNotes: "Adquirida por la Colección Fundación Valenzuela tras su exhibición en Matadero Madrid."
  },
  {
    id: "obra-05",
    title: "Latido Urbano: La Resistencia del Color",
    year: 2024,
    category: "gran-formato",
    categoryLabel: "Gran Formato & Mural",
    technique: "Esmalte sintético, aerosol y acrílico sobre muro exterior",
    dimensions: "14 x 4.5 metros",
    materials: "Muro de concreto preparado con sellador elastomérico, pintura de alta intemperie",
    series: "Intervención de Arte Público",
    status: "mural_publico",
    statusLabel: "Mural Público Permanente",
    price: "Encargo Institucional",
    hasPrints: true,
    printPrice: "$310 USD",
    image: "https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=1600&q=85",
    description: "Mural monumental comisionado en el distrito cultural, celebrando la identidad popular y la resiliencia comunitaria.",
    curatorNotes: "Fotografía de archivo documental de autor disponible como print de colección."
  },
  {
    id: "obra-06",
    title: "Alquimia Celeste en Tres Movimientos",
    year: 2024,
    category: "pintura",
    categoryLabel: "Pintura & Óleo",
    technique: "Óleo, temple al huevo y pan de plata sobre tabla de roble",
    dimensions: "150 x 110 cm",
    materials: "Tabla estucada a la creta tradicional, pigmentos puros de lapislázuli",
    series: "Serie 'Cielos Antiguos'",
    status: "disponible",
    statusLabel: "Pieza Original Disponible",
    price: "$3,400 USD",
    hasPrints: true,
    printPrice: "$320 USD",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1600&q=85",
    description: "Fusión de técnicas renacentistas con una composición abstracta desbordante en azules cobalto y blancos atmosféricos.",
    curatorNotes: "Disponible con marco artesanal flotante en madera de nogal diseñado por el estudio."
  }
];

export const workshopsData = [
  {
    id: "ws-01",
    title: "Masterclass: Alquimia de la Materia y Óleo Contemporáneo",
    type: "Presencial — En el Taller de la Artista",
    duration: "Intensivo de Fin de Semana (16 horas lectivas)",
    dates: "23 y 24 de Noviembre, 2024",
    location: "Estudio Pilar, Barranco (Lima)",
    seatsTotal: 8,
    seatsAvailable: 3,
    price: "$280 USD",
    includes: ["Todos los materiales de grado profesional incluidos (pigmentos, lienzos y óleos)", "Almuerzo y cata de café en el estudio", "Certificado de participación firmado por la artista"],
    syllabus: [
      "Preparación artesanal de imprimaturas tradicionales y soportes de gran resistencia.",
      "Composición cromática visceral: mezclas directas con pigmentos minerales.",
      "Técnicas de empaste, veladuras, raspados y texturas matéricas.",
      "Asesoría individual para el desarrollo del lenguaje plástico propio."
    ]
  },
  {
    id: "ws-02",
    title: "Taller de Serigrafía Gráfica y Cartelismo de Autor",
    type: "Presencial — Taller de Grabado",
    duration: "4 Sesiones prácticas (Sábados continuos)",
    dates: "7 al 28 de Diciembre, 2024",
    location: "Taller Gráfico Arte Pilar",
    seatsTotal: 6,
    seatsAvailable: 2,
    price: "$240 USD",
    includes: ["Shablones profesionales, tintas ecológicas y pliegos de papel de algodón", "Tiraje personal de 10 copias numeradas por participante", "Carpeta protectora de archivo"],
    syllabus: [
      "De la idea al fotolito manual: dibujo directo, tipografía y corte de matrices.",
      "Emulsionado, insolado y revelado de pantallas.",
      "Registro perfecto en policromía a varias tintas.",
      "Firma, numeración de ediciones y criterios de conservación gráfica."
    ]
  },
  {
    id: "ws-03",
    title: "Mentoría 1-a-1: Dirección de Obra y Portafolio para Artistas",
    type: "Sesión Virtual o Presencial",
    duration: "Programa personalizado de 4 semanas",
    dates: "Convocatoria Abierta — Cupos Mensuales",
    location: "Online (Vía Zoom) o Presencial en Estudio",
    seatsTotal: 4,
    seatsAvailable: 1,
    price: "$450 USD",
    includes: ["Revisión curatorial exhaustiva de tu cuerpo de obra actual", "Redacción y pulido de tu Artist Statement y Dossier", "Estrategia de posicionamiento ante galerías, residencias y coleccionistas"],
    syllabus: [
      "Diagnóstico conceptual y técnico de tu trayectoria.",
      "Estructuración de series y narrativa visual coherente.",
      "Preparación de carpetas de postulación y cotización de mercado.",
      "Acompañamiento en el montaje o lanzamiento de tu proyecto."
    ]
  }
];

export const cvData = {
  statementSummary: "Egresada con honores de la Escuela Nacional Superior Autónoma de Bellas Artes. Ha desarrollado residencias de creación artística en Ciudad de México, Barcelona y Buenos Aires.",
  soloExhibitions: [
    { year: "2024", title: "Territorios Ocultos", gallery: "Galería Forum", city: "Lima, Perú" },
    { year: "2023", title: "La Memoria del Pigmento", gallery: "Espacio Valverde", city: "Madrid, España" },
    { year: "2021", title: "Fuerza y Fractura", gallery: "Centro Cultural Recoleta", city: "Buenos Aires, Argentina" },
    { year: "2019", title: "Caligrafías del Viento", gallery: "Sala Luis Miró Quesada Garland", city: "Lima, Perú" }
  ],
  groupExhibitions: [
    { year: "2024", title: "Bienal Internacional de Arte Contemporáneo", gallery: "Museo de Arte Contemporáneo (MAC)", city: "Lima, Perú" },
    { year: "2023", title: "Voces Gráficas del Sur", gallery: "Matadero Madrid", city: "Madrid, España" },
    { year: "2022", title: "Feria Iberoamericana PArC", gallery: "Casa Prado", city: "Lima, Perú" },
    { year: "2020", title: "Muralistas del Siglo XXI", gallery: "Museo Tamayo / Espacio Urbano", city: "CDMX, México" }
  ],
  awardsAndResidencies: [
    { year: "2023", title: "Residencia Artística de Creación Gráfica", entity: "Fundación BilbaoArte, España" },
    { year: "2022", title: "Primer Premio Nacional de Artes Plásticas", entity: "Concurso Nacional de Pintura BCR" },
    { year: "2020", title: "Beca de Producción Cultural", entity: "Ministerio de Cultura" },
    { year: "2018", title: "Mención de Honor en el Salón Nacional de Grabado", entity: "Instituto Cultural Peruano Norteamericano" }
  ],
  press: [
    { media: "El Comercio (Luces)", quote: "La obra de Pilar logra una alquimia poco común: la potencia callejera del cartel se eleva a una sofisticación pictórica deslumbrante." },
    { media: "Revista Artishock", quote: "Pilar desafía los límites del soporte tradicional con una materialidad táctil que invita al coleccionismo reflexivo." },
    { media: "Cosas Arte & Diseño", quote: "Una de las artistas visuales más contundentes y con mayor proyección internacional de su generación." }
  ]
};

export const agendaEvents = [
  {
    id: "ev-01",
    date: "15 — 19 Enero, 2025",
    status: "Confirmado",
    title: "Participación en Feria Internacional de Arte Contemporáneo (ArtBo)",
    location: "Corferias, Bogotá — Stand Galería Forum",
    type: "Feria Internacional",
    description: "Presentación de 4 nuevas piezas de gran formato de la serie 'Territorios Ocultos' y catálogo de obra para coleccionistas."
  },
  {
    id: "ev-02",
    date: "08 Febrero, 2025",
    status: "Inscripciones Abiertas",
    title: "Jornada de 'Open Studio' y Visita Guiada de Coleccionistas",
    location: "Estudio & Taller Pilar — Barranco, Lima",
    type: "Visita de Estudio",
    description: "Acceso exclusivo para miembros del Club de Coleccionistas para observar obras en proceso, bocetos y conversar directamente con la artista."
  },
  {
    id: "ev-03",
    date: "24 Marzo — 30 Abril, 2025",
    status: "Próximamente",
    title: "Exposición Individual: 'La Materia del Silencio'",
    location: "Sala Principal de Galería Enlace Arte Contemporáneo",
    type: "Exposición Individual",
    description: "Muestra antológica con más de 20 piezas inéditas entre óleos sobre lino, relieves escultóricos y serie gráfica serigráfica."
  }
];

