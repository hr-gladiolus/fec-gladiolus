import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import ProductFactors from '../../components/reviews/ProductFactors.jsx';

describe('Product Factors', () => {
  beforeEach(() => {
    renderWithProviders(<ProductFactors />);
  });
  it('renders product factors component', () => {
    expect(screen.getByTestId('factors')).toBeInTheDocument();
  });

  it('renders individual factors', () => {
    const app = renderWithProviders(<ProductFactors />);
    const spy = jest.spyOn(app.singleFactor, 'singleFactor');
    expect(spy).toHaveBeenCalled();
  });
});
