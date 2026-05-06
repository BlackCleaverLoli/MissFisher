import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, extname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const wikiDir = resolve(scriptDir, '..')

function listMarkdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const entryPath = resolve(dir, entry.name)

    if (entry.isDirectory()) {
      return listMarkdownFiles(entryPath)
    }

    return entry.isFile() && extname(entry.name) === '.md' ? [entryPath] : []
  })
}

function findBodyStart(lines) {
  if (lines[0]?.trim() !== '---') {
    return 0
  }

  const endIndex = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
  return endIndex === -1 ? 0 : endIndex + 1
}

function normalizeBodyLine(line) {
  const trimmed = line.replace(/[ \t]+$/u, '')

  if (trimmed.length === 0 || trimmed.startsWith('#')) {
    return trimmed
  }

  return `${trimmed}  `
}

function normalizeMarkdown(content) {
  const normalizedLineEndings = content.replace(/\r\n?/g, '\n')
  const hasFinalNewline = normalizedLineEndings.endsWith('\n')
  const lines = normalizedLineEndings.split('\n')

  if (hasFinalNewline) {
    lines.pop()
  }

  const bodyStart = findBodyStart(lines)
  const normalizedLines = lines.map((line, index) =>
    index < bodyStart ? line : normalizeBodyLine(line)
  )

  return `${normalizedLines.join('\n')}${hasFinalNewline ? '\n' : ''}`
}

const changedFiles = []

for (const file of listMarkdownFiles(wikiDir)) {
  const content = readFileSync(file, 'utf8')
  const normalized = normalizeMarkdown(content)

  if (normalized === content) {
    continue
  }

  writeFileSync(file, normalized, 'utf8')
  changedFiles.push(relative(wikiDir, file))
}

if (changedFiles.length > 0) {
  console.log(`Normalized Markdown trailing spaces in ${changedFiles.length} file(s).`)
}
