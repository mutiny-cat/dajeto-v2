export interface ParrafoBiografia {
  id: string
  texto: string
}

export interface Biografia {
  cita: string
  sinopsis: string
  biografia: ParrafoBiografia[]
}

export const biografia: Biografia = {
  cita: "El señor Charles me inculcó la pasión por la lectura...",
  sinopsis: "Daniel Jerez Torns (Barcelona, 1975) es psicólogo de formación y escritor de vocación. Sus lectores destacan su estilo sencillo y directo, la rigurosa documentación histórica y una ambientación que convierte El Prat de Llobregat en un personaje más de sus novelas. Capítulos cortos, ritmo ágil y tramas que entrelazan pasado y presente definen su narrativa, donde la novela negra y el misterio se combinan con temas como el acoso escolar, la corrupción o el Alzheimer. Desde su primera novela en 2012, ha ido construyendo una obra que sus lectores definen como «adictiva» y «un descubrimiento».",
  biografia: [
    {
      id: "nacimiento",
      texto: "Nací un 11 de septiembre de 1975, en Barcelona.",
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
      texto: "Tuve un profesor de literatura, el Sr. Charles, que me inculcó la pasión por la lectura, por la comprensión del texto y por conocer los autores a fondo.",
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
      texto: "«El pasado nunca nos olvida» es mi primera incursión en la novela negra, cuya trama transcurre en El Prat de Llobregat, ciudad donde crecí, estudié y me enamoré.",
    },
    {
      id: "el-canto-del-gallo",
      texto: "«El canto del gallo» es mi última novela, publicada en 2026, donde Lorena Escudero, la agente de la Guardia Urbana, investiga una cadena de muertes que agita las familias más poderosas de El Prat de Llobregat. Una historia de suspense y venganza que arranca con el hallazgo del cuerpo de una joven periodista en el estanque de La Ricarda.",
    },
  ],
}
