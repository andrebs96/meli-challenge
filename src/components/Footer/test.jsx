import React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    render(<Footer />)

    expect(screen.getByText(/Copyright/i)).toBeInTheDocument()
  })
})
