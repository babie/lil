import type { GetStaticProps, GetStaticPaths } from 'next'
import * as nodepath from 'path'
import { getContent, getPaths } from '../lib/paths'

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
  const baseDir = nodepath.join(process.cwd(), 'lil')
  const dir = _path ? nodepath.join(baseDir, ..._path) : baseDir
  const markdown = getContent(dir)

  return {
    props: { markdown },
  }
}

export const Doc = ({ markdown }) => {
  return <p>{markdown}</p>
}

export default Doc
