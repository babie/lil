import { render, screen } from '@testing-library/react'
import { md2react } from '../../lib/markdown'

describe('markdown library', () => {
  it('md2react() retuns JSX', () => {
    render(md2react('# Title'))

    expect(screen.getByText('Title')).toContainHTML('<h1>Title</h1>')
  })
})
