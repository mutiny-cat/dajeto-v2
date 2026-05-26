export interface EnlaceCompra {
  tienda: string
  url: string
  formato: "tapa-blanda" | "tapa-dura" | "ebook" | "audiolibro"
  logo: string
}

export interface Libro {
  id: string
  titulo: string
  ano: number
  paginas?: number
  editorial?: string
  fraseHero?: string
  cita?: string
  contenido?: string
  sinopsis: string
  categoria: "novela" | "novela-corta" | "cuento-adolescente" | "cuento-infantil"
  categoriaColor: "novela" | "novela-corta" | "cuento-adolescente" | "cuento-infantil"
  fechaAgregado: string
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
    fraseHero: "Cuando el gallo cante, alguien caerá",
    cita: "El pasado jamás se olvida, pero los intentos de taparlo o negarlo repercuten en el ahora, y es ahí donde las consecuencias se hacen visibles.",
    contenido:
      "Nadia estaba investigando un secreto antiguo.\n\nUn secreto que alguien creyó enterrado para siempre.\n\nLo que parece un crimen aislado pronto se convierte en algo mucho más inquietante.\n\nEn El Prat de Llobregat siempre se ha dicho que no pasa nada. Pero hay silencios que duran demasiado… y cuando se rompen, lo hacen con violencia.\n\nLa agente Lorena Escudero encuentra el cuerpo de Nadia Lozano en el estanque de La Ricarda. Una joven periodista. Una mente inquieta. Alguien que hacía demasiadas preguntas.\n\nPoco después, una cadena de muertes sacude familias importantes. Las víctimas no parecen tener relación entre sí… hasta que un detalle comienza a repetirse. Un patrón. Una venganza que no distingue entre inocentes y culpables.\n\nMientras el presente se desmorona, Lorena descubre que todo conduce a decisiones tomadas décadas atrás. Decisiones que cambiaron vidas. Que alteraron destinos. Que sembraron rencor.\n\nPorque hay heridas que no cicatrizan. Hay culpas que no prescriben. Y hay pasados que, tarde o temprano, regresan para cobrarse lo que se les debe.",
    sinopsis:
      "La agente Lorena Escudero encuentra el cuerpo de Nadia Lozano en el estanque de La Ricarda. Una joven periodista. Una mente inquieta. Alguien que hacía demasiadas preguntas. Poco después, una cadena de muertes sacude familias importantes. Las víctimas no parecen tener relación entre sí… hasta que un detalle comienza a repetirse. Una venganza que no distingue entre inocentes y culpables.",
    categoria: "novela",
    categoriaColor: "novela",
    fechaAgregado: "2026-05-20",
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
    ano: 2022,
    paginas: 320,
    editorial: "Maeva Noir",
    fraseHero: "A veces los crímenes impunes salen a la luz",
    cita: "Por mucho que uno intentara taparlo, esconderlo, camuflarlo, el pasado siempre estaba ahí.\n\nEl título del artículo se lo recordaba: \"El pasado nunca nos olvida\", y es así como nos encadena.",
    contenido:
      "Un avión de combate desenterrado en las inmediaciones de El Prat, en Barcelona.\n\nUn periodista que investiga el asesinato de un amigo.\n\nUna policía que regresa al lugar donde pasó su infancia.\n\nEl hallazgo en los terrenos de El Prat de Llobregat de los restos de un avión de combate alemán accidentado en un vuelo de exhibición en 1940, saca a la luz los restos del fuselaje y los huesos del piloto.\n\nSebastian, periodista de un diario local de El Prat, cubre la noticia con ayuda de su amigo Vidal, técnico del aeropuerto, que le aporta valiosa información. Un año más tarde, le tocará investigar la muerte de su amigo junto a Lorena, una antigua compañera de clase, que trabaja ahora como agente de la Guardia Urbana de Barcelona. Entre los dos indagarán en el pasado de la Caserna de los Carabineros de El Prat de Llobregat y se toparán con un secreto oculto durante décadas.",
    sinopsis:
      "En El Prat de Llobregat siempre se ha dicho que no pasa nada. Pero hay silencios que duran demasiado… y cuando se rompen, lo hacen con violencia. Una novela negra donde los crímenes del pasado regresan para cobrarse lo que se les debe.",
    categoria: "novela",
    categoriaColor: "novela",
    fechaAgregado: "2023-04-10",
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
    fraseHero: "Relatos breves sobre lo cotidiano, lo absurdo y lo inesperado",
    cita: "vacío",
    ano: 2026,
    paginas: 135,
    editorial: "Autoedición",
    contenido:
      "Doce relatos que transforman lo cotidiano en algo inquietante, irónico o profundamente revelador.\n\nUn hombre entra en un bar y descubre que el tiempo puede detenerse. Un experimento con ratas revela quién observa realmente a quién. Un príncipe rompe el destino del mundo por un detalle insignificante.\n\nEn Relatos tendidos, Daniel Jerez despliega una colección de historias breves donde lo aparentemente trivial se transforma en algo inesperado. Cada relato es una invitación a mirar la realidad desde un ángulo distinto, a cuestionar lo que damos por sentado y a encontrar la belleza —o el absurdo— en los pequeños detalles.",
    sinopsis:
      "Un hombre entra en un bar y descubre que el tiempo puede detenerse. Un experimento con ratas revela quién observa realmente a quién. Un príncipe rompe el destino del mundo por un detalle insignificante. En Relatos tendidos, Daniel Jerez despliega una colección de historias breves donde lo aparentemente trivial se transforma en algo inquietante, irónico o profundamente revelador.",
    categoria: "novela-corta",
    categoriaColor: "novela-corta",
    fechaAgregado: "2026-05-18",
    portadaMini: "portada-relatos-tendidos.png",
    portada: "portada-relatos-tendidos.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Relatos-tendidos-cotidiano-absurdo-inesperado-ebook/dp/B0GXVY44X8", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "grietas-en-el-muro",
    titulo: "Grietas en el muro",
    fraseHero: "¿Qué ocurriría si las ideas, los sueños y los valores pudieran desaparecer físicamente de las personas?",
    cita: "vacío",
    ano: 2026,
    paginas: 167,
    editorial: "Autoedición",
    contenido:
      "En una ciudad cubierta por una extraña niebla que adormece la voluntad de sus habitantes, todo parece perdido.\n\nVíctor, un barrendero desencadenado, descubre pequeños escarabajos que empujan bolas formadas por palabras como esperanza, amor, futuro o sueño. Son fragmentos de un mundo que la niebla intenta borrar.\n\nJunto a Clara iniciarán una lucha absurda y simbólica contra el Señor Muro, una fuerza que manipula la mente colectiva. Una batalla contra la resignación, el olvido y la apatía. Una novela fantástica y distópica sobre la lucha por no dejar de sentir, pensar y soñar.",
    sinopsis:
      "En una ciudad cubierta por una extraña niebla, Víctor, un barrendero desencantado, descubre pequeños escarabajos que empujan bolas formadas por palabras como \"esperanza\", \"amor\" o \"futuro\". Junto a Clara, iniciará una lucha absurda y simbólica contra el Señor Muro, una fuerza que manipula la mente colectiva. Una novela fantástica y distópica sobre la lucha por no dejar de sentir, pensar y soñar.",
    categoria: "novela-corta",
    categoriaColor: "novela-corta",
    fechaAgregado: "2026-05-15",
    portadaMini: "portada-grietas-en-el-muro.png",
    portada: "portada-grietas-en-el-muro.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Grietas-en-el-Muro-Suspenso-Psicol%C3%B3gica-ebook/dp/B0H1YHB8CX", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-silencio-de-las-ruinas",
    titulo: "El silencio de las ruinas",
    fraseHero: "Una trama de misterio en una Barcelona de 2035",
    ano: 2020,
    paginas: 107,
    editorial: "Autoedición",
    cita: "La ciudad se despertaba inocente de lo que le deparaba.\n\nNada sería igual. Cabía esa posibilidad y todo el mundo lo sabía, sin embargo, como siempre ocurre, las personas tienden a pensar que nada malo puede ocurrirnos a nosotros.",
    contenido:
      "Agosto de 2010, las obras del AVE, el tren de alta velocidad, provocan la caída de la Sagrada Familia.\n\nEl caos se adueña de la ciudad y Barcelona dejará de ser lo que era.\n\n25 años después, a las puertas del aniversario del Derrumbe, un grupo terrorista intenta sumergir de nuevo a la ciudad en la oscuridad. Barcelona ha sufrido muchos cambios desde entonces.\n\nSalva intentará evitar el éxito de la acción terrorista y defender la principal fuente de ingresos de la ciudad: el turismo.\n\nUna trama de misterio en una Barcelona de 2035 que pone en tela de juicio el modelo turístico de las ciudades y el impacto que tiene en la sociedad.",
    sinopsis:
      "Agosto de 2010, las obras del AVE provocan la caída de la Sagrada Familia. El caos se adueña de Barcelona. 25 años después, un grupo terrorista intenta sumergir de nuevo la ciudad en la oscuridad. Salva intentará evitar el ataque y defender el turismo, la principal fuente de ingresos. Una distopía que pone en tela de juicio el modelo turístico de las ciudades.",
    categoria: "novela-corta",
    categoriaColor: "novela-corta",
    fechaAgregado: "2025-11-01",
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
    fraseHero: "Un extraño y aparentemente fortuito descubrimiento en el polo sur",
    cita: "Los nueve cadáveres estaban momificados por haber permanecido tanto tiempo bajo el hielo. Todos mostraban una piel dura, parecida al cuero curtido. La mayoría conservaba el pelo y dientes, lo que creaba un ambiente aún más terrorífico a la escena.",
    contenido:
      "Manifestación.\n\nInfestación.\n\nOpresión.\n\nUn extraño y aparentemente fortuito descubrimiento en el Polo Sur desencadena una serie de acontecimientos que arrastrará a Blanca Serrano, periodista de una revista de ocultismo, y a Rosa Vidal, inspectora de policía, a una oscura trama que les llevará a intentar descifrar unos misteriosos escritos de Jacinto Verdaguer y en la que deberán enfrentarse a poderosas organizaciones como la CIA y una peligrosa organización terrorista para evitar que se apoderen de un arma que pondría en peligro la historia de la Humanidad tal y como la conocemos.",
    sinopsis:
      "Un extraño descubrimiento en el Polo Sur desencadena una serie de acontecimientos que arrastrarán a Blanca Serrano, periodista de ocultismo, y a Rosa Vidal, inspectora de policía, a una oscura trama. Deberán descifrar unos misteriosos escritos de Jacinto Verdaguer y enfrentarse a la CIA y a una peligrosa organización terrorista para evitar que se apoderen de un arma que cambiaría la historia de la Humanidad.",
    categoria: "novela",
    categoriaColor: "novela",
    fechaAgregado: "2025-10-15",
    portadaMini: "portada-el-beso-de-la-muerte.png",
    portada: "portada-el-beso-de-la-muerte.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/beso-muerte-Daniel-Jerez-Torns-ebook/dp/B0851MPJGP", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "al-iksir",
    titulo: "Al-iksir",
    fraseHero: "¿Realmente es posible la vida eterna?",
    ano: 2024,
    paginas: 180,
    editorial: "Autoedición",
    cita: "Escuchar el contestador del móvil era tan rutinario que difícilmente le prestaba atención, de ello se encargaba mi inconsciencia, ya que siempre caía en el error de mantener el sonido en silencio y no me enteraba de las llamadas, pero el tercer mensaje fue como un pellizco a mi mente.",
    contenido:
      "PREPARACIÓN: de preparar:\n\nEstar trabajando o haciendo algo para cierto resultado.\n\nHacer las operaciones necesarias para obtener una substancia química o farmacéutica.\n\nEl hallazgo de cinco esqueletos y unas escrituras, en unos extraños cilindros en unas excavaciones en Barcelona, reúne a seis antiguos compañeros de instituto, cada uno con una profesión bien concreta, en una cena de amigos. Durante dicha cena se destapa el verdadero motivo de la reunión. ¿Realmente es posible la vida eterna? Daniel emprende la búsqueda de dicho secreto como escritor sin saber que las historias, vivencias y personajes que hallará en un extraño pueblo formarán su propio proceso alquímico.",
    sinopsis:
      "El hallazgo de cinco esqueletos y unas escrituras en unos extraños cilindros durante unas excavaciones en Barcelona reúne a seis antiguos compañeros de instituto en una cena de amigos. Durante la velada se destapa el verdadero motivo de la reunión: ¿es posible la vida eterna? Daniel emprende la búsqueda del secreto como escritor, sin saber que las historias y personajes que hallará en un extraño pueblo formarán su propio proceso alquímico.",
    categoria: "novela-corta",
    categoriaColor: "novela-corta",
    fechaAgregado: "2025-09-01",
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
    fraseHero: "¿Cómo había llegado aquel trozo de papel a su casa?",
    cita: "El temblor de su mano hacía difícil leer el contenido de la hoja. ¿Cómo había llegado aquel trozo de papel a su casa?\n\nSin embargo, aquella no era la única pregunta que Agustí Maçia debía resolver. El quién era aún más importante.",
    contenido:
      "¿Qué secreto quería ocultar Einstein en su visita a Barcelona en 1923?\n\nEn febrero de 1923 Albert Einstein visitó Barcelona para explicar la Teoría de la Relatividad, gracias a la intermediación del físico catalán Esteban Terradas. Sin embargo, el objetivo principal de su visita era otro e implicaba un gran peligro.\n\nNoventa años más tarde, en la actualidad, el inspector Ponce investiga el asesinato de un anticuario que guardaba celosamente el antiguo diario de Héctor Jubany, ayudante de Terradas en la construcción de la línea 1 del metro de Barcelona. El caso llevará al inspector a sumergirse en edificios históricos de la ciudad, a descubrir la singular conexión entre los dos científicos y el legado que Terradas protegió para ocultar un objeto que en las manos equivocadas desataría graves delitos.",
    sinopsis:
      "En febrero de 1923 Albert Einstein visitó Barcelona para explicar la Teoría de la Relatividad, gracias a la intermediación del físico catalán Esteban Terradas. Pero el objetivo principal de su visita era otro e implicaba un gran peligro. Noventa años después, el inspector Ponce investiga el asesinato de un anticuario que guardaba el diario de Héctor Jubany, ayudante de Terradas. El caso lleva al inspector a sumergirse en edificios históricos y a descubrir la conexión entre los dos científicos y un legado que, en las manos equivocadas, desataría graves delitos.",
    categoria: "novela",
    categoriaColor: "novela",
    fechaAgregado: "2025-08-15",
    portadaMini: "portada-la-formula-terradas.png",
    portada: "portada-la-formula-terradas.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/f%C3%B3rmula-Terradas-Daniel-Jerez-Torns-ebook/dp/B01C4VVN8A", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-arcabucero-numero-61",
    titulo: "El arcabucero nº 61",
    ano: 2012,
    paginas: 462,
    editorial: "Autoedición",
    fraseHero: "No era el calor lo único que le ahogaba",
    cita: "Notaba que el sudor de su espalda le pegaba la camisa al cuerpo como si fuera una segunda piel. No era el calor lo único que le ahogaba. Sentía el peso de la responsabilidad de su cometido sobre sus hombros, lo que aumentaba aún más esa sensación de opresión en el pecho.",
    contenido:
      "La investigación iniciada de manera inocente no es ningún juego y se convertirán en el punto de mira de un asesino sin escrúpulos.\n\nEl 17 de julio de 1642, 61 arcabuceros de Yecla fueron enviados a Vinaroz con el fin de detener el avance de las tropas francesas. Sin embargo, uno de esos valientes milicianos tenía una misión muy distinta: recoger y custodiar un artefacto, ideado por el gran Galileo Galilei, capaz de cambiar el curso de la humanidad.\n\nSiglos más tarde, la fascinación por la figura y el trabajo de Galileo Galilei, reunirá a un grupo de desconocidos en Facebook para compartir sus conocimientos. Valeria Soto, una brillante e intrépida profesora de física, decide ir más allá de las teorías y saber qué misterio se esconde tras la leyenda de ese arcabucero número 61 y qué relación existe entre Galileo Galilei, Blaise Pascal, Yecla y sus fiestas de La Purísima.\n\nPronto, entenderá que la investigación que ha iniciado de manera inocente no es ningún juego y ella y su exnovio, Adrián Barral, un aburrido técnico de riesgos laborales, que se ve envuelto en la trama de manera accidental, se convertirán en el punto de mira de un asesino sin escrúpulos.",
    sinopsis:
      "El 17 de julio de 1642, 61 arcabuceros de Yecla fueron enviados a Vinaroz para detener el avance francés. Uno de ellos tenía una misión secreta: custodiar un artefacto de Galileo Galilei capaz de cambiar el curso de la humanidad. Siglos después, Valeria Soto, profesora de física, investiga la leyenda del arcabucero nº 61 y su relación con Galileo, Pascal y Yecla. Lo que empieza como una investigación inocente la convertirá en el blanco de un asesino sin escrúpulos.",
    categoria: "novela",
    categoriaColor: "novela",
    fechaAgregado: "2025-08-01",
    portadaMini: "portada-el-arcabucero-numero-61.png",
    portada: "portada-el-arcabucero-numero-61.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-arcabucero-Daniel-Jerez-Torns-ebook/dp/B00G2PYF76", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-secreto-del-tesoro-guardado",
    titulo: "El secreto del tesoro guardado",
    fraseHero: "Historia llena de aventuras, magia y enseñanzas",
    cita: "vacío",
    ano: 2025,
    paginas: 57,
    editorial: "Autoedición",
    contenido:
      "En el pequeño pueblo de Pesimismo, todo el mundo es serio y nadie sonríe. La tristeza y el malhumor se han instalado en cada rincón.\n\nPero Félix, un niño curioso, descubre que, en lo más profundo del Bosque de la Incredibilidad, existe un tesoro capaz de transformar la vida de todos. Para encontrarlo deberá enfrentarse al dragón Envidia y a la araña Crítica, criaturas que protegen el secreto.\n\nUna historia de aventuras, magia y enseñanzas sobre el poder de la sonrisa, el optimismo y la valentía. Porque el verdadero tesoro no siempre está donde uno espera.",
    sinopsis:
      "En el pequeño pueblo de Pesimismo, nadie sonríe. Pero Félix, un niño curioso, descubre que existe un tesoro capaz de transformar la vida de todos. Para encontrarlo deberá enfrentarse al dragón Envidia y a la araña Crítica, y descubrir que el verdadero tesoro no siempre está donde uno espera. Una historia de aventuras, magia y enseñanzas sobre el poder de la sonrisa, el optimismo y la valentía.",
    categoria: "cuento-adolescente",
    categoriaColor: "cuento-adolescente",
    fechaAgregado: "2025-07-01",
    portadaMini: "portada-el-secreto-del-tesoro-guardado.png",
    portada: "portada-el-secreto-del-tesoro-guardado.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-secreto-del-tesoro-guardado-ebook/dp/B0DZ5X4VY5", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-faraon-y-el-prevencionista",
    titulo: "El Faraón y el prevencionista",
    fraseHero: "El sol, el dios Ra, reinaba en el cielo con fuerza e intensidad",
    cita: "vacío",
    ano: 2025,
    paginas: 11,
    editorial: "Autoedición",
    contenido:
      "En el Antiguo Egipto, el Faraón Empresarioteth I tiene un sueño: construir la pirámide más grandiosa jamás vista. Miles de obreros, materiales interminables y un plazo imposible.\n\nPero no imagina que el mayor obstáculo será la llegada de Jahi, un humilde prevencionista. Con normas bajo el brazo y entusiasmo por la seguridad laboral, Jahi revolucionará el Imperio. Cascos para los esclavos, descansos cada cierto número de horas, señalización de zonas peligrosas…\n\nUn relato ingenioso que demuestra que garantizar el bienestar de las personas siempre ha sido una obra faraónica.",
    sinopsis:
      "Cuando el Faraón Empresarioteth I decide construir la pirámide más grandiosa de Egipto, no imagina que el mayor obstáculo será la llegada de Jahi, un humilde prevencionista. Con normas bajo el brazo y entusiasmo por la seguridad laboral, Jahi revolucionará el Imperio. Un relato ingenioso que demuestra que garantizar el bienestar de las personas siempre ha sido una obra faraónica.",
    categoria: "cuento-adolescente",
    categoriaColor: "cuento-adolescente",
    fechaAgregado: "2025-07-15",
    portadaMini: "portada-el-faraon-y-el-prevencionista.png",
    portada: "portada-el-faraon-y-el-prevencionista.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-Fara%C3%B3n-y-el-prevencionista-ebook/dp/B0G1QSGLD4", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "el-mapa-de-la-isla-del-estres",
    titulo: "El mapa de la isla del estrés",
    fraseHero: "El estrés no siempre se muestra como un enemigo evidente",
    cita: "vacío",
    ano: 2025,
    paginas: 47,
    editorial: "Autoedición",
    contenido:
      "Alma, coordinadora de proyectos y madre exigente consigo misma, siente que el estrés la domina. Un día, emprende un viaje inesperado por los paisajes de su propia mente.\n\nRecorre el Volcán de la Reactividad, donde todo explota a la mínima. Atraviesa el Desierto de la Desconexión, donde nada parece importar. Se adentra en el Pantano de los Pensamientos sin Parar, un lugar del que no se puede escapar.\n\nCada escenario refleja las trampas del estrés y ofrece claves para afrontarlas. Una novela corta divulgativa que transforma el estrés en un mapa para volver a ti.",
    sinopsis:
      "Alma, coordinadora de proyectos y madre exigente consigo misma, recorre paisajes que son metáforas del estrés: el Volcán de la Reactividad, el Desierto de la Desconexión, el Pantano de los Pensamientos sin Parar. Cada escenario refleja las trampas del estrés y ofrece claves para afrontarlas. Una novela corta divulgativa que transforma el estrés en un mapa para volver a ti.",
    categoria: "cuento-adolescente",
    categoriaColor: "cuento-adolescente",
    fechaAgregado: "2025-08-01",
    portadaMini: "portada-el-mapa-de-la-isla-del-estres.png",
    portada: "portada-el-mapa-de-la-isla-del-estres.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/El-mapa-isla-del-estr%C3%A9s-Daniel-Jerez-Torns-ebook/dp/B0FP2M68PG", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "tres-en-raya",
    titulo: "Tres en raya",
    fraseHero: "¿Y si aquello que creemos controlar no fuera realmente nuestro?",
    cita: "vacío",
    ano: 2025,
    paginas: 50,
    editorial: "Autoedición",
    contenido:
      "Tres relatos. Tres miradas. Un mismo tablero.\n\nUn hombre se somete a un trasplante de felicidad sin saber que lo que le implantan no es lo que parece. Una frontera invisible cruza la ciudad y convierte a un ciudadano en extranjero sin moverse de casa. Un tercer relato explora los límites del poder y la identidad.\n\nTres en raya reúne tres historias independientes unidas por una mirada crítica sobre la identidad, el poder y las trampas del bienestar moderno. Una colección que plantea preguntas incómodas: ¿somos quienes creemos ser? ¿Hasta qué punto decidimos lo que nos hace felices?",
    sinopsis:
      "Tres en raya reúne tres relatos independientes unidos por una mirada crítica sobre la identidad, el poder y las trampas del bienestar moderno. Un hombre se somete a un trasplante de felicidad, una frontera invisible convierte a un ciudadano en extranjero sin moverse de casa. Una colección que plantea preguntas incómodas: ¿somos quienes creemos ser? ¿Hasta qué punto decidimos lo que nos hace felices?",
    categoria: "cuento-adolescente",
    categoriaColor: "cuento-adolescente",
    fechaAgregado: "2025-08-15",
    portadaMini: "portada-tres-en-raya.png",
    portada: "portada-tres-en-raya.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Tres-raya-Daniel-Jerez-Torns-ebook/dp/B0GD979Q8P", formato: "ebook", logo: "simple-icons:amazon" },
    ],
  },
  {
    id: "cada-etapa-su-camino",
    titulo: "Cada etapa, su camino",
    fraseHero: "Tres cuentos sobre crecer, confiar y atreverse",
    cita: "vacío",
    ano: 2026,
    paginas: 63,
    editorial: "Autoedición",
    contenido:
      "Cada etapa, su camino reúne tres cuentos infantiles para acompañar a los niños en distintas etapas de su crecimiento.\n\nUna tortuga de mar que aprende a confiar en sí misma. Un canguro que descubre el valor de la ayuda mutua. Un águila que se atreve a volar más allá de lo conocido.\n\nA través de sus historias, los pequeños lectores descubrirán valores como la confianza, la diversidad, el esfuerzo y la valentía de atreverse. Incluye dibujos para colorear que invitan a hacer suya cada aventura.",
    sinopsis:
      "Cada etapa, su camino reúne tres cuentos infantiles protagonizados por una tortuga de mar, un canguro y un águila, que acompañan a los niños en distintas etapas de su crecimiento. A través de sus historias descubrirán valores como la confianza, la diversidad, el esfuerzo, la ayuda mutua y la valentía de atreverse. Incluye dibujos para colorear.",
    categoria: "cuento-infantil",
    categoriaColor: "cuento-infantil",
    fechaAgregado: "2026-05-10",
    portadaMini: "portada-cada-etapa-su-camino.png",
    portada: "portada-cada-etapa-su-camino.png",
    enlaces: [
      { tienda: "Amazon", url: "https://www.amazon.es/Cada-etapa-camino-Tres-atreverse-ebook/dp/B0GL174TMW", formato: "ebook", logo: "simple-icons:amazon" },
      { tienda: "Amazon", url: "https://www.amazon.es/Cada-etapa-camino-Tres-atreverse/dp/B0GL174TMW", formato: "tapa-blanda", logo: "simple-icons:amazon" },
    ],
  },
]
