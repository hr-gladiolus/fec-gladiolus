/* eslint-disable no-console */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { renderWithProviders } from '../testUtils.js';
import Cart from '../../components/overview/cart/Cart.jsx';
import { addItemToCart } from '../../components/overview/helpers/cartAPI.js';
import SelectQty from '../../components/overview/cart/SelectQty.jsx';
import SelectSize from '../../components/overview/cart/SelectSize.jsx';
import CartButton from '../../components/overview/cart/CartButton.jsx';
import '@testing-library/jest-dom';

describe('<Cart />', () => {
  beforeEach(() => {
    renderWithProviders(
      <Cart
        skus={
          {
            a: {},
          }
        }
        currentSKU={
          ['a', { quantity: 0 }]
        }
      />,
    );
    mockAllIsIntersecting(true);
  });

  it('renders cart component', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('cart')).toBeInTheDocument();
    });
  });

  it('does NOT add item to cart when no size is selected', async () => {
    await waitFor(() => {
      screen.queryByTestId('cartClick').click();
    });
    await waitFor(() => {
      expect(screen.queryByText('Please select size!')).toBeVisible();
    });
  });
});

describe('Test cart API function', () => {
  it('console log should be called when item is added to cart', async () => {
    const result = jest.spyOn(global.console, 'log');
    addItemToCart(1281075, 1);
    await waitFor(() => {
      expect(result).toHaveBeenCalled();
      result.mockRestore();
    });
  });
});

describe('<SelectQty />', () => {
  beforeEach(() => {
    const range = (n, m) => [...Array(Math.min(n, m)).keys()];
    renderWithProviders(
      <SelectQty
        range={range}
        currentSKU={
          ['a', { quantity: 16 }]
        }
      />,
    );
    mockAllIsIntersecting(true);
  });

  it('renders maximum quantity of 15', async () => {
    await waitFor(() => {
      expect(screen.getByRole('option', { name: '15' })).toBeInTheDocument();
      expect(screen.getAllByRole('option').length).toEqual(15);
    });
  });

  it('renders quantity component', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('quantity')).toBeInTheDocument();
    });
  });
});

describe('<SelectSize />', () => {
  beforeEach(() => {
    const handleSize = (
      skus = null,
    ) => {
      if (skus === null) return [];
      return Array.from(new Set(Object.values(skus).map((each) => each.size)));
    };
    renderWithProviders(
      <SelectSize
        handleSize={handleSize}
      />,
    );
    mockAllIsIntersecting(true);
  });
  it('renders OUT OF STOCK when no size is available', () => {
    expect(screen.getByRole('option', { name: 'OUT OF STOCK' })).toBeInTheDocument();
  });
});
