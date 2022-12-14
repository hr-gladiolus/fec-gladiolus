import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import ReviewsList from '../../components/reviews/ReviewsList.jsx';
import SingleReview from '../../components/reviews/SingleReview.jsx';
import SortReviews from '../../components/reviews/SortReviews.jsx';
import { testReview } from './testData.js';

describe('Reviews List', () => {
  beforeEach(() => {
    renderWithProviders(<ReviewsList />);
  });
  it('renders the reviews list', () => {
    expect(screen.getByText('reviews, sorted by')).toBeInTheDocument();
  });
});

describe('Single Review', () => {
  beforeEach(() => {
    render(<SingleReview review={testReview} />);
  });
  it('show if product was recommended', () => {
    expect(screen.getByText('I recommend this product')).toBeInTheDocument();
  });
  it('should increase not helpful number', () => {
    expect(screen.getByTestId('unhelpful')).toHaveTextContent('0');
    return user.click(screen.getByRole('button', { name: 'No' }))
      .then(() => {
        expect(screen.getByTestId('unhelpful')).toHaveTextContent('1');
      });
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
