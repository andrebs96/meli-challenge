import React from 'react'
import { Search } from '@styled-icons/evil/Search'

import * as S from './styles'

import Logo from 'assets/img/pt_logo_large_plus.webp'

const Home = () => (
  <S.Wrapper>
    <S.Content>
      <S.Heading>Mercado Livre</S.Heading>
      <S.Logo
        src={Logo}
        alt="Mercado Livre Brasil - Onde comprar e vender de Tudo"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('oi')
        }}
      >
        <S.InputField>
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais…"
            maxLength="120"
            autoComplete="off"
          />
          <button type="submit">
            <Search size="30" />
          </button>
        </S.InputField>
      </form>
    </S.Content>
  </S.Wrapper>
)

export default Home
