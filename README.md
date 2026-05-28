# Daniel Jerez Torns — Web personal

Sitio web del escritor Daniel Jerez Torns, construido con [Astro](https://astro.build).

## Stack

- **Astro** (static site generator)
- **TypeScript**
- **CSS moderno** (nesting, custom properties, clamp, dvh)
- **Sharp** (optimización de imágenes)

## Estructura

```
src/
├── assets/images/     # Imágenes originales
│   ├── fondos/         # Fondos de héroe (1920px JPG)
│   │   └── blurred/    # Versiones borrosas (1200px)
│   ├── portadas/       # Portadas de libros (PNG con canal alfa)
│   ├── libro/          # Mockups 3D de libros
│   └── tiendas/        # Logos de tiendas (PNG + SVG)
├── components/
│   ├── index/          # Hero, novedades, categorías
│   ├── libro/          # Hero, cita, sinopsis, contenido, detalles, compra
│   ├── biografia/      # Hero, cita, sinopsis, biografía
│   ├── header/         # Menú escritorio + modal móvil
│   ├── footer/         # Redes sociales + enlaces legales
│   └── ui/             # Botón scroll-to-top
├── data/               # Contenido (libros, biografía, menú, SEO, legal)
├── layouts/            # page-layout.astro (compartido)
├── pages/              # 22 páginas (index, libros, legal, 404, RSS)
├── seo/                # Meta tags, Open Graph, Twitter Cards
└── styles/             # global.css (variables + reset)
```

## Desarrollo

```sh
pnpm install
pnpm dev          # servidor local → localhost:4321
pnpm build        # build → dist/
pnpm preview      # previsualizar build local
```

## Scripts

```sh
node scripts/optimize-images.mjs   # optimizar imágenes fuente
node scripts/preblur-fondos.mjs    # regenerar fondos borrosos
```

## Páginas

| Sección | Rutas |
|---------|-------|
| Novela | `/novela/[slug]/` |
| Novela corta | `/novela-corta/[slug]/` |
| Cuentos adolescentes | `/cuentos/adolescentes/[slug]/` |
| Cuentos infantiles | `/cuentos/infantiles/[slug]/` |
| Biografía | `/biografia/biografia/` |
| Cronología | `/cronologia/cronologia/` |
| Legal | `/legalidad/aviso-legal/`, `/legalidad/privacidad/`, `/legalidad/cookies/`, `/legalidad/accesibilidad/` |
| 404 | Personalizado con `ErrorDocument` |

## Despliegue

Subir el contenido de `dist/` al servidor (Hostinger). El `.htaccess` incluido redirige los errores 404 a la página personalizada.
