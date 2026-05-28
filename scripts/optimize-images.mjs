import sharp from "sharp"
import { readFileSync, writeFileSync, readdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC = join(__dirname, "..", "src", "assets", "images")

async function optimizarFondo(file) {
  const path = join(SRC, "fondos", file)
  const meta = await sharp(path).metadata()
  if (meta.width <= 1920) {
    console.log(`  ${file}: ${meta.width}px (ya optimo)`)
    return
  }
  const buf = await sharp(path)
    .resize(1920, null, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer()
  writeFileSync(path, buf)
  console.log(`  ${file}: ${meta.width}px → 1920px (${(buf.length / 1024).toFixed(0)}KB)`)
}

async function optimizarPNG(file, subdir, maxW = null) {
  const path = join(SRC, subdir, file)
  const meta = await sharp(path).metadata()

  let pipeline = sharp(path)
  if (maxW && meta.width > maxW) {
    pipeline = pipeline.resize(maxW, null, { fit: "inside", withoutEnlargement: true })
  }

  const buf = await pipeline
    .png({ palette: true, compressionLevel: 9, effort: 10 })
    .toBuffer()

  const oldSize = readFileSync(path).length
  if (buf.length < oldSize) {
    writeFileSync(path, buf)
    console.log(`  ${file}: ${(oldSize / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB`)
  } else {
    console.log(`  ${file}: ya optimo (${(oldSize / 1024).toFixed(0)}KB)`)
  }
}

async function main() {
  console.log("\n=== Fondos ===")
  for (const f of readdirSync(join(SRC, "fondos")).filter(f => f.endsWith(".jpg") && f !== ".gitkeep")) {
    await optimizarFondo(f)
  }

  console.log("\n=== Portadas ===")
  for (const f of readdirSync(join(SRC, "portadas")).filter(f => f.endsWith(".png"))) {
    await optimizarPNG(f, "portadas")
  }

  console.log("\n=== Libro ===")
  for (const f of readdirSync(join(SRC, "libro")).filter(f => f.endsWith(".png"))) {
    await optimizarPNG(f, "libro")
  }

  console.log("\n=== Miscelanea ===")
  for (const f of readdirSync(join(SRC, "miscelanea")).filter(f => f.endsWith(".png"))) {
    await optimizarPNG(f, "miscelanea", 600)
  }

  console.log("\n=== Tiendas ===")
  for (const f of readdirSync(join(SRC, "tiendas")).filter(f => f.endsWith(".png"))) {
    await optimizarPNG(f, "tiendas")
  }

  console.log("\n✅ Hecho")
}

main().catch(console.error)
