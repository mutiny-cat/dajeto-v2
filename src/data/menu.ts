export interface ItemMenu {
  ruta?: string
  texto: string
  hijos?: ItemMenu[]
}

export const menu: ItemMenu[] = [
  {
    texto: "Novela",
    hijos: [
      { ruta: "/novela/el-canto-del-gallo/", texto: "El canto del gallo" },
      { ruta: "/novela/el-pasado-nunca-nos-olvida/", texto: "El pasado nunca nos olvida" },
      { ruta: "/novela/el-beso-de-la-muerte/", texto: "El beso de la muerte" },
      { ruta: "/novela/la-formula-terradas/", texto: "La fórmula Terradas" },
      { ruta: "/novela/el-arcabucero-numero-61/", texto: "El arcabucero nº 61" },
    ],
  },
  {
    texto: "Novela corta",
    hijos: [
      { ruta: "/novela-corta/relatos-tendidos/", texto: "Relatos tendidos" },
      { ruta: "/novela-corta/grietas-en-el-muro/", texto: "Grietas en el muro" },
      { ruta: "/novela-corta/el-silencio-de-las-ruinas/", texto: "El silencio de las ruinas" },
      { ruta: "/novela-corta/al-iksir/", texto: "Al-iksir" },
    ],
  },
  {
    texto: "Cuentos",
    hijos: [
      {
        texto: "Adolescentes y adultos",
        hijos: [
          { ruta: "/cuentos/adolescentes/el-secreto-del-tesoro-guardado/", texto: "El secreto del tesoro guardado" },
          { ruta: "/cuentos/adolescentes/el-faraon-y-el-prevencionista/", texto: "El Faraón y el prevencionista" },
          { ruta: "/cuentos/adolescentes/el-mapa-de-la-isla-del-estres/", texto: "El mapa de la isla del estrés" },
          { ruta: "/cuentos/adolescentes/tres-en-raya/", texto: "Tres en raya" },
        ],
      },
      {
        texto: "Infantiles",
        hijos: [
          { ruta: "/cuentos/infantiles/cada-etapa-su-camino/", texto: "Cada etapa, su camino" },
        ],
      },
    ],
  },
  { ruta: "/cronologia/cronologia/", texto: "Cronología" },
  { ruta: "/biografia/biografia/", texto: "Biografía" },
]
