import React from 'react'
import unified from 'unified'
import md2remark from 'remark-parse'
import gfm from 'remark-gfm'
import remark2rehype from 'remark-rehype'
import sanitize from 'rehype-sanitize'
import gfmschema from 'hast-util-sanitize/lib/github.json'
import minify from 'rehype-preset-minify'
import rehype2react from 'rehype-react'

export const md2react = (md: string): React.ReactElement => {
  const processor = unified()
    .use(md2remark)
    .use(gfm)
    .use(remark2rehype)
    .use(sanitize, gfmschema)
    .use(minify)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,
    })
  return processor.processSync(md).result as React.ReactElement
}
