import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles.jsx';
import Overview from './components/overview/Overview.jsx';
import Qna from './components/QnA/QnA.jsx';
import RelatedList from './components/related/RelatedList.jsx';

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
      <Overview />
      {/* <RelatedList />
      <Qna /> */}
    </div>
  );
}

export default App;
