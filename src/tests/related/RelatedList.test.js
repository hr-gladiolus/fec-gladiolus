import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import RelatedList from '../../components/related/RelatedList.jsx';
import Card from '../../components/related/Card.jsx';
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

  it('Adds an item to the outfit', async () => {
    await waitFor(() => {
      screen.getByTestId('add-outfit').click();
      // 6 cards should be on screen after an item is added to the outfit
      expect(screen.getAllByTestId('card').length).toEqual(6);
    });
  });

  it('Renders a cached card', async () => {
    render(<Provider store={store}><Card id="37313" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);
    await waitFor(() => {
      expect(screen.getByText('Morning Joggers')).toBeInTheDocument();
    });
  });
});

describe('Related List Cards', () => {
  // beforeEach(() => {
  //   // render(<Provider store={store}><Card id="37313" icon="☆" /></Provider>);
  //   mockAllIsIntersecting(true);
  // });

  it('Renders a non-cached card', async () => {
    render(<Provider store={store}><Card id="37313" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);
    await waitFor(() => {
      expect(screen.getByText('Morning Joggers')).toBeInTheDocument();
    });
  });

  it('Can load and close the table modal', async () => {
    render(<Provider store={store}><Card id="37313" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);

    await waitFor(() => {
      const tableButton = screen.getByTestId('show-table');
      tableButton.click();
    });

    await waitFor(() => {
      expect(screen.getByText('100% Cotton')).toBeInTheDocument();
    });

    // close modal
    await waitFor(() => {
      const modalButton = screen.getByLabelText('Close');
      modalButton.click();
    });

    await waitFor(() => {
      expect(screen.queryByText('100% Cotton')).toBeNull();
    });
  });
});
