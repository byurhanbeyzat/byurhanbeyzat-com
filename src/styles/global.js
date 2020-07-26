import { createGlobalStyle } from 'styled-components'
import { Typography } from './typography'

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
  }

  button {
    border: 0;
    cursor: pointer;
    user-select: none;
  }

  img {
    max-width: 100%;
    font-style: italic;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
    display: inline-block;
    vertical-align: middle;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  ${Typography}
`

export { GlobalStyles }
