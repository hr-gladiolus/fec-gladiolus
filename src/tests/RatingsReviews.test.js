import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import ReviewsList from '../components/reviews/ReviewsList.jsx';
import SingleReview from '../components/reviews/SingleReview.jsx';
import AddReview from '../components/reviews/AddReview.jsx';
import { renderWithProviders } from './testUtils.js';
import RatingsAndReviews from '../components/reviews/RatingsAndReviews';
import FilterRatings from '../components/reviews/FilterRatings.jsx';
import ProductFactors from '../components/reviews/ProductFactors.jsx';
import SortReviews from '../components/reviews/SortReviews.jsx';

describe('Reviews List', () => {
  beforeEach(() => {
    renderWithProviders(<ReviewsList />);
  });
  it('renders the reviews list', () => {
    expect(screen.getByText('reviews, sorted by')).toBeInTheDocument();
  });
});

describe('Add Review', () => {
  beforeEach(() => {
    renderWithProviders(<AddReview />);
  });
  it('renders the add review modal', () => {
    expect(screen.getByText('Write Your Review')).toBeInTheDocument();
  });

  it('has email input with place holder Example: jackson11@email.com', () => {
    expect(screen.getByPlaceholderText('Example: jackson11@email.com')).toBeInTheDocument();
  });
  it('has nickname input with place holder Example: jackson11!', () => {
    expect(screen.getByPlaceholderText('Example: jackson11!')).toBeInTheDocument();
  });
});

describe('Ratings and Reviews', () => {
  beforeEach(() => {
    renderWithProviders(<RatingsAndReviews />);
  });
  it('renders the add review button', () => {
    expect(screen.getByText('Add Review +')).toBeInTheDocument();
  });
});

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

describe('Single Review', () => {
  beforeEach(() => {
    renderWithProviders(<SingleReview />);
  });
  it('renders a single review', () => {
    expect(screen.getByText('Was this review helpful?')).toBeInTheDocument();
  });
  it('should increase not helpful number', () => {
    expect(screen.getByTestId('unhelpful')).toHaveTextContent('0');
    return user.click(screen.getByRole('button', { name: 'No' }))
      .then(() => {
        expect(screen.getByTestId('unhelpful')).toHaveTextContent('1');
      });
  });
});

describe('Product Factors', () => {
  beforeEach(() => {
    renderWithProviders(<ProductFactors />);
  });
  it('renders product factors', () => {
    expect(screen.getByTestId('factors')).toBeInTheDocument();
  });
});

describe('Sort Reviews', () => {
  beforeEach(() => {
    renderWithProviders(<SortReviews />);
  });
  it('renders sort reviews component', () => {
    expect(screen.getByText('reviews, sorted by')).toBeInTheDocument();
  });
});

// // add review expect place holder
