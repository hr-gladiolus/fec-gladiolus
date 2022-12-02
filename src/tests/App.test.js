/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Logo Here/i);
  expect(linkElement).toBeInTheDocument();
});
