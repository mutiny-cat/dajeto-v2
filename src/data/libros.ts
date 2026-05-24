export interface EnlaceCompra {
  tienda: string
  url: string
  formato: "tapa-blanda" | "tapa-dura" | "ebook" | "audiolibro"
  logo: string
}

export interface Libro {
  id: string
  titulo: string
  subtitulo?: string
  ano: number
  paginas?: number
  editorial?: string
  sinopsis: string
  categoria: "novela" | "novelacorta" | "cuento-adolescente" | "cuento-infantil"
  portadaMini?: string
  portada?: string
  enlaces: EnlaceCompra[]
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
    portadaMini: "portada-el-canto-del-gallo.png",
    portada: "portada-el-canto-del-gallo.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/canto-gallo-Daniel-Jerez-Torns/dp/B0GSFNMQ7H", formato: "tapa-blanda", logo: "simple-icons:amazon" },
      { tienda: "Amazon", url: "https://www.amazon.es/canto-gallo-Daniel-Jerez-Torns-ebook/dp/B0GSCGHFJG", formato: "ebook", logo: "simple-icons:amazon" },
    ],
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
    portadaMini: "portada-el-pasado-nunca-nos-olvida.png",
    portada: "portada-el-pasado-nunca-nos-olvida.png",
    enlaces: [
      { tienda: "Casa del Libro", url: "https://www.casadellibro.com/libro-el-pasado-nunca-nos-olvida/9788419110480/13185437", formato: "tapa-blanda", logo: "local:casadellibro" },
      { tienda: "FNAC", url: "https://www.fnac.es/a9547088/Daniel-Jerez-El-pasado-nunca-nos-olvida", formato: "tapa-blanda", logo: "simple-icons:fnac" },
      { tienda: "El Corte Inglés", url: "https://www.elcorteingles.es/libros/A44795177-el-pasado-nunca-nos-olvida-a-veces-los-crimenes-impunes-salen-a-la-luz-tapa-blanda/", formato: "tapa-blanda", logo: "local:elcorteingles" },
      { tienda: "Amazon", url: "https://www.amazon.es/El-pasado-nunca-nos-olvida-ebook/dp/B0B7B93HCQ", formato: "ebook", logo: "simple-icons:amazon" },
      { tienda: "Kobo", url: "https://www.kobo.com/es/es/ebook/el-pasado-nunca-nos-olvida", formato: "ebook", logo: "simple-icons:kobo" },
      { tienda: "Casa del Libro", url: "https://www.casadellibro.com/ebook-el-pasado-nunca-nos-olvida-ebook/9788419110572/13151373", formato: "ebook", logo: "local:casadellibro" },
      { tienda: "Nextory", url: "https://www.nextory.es/libro/el-pasado-nunca-nos-olvida-11725320/", formato: "ebook", logo: "local:nextory" },
      { tienda: "Google Play", url: "https://play.google.com/store/books/details/Daniel_Jerez_El_pasado_nunca_nos_olvida?id=EBt9EAAAQBAJ", formato: "ebook", logo: "simple-icons:googleplay" },
      { tienda: "Apple Books", url: "https://books.apple.com/es/book/el-pasado-nunca-nos-olvida/id6443200879", formato: "ebook", logo: "simple-icons:applebooks" },
      { tienda: "Audible", url: "https://www.audible.es/pd/El-pasado-nunca-nos-olvida-Audiolibro/B0BF5VX968", formato: "audiolibro", logo: "simple-icons:audible" },
      { tienda: "Apple Books", url: "https://books.apple.com/es/audiobook/el-pasado-nunca-nos-olvida-a-veces-los/id1645343488", formato: "audiolibro", logo: "simple-icons:applebooks" },
    ],
  },
  {
    id: "relatos-tendidos",
    titulo: "Relatos tendidos",
    subtitulo: "Relatos breves sobre lo cotidiano, lo absurdo y lo inesperado",
    ano: 2026,
    paginas: 135,
    editorial: "Autoedición",
    sinopsis:
      "Un hombre entra en un bar y descubre que el tiempo puede detenerse. Un experimento con ratas revela quién observa realmente a quién. Un príncipe rompe el destino del mundo por un detalle insignificante. En Relatos tendidos, Daniel Jerez despliega una colección de historias breves donde lo aparentemente trivial se transforma en algo inquietante, irónico o profundamente revelador.",
    categoria: "novelacorta",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Relatos-tendidos-cotidiano-absurdo-inesperado-ebook/dp/B0GXVY44X8", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "grietas-en-el-muro",
    titulo: "Grietas en el muro",
    ano: 2026,
    paginas: 167,
    editorial: "Autoedición",
    sinopsis:
      "En una ciudad cubierta por una extraña niebla, Víctor, un barrendero desencantado, descubre pequeños escarabajos que empujan bolas formadas por palabras como \"esperanza\", \"amor\" o \"futuro\". Junto a Clara, iniciará una lucha absurda y simbólica contra el Señor Muro, una fuerza que manipula la mente colectiva. Una novela fantástica y distópica sobre la lucha por no dejar de sentir, pensar y soñar.",
    categoria: "novelacorta",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Grietas-en-el-Muro-Suspenso-Psicol%C3%B3gica-ebook/dp/B0H1YHB8CX", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-silencio-de-las-ruinas",
    titulo: "El silencio de las ruinas",
    ano: 2020,
    paginas: 107,
    editorial: "Autoedición",
    sinopsis:
      "Agosto de 2010, las obras del AVE provocan la caída de la Sagrada Familia. El caos se adueña de Barcelona. 25 años después, un grupo terrorista intenta sumergir de nuevo la ciudad en la oscuridad. Salva intentará evitar el ataque y defender el turismo, la principal fuente de ingresos. Una distopía que pone en tela de juicio el modelo turístico de las ciudades.",
    categoria: "novelacorta",
    portadaMini: "portada-el-silencio-de-las-ruinas.png",
    portada: "portada-el-silencio-de-las-ruinas.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-silencio-de-las-ruinas-Daniel-Jerez-Torns-ebook/dp/B086R5WQV5", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-beso-de-la-muerte",
    titulo: "El beso de la muerte",
    ano: 2020,
    paginas: 391,
    editorial: "Autoedición",
    sinopsis:
      "Un extraño descubrimiento en el Polo Sur desencadena una serie de acontecimientos que arrastrarán a Blanca Serrano, periodista de ocultismo, y a Rosa Vidal, inspectora de policía, a una oscura trama. Deberán descifrar unos misteriosos escritos de Jacinto Verdaguer y enfrentarse a la CIA y a una peligrosa organización terrorista para evitar que se apoderen de un arma que cambiaría la historia de la Humanidad.",
    categoria: "novela",
    portadaMini: "portada-el-beso-de-la-muerte.png",
    portada: "portada-el-beso-de-la-muerte.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/beso-muerte-Daniel-Jerez-Torns-ebook/dp/B0851MPJGP", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "al-iksir",
    titulo: "Al-iksir",
    ano: 2024,
    paginas: 180,
    editorial: "Autoedición",
    sinopsis:
      "El hallazgo de cinco esqueletos y unas escrituras en unos extraños cilindros durante unas excavaciones en Barcelona reúne a seis antiguos compañeros de instituto en una cena de amigos. Durante la velada se destapa el verdadero motivo de la reunión: ¿es posible la vida eterna? Daniel emprende la búsqueda del secreto como escritor, sin saber que las historias y personajes que hallará en un extraño pueblo formarán su propio proceso alquímico.",
    categoria: "novelacorta",
    portadaMini: "portada-al-iksir.png",
    portada: "portada-al-iksir.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Al-iksir-Daniel-Jerez-Torns-ebook/dp/B0CWY5MPZ9", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "la-formula-terradas",
    titulo: "La fórmula Terradas",
    ano: 2014,
    paginas: 371,
    editorial: "Autoedición",
    sinopsis:
      "En febrero de 1923 Albert Einstein visitó Barcelona para explicar la Teoría de la Relatividad, gracias a la intermediación del físico catalán Esteban Terradas. Pero el objetivo principal de su visita era otro e implicaba un gran peligro. Noventa años después, el inspector Ponce investiga el asesinato de un anticuario que guardaba el diario de Héctor Jubany, ayudante de Terradas. El caso lleva al inspector a sumergirse en edificios históricos y a descubrir la conexión entre los dos científicos y un legado que, en las manos equivocadas, desataría graves delitos.",
    categoria: "novela",
    portadaMini: "portada-la-formula-terradas.png",
    portada: "portada-la-formula-terradas.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/f%C3%B3rmula-Terradas-Daniel-Jerez-Torns-ebook/dp/B01C4VVN8A", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-arcabucero-numero-61",
    titulo: "El arcabucero nº 61",
    subtitulo: "Misterio histórico, intriga científica y asesinato",
    ano: 2012,
    paginas: 462,
    editorial: "Autoedición",
    sinopsis:
      "El 17 de julio de 1642, 61 arcabuceros de Yecla fueron enviados a Vinaroz para detener el avance francés. Uno de ellos tenía una misión secreta: custodiar un artefacto de Galileo Galilei capaz de cambiar el curso de la humanidad. Siglos después, Valeria Soto, profesora de física, investiga la leyenda del arcabucero nº 61 y su relación con Galileo, Pascal y Yecla. Lo que empieza como una investigación inocente la convertirá en el blanco de un asesino sin escrúpulos.",
    categoria: "novela",
    portadaMini: "portada-el-arcabucero-numero-61.png",
    portada: "portada-el-arcabucero-numero-61.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-arcabucero-Daniel-Jerez-Torns-ebook/dp/B00G2PYF76", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-secreto-del-tesoro-guardado",
    titulo: "El secreto del tesoro guardado",
    ano: 2025,
    paginas: 57,
    editorial: "Autoedición",
    sinopsis:
      "En el pequeño pueblo de Pesimismo, nadie sonríe. Pero Félix, un niño curioso, descubre que existe un tesoro capaz de transformar la vida de todos. Para encontrarlo deberá enfrentarse al dragón Envidia y a la araña Crítica, y descubrir que el verdadero tesoro no siempre está donde uno espera. Una historia de aventuras, magia y enseñanzas sobre el poder de la sonrisa, el optimismo y la valentía.",
    categoria: "cuento-adolescente",
    portadaMini: "portada-el-secreto-del-tesoro-guardado.png",
    portada: "portada-el-secreto-del-tesoro-guardado.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-secreto-del-tesoro-guardado-ebook/dp/B0DZ5X4VY5", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-faraon-y-el-prevencionista",
    titulo: "El Faraón y el prevencionista",
    ano: 2025,
    paginas: 11,
    editorial: "Autoedición",
    sinopsis:
      "Cuando el Faraón Empresarioteth I decide construir la pirámide más grandiosa de Egipto, no imagina que el mayor obstáculo será la llegada de Jahi, un humilde prevencionista. Con normas bajo el brazo y entusiasmo por la seguridad laboral, Jahi revolucionará el Imperio. Un relato ingenioso que demuestra que garantizar el bienestar de las personas siempre ha sido una obra faraónica.",
    categoria: "cuento-adolescente",
    portadaMini: "portada-el-faraon-y-el-prevencionista.png",
    portada: "portada-el-faraon-y-el-prevencionista.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-Fara%C3%B3n-y-el-prevencionista-ebook/dp/B0G1QSGLD4", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-mapa-de-la-isla-del-estres",
    titulo: "El mapa de la isla del estrés",
    ano: 2025,
    paginas: 47,
    editorial: "Autoedición",
    sinopsis:
      "Alma, coordinadora de proyectos y madre exigente consigo misma, recorre paisajes que son metáforas del estrés: el Volcán de la Reactividad, el Desierto de la Desconexión, el Pantano de los Pensamientos sin Parar. Cada escenario refleja las trampas del estrés y ofrece claves para afrontarlas. Una novela corta divulgativa que transforma el estrés en un mapa para volver a ti.",
    categoria: "cuento-adolescente",
    portadaMini: "portada-el-mapa-de-la-isla-del-estres.png",
    portada: "portada-el-mapa-de-la-isla-del-estres.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-mapa-isla-del-estr%C3%A9s-Daniel-Jerez-Torns-ebook/dp/B0FP2M68PG", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "tres-en-raya",
    titulo: "Tres en raya",
    ano: 2025,
    paginas: 50,
    editorial: "Autoedición",
    sinopsis:
      "Tres en raya reúne tres relatos independientes unidos por una mirada crítica sobre la identidad, el poder y las trampas del bienestar moderno. Un hombre se somete a un trasplante de felicidad, una frontera invisible convierte a un ciudadano en extranjero sin moverse de casa. Una colección que plantea preguntas incómodas: ¿somos quienes creemos ser? ¿Hasta qué punto decidimos lo que nos hace felices?",
    categoria: "cuento-adolescente",
    portadaMini: "portada-tres-en-raya.png",
    portada: "portada-tres-en-raya.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Tres-raya-Daniel-Jerez-Torns-ebook/dp/B0GD979Q8P", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "cada-etapa-su-camino",
    titulo: "Cada etapa, su camino",
    subtitulo: "Tres cuentos sobre crecer, confiar y atreverse",
    ano: 2026,
    paginas: 63,
    editorial: "Autoedición",
    sinopsis:
      "Cada etapa, su camino reúne tres cuentos infantiles protagonizados por una tortuga de mar, un canguro y un águila, que acompañan a los niños en distintas etapas de su crecimiento. A través de sus historias descubrirán valores como la confianza, la diversidad, el esfuerzo, la ayuda mutua y la valentía de atreverse. Incluye dibujos para colorear.",
    categoria: "cuento-infantil",
    portadaMini: "portada-cada-etapa-su-camino.png",
    portada: "portada-cada-etapa-su-camino.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Cada-etapa-camino-Tres-atreverse-ebook/dp/B0GL174TMW", formato: "ebook", logo: "simple-icons:amazon" },
      { tienda: "Amazon", url: "https://www.amazon.es/Cada-etapa-camino-Tres-atreverse/dp/B0GL174TMW", formato: "tapa-blanda", logo: "simple-icons:amazon" },
    ],
  },
]
