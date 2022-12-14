import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import ReviewsList from '../../components/reviews/ReviewsList.jsx';
import SingleReview from '../../components/reviews/SingleReview.jsx';
import SortReviews from '../../components/reviews/SortReviews.jsx';
import {
  testReview, partialBody, fullBody, threeTests,
} from './testData.js';
import store from '../../store/store';

describe('Reviews List', () => {
  beforeEach(() => {
    renderWithProviders(<ReviewsList />);
  });

  it('renders the reviews list', () => {
    expect(screen.getByText('reviews, sorted by')).toBeInTheDocument();
  });

  it('should render the individual reviews component', () => {
    expect(screen.getByTestId('reviews-container')).toBeInTheDocument();
  });

  it('should not show "More Reviews" button if there are 2 or less reviews', () => {
    expect(screen.queryByText('More Reviews')).toBeNull();
  });
});

it('should filter by ratings', () => {
  renderWithProviders(<ReviewsList
    filter
    selectedFilters={{
      5: true,
      4: false,
      3: false,
      2: false,
      1: false,
    }}
  />);
});

describe('Single Review', () => {
  beforeEach(() => {
    render(<SingleReview review={testReview} />);
  });

  it('show if product was recommended', () => {
    expect(screen.getByText('I recommend this product')).toBeInTheDocument();
  });

  it('should increase not helpful number', () => {
    expect(screen.getByTestId('helpful-container')).toHaveTextContent('0');
    fireEvent.click(screen.getByText('No'));
    expect(screen.getByTestId('helpful-container')).toHaveTextContent('1');
  });

  it('should show full body when "show more" button is clicked', () => {
    expect(screen.getByText(partialBody)).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('show-more'));
    expect(screen.getByText(fullBody)).toBeInTheDocument();
  });

  it('should render "show more" button when body is longer than 250 characters', () => {
    expect(screen.getByText('Show More')).toBeInTheDocument();
  });
});

describe('Sort Reviews', () => {
  beforeEach(() => {
    renderWithProviders(<SortReviews />);
  });

  it('renders sort reviews component', () => {
    expect(screen.getByText('reviews, sorted by')).toBeInTheDocument();
  });

  it('has button to change review sort option', () => {
    fireEvent.click(screen.getByTestId('dropdown'));
  });
});
