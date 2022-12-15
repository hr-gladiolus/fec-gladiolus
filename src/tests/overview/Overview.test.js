/* eslint-disable import/no-unresolved */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import Overview from '../../components/overview/Overview.jsx';
import Details from '../../components/overview/details/Details.jsx';
import store from '../../store/store';
import {
  changeData,
  addProduct,
  addToOutfit,
  removeFromOutfit,
} from '../../store/productReducer.js';
import '@testing-library/jest-dom';
import getProduct from '../../components/shared/productAPI.js';
import { renderWithProviders } from '../testUtils.js';

describe('<Overview />', () => {
  beforeEach(() => {
    renderWithProviders(<Overview />);
    mockAllIsIntersecting(true);
  });

  it('renders overview component', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('overview')).toBeInTheDocument();
    });
  });

  it('sends API call to set states in store', async () => {
    const product = await getProduct(37313);
    store.dispatch(changeData(product));
    store.dispatch(addProduct(product));
    store.dispatch(addToOutfit(product));
    store.dispatch(removeFromOutfit(product));
    render(<Provider store={store}><Overview id="37313" /></Provider>);
    mockAllIsIntersecting(true);
    await waitFor(() => {
      expect(screen.getAllByText('Morning Joggers'));
    });
  });
});
