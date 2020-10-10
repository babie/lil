import React from 'react'
import { render } from '../testUtils'
import { Doc } from '../../pages/[[...slug]]'

describe('Doc page', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter')

  it('tmp ok', () => {
    useRouter.mockImplementationOnce(() => ({
      query: { slug: ['foo', 'a'] },
    }))
    const { asFragment } = render(<Doc />, {})
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
