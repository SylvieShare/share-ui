import fs from 'node:fs'
import path from 'node:path'

const sourceRoot = path.resolve(import.meta.dirname, '../src')
const tokenFile = path.join(sourceRoot, 'styles/tokens.css')
const rawColor = /#[0-9a-f]{3,8}\b|rgba?\s*\(|hsla?\s*\(|(?<![-\w])(?:white|black)(?![-\w])/i

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(fullPath) : [fullPath]
  })
}

const failures = []

for (const file of walk(sourceRoot)) {
  if (!/\.(?:vue|css)$/.test(file) || file === tokenFile) continue
  const source = fs.readFileSync(file, 'utf8')
  const styles = file.endsWith('.css')
    ? source
    : [...source.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map((match) => match[1]).join('\n')

  styles.split('\n').forEach((line, index) => {
    if (rawColor.test(line)) {
      failures.push(`${path.relative(sourceRoot, file)}:${index + 1}: direct color: ${line.trim()}`)
    }
  })
}

if (failures.length) {
  console.error('Color token check failed:\n' + failures.join('\n'))
  process.exit(1)
}

console.log('Color token check passed.')
