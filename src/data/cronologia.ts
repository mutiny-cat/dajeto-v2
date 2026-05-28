export interface EventoTrayectoria {
  ano: number
  titulo: string
  descripcion: string
  estado: "completado" | "pendiente"
}

export const trayectoria: EventoTrayectoria[] = [
  {
    ano: 2005,
    titulo: "Inicios en la escritura",
    descripcion:
      "Daniel Jerez comienza su andadura literaria escribiendo relatos cortos, explorando su voz narrativa y los géneros que más tarde definirían su carrera.",
    estado: "completado",
  },
  {
    ano: 2012,
    titulo: "Publicación de El arcabucero nº 61",
    descripcion:
      "Su primera novela publicada. Un misterio histórico que combina intriga científica y asesinato, sentando las bases de su estilo narrativo.",
    estado: "completado",
  },
  {
    ano: 2014,
    titulo: "La fórmula Terradas",
    descripcion:
      "Publica esta intriga científica donde una fórmula secreta amenaza con cambiarlo todo. La novela consolida su presencia en el panorama literario.",
    estado: "completado",
  },
  {
    ano: 2020,
    titulo: "Doble publicación: El beso de la muerte y El silencio de las ruinas",
    descripcion:
      "Un año clave en su carrera con dos novelas publicadas. El beso de la muerte se convierte en una de sus obras más valoradas por los lectores.",
    estado: "completado",
  },
  {
    ano: 2022,
    titulo: "El pasado nunca nos olvida (Maeva Noir)",
    descripcion:
      "Da el salto a una editorial nacional con Maeva Noir. La novela, ambientada en El Prat de Llobregat, recibe excelentes críticas y amplía su alcance como escritor de novela negra.",
    estado: "completado",
  },
  {
    ano: 2024,
    titulo: "Al-iksir",
    descripcion:
      "Publica Al-iksir, una novela que fusiona misterio y ciencia en torno a una antigua fórmula de conocimiento.",
    estado: "completado",
  },
  {
    ano: 2025,
    titulo: "Tres nuevos títulos",
    descripcion:
      "Un año prolífico con El secreto del tesoro guardado, El Faraón y el prevencionista, y El mapa de la isla del estrés, explorando nuevos formatos y temáticas.",
    estado: "completado",
  },
  {
    ano: 2026,
    titulo: "El canto del gallo",
    descripcion:
      "Su obra más ambiciosa: 416 páginas de novela policiaca. La historia de la agente Lorena Escudero marca un antes y un después en su carrera. Publica también Relatos tendidos y Grietas en el muro.",
    estado: "completado",
  },
]
