import React from 'react';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import More from '../../components/QnA/More.jsx';
import store from '../../store/store';
import testData from './testData';

const mockToggleAccordion = jest.fn();

const mockProduct = {
  name: 'testName',
  od: 1234,
};

describe('testing the More component', () => {
  beforeEach(() => {
    // render App component
    render(
      <Provider store={store}>
        <More
          queList={testData}
          toggleAccordion={mockToggleAccordion}
          product={mockProduct}
          showMore
        />
      </Provider>,
    );
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  test('renders basic Add question button', () => {
    // query DOM for text
    const addQuestionButton = screen.getByText(/ADD QUESTION +/i);
    expect(addQuestionButton).toBeInTheDocument();
  });
  test('renders basic More questions button', () => {
    // query DOM for text
    const moreQuestionsButton = screen.getByText(/MORE ANSWERED QUESTIONS/i);
    expect(moreQuestionsButton).toBeInTheDocument();
  });
  test('it triggers the modal on click', () => {
    const modalBeforeClick = screen.queryByTestId('modal');
    const addAQuestionButton = screen.getByTestId('addaque');
    fireEvent.click(addAQuestionButton);
    const modal = screen.getByTestId('modal');
    expect(modalBeforeClick).toBe(null);
    expect(modal).toBeInTheDocument();
  });
});
