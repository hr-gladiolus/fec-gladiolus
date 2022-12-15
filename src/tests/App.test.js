import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import App from '../App';
import store from '../store/store';

test('renders basic App structure', () => {
  mockAllIsIntersecting(true);
  // render App component
  render(<Provider store={store}><App /></Provider>);

  // query DOM for text
  const linkElement = screen.getByText(/Logo Here/i);
  expect(linkElement).toBeInTheDocument();
});
