import React from 'react'

import * as S from './styles'

import Base from 'templates/Base'

import Container from 'components/Container'

const Search = ({ terms, items }) => {
  const showEmptyContent = !terms || items.length === 0

  return (
    <S.Wrapper>
      <Base>
        <Container>
          {!showEmptyContent && (
            <>
              <S.Title>{terms}</S.Title>
              <S.Items>
                {items.map((item) => {
                  if (item.status === 'active') {
                    return (
                      <S.Item key={item.id}>
                        <S.Image>
                          <img src={item.picture[0].url} />
                        </S.Image>
                        <S.ItemContent>
                          <h2>{item.name}</h2>
                          <div
                            style={{
                              textAlign: 'center',
                              fontSize: '2.4rem'
                            }}
                          >
                            R$ 6.006
                          </div>
                        </S.ItemContent>
                      </S.Item>
                    )
                  }
                })}
              </S.Items>
            </>
          )}
          {showEmptyContent && (
            <S.EmptyContent>
              <h3>Não há anúncios que correspondam à sua busca</h3>
              <ul>
                <li>
                  <strong>Revise a ortografia</strong> da palavra.
                </li>
                <li>
                  Utilize <strong>palavras mais genéricas</strong> ou menos
                  palavras.
                </li>
              </ul>
            </S.EmptyContent>
          )}
        </Container>
      </Base>
    </S.Wrapper>
  )
}

export default Search
