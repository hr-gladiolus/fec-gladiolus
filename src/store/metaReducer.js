import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const config = require('../config.js');

const instance = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
  headers: { Authorization: config.API_TOKEN },
});

const fetchMeta = createAsyncThunk('reviews/meta', async (payload, { rejectWithValue, getState, dispatch }) => {
  try {
    const response = await instance.get('/reviews/meta');
    console.log('asynsthunk', response.data);
    return response.data;
  } catch (err) {
    return err;
  }
});

const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    metaData: { loading: false },
  },
  reducers: {},
  extraReducers: {
  //   [fetchMeta.pending.type]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [fetchMeta.fulfilled.type]: (state, action) => {
  //     state.metaData = action.payload;
  //     state.loading = false;
  //   },
  //   [fetchMeta.rejected.type]: (state, action) => {
  //     state.loading = false;
  //     state.err = action.payload;
  //   },
  },
});

// export const { updateMetaData } = metaSlice.actions;

export default metaSlice.reducer;
