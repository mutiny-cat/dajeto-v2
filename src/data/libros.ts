export interface Libro {
  id: string
  titulo: string
  subtitulo?: string
  ano: number
  paginas?: number
  editorial?: string
  sinopsis: string
  categoria: "novela" | "novelacorta" | "cuento-adolescente" | "cuento-infantil"
  amazon?: string
}

export const libros: Libro[] = [
  {
    id: "el-canto-del-gallo",
    titulo: "El canto del gallo",
    ano: 2026,
    paginas: 416,
    editorial: "Autoedición",
    sinopsis:
      "La agente Lorena Escudero encuentra el cuerpo de Nadia Lozano en el estanque de La Ricarda. Una joven periodista. Una mente inquieta. Alguien que hacía demasiadas preguntas. Poco después, una cadena de muertes sacude familias importantes. Las víctimas no parecen tener relación entre sí… hasta que un detalle comienza a repetirse. Una venganza que no distingue entre inocentes y culpables.",
    categoria: "novela",
    amazon: "https://www.amazon.es/canto-gallo-Daniel-Jerez-Torns/dp/B0GSFNMQ7H",
  },
  {
    id: "el-pasado-nunca-nos-olvida",
    titulo: "El pasado nunca nos olvida",
    subtitulo: "A veces los crímenes impunes salen a la luz",
    ano: 2022,
    paginas: 320,
    editorial: "Maeva Noir",
    sinopsis:
      "En El Prat de Llobregat siempre se ha dicho que no pasa nada. Pero hay silencios que duran demasiado… y cuando se rompen, lo hacen con violencia. Una novela negra donde los crímenes del pasado regresan para cobrarse lo que se les debe.",
    categoria: "novela",
    amazon: "https://www.amazon.es/El-pasado-nunca-nos-olvida/dp/8419110485",
  },
  {
    id: "el-silencio-de-las-ruinas",
    titulo: "El silencio de las ruinas",
    ano: 2020,
    editorial: "Autoedición",
    sinopsis:
      "Una historia de misterio ambientada en escenarios cargados de historia. El silencio guarda secretos que las ruinas nunca podrán contar… hasta ahora.",
    categoria: "novelacorta",
    amazon:
      "https://www.amazon.es/El-silencio-de-las-ruinas-Daniel-Jerez-Torns-ebook/dp/B086R5WQV5",
  },
  {
    id: "el-beso-de-la-muerte",
    titulo: "El beso de la muerte",
    ano: 2020,
    editorial: "Autoedición",
    sinopsis:
      "Novela negra que sumerge al lector en una trama de crimen e intriga. Cuando la muerte besa a sus víctimas, nada vuelve a ser lo mismo.",
    categoria: "novela",
    amazon:
      "https://www.amazon.es/El-beso-de-la-muerte-Daniel-Jerez-Torns-ebook/dp/B0851MPJGP",
  },
  {
    id: "al-iksir",
    titulo: "Al-iksir",
    ano: 2024,
    sinopsis:
      "Una historia que combina misterio y ciencia en torno a una antigua fórmula de conocimiento y poder. El elixir de la vida es solo el principio.",
    categoria: "novelacorta",
    amazon:
      "https://www.amazon.es/Al-iksir-Daniel-Jerez-Torns-ebook/dp/B0CWY5MPZ9",
  },
  {
    id: "el-secreto-del-tesoro-guardado",
    titulo: "El secreto del tesoro guardado",
    ano: 2025,
    sinopsis:
      "Una aventura llena de misterio y descubrimientos. Un tesoro oculto espera ser encontrado, pero alguien más lo busca también.",
    categoria: "cuento-adolescente",
    amazon:
      "https://www.amazon.es/El-secreto-del-tesoro-guardado-Daniel-Jerez-Torns-ebook/dp/B0DZ5X4VY5",
  },
  {
    id: "el-faraon-y-el-prevencionista",
    titulo: "El Faraón y el prevencionista",
    ano: 2025,
    sinopsis:
      "Un cruce inesperado entre el antiguo Egipto y el mundo de la prevención de riesgos laborales. Una historia tan original como sorprendente.",
    categoria: "cuento-adolescente",
    amazon:
      "https://www.amazon.es/El-Fara%C3%B3n-prevencionista-Daniel-Jerez-Torns-ebook/dp/B0G1QSGLD4",
  },
  {
    id: "la-formula-terradas",
    titulo: "La fórmula Terradas",
    ano: 2014,
    sinopsis:
      "Una intriga científica donde una fórmula secreta puede cambiarlo todo. Misterio, ciencia y una carrera contrarreloj.",
    categoria: "novela",
    amazon:
      "https://www.amazon.es/La-f%C3%B3rmula-Terradas-Daniel-Jerez-Torns-ebook/dp/B00O7D4XX6",
  },
  {
    id: "el-arcabucero-n-61",
    titulo: "El arcabucero nº 61",
    subtitulo: "Misterio histórico, intriga científica y asesinato",
    ano: 2012,
    sinopsis:
      "Misterio histórico, intriga científica y asesinato se dan cita en esta novela que transporta al lector a una época de conspiraciones y secretos.",
    categoria: "novela",
    amazon:
      "https://www.amazon.es/El-arcabucero-n%C2%BA-61-Spanish-ebook/dp/B00G2PYF76",
  },
  {
    id: "relatos-tendidos",
    titulo: "Relatos tendidos",
    subtitulo: "Relatos breves sobre lo cotidiano, lo absurdo y lo inesperado",
    ano: 2026,
    sinopsis:
      "Una colección de relatos breves que exploran lo cotidiano, lo absurdo y lo inesperado. Historias que tienden un puente entre la realidad y la sorpresa.",
    categoria: "novelacorta",
    amazon:
      "https://www.amazon.es/Relatos-tendidos-Daniel-Jerez-Torns-ebook/dp/B0GXVY44X8",
  },
  {
    id: "grietas-en-el-muro",
    titulo: "Grietas en el muro",
    ano: 2026,
    sinopsis:
      "A veces las grietas no están en el muro, sino en nosotros. Un relato que invita a mirar más allá de las apariencias.",
    categoria: "novelacorta",
    amazon:
      "https://www.amazon.es/Grietas-en-el-muro-Daniel-Jerez-Torns-ebook/dp/B0H1YHB8CX",
  },
  {
    id: "el-mapa-de-la-isla-del-estres",
    titulo: "El mapa de la isla del estrés",
    ano: 2025,
    paginas: 44,
    sinopsis:
      "Un libro ilustrado que explora el estrés de una manera original y visual. Un mapa para navegar por las tormentas emocionales de la vida moderna.",
    categoria: "cuento-adolescente",
    amazon:
      "https://www.amazon.es/El-mapa-isla-del-estr%C3%A9s-Daniel-Jerez-Torns-ebook/dp/B0FP2M68PG",
  },
  {
    id: "tres-en-raya",
    titulo: "Tres en raya",
    ano: 2026,
    sinopsis:
      "Un relato donde el destino juega una partida decisiva. A veces la vida se decide en un tablero de tres en raya.",
    categoria: "cuento-adolescente",
  },
  {
    id: "cada-etapa-su-camino",
    titulo: "Cada etapa, su camino",
    ano: 2026,
    sinopsis:
      "Un cuento infantil que enseña que en la vida cada etapa tiene su propio camino, y que todos los caminos merecen ser recorridos.",
    categoria: "cuento-infantil",
  },
]
