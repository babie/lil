import { render, screen } from '@testing-library/react'
import { md2react } from '../../lib/markdown'
import fs from 'fs'
import path from 'path'

describe('markdown library', () => {
  it('md2react() retuns JSX', () => {
    render(md2react('# Title'))

    expect(screen.getByText('Title')).toContainHTML(
      '<h1 id="user-content-title">Title</h1>'
    )
  })

  it('md2react() accepts gfm', () => {
    render(md2react(`| a | b  |  c |  d  |\n| - | :- | -: | :-: |`))

    expect(screen.getByText('b')).toContainHTML(
      '<th style="text-align: left;">b</th>'
    )
  })

  it('md2react() sanitize dangerous tags/attrs', () => {
    render(md2react(`[delta](javascript:alert())`))

    expect(screen.getByText('delta')).not.toContainHTML(
      '<a href="javascript:alert()">delta</a>'
    )
  })

  it('md2react() add TOC', () => {
    const filepath = path.join(process.cwd(), 'test/lib/toc.md')
    const md = fs.readFileSync(filepath, { encoding: 'utf8' }).toString()
    render(md2react(md))

    screen.debug()
    expect(screen.getByText('TOC')).toContainHTML(
      '<h2 id="user-content-toc">TOC</h2>'
    )
    const h2_1 = screen.getAllByText('H2-1')
    expect(h2_1[0]).toContainHTML('<a href="#user-content-h2-1">H2-1</a>')
    expect(h2_1[1]).toContainHTML('<h2 id="user-content-h2-1">H2-1</h2>')
    const h2_1_1 = screen.getAllByText('H2-1-1')
    expect(h2_1_1[0]).toContainHTML('<a href="#user-content-h2-1-1">H2-1-1</a>')
    expect(h2_1_1[1]).toContainHTML('<h3 id="user-content-h2-1-1">H2-1-1</h3>')
  })
})
