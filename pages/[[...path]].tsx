import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { path: null } },
      { params: { path: ['a'] } },
      { params: { path: ['foo'] } },
      { params: { path: ['foo', 'b'] } },
      { params: { path: ['foo', 'bar'] } },
      { params: { path: ['foo', 'bar', 'c'] } },
      { params: { path: ['foo', 'bar', 'baz'] } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {},
  }
}

export const Doc = () => {
  const router = useRouter()
  const { path } = router.query

  return <p>Post: {path}</p>
}

export default Doc
