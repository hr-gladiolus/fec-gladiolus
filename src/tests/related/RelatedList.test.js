import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import RelatedList from '../../components/related/RelatedList.jsx';
import store from '../../store/store';

describe('Related Items', () => {
  beforeEach(() => {
    render(<Provider store={store}><RelatedList /></Provider>);
    mockAllIsIntersecting(true);
  });

  it('Renders the list of related items', async () => {
    // render header
    expect(screen.getByText('Related Items:')).toBeInTheDocument();

    // 5 cards should get rendered
    await waitFor(() => {
      expect(screen.getAllByTestId('card').length).toEqual(5);
    });
  });

  // it('Adds an item to the outfit', async () => {
  //   await waitFor(() => {
  //     screen.getByTestId('add-outfit').click();
  //     expect(screen.getAllByRole('img').length).toEqual(7);
  //   });
  // });
});
