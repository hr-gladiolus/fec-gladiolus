import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import Qlist from '../../components/QnA/Qlist.jsx';
import store from '../../store/store';
import testData from './testData';

describe('renders basic Qlist component structure', () => {
  beforeEach(() => {
    const testProduct = {
      name: 'testName',
      id: 123,
    };
    const mockFunction = jest.fn();
    render(
      <Provider store={store}>
        <Qlist
          queList={testData}
          product={testProduct}
          selectPhoto={mockFunction}
        />
      </Provider>,
    );
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  test('renders basic Qlist structure', () => {
    // query DOM for text
    const accordionElement = screen.getByTestId('accordionDiv');
    expect(accordionElement).toBeInTheDocument();
  });
  test('renders the more component inside of Qlist', () => {
    const moreElement = screen.getByText('ADD QUESTION +');
    expect(moreElement).toBeInTheDocument();
  });
});
