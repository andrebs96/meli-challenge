import React from 'react'
import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    render(<Logo />)

    expect(screen.getByAltText(/Mercado Livre/i)).toBeInTheDocument()
  })
})
