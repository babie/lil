import fs from 'fs'
import path from 'path'

export const addTrailingSlash = (dir: string) => {
  if (dir[dir.length - 1] === path.sep) {
    return dir
  } else {
    return dir + path.sep
  }
}

type WalkDirCallback = (path: string, stats: fs.Stats) => void
export const walkDir = (dir: string, cb: WalkDirCallback) => {
  const entries = fs.readdirSync(dir)
  entries.forEach((entry) => {
    const entrypath = path.join(dir, entry)
    const stats = fs.statSync(entrypath)
    if (stats.isDirectory()) {
      cb(entrypath, stats)
      walkDir(entrypath, cb)
    }
  })
}

export const getPaths = (baseDir: string) => {
  const paths: string[] = []
  const _baseDir = addTrailingSlash(baseDir)
  walkDir(baseDir, (entrypath, _stats) => {
    paths.push(entrypath.replace(`${_baseDir}`, ''))
  })
  return paths
}

export const getMarkdown = (dir: string): string | null => {
  const file = path.join(dir, 'index.md')
  let markdown: string
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    markdown = fs.readFileSync(file, { encoding: 'utf8' })
  } else if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    markdown = `# Index\n\n${fs
      .readdirSync(dir)
      .map((p) => `- ${p}`)
      .join('\n')}`
  } else {
    markdown = null
  }
  return markdown
}
