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
  font-family: 'Fantony';
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.fg};
  width: 100vw;
  max-width: 100%;
  font-size: 1.5em;
  padding: 0.5em;
  box-sizing: border-box;
  box-shadow: 0 0 0 10px ${({ theme }) => theme.highlight};
  h1 {
    font-size: 40px;
  }
`;

function App() {
  // we need to watch `id` in case it changes
  const id = useSelector((state) => state.product.productId);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    // send GET requests, then add them to the redux state
    if (products[id] === undefined) {
      getProduct(id).then((product) => {
        dispatch(changeData(product));
      });
    } else {
      dispatch(changeData(products[id]));
    }
  }, [id]);

  return (
    <div className="App">
      {/* Import the global styles */}
      <ThemeProvider theme={green}>
        <GlobalStyle />
        <Header>
          <h1>
            Logo Here
            {' '}
            <i className="fa-solid fa-gift" />
          </h1>
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
