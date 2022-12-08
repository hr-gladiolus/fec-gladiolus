import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer.js';
import metaReducer from './metaReducer.js';

const store = configureStore({
  reducer: { product: productReducer, meta: metaReducer },
});
export default store;

// in your component at the following import
// import { useSelector } from 'react-redux';
// create the following const
// const product = useSelector((state) => state.product.productId);
