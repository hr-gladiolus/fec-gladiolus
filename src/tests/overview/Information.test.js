import React from 'react';
import { render, screen } from '@testing-library/react';
import Information from '../../components/overview/information/Information.jsx';
import '@testing-library/jest-dom';

describe('<Information />', () => {
  it('renders a div component', () => {
    render(<Information slogan="Yolo" description="You Only Live Once" features={[{ feature: 'Fun', value: 'Peace' }]} />);
    expect(screen.getByRole('heading')).not.toBeUndefined();
  });
});
