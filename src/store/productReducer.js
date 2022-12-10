/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// the changeProduct reducer changes the state to a new productId
const productSlice = createSlice({
  name: 'product',
  initialState: {
    productId: 37324,
    productData: {},
    products: {},
    outfit: [],
  },
  reducers: {
    changeProduct: (state, action) => ({
      ...state,
      productId: action.payload,
    }),
    changeData: (state, action) => {
      state.productData = action.payload;
      state.products[action.payload.id] = action.payload;
      return state;
    },
    addToOutfit: (state, action) => {
      if (!state.outfit.includes(state.productId)) {
        state.outfit.push(state.productId);
      }
      return state;
    },
    removeFromOutfit: (state, action) => ({
      ...state,
      outfit: state.outfit.filter((product) => product !== action.payload),
    }),
    addProduct: (state, action) => {
      state.products[action.payload.id] = action.payload;
      return state;
    },
  },
});

// export function that will be called by dispatch
export const {
  changeProduct, changeData, addToOutfit, removeFromOutfit, addProduct,
} = productSlice.actions;

// export reducer to be used by store
export default productSlice.reducer;
