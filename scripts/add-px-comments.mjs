import { readFileSync, writeFileSync, readdirSync, statSync } from "fs"
import { join, extname } from "path"

const srcDir = join(import.meta.dirname, "..", "src")
const basePx = 16

function processCSS(css) {
  return css.replace(/(-?\d+(?:\.\d+)?)em(?!\s*\/\*)/g, (match, val) => {
    const px = Math.round(parseFloat(val) * basePx)
    return `${val}em /* ${px}px */`
  })
}

function processFile(filePath) {
  let content = readFileSync(filePath, "utf-8")
  let modified = false

  if (filePath.endsWith(".css")) {
    const processed = processCSS(content)
    if (processed !== content) {
      content = processed
      modified = true
    }
  } else if (filePath.endsWith(".astro")) {
    content = content.replace(/<style>[\s\S]*?<\/style>/g, (styleBlock) => {
      const processed = processCSS(styleBlock)
      if (processed !== styleBlock) modified = true
      return processed
    })
  }

  if (modified) {
    writeFileSync(filePath, content, "utf-8")
    console.log(`  updated: ${filePath.replace(srcDir, "src")}`)
  }
}

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory() && !entry.name.startsWith(".")) {
      walk(fullPath)
    } else if (
      entry.isFile() &&
      (entry.name.endsWith(".astro") || entry.name.endsWith(".css"))
    ) {
      processFile(fullPath)
    }
  }
}

console.log("Adding px comments to em values in src/...")
walk(srcDir)
console.log("Done.")
