import React from 'react'

import * as S from './styles'

import Base from 'templates/Base'

import Container from 'components/Container'

const Product = () => (
  <Base>
    <Container>
      <S.Wrapper>
        <h1>Product</h1>
        foto, título, preço e descrição
      </S.Wrapper>
    </Container>
  </Base>
)

export default Product
