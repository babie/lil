import type { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: null } },
      { params: { slug: ['a'] } },
      { params: { slug: ['foo'] } },
      { params: { slug: ['foo', 'b'] } },
      { params: { slug: ['foo', 'bar'] } },
      { params: { slug: ['foo', 'bar', 'c'] } },
      { params: { slug: ['foo', 'bar', 'baz'] } },
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
  const { slug } = router.query

  return <p>Post: {slug}</p>
}

export default Doc
