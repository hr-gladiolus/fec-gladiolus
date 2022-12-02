/* eslint-disable no-undef */
/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import App from '../App';

test('renders basic App structure', () => {
  // render App component
  render(<App />);

  // query DOM for text
  const linkElement = screen.getByText(/Logo Here/i);
  expect(linkElement).toBeInTheDocument();
});
