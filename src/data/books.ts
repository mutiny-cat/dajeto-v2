export interface Book {
  id: string
  title: string
  titleSub?: string
  year: number
  pages?: number
  editorial?: string
  sinopsis: string
  category: "novela" | "novela-corta" | "cuento"
  amazon?: string
}

export interface TimelineEvent {
  year: number
  title: string
  description: string
}

export const books: Book[] = [
  {
    id: "el-canto-del-gallo",
    title: "El canto del gallo",
    year: 2026,
    pages: 416,
    editorial: "Autoedición",
    sinopsis:
      "La agente Lorena Escudero encuentra el cuerpo de Nadia Lozano en el estanque de La Ricarda. Una joven periodista. Una mente inquieta. Alguien que hacía demasiadas preguntas. Poco después, una cadena de muertes sacude familias importantes. Las víctimas no parecen tener relación entre sí… hasta que un detalle comienza a repetirse. Una venganza que no distingue entre inocentes y culpables.",
    category: "novela",
    amazon: "https://www.amazon.es/canto-gallo-Daniel-Jerez-Torns/dp/B0GSFNMQ7H",
  },
  {
    id: "el-pasado-nunca-nos-olvida",
    title: "El pasado nunca nos olvida",
    titleSub: "A veces los crímenes impunes salen a la luz",
    year: 2022,
    pages: 320,
    editorial: "Maeva Noir",
    sinopsis:
      "En El Prat de Llobregat siempre se ha dicho que no pasa nada. Pero hay silencios que duran demasiado… y cuando se rompen, lo hacen con violencia. Una novela negra donde los crímenes del pasado regresan para cobrarse lo que se les debe.",
    category: "novela",
    amazon: "https://www.amazon.es/El-pasado-nunca-nos-olvida/dp/8419110485",
  },
  {
    id: "el-silencio-de-las-ruinas",
    title: "El silencio de las ruinas",
    year: 2020,
    editorial: "Autoedición",
    sinopsis:
      "Una historia de misterio ambientada en escenarios cargados de historia. El silencio guarda secretos que las ruinas nunca podrán contar… hasta ahora.",
    category: "novela",
    amazon:
      "https://www.amazon.es/El-silencio-de-las-ruinas-Daniel-Jerez-Torns-ebook/dp/B086R5WQV5",
  },
  {
    id: "el-beso-de-la-muerte",
    title: "El beso de la muerte",
    year: 2020,
    editorial: "Autoedición",
    sinopsis:
      "Novela negra que sumerge al lector en una trama de crimen e intriga. Cuando la muerte besa a sus víctimas, nada vuelve a ser lo mismo.",
    category: "novela",
    amazon:
      "https://www.amazon.es/El-beso-de-la-muerte-Daniel-Jerez-Torns-ebook/dp/B0851MPJGP",
  },
  {
    id: "al-iksir",
    title: "Al-iksir",
    year: 2024,
    sinopsis:
      "Una historia que combina misterio y ciencia en torno a una antigua fórmula de conocimiento y poder. El elixir de la vida es solo el principio.",
    category: "novela-corta",
    amazon:
      "https://www.amazon.es/Al-iksir-Daniel-Jerez-Torns-ebook/dp/B0CWY5MPZ9",
  },
  {
    id: "el-secreto-del-tesoro-guardado",
    title: "El secreto del tesoro guardado",
    year: 2025,
    sinopsis:
      "Una aventura llena de misterio y descubrimientos. Un tesoro oculto espera ser encontrado, pero alguien más lo busca también.",
    category: "novela-corta",
    amazon:
      "https://www.amazon.es/El-secreto-del-tesoro-guardado-Daniel-Jerez-Torns-ebook/dp/B0DZ5X4VY5",
  },
  {
    id: "el-faraon-y-el-prevencionista",
    title: "El Faraón y el prevencionista",
    year: 2025,
    sinopsis:
      "Un cruce inesperado entre el antiguo Egipto y el mundo de la prevención de riesgos laborales. Una historia tan original como sorprendente.",
    category: "novela-corta",
    amazon:
      "https://www.amazon.es/El-Fara%C3%B3n-prevencionista-Daniel-Jerez-Torns-ebook/dp/B0G1QSGLD4",
  },
  {
    id: "la-formula-terradas",
    title: "La fórmula Terradas",
    year: 2014,
    sinopsis:
      "Una intriga científica donde una fórmula secreta puede cambiarlo todo. Misterio, ciencia y una carrera contrarreloj.",
    category: "novela-corta",
    amazon:
      "https://www.amazon.es/La-f%C3%B3rmula-Terradas-Daniel-Jerez-Torns-ebook/dp/B00O7D4XX6",
  },
  {
    id: "el-arcabucero-n-61",
    title: "El arcabucero nº 61",
    titleSub: "Misterio histórico, intriga científica y asesinato",
    year: 2012,
    sinopsis:
      "Misterio histórico, intriga científica y asesinato se dan cita en esta novela que transporta al lector a una época de conspiraciones y secretos.",
    category: "novela-corta",
    amazon:
      "https://www.amazon.es/El-arcabucero-n%C2%BA-61-Spanish-ebook/dp/B00G2PYF76",
  },
  {
    id: "relatos-tendidos",
    title: "Relatos tendidos",
    titleSub: "Relatos breves sobre lo cotidiano, lo absurdo y lo inesperado",
    year: 2026,
    sinopsis:
      "Una colección de relatos breves que exploran lo cotidiano, lo absurdo y lo inesperado. Historias que tienden un puente entre la realidad y la sorpresa.",
    category: "cuento",
    amazon:
      "https://www.amazon.es/Relatos-tendidos-Daniel-Jerez-Torns-ebook/dp/B0GXVY44X8",
  },
  {
    id: "grietas-en-el-muro",
    title: "Grietas en el muro",
    year: 2026,
    sinopsis:
      "A veces las grietas no están en el muro, sino en nosotros. Un relato que invita a mirar más allá de las apariencias.",
    category: "cuento",
    amazon:
      "https://www.amazon.es/Grietas-en-el-muro-Daniel-Jerez-Torns-ebook/dp/B0H1YHB8CX",
  },
  {
    id: "el-mapa-de-la-isla-del-estres",
    title: "El mapa de la isla del estrés",
    year: 2025,
    pages: 44,
    sinopsis:
      "Un libro ilustrado que explora el estrés de una manera original y visual. Un mapa para navegar por las tormentas emocionales de la vida moderna.",
    category: "cuento",
    amazon:
      "https://www.amazon.es/El-mapa-isla-del-estr%C3%A9s-Daniel-Jerez-Torns-ebook/dp/B0FP2M68PG",
  },
]

export const timeline: TimelineEvent[] = [
  {
    year: 2008,
    title: "Inicios en la escritura",
    description:
      "Daniel Jerez comienza su andadura literaria escribiendo relatos cortos, explorando su voz narrativa y los géneros que más tarde definirían su carrera.",
  },
  {
    year: 2012,
    title: "Publicación de El arcabucero nº 61",
    description:
      "Su primera novela publicada. Un misterio histórico que combina intriga científica y asesinato, sentando las bases de su estilo narrativo.",
  },
  {
    year: 2014,
    title: "La fórmula Terradas",
    description:
      "Publica esta intriga científica donde una fórmula secreta amenaza con cambiarlo todo. La novela consolida su presencia en el panorama literario.",
  },
  {
    year: 2020,
    title: "Doble publicación: El beso de la muerte y El silencio de las ruinas",
    description:
      "Un año clave en su carrera con dos novelas publicadas. El beso de la muerte se convierte en una de sus obras más valoradas por los lectores.",
  },
  {
    year: 2022,
    title: "El pasado nunca nos olvida (Maeva Noir)",
    description:
      "Da el salto a una editorial nacional con Maeva Noir. La novela, ambientada en El Prat de Llobregat, recibe excelentes críticas y amplía su alcance como escritor de novela negra.",
  },
  {
    year: 2024,
    title: "Al-iksir",
    description:
      "Publica Al-iksir, una novela que fusiona misterio y ciencia en torno a una antigua fórmula de conocimiento.",
  },
  {
    year: 2025,
    title: "Tres nuevos títulos",
    description:
      "Un año prolífico con El secreto del tesoro guardado, El Faraón y el prevencionista, y El mapa de la isla del estrés, explorando nuevos formatos y temáticas.",
  },
  {
    year: 2026,
    title: "El canto del gallo",
    description:
      "Su obra más ambiciosa: 416 páginas de novela policiaca. La historia de la agente Lorena Escudero marca un antes y un después en su carrera. Publica también Relatos tendidos y Grietas en el muro.",
  },
]
