import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import Header from '.'

const Props = {
  onSubmit: jest.fn()
}

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Logo"></div>
    }
  }
})

jest.mock('components/Search', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Search"></div>
    }
  }
})

describe('<Header />', () => {
  it('should render the Header', () => {
    const history = createMemoryHistory()

    render(
      <Router location={history.location} navigator={history}>
        <Header {...Props} />
      </Router>
    )

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Search')).toBeInTheDocument()
  })
})
