import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const config = require('../config.js');

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

const fetchMeta = createAsyncThunk('meta/fetchMeta', async (payload, thunkAPI) => {
  console.log('fetch meta', productId);
  try {
    const response = await instance.get('/reviews/meta');
    console.log('asynsthunk', response.data);
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    loading: false,
    metaData: {},
  },
  reducer: {},
  extraReducers: {
    // [fetchMeta.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [fetchMeta.fulfilled]: (state, { payload }) => {
    //   state.metaData = payload;
    //   state.loading = false;
    // },
    // [fetchMeta.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.err = action.payload;
    // },
  },
});

// export const { updateMetaData } = metaSlice.actions;

export default metaSlice.reducer;

// const fetchMeta = createAsyncThunk(
//   '/reviews/meta',
//   async (productId, dispatch) => {
//     console.log('new func');
//     const response = await instance.get('/reviews/meta');
//     return response.data;
//   },
// );

// const fetchMeta = createAsyncThunk(
//   '/reviews/meta',
//   async (thunkAPI) => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
//       (data) => data.json(),
//     );
//     return res;
//   },
// );
