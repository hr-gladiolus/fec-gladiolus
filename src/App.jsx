import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalStyle from './styles/GlobalStyles.jsx';
import Qna from './components/QnA/QnA.jsx';
import RelatedList from './components/related/RelatedList.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';

const API_TOKEN = require('./config');
// replace header tag with a styled header
const Header = styled.header`
  background: #313457;
  color: white;
  width: 100vw;
`;

function App() {
  return (
    <div className="App">
      {/* Import the global styles */}
      <GlobalStyle />
      <Header>
        Logo Here
      </Header>
      <RelatedList />
      <Qna API={API_TOKEN.API_TOKEN} />
      <RatingsAndReviews />
    </div>
  );
}

export default App;
