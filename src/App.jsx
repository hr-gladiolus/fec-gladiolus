/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from './styles/GlobalStyles.jsx';
import Overview from './components/overview/Overview.jsx';
import Qna from './components/QnA/QnA.jsx';
import RelatedList from './components/related/RelatedList.jsx';
import RatingsAndReviews from './components/reviews/RatingsAndReviews.jsx';
import { purple, green } from './styles/theme.js';
import { changeData } from './store/productReducer.js';
import getProduct from './components/shared/productAPI.js';

// replace header tag with a styled header
const Header = styled.header`
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.fg};
  width: 100vw;
  max-width: 100%;
  font-size: 1.5em;
  padding: 0.5em;
  box-sizing: border-box;
`;

function App() {
  // we need to watch `id` in case it changes
  const id = useSelector((state) => state.product.productId);
  const dispatch = useDispatch();

  useEffect(() => {
    // send GET requests, then add them to the redux state
    getProduct(id).then((product) => {
      console.log('GOT PRODUCT: ', product);
      dispatch(changeData(product));
    });
  }, [id]);

  return (
    <div className="App">
      {/* Import the global styles */}
      <ThemeProvider theme={purple}>
        <GlobalStyle />
        <Header>
          Logo here
        </Header>
        <Overview />
        <RelatedList />
        <Qna />
        <RatingsAndReviews />
      </ThemeProvider>
    </div>
  );
}

export default App;
