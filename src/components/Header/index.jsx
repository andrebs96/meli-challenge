import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as S from './styles'

import Logo from 'components/Logo'
import Search from 'components/Search'

const Header = ({ onSubmit }) => (
  <S.Wrapper>
    <S.Container>
      <Link to="/">
        <Logo />
      </Link>
      <Search onSubmit={onSubmit} />
    </S.Container>
  </S.Wrapper>
)

Header.propTypes = {
  onSubmit: PropTypes.func
}

export default Header
