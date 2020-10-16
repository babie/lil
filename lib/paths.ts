import fs from 'fs'
import path from 'path'
import walk from 'walk'

export const addTrailingSlash = (dir: string) => {
  if (dir[dir.length - 1] === path.sep) {
    return dir
  } else {
    return dir + path.sep
  }
}

export const getPaths = (baseDir: string) => {
  const paths: string[] = []
  const _baseDir = addTrailingSlash(baseDir)
  walk.walkSync(baseDir, {
    listeners: {
      directories: (root, stats, next) => {
        paths.push(
          ...stats.map((stat) => {
            return path.join(root, stat.name).replace(`${_baseDir}`, '')
          })
        )
        next()
      },
    },
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
