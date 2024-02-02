import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByRole('heading', { name: /Footer/i })).toBeInTheDocument()
  })
})
