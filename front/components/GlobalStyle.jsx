import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-weight: 100;
    font-size: 16px;
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
  }
  
  body, h1,h2,h3,h4,h5,h6 {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;
  }

  #vapiano {
    height: 100%;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
