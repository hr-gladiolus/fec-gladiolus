import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import GlobalStyle from './styles/GlobalStyles.jsx';
import Overview from './components/overview/Overview.jsx';
import Qna from './components/QnA/QnA.jsx';
import RelatedList from './components/related/RelatedList.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';
import { purple, green } from './styles/theme.js';

const API_TOKEN = require('./config');
// replace header tag with a styled header
const Header = styled.header`
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.color};
  width: 100vw;
  max-width: 100%;
  font-size: 1.5em;
  padding: 0.5em;
  box-sizing: border-box;
`;

function App() {
  return (
    <div className="App">
      {/* Import the global styles */}
      <ThemeProvider theme={green}>
        <GlobalStyle />
        <Header>
          Logo Here
        </Header>
        <Overview />
        <RelatedList />
        <Qna API={API_TOKEN.API_TOKEN} />
        <RatingsAndReviews />
      </ThemeProvider>
    </div>
  );
}

export default App;
