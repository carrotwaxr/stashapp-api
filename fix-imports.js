import { readdir, readFile, writeFile, stat } from 'fs/promises'
import { join, extname, dirname, resolve } from 'path'

async function isDirectory(p) {
  try { return (await stat(p)).isDirectory() } catch { return false }
}

async function fixDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await fixDir(full)
    } else if (extname(entry.name) === '.ts' && !entry.name.endsWith('.d.ts')) {
      let content = await readFile(full, 'utf8')
      const fileDir = dirname(full)
      const matches = [...content.matchAll(/(from\s+['"])(\.\.?\/[^'"]+?)(['"])/g)]
      let fixed = content
      for (const m of matches.reverse()) {
        const [match, pre, importPath, post] = m
        if (/\.\w+$/.test(importPath)) continue
        const resolved = resolve(fileDir, importPath)
        const suffix = await isDirectory(resolved) ? '/index.js' : '.js'
        fixed = fixed.slice(0, m.index) + `${pre}${importPath}${suffix}${post}` + fixed.slice(m.index + match.length)
      }
      if (fixed !== content) {
        await writeFile(full, fixed)
      }
    }
  }
}

await fixDir('./src/generated')
console.log('Fixed extensionless imports in generated code')
