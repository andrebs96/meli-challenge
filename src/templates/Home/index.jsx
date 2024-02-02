import React from 'react'

import * as S from './styles'

import Logo from 'components/Logo'
import Search from 'components/Search'

const Home = ({ onSubmit }) => (
  <S.Wrapper>
    <S.Content>
      <S.Heading>Mercado Livre</S.Heading>
      <Logo marginBottom="2.4rem" />
      <Search onSubmit={onSubmit} />
    </S.Content>
  </S.Wrapper>
)

export default Home
