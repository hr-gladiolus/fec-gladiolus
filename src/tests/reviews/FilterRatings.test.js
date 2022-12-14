import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import FilterRatings from '../../components/reviews/FilterRatings.jsx';

describe('Filter Ratings', () => {
  beforeEach(() => {
    renderWithProviders(<FilterRatings />);
  });

  it('renders the filter ratings component', () => {
    expect(screen.getByText('5 stars')).toBeInTheDocument();
  });

  it('shows current filters only after click', async () => {
    expect(screen.queryByTestId('filters')).toBeNull();
  });
});
