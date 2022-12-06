import React from 'react';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import ReviewsList from '../components/reviews/ReviewsList.jsx';
import SingleReview from '../components/reviews/SingleReview.jsx';

it('renders the reviews list', () => {
  render(<ReviewsList />);
  expect(screen.getByText('Reviews List')).toBeInTheDocument();
});
