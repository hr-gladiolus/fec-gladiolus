import { createGlobalStyle } from 'styled-components';

// Styles that impact the body or all elements go here
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* Please change this color lol */
    background: #fff2cf;
  }

  * {
    margin: 0;
    padding: 0;
  }

  td, th {
    border: 1px solid black;
  }
`;

export default GlobalStyle;
