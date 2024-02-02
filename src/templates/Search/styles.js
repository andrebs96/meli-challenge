import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Title = styled.h1`
  color: #333;
  font-size: 2.6rem;
  margin-bottom: 2.4rem;
`

export const Items = styled.div`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.6rem;
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(4, 1fr);
  `}
`

export const Item = styled.div`
  border-radius: 6px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-bottom: 1.6rem;

  img {
    border-radius: 6px;
    width: 100%;
    height: auto;
  }
`

export const Image = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-height: 25rem;
    width: auto;
  }
`

export const ItemContent = styled.div`
  color: #333;
  padding: 2rem;

  h2 {
    display: -webkit-box;
    font-size: 1.4rem;
    font-weight: 400;
    height: 3.6rem;
    margin-bottom: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

export const EmptyContent = styled.div`
  background: #fff;
  margin: 18vh auto;
  max-width: 51rem;
  padding: 4.2rem;

  ul {
    margin-top: 1.8rem;
  }
`
