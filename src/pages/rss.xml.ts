import rss from '@astrojs/rss'
import { libros } from '@data/libros'

function rutaLibro(libro: (typeof libros)[number]): string {
  switch (libro.categoria) {
    case 'novela':
      return `/novela/${libro.id}`
    case 'novelacorta':
      return `/novelacorta/${libro.id}`
    case 'cuento-adolescente':
      return `/cuentos/adolescentes/${libro.id}`
    case 'cuento-infantil':
      return `/cuentos/infantiles/${libro.id}`
  }
}

export async function GET(context: { site: string }) {
  const elementos = libros
    .sort((a, b) => b.ano - a.ano)
    .map((libro) => ({
      title: libro.titulo,
      description: libro.sinopsis,
      link: `${context.site}${rutaLibro(libro)}`,
      pubDate: new Date(libro.ano, 0, 1),
    }))

  return rss({
    title: 'Daniel Jerez Torns — Escritor',
    description:
      'Novelas, relatos y cuentos de Daniel Jerez Torns. Novela negra, misterio e intriga.',
    site: context.site,
    items: elementos,
    language: 'es',
    copyright: `© ${new Date().getFullYear()} Daniel Jerez Torns`,
  })
}
