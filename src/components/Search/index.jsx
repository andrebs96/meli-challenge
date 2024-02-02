import React from 'react'
import { Search as SearchIcon } from '@styled-icons/evil/Search'
import PropTypes from 'prop-types'

import * as S from './styles'

const Search = ({ onSubmit }) => (
  <S.Wrapper
    onSubmit={(e) => {
      e.preventDefault()
      onSubmit(e.target[0].value)
    }}
  >
    <input
      type="text"
      placeholder="Buscar produtos, marcas e muito mais…"
      maxLength="120"
      autoComplete="off"
    />
    <button type="submit">
      <SearchIcon size="30" />
    </button>
  </S.Wrapper>
)

Search.propTypes = {
  onSubmit: PropTypes.func
}

export default Search
