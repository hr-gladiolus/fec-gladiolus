import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import RatingsAndReviews from '../../components/reviews/RatingsAndReviews';

describe('Ratings and Reviews', () => {
  beforeEach(() => {
    renderWithProviders(<RatingsAndReviews />);
  });
  it('renders the add review button', () => {
    expect(screen.getByText('Add Review +')).toBeInTheDocument();
  });
});
