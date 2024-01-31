import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      height: 100%;
    }

    body {
      font-family: ${theme.font.family.base};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
      height: inherit;
    }
  `}
`

export default GlobalStyles
