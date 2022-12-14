import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import QnA from '../../components/QnA/QnA.jsx';
import store from '../../store/store';

test('renders basic QnA structure', () => {
  // render App component
  render(<Provider store={store}><QnA /></Provider>);

  // query DOM for text
  const linkElement = screen.getByText(/QUESTIONS & ANSWERS/i);
  expect(linkElement).toBeInTheDocument();
});
