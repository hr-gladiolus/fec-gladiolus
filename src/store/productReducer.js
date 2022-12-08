import { createSlice } from '@reduxjs/toolkit';

// the changeProduct reducer changes the state to a new productId
const productSlice = createSlice({
  name: 'product',
  initialState: {
    productId: 37324,
  },
  reducers: {
    changeProduct: (state, action) => ({
      productId: action.payload,
    }),
  },
});

// export function that will be called by dispatch
export const { changeProduct } = productSlice.actions;

// export reducer to be used by store
export default productSlice.reducer;
