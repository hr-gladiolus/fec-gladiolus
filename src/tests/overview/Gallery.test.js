import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../testUtils.js';
import Gallery from '../../components/overview/gallery/Gallery.jsx';
import ImageView from '../../components/overview/gallery/ImageView.jsx';
import ExpandedView from '../../components/overview/gallery/ExpandedView.jsx';
import Magnifier from '../../components/overview/gallery/Magnifier.jsx';
import exampleData from '../../components/overview/exampleData.jsx';
import '@testing-library/jest-dom';

describe('<Gallery />', () => {
  it('renders main image view', () => {
    renderWithProviders(
      <Gallery
        photos={
          [
            {
              thumbnail_url: 'a',
              url: 'b',
            },
          ]
        }
      />,
    );
    expect(screen.getAllByRole('img', { name: /b/ }));
  });
});

describe('<ImageView />', () => {
  it('expands photo on click', async () => {
    renderWithProviders(
      <ImageView
        photo={
          {
            url: 'c',
          }
        }
      />,
    );
    expect(screen.queryByTestId('')).toBeNull();
    await userEvent.click(screen.getByTestId('click-view'));
    expect(screen.getByTestId('image-view')).toBeInTheDocument();
  });
});

describe('<ExpandedView />', () => {
  it('renders expanded view of photo', () => {
    renderWithProviders(
      <ExpandedView
        photo={
          {
            url: 'c',
          }
        }
      />,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
