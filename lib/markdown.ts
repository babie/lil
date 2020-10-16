import React from 'react'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'

export const md2react = (md: string): React.ReactElement => {
  const processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,
    })
  return processor.processSync(md).result as React.ReactElement
}
