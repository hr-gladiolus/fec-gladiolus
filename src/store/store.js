import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productReducer.js';

const store = configureStore({
  reducer: { product: productReducer },
});
export default store;

// in your component at the following import
// import { useSelector } from 'react-redux';
// create the following const
// const product = useSelector((state) => state.product.productId);
