import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CoffeeContextProvider } from './context/CoffeeContext'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
