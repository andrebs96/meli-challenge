import styled, { css } from 'styled-components'

export const Wrapper = styled.img`
  ${({ marginBottom }) => css`
    margin-bottom: ${marginBottom};
    width: 13rem;
  `}
`
