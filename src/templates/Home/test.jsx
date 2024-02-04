import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the Home', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Mercado Livre/i })
    ).toBeInTheDocument()
  })
})
