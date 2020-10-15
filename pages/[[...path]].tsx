import type { GetStaticProps, GetStaticPaths } from 'next'
import * as nodepath from 'path'
import fs from 'fs'
import { getPaths } from '../lib/paths'

type Path = {
  params: { path: string[] }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const baseDir = nodepath.join(process.cwd(), 'lil')
  const paths: Path[] = [
    { params: { path: [] } },
    ...getPaths(baseDir).map((pathStr) => {
      return { params: { path: pathStr.split(nodepath.sep) } }
    }),
  ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { path } = params
  const _path = typeof path === 'string' ? [path] : path
  let dir: string
  if (_path) {
    dir = nodepath.join(process.cwd(), 'lil', ..._path)
  } else {
    dir = nodepath.join(process.cwd(), 'lil')
  }
  const file = nodepath.join(dir, 'index.md')
  let md: string
  if (fs.existsSync(file) && fs.statSync(file).isFile()) {
    md = fs.readFileSync(file, { encoding: 'utf8' })
  } else if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    md =
      `# Index\n` +
      fs
        .readdirSync(dir)
        .map((p) => `- ${p}`)
        .join('\n')
  } else {
    md = null
  }
  return {
    props: { md },
  }
}

export const Doc = ({ md }) => {
  return <p>{md}</p>
}

export default Doc
