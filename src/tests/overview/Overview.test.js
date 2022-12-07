import React from 'react';
import { render, screen } from '@testing-library/react';
import Overview from '../../components/overview/Overview.jsx';
import '@testing-library/jest-dom';

test('renders basic App structure', () => {
  render(<Overview />);
  const linkElement = screen.getByText(/Overview/i);
  expect(linkElement).toBeInTheDocument();
});
