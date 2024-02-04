import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import Search from '.'

const Props = {
  terms: 'Teste',
  items: [],
  loading: false
}

describe('<Search />', () => {
  it('should render the Search', () => {
    const history = createMemoryHistory()

    render(
      <Router location={history.location} navigator={history}>
        <Search {...Props} />
      </Router>
    )

    expect(
      screen.getByRole('heading', { name: /Não há anúncios/i })
    ).toBeInTheDocument()
  })

  it('should render the loading', () => {
    const history = createMemoryHistory()

    render(
      <Router location={history.location} navigator={history}>
        <Search {...Props} loading />
      </Router>
    )

    expect(screen.getByRole('heading', { name: /Teste/i })).toBeInTheDocument()
  })

  it('should render the item', () => {
    const history = createMemoryHistory()

    render(
      <Router location={history.location} navigator={history}>
        <Search
          {...Props}
          items={[
            {
              id: 'MLB3534268125',
              thumbnail:
                'http://http2.mlstatic.com/D_855617-MLU73335848130_122023-I.jpg',
              title: 'Base Líquida Mac Studio Fix Fluid Fps 15 Nc35 30ml',
              price: 205.86
            }
          ]}
        />
      </Router>
    )

    expect(
      screen.getByRole('heading', { name: /Base Líquida/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/205,86/i)).toBeInTheDocument()
  })
})
