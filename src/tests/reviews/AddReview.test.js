import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import '@testing-library/jest-dom';
import AddReview from '../../components/reviews/list/AddReview.jsx';

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

  it('calls handleChange when recommend yes it chosen', () => {
    fireEvent.click(screen.getByTestId('yes'));
  });

  it('calls handleChange when recommend no it chosen', () => {
    fireEvent.click(screen.getByTestId('no'));
  });

  it('updates input value for body', () => {
    const input = screen.getByTestId('body');
    fireEvent.change(input, { target: { value: 'this should properly host an image and send proper url plz ' } });
    expect(input.value).toBe('this should properly host an image and send proper url plz ');
  });

  it('updates input value for email', () => {
    const input = screen.getByTestId('email');
    fireEvent.change(input, { target: { value: 'jackson11@email.com' } });
    expect(input.value).toBe('jackson11@email.com');
  });
});
