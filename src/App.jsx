// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line import/extensions
import Qna from './components/QnA/QnA.jsx';
// eslint-disable-next-line import/extensions
import RelatedList from './components/related/RelatedList.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Logo Here
      </header>
      <RelatedList />
      <Qna />
    </div>
  );
}

export default App;
