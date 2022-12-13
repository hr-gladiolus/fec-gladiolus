import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import ReviewsList from '../components/reviews/ReviewsList.jsx';
import SingleReview from '../components/reviews/SingleReview.jsx';
import AddReview from '../components/reviews/AddReview.jsx';
import { renderWithProviders } from './testUtils.js';

it('renders the reviews list', () => {
  renderWithProviders(<ReviewsList />);
  expect(screen.getByText('reviews, sorted by')).toBeInTheDocument();
});

it('renders the add review modal', () => {
  renderWithProviders(<AddReview />);
  expect(screen.getByText('Write Your Review')).toBeInTheDocument();
});

// it('renders a single review', () => {
//   render(<SingleReview />);
//   expect(screen.getByText('sorted by')).toBeInTheDocument();
// });

// // add review expect place holder

// it('should increase not helpful number', () => {
//   render(<SingleReview />);
//   expect(screen.getByTestId('unhelpful')).toHaveTextContent('0');
//   return user.click(screen.getByRole('button', { name: 'No' }))
//     .then(() => {
//       expect(screen.getByTestId('unhelpful')).toHaveTextContent('1');
//     });
// });

// something for api calls
