import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import {
  submitQorA, submitHelpful, submitReport, getQuestions,
} from '../../components/QnA/requestHelpers';
import testData from './testData';

// submitQorA is a post req submitHelpful and submitReport are puts

jest.mock('axios');
const mockGetQuestions = jest.fn(getQuestions);
const mockSubmitQorA = jest.fn(submitQorA);
const mockSubmitHelpful = jest.fn(submitHelpful);
const mockSubmitReport = jest.fn(submitReport);
const mockReturnValue = {
  data: testData,
};

describe('Testing requestHelpers functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('ensure the getQuestions helper function returns data when requested with the correct number of parameters', async () => {
    mockGetQuestions(37324, 1, 100);

    if (mockGetQuestions.mock.calls[0].length === 3) {
      axios.get.mockResolvedValue(mockReturnValue);
    } else {
      axios.get.mockResolvedValue(422);
    }

    const getQuestionsCall = await mockGetQuestions(37324, 1, 100);
    expect(getQuestionsCall).toEqual({ data: testData });
    expect(mockGetQuestions).toHaveBeenCalledWith(37324, 1, 100);
  });
  test('ensure the getQuestions helper function returns error code when requested with the incorrect number of parameters', async () => {
    mockGetQuestions(37324, 1);

    if (mockGetQuestions.mock.calls[0].length !== 3) {
      axios.get.mockResolvedValue(422);
    } else {
      axios.get.mockResolvedValue(mockReturnValue);
    }

    const getQuestionsCall = await mockGetQuestions(37324, 1);
    expect(getQuestionsCall).toBe(422);
    expect(mockGetQuestions).toHaveBeenCalledWith(37324, 1);
  });
  test('ensure the submitQorA helper function returns approval code when requested with the correct number of parameters', async () => {
    mockSubmitQorA(true, 'body', 'name', 'email@email.com', 37324);
    if (mockSubmitQorA.mock.calls[0].length === 5 || mockSubmitQorA.mock.calls[0].length === 6) {
      axios.post.mockResolvedValue(201);
    } else {
      axios.post.mockResolvedValue(422);
    }

    const submitQorACall = await mockSubmitQorA(true, 'body', 'name', 'email@email.com', 37324);

    expect(submitQorACall).toBe(201);
    expect(mockSubmitQorA).toHaveBeenCalledWith(true, 'body', 'name', 'email@email.com', 37324);
  });
  test('ensure the submitQorA helper function returns err code when requested with the incorrect number of parameters', async () => {
    mockSubmitQorA(true, 'body', 'name', 'email@email.com');
    if (mockSubmitQorA.mock.calls[0].length === 5 || mockSubmitQorA.mock.calls[0].length === 6) {
      axios.post.mockResolvedValue(201);
    } else {
      axios.post.mockResolvedValue(422);
    }

    const submitQorACall = await mockSubmitQorA(true, 'body', 'name', 'email@email.com');

    expect(submitQorACall).toBe(422);
    expect(mockSubmitQorA).toHaveBeenCalledWith(true, 'body', 'name', 'email@email.com');
  });
  test('ensure the submitHelpful helper function returns approval code when requested with the correct number of parameters', async () => {
    mockSubmitHelpful(true, 37324);

    if (mockSubmitHelpful.mock.calls[0].length === 2) {
      axios.put.mockResolvedValue(204);
    } else {
      axios.put.mockResolvedValue(422);
    }

    const submitHelpfulCall = await mockSubmitHelpful(true, 37324);

    expect(submitHelpfulCall).toBe(204);
    expect(mockSubmitHelpful).toHaveBeenCalledWith(true, 37324);
  });
  test('ensure the submitHelpful helper function returns error code when requested with the incorrect number of parameters', async () => {
    mockSubmitHelpful(true);

    if (mockSubmitHelpful.mock.calls[0].length === 2) {
      axios.put.mockResolvedValue(204);
    } else {
      axios.put.mockResolvedValue(422);
    }

    const submitHelpfulCall = await mockSubmitHelpful(true);

    expect(submitHelpfulCall).toBe(422);
    expect(mockSubmitHelpful).toHaveBeenCalledWith(true);
  });
  test('ensure the submitReport helper function returns approval code when requested with the correct number of parameters', async () => {
    mockSubmitReport(true, 37324);

    if (mockSubmitReport.mock.calls[0].length === 2) {
      axios.put.mockResolvedValue(204);
    } else {
      axios.put.mockResolvedValue(422);
    }

    const submitReportCall = await mockSubmitReport(true, 37324);

    expect(submitReportCall).toBe(204);
    expect(mockSubmitReport).toHaveBeenCalledWith(true, 37324);
  });
  test('ensure the submitReport helper function returns error code when requested with the incorrect number of parameters', async () => {
    mockSubmitReport(true);

    if (mockSubmitReport.mock.calls[0].length === 2) {
      axios.put.mockResolvedValue(204);
    } else {
      axios.put.mockResolvedValue(422);
    }

    const submitReportCall = await mockSubmitReport(true);

    expect(submitReportCall).toBe(422);
    expect(mockSubmitReport).toHaveBeenCalledWith(true);
  });
});
