import React from 'react'
import { render } from '../testUtils'
import { Doc } from '../../pages/[[...path]]'
import { screen } from '@testing-library/react'

describe('Doc page', () => {
  //const useRouter = jest.spyOn(require('next/router'), 'useRouter')

  it('matches snapshot', () => {
    /*
    useRouter.mockImplementationOnce(() => ({
      query: { path: ['foo', 'bar'] },
    }))
    */

    const { asFragment } = render(
      <Doc markdown={`# Test\n\nThis is a test page.`} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText('Test')).toContainHTML('<h1>Test</h1>')
    expect(screen.getByText('This is a test page.')).toContainHTML(
      '<p>This is a test page.</p>'
    )
  })
  /*
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {})
    window.alert = jest.fn()
    fireEvent.click(getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
  */
})
