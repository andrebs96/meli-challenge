import React from 'react'
import { render, screen } from '@testing-library/react'

import Container from '.'

describe('<Container />', () => {
  it('should render the Container', () => {
    const { container } = render(
      <Container>
        <span>Container Test</span>
      </Container>
    )

    expect(screen.getByText(/Container Test/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
