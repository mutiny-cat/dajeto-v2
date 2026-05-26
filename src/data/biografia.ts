export interface ParrafoBiografia {
  id: string
  texto: string
}

export interface Biografia {
  cita: string
  parrafos: ParrafoBiografia[]
}

export const biografia: Biografia = {
  cita: "El señor Charles me inculcó la pasión por la lectura...",
  parrafos: [
    {
      id: "nacimiento",
      texto: "Nací un 11 de septiembre, allá por el año 1975, en Barcelona.",
    },
    {
      id: "infancia",
      texto: "Viví esa feliz época retro de los ochenta con gran intensidad y al llegar a octavo de EGB cambié de colegio.",
    },
    {
      id: "cambio-colegio",
      texto: "Aquello supuso un gran cambio para mí en muchos aspectos: cambio de amistades, de impulso en los estudios y, sobre todo, en conocer la literatura.",
    },
    {
      id: "profesor",
      texto: "Tuve un profesor en Literatura Española, el Sr. Charles, que me inculcó la pasión por la lectura, por la comprensión del texto y por conocer los autores a fondo.",
    },
    {
      id: "psicologia",
      texto: "Durante mis estudios en la Licenciatura de Psicología nació mi pasión por la escritura de relatos cortos, muy influenciado por Kafka, Poe, Sergi Pàmies y Quim Monzó.",
    },
    {
      id: "al-iksir",
      texto: "Poco a poco los relatos se van haciendo cada vez más grandes y escribo, a medio camino entre novela y relatos cortos, Al-iksir.",
    },
    {
      id: "novelas",
      texto: "Publiqué mi primera novela de misterio en 2012, «El arcabucero nº 61» y desde entonces he publicado tres novelas más. «La fórmula Terradas» en 2014, «El beso de la muerte» en 2020 y «El silencio de las ruinas» también en 2020.",
    },
    {
      id: "novela-negra",
      texto: "«El pasado nunca nos olvida» es mi primera incursión en la novela negra, cuya trama transcurre en El Prat del Llobregat, ciudad donde crecí, estudié y me enamoré.",
    },
  ],
}
