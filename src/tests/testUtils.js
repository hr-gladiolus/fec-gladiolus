/* eslint-disable import/prefer-default-export */
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// As a basic setup, import your same slice reducers
import productReducer from '../store/productReducer.js';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { product: productReducer }, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
// how to set up in your test file

// add the following imports
// import { Provider } from 'react-redux';
// import { renderWithProviders } from './testUtils.js';
// file path may need to be updated

// wrap your component with renderWithProviders function
// example - renderWithProviders(<ReviewsList />);
