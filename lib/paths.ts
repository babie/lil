import fs from 'fs'
import path from 'path'
import ejs from 'ejs'

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
    const template = fs.readFileSync(
      path.join(process.cwd(), 'templates/dir.md.ejs'),
      { encoding: 'utf8' }
    )
    markdown = ejs.render(template, { dirs: fs.readdirSync(dir) })
  } else {
    markdown = null
  }
  return markdown
}
