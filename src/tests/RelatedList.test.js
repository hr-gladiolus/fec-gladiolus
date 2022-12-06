import React from 'react';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import RelatedList from '../components/related/RelatedList.jsx';

describe('Related Items', () => {
  beforeAll(() => {
    render(<RelatedList />);
  });

  it('Renders the list of related items', async () => {
    // render header
    expect(screen.getByText('Related Items:')).toBeInTheDocument();

    // 4 images should get rendered
    await waitFor(() => {
      expect(screen.getAllByRole('img').length).toEqual(4);
    });
  });
});
