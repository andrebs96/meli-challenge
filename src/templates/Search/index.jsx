import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

import * as S from './styles'

import Base from 'templates/Base'

import Container from 'components/Container'

import { formatPriceBR } from 'utils/price/format'

const Loading = () =>
  Array.from({ length: 12 }, (v, k) => k).map((arr) => (
    <S.Item key={arr}>
      <S.Image>
        <Skeleton width="90px" height="90px" />
      </S.Image>
      <S.ItemContent>
        <h2>
          <Skeleton width="100%" height="32px" />
        </h2>
        <S.ItemPrice>
          <Skeleton width="100%" />
        </S.ItemPrice>
      </S.ItemContent>
    </S.Item>
  ))

const Search = ({ terms, items, loading }) => {
  const showEmptyContent = (!terms || items.length === 0) && !loading

  return (
    <S.Wrapper>
      <Base>
        <Container>
          {!showEmptyContent && (
            <>
              <S.Title>{terms}</S.Title>
              <S.Items>
                {items.map((item) => (
                  <Link key={item.id} to={`/${item.id}/p`}>
                    <S.Item>
                      <S.Image>
                        <img src={item.thumbnail} loading="lazy" />
                      </S.Image>
                      <S.ItemContent>
                        <h2>{item.title}</h2>
                        <S.ItemPrice>{formatPriceBR(item.price)}</S.ItemPrice>
                      </S.ItemContent>
                    </S.Item>
                  </Link>
                ))}
                {loading && <Loading />}
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
