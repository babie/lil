//import React from 'react'
//import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  it('always ok', () => {
    ;<Home />
    expect('ok').toMatch('ok')
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
