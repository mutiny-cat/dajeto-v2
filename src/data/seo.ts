export const SITE = {
  title: "Daniel Jerez Torns",
  description: "Daniel Jerez Torns, escritor de novela negra, misterio e intriga. Autor de obras como El canto del gallo, El pasado nunca nos olvida y La fórmula Terradas. Psicólogo y especialista en PRL. Descubre sus novelas, novelas cortas y cuentos ambientados en El Prat de Llobregat, Barcelona, Poble Nou de Barcelona y Yecla, población de Murcia, donde transcurre El arcabucero nº 61.",
  url: "https://danieljerez.es",
  author: "Mutinycat",
  defaultImage: "/assets/images/miscelanea/daniel-jerez.png",
  lang: "es",
}

export function getPageSEO(title: string, description?: string, image?: string) {
  return {
    title: `${title} | ${SITE.title}`,
    description: description || SITE.description,
    image: image || SITE.defaultImage,
  }
}
