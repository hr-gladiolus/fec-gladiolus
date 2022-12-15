import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import axios from 'axios';
import { renderWithProviders } from '../testUtils.js';
import { getReviews } from '../../components/reviews/api.js';
import { threeTests } from './testData.js';

jest.mock('axios');

describe('getReviews', () => {
  it('fetches reviews for given product from API', async () => {
    const data = threeTests;
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
});
