import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'

import Search from '.'

const Props = {
  onSubmit: jest.fn()
}

describe('<Search />', () => {
  it('should render the Search', () => {
    render(<Search {...Props} />)

    expect(screen.getByPlaceholderText(/Buscar/i)).toBeInTheDocument()
  })

  it('should trigger callback after submit', async () => {
    render(<Search {...Props} />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()

    act(() => {
      fireEvent.change(input, { target: { value: 'macbook' } })
    })

    await fireEvent.submit(screen.getByRole('button'))

    expect(Props.onSubmit).toHaveBeenCalled()
  })
})
