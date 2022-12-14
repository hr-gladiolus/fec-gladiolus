import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import QnA from '../../components/QnA/QnA.jsx';
import store from '../../store/store';

describe('testing Search component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <QnA />
      </Provider>,
    );
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  test('renders basic QnA structure', () => {
    // query DOM for text
    const linkElement = screen.getByText(/QUESTIONS & ANSWERS/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders the search component to the screen', async () => {
    const searchInput = screen.findByPlaceholderText('HAVE QUESTIONS? SEARCH FOR ANSWERS...');
    expect(await searchInput).toBeInTheDocument();
  });
  test('renders the Qlist component to the screen', async () => {
    const QsForEachQuestion = screen.findAllByText(/Q:/);
    expect(await QsForEachQuestion).toBeTruthy();
    expect(await QsForEachQuestion).toHaveLength(2);
  });
  test('renders the More component', async () => {
    const AddQuestion = screen.findByText('ADD QUESTION +');
    expect(await AddQuestion).toBeInTheDocument();
  });
});
