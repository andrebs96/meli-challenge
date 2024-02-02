import React from 'react'

import useSearch from 'hooks/useSearch'

import * as S from './styles'

import Header from 'components/Header'
import Footer from 'components/Footer'

const Base = ({ children }) => {
  const { onSubmit } = useSearch()

  return (
    <S.Wrapper>
      <Header onSubmit={onSubmit} />
      {children}
      <Footer />
    </S.Wrapper>
  )
}

export default Base
