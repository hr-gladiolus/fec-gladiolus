import { createReducer } from '@reduxjs/toolkit';
import changeProduct from './productAction.js';

const initialState = {
  productId: 37324,
};

const productReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeProduct, (state, action) => {
    initialState.productId = action.payload;
  });
});

export default productReducer;
