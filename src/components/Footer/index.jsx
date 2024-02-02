import React from 'react'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <span>{`Copyright ©&nbsp;1999-${new Date().getFullYear()} Ebazar.com.br LTDA.`}</span>
    <p>
      CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim,
      Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.
    </p>
  </S.Wrapper>
)

export default Footer
