import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { renderWithProviders } from '../testUtils.js';
import Information from '../../components/overview/information/Information.jsx';
import Features from '../../components/overview/information/Features.jsx';

describe('<Information />', () => {
  it('renders a div component', () => {
    renderWithProviders(<Information slogan="Yolo" description="You Only Live Once" features={[{ feature: 'Fun', value: 'Peace' }]} />);
    expect(screen.getByRole('heading')).not.toBeUndefined();
  });

  it('renders no feature when product has no features', () => {
    renderWithProviders(
      <Features
        features={[]}
      />,
    );
    expect(screen.getByText(/No Feature/)).toBeInTheDocument();
  });
});
