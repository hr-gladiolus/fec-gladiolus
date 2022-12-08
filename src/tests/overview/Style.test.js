import React from 'react';
import { render, screen } from '@testing-library/react';
import Style from '../../components/overview/style/Style.jsx';
import '@testing-library/jest-dom';

describe('<Style />', () => {
  it('renders a basic component', () => {
    render(
      <Style
        styles={
          [
            {
              style_id: '1',
              name: '2',
              original_price: '3',
              sale_price: '4',
              'default?': '5',
              photos: [
                {
                  thumbnail_url: '6',
                  url: '7',
                },
              ],
              skus: '8',
            },
          ]
        }
      />,
    );
    expect(screen.getByText('Style here')).toBeInTheDocument();
  });
});
