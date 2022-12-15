import React from 'react';
import axios from 'axios';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import SingleQue from '../../components/QnA/comps/SingleQue.jsx';
import store from '../../store/store';
import testData from './testData';
import { submitHelpful } from '../../components/QnA/requestHelpers';

jest.mock('axios');
const mockSubmitHelpful = jest.fn(submitHelpful);
const mockFunction = jest.fn();

const mockProduct = {
  name: 'testName',
  od: 1234,
};

describe('testing the SingleQue component', () => {
  beforeEach(() => {
    // render App component
    render(
      <Provider store={store}>
        <SingleQue
          question={testData[0]}
          product={mockProduct}
          selectPhoto={mockFunction}
        />
      </Provider>,
    );
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  test('renders basic question', () => {
    // query DOM for text
    const Q = screen.getByText(/Q:/i);
    const questionBody = screen.getByText(/Quam aperiam est dignissimos velit./i);
    expect(Q).toBeInTheDocument();
    expect(questionBody).toBeInTheDocument();
  });
  test('renders basic answers list', () => {
    // query DOM for text
    const A = screen.getByText(/A:/i);
    const firstAnswer = screen.getAllByText(/Dolores amet qui./i);
    const secondAnswer = screen.getAllByText(/testing answer/i);
    const answersAccordion = screen.getAllByText(/SEE MORE ANSWERS/i);
    expect(A).toBeInTheDocument();
    expect(firstAnswer[0]).toBeInTheDocument();
    expect(secondAnswer[0]).toBeInTheDocument();
    expect(answersAccordion[0]).toBeInTheDocument();
  });
  test('it loads only the necessary the metadata at start for each answer', () => {
    const firstUsername = screen.getAllByText(/Gertrude79/i);
    const secondUsername = screen.getAllByText(/testing/i);
    const thirdUsername = screen.queryByText(/Kaitlyn.Raynor/i);
    expect(firstUsername[0]).toBeInTheDocument();
    expect(secondUsername[0]).toBeInTheDocument();
    expect(thirdUsername).toBe(null);
  });
  test('it loads the helpful phrases', () => {
    const helpfuls = screen.getAllByText(/Helpful?/i);
    expect(helpfuls[0]).toBeInTheDocument();
    expect(helpfuls).toHaveLength(6);
  });
  test('it loads the add answers button', () => {
    const addAnswerButton = screen.getByText(/Add Answer/i);
    expect(addAnswerButton).toBeInTheDocument();
  });
  test('it triggers the modal on add answers button click', () => {
    const addAnswerButton = screen.getByText(/Add Answer/i);
    const modalBeforeClick = screen.queryByTestId('modal');
    fireEvent.click(addAnswerButton);
    const modalAfterClick = screen.getByTestId('modal');
    expect(modalBeforeClick).toBe(null);
    expect(modalAfterClick).toBeInTheDocument();
  });
  test('it sends a helpful put to the server when the helpful button is clicked', () => {
    axios.put.mockResolvedValue(204);
    const helpfulQuestionSentenceBefore = screen.getByTestId('helpfulquestionsentence');
    const yesHelpfulQuestionButton = screen.getByTestId('helpfulquestionbutton');
    fireEvent.click(yesHelpfulQuestionButton);
    const helpfulQuestionSentenceAfter = screen.getByTestId('helpfulquestionsentence');
    expect(helpfulQuestionSentenceBefore).toEqual(helpfulQuestionSentenceAfter);
  });
});
