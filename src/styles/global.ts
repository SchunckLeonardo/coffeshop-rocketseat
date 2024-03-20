import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(p) => p.theme.background};
  }

  body, button, input-security {
    font-family: 'Roboto', sans-serif;
  }

  :focus {
    outline: 0;
  }
`
