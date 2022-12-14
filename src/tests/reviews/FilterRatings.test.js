import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import FilterRatings from '../../components/reviews/ratings/FilterRatings.jsx';

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

it('shows selected filters', () => {
  renderWithProviders(<FilterRatings
    filter
    selectedFilters={{
      5: true,
      4: true,
      3: true,
      2: true,
      1: true,
    }}
  />);
});
