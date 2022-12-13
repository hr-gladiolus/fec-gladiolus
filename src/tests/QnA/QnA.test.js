import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QnA from '../../components/QnA/QnA.jsx';
import App from '../../App.jsx';

test('renders basic QnA structure', () => {
  // render App component
  render(<App />);

  // query DOM for text
  const linkElement = screen.getByText(/QUESTIONS & ANSWERS/i);
  expect(linkElement).toBeInTheDocument();
});
