import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { renderWithProviders } from '../testUtils.js';
import Details from '../../components/overview/details/Details.jsx';
import '@testing-library/jest-dom';

describe('<Details />', () => {
  it('renders details component', () => {
    renderWithProviders(<Details category="a" name="b" ratings={[]} />);
    expect(screen.getByText('a')).toBeInTheDocument();
  });

  it('render product\'s price correctly', () => {
    renderWithProviders(
      <Details
        ratings={
          {
            1: '8',
            2: '1',
            3: '5',
            4: '8',
            5: '6',
          }
        }
        price={100}
        sale={null}
      />,
    );
    expect(screen.getByTestId('price')).toBeInTheDocument();
  });
});
