import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QnA from '../../components/QnA/QnA.jsx';

test('renders basic QnA structure', () => {
  // render App component
  render(<QnA />);

  // query DOM for text
  const linkElement = screen.getByText(/QUESTIONS & ANSWERS/i);
  expect(linkElement).toBeInTheDocument();
});
