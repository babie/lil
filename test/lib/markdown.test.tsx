import { render, screen } from '@testing-library/react'
import { md2react } from '../../lib/markdown'

describe('markdown library', () => {
  it('md2react() retuns JSX', () => {
    render(md2react('# Title'))

    expect(screen.getByText('Title')).toContainHTML('<h1>Title</h1>')
  })

  it('md2react() accepts gfm', () => {
    render(md2react(`| a | b  |  c |  d  |\n| - | :- | -: | :-: |`))

    expect(screen.getByText('b')).toContainHTML(
      '<th style="text-align: left;">b</th>'
    )
  })
})
