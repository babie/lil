import React from 'react'
import { render } from '../testUtils'
import { Doc } from '../../pages/[[...path]]'

describe('Doc page', () => {
  //const useRouter = jest.spyOn(require('next/router'), 'useRouter')

  it('matches snapshot', () => {
    /*
    useRouter.mockImplementationOnce(() => ({
      query: { path: ['foo', 'bar'] },
    }))
    */

    const { asFragment } = render(<Doc md={`#Test\nThis is test page.`} />, {})
    expect(asFragment()).toMatchSnapshot()
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
