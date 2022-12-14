import { createGlobalStyle } from 'styled-components';

// Styles that impact the body or all elements go here
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* Please change this color lol */
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};
    font-family: Helvetica,Arial,sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: Fantony;
    src: url("./FANTONY-ROUGH.otf") format("opentype");
  }
`;

export default GlobalStyle;
