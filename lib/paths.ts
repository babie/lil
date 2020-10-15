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
