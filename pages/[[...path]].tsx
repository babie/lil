import type { GetStaticProps, GetStaticPaths } from 'next'
import * as nodePath from 'path'
import fs from 'fs'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { path: null } },
      { params: { path: ['foo'] } },
      { params: { path: ['foo', 'bar'] } },
      { params: { path: ['foo', 'bar', 'baz'] } },
      { params: { path: ['foo', 'bar', 'baz', 'qux'] } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { path } = params
  const _path = typeof path === 'string' ? [path] : path
  const dir = nodePath.join(process.cwd(), 'lil', ..._path)
  const file = nodePath.join(dir, 'index.md')
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
