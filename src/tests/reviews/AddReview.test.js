import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import AddReview from '../../components/reviews/AddReview.jsx';

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
