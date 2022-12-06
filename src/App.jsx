import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles.jsx';
import Qna from './components/QnA/QnA.jsx';
import RelatedList from './components/related/RelatedList.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';

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
  return (
    <div className="App">
      {/* Import the global styles */}
      <GlobalStyle />
      <Header>
        Logo Here
      </Header>
      <RelatedList />
      <Qna />
      <RatingsAndReviews />
    </div>
  );
}

export default App;
