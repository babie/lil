import React from 'react'
import unified from 'unified'
import toc from 'remark-toc'
import frontmatter from 'remark-frontmatter'
import extract from './frontmatter-extract'
import md2remark from 'remark-parse'
import slug from 'remark-slug'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import sanitize from 'rehype-sanitize'
import gfmschema from 'hast-util-sanitize/lib/github.json'
import minify from './rehype-preset-minify'
import rehype2react from 'rehype-react'

type Result = {
  elements: React.ReactElement
  metadata: any
}
export const md2react = (md: string): Result => {
  const processor = unified()
    .use(toc, { prefix: 'user-content-' })
    .use(frontmatter)
    .use(extract)
    .use(md2remark)
    .use(slug)
    .use(gfm)
    .use(remark2rehype)
    .use(sanitize, gfmschema)
    .use(minify)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,
    })
  const vfile = processor.processSync(md)
  const elements = vfile.result as React.ReactElement
  const metadata = vfile.data
  return {
    elements,
    metadata,
  }
}
