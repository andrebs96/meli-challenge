import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import Base from '.'

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render the Base', () => {
    const history = createMemoryHistory()

    render(
      <Router location={history.location} navigator={history}>
        <Base>Base Test</Base>
      </Router>
    )

    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()

    expect(screen.getByText(/Base Test/i)).toBeInTheDocument()
  })
})
