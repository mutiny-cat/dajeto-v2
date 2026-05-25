import sharp from "sharp"
import { readdirSync, mkdirSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const fondosDir = join(__dirname, "..", "src", "assets", "images", "fondos")
const outDir = join(fondosDir, "blurred")

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

const files = readdirSync(fondosDir).filter((f) => f.endsWith(".jpg"))

for (const file of files) {
  const input = join(fondosDir, file)
  const output = join(outDir, file)

  await sharp(input)
    .resize(1200, undefined, { withoutEnlargement: true })
    .blur(40)
    .jpeg({ quality: 60 })
    .toFile(output)

  console.log(`✓ ${file}`)
}

console.log(`\nDone. ${files.length} images pre-blurred → ${outDir}`)
