import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import RatingsAndReviews from '../../components/reviews/RatingsAndReviews';
import store from '../../store/store';
import ReviewsList from '../../components/reviews/list/ReviewsList.jsx';

describe('Ratings and Reviews', () => {
  beforeEach(() => {
    renderWithProviders(<RatingsAndReviews />);
  });
  it('renders the add review button', () => {
    expect(screen.getByText('Add Review +')).toBeInTheDocument();
  });
});

it('does not render reviews list if there are no reviews', () => {
  render(<Provider store={store}><RatingsAndReviews /></Provider>, {
    initialState: {
      productData: {
        total_reviews: 0,
      },
    },
  });
  expect(screen.queryByTestId('reviews')).toBeNull();
});

it('renders reviews list if there are reviews', () => {
  // render(<Provider store={store}>
  //   <RatingsAndReviews />
  //   <ReviewsList />
  //        </Provider>, {
  //   initialState: {
  //     productData: {
  //       total_reviews: 4,
  //     },
  //   },
  // });
  renderWithProviders(<RatingsAndReviews />, <ReviewsList />);
  expect(screen.getByText('% of reviews recommend this product')).toBeInTheDocument();
});
