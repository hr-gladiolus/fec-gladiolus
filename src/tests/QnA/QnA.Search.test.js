import React from 'react';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import Search from '../../components/QnA/Search.jsx';
import store from '../../store/store';
import testData from './testData';

let mockQueListState = testData;

const mockSetQueList = jest.fn((e) => {
  mockQueListState = e;
});

describe('testing Search component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Search
          staticList={testData}
          setQueList={mockSetQueList}
        />
      </Provider>,
    );
  });
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });
  test('renders basic Search structure', () => {
    const searchInput = screen.getByPlaceholderText('HAVE QUESTIONS? SEARCH FOR ANSWERS...');
    expect(searchInput).toBeInTheDocument();
  });
  test('It should call the function on change of the input', () => {
    // query DOM for text
    const searchInput = screen.getByPlaceholderText('HAVE QUESTIONS? SEARCH FOR ANSWERS...');
    fireEvent.change(searchInput, { target: { value: 't' } });
    expect(mockSetQueList.mock.calls.length).toBe(1);
  });
  test('It should set the queList to testData if less than three letters are put in.', () => {
    // query DOM for text
    const searchInput = screen.getByPlaceholderText('HAVE QUESTIONS? SEARCH FOR ANSWERS...');
    fireEvent.change(searchInput, { target: { value: 't' } });
    expect(mockQueListState).toEqual(testData);
  });
  test('It should set the queList to the the filtered static list if more than two letters are put in.', () => {
    // query DOM for text
    const searchInput = screen.getByPlaceholderText('HAVE QUESTIONS? SEARCH FOR ANSWERS...');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(mockQueListState).not.toEqual(testData);
  });
});
