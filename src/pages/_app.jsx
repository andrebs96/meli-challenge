import React from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
