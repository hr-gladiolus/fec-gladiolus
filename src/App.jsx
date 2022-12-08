import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyle from './styles/GlobalStyles.jsx';
import Overview from './components/overview/Overview.jsx';
import Qna from './components/QnA/QnA.jsx';
import RelatedList from './components/related/RelatedList.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';
import fetchMeta from './store/metaReducer.js';

const API_TOKEN = require('./config');
// replace header tag with a styled header
const Header = styled.header`
  background: #313457;
  color: white;
  width: 100vw;
  max-width: 100%;
  font-size: 1.5em;
  padding: 0.5em;
  box-sizing: border-box;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeta());
  }, []);

  return (
    <div className="App">
      {/* Import the global styles */}
      <GlobalStyle />
      <Header>
        Logo Here
      </Header>
      <Overview />
      <RelatedList />
      <Qna API={API_TOKEN.API_TOKEN} />
      <RatingsAndReviews />
    </div>
  );
}

export default App;
