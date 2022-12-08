import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import App from '../App';
import store from '../store/store';

test('renders basic App structure', () => {
  // render App component
  render(<Provider store={store}><App /></Provider>);

  // query DOM for text
  const linkElement = screen.getByText(/Logo Here/i);
  expect(linkElement).toBeInTheDocument();
});
