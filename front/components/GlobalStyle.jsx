import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;
    font-weight: 100;
    font-size: 16px;
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }

  #vapiano {
    height: 100%;
  }
`;

export default GlobalStyle;
