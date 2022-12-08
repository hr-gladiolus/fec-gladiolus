import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import RelatedList from '../../components/related/RelatedList.jsx';
import store from '../../store/store';

describe('Related Items', () => {
  beforeEach(() => {
    render(<Provider store={store}><RelatedList /></Provider>);
  });

  it('Renders the list of related items', async () => {
    // render header
    expect(screen.getByText('Related Items:')).toBeInTheDocument();

    // 6 images should get rendered
    await waitFor(() => {
      expect(screen.getAllByRole('img').length).toEqual(6);
    });
  });

  it('Adds an item to the outfit', async () => {
    await waitFor(() => {
      screen.getByTestId('add-outfit').click();
      expect(screen.getAllByRole('img').length).toEqual(7);
    });
  });
});
