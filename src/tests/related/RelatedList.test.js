import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import RelatedList from '../../components/related/RelatedList.jsx';
import Card from '../../components/related/Card.jsx';
import store from '../../store/store';
import { changeData } from '../../store/productReducer.js';
import getProduct from '../../components/shared/productAPI.js';
import { renderWithProviders } from '../testUtils.js';

describe('Related Items', () => {
  beforeEach(() => {
    renderWithProviders(<RelatedList />);
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

  it('Adds and removes an item to the outfit', async () => {
    await waitFor(() => {
      screen.getByTestId('add-outfit').click();
      // 6 cards should be on screen after an item is added to the outfit
      expect(screen.getAllByTestId('card').length).toEqual(6);
    });

    await waitFor(() => {
      const tableButton = screen.getAllByTestId('card-button');
      tableButton[tableButton.length - 1].click();
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('card').length).toEqual(5);
    });
  });

  it('Renders a cached card', async () => {
    renderWithProviders(<Card id="37313" icon="☆" offset="0" />);
    mockAllIsIntersecting(true);
    await waitFor(() => {
      expect(screen.getByText('Morning Joggers')).toBeInTheDocument();
    });
  });

  it('Has working carousel buttons', async () => {
    // right button should be visible, left should not
    await waitFor(() => {
      expect(screen.getByTestId('right')).toBeInTheDocument();
    });
    expect(screen.queryByTestId('left')).toBeNull();

    // after click, left should be visible
    await waitFor(() => {
      screen.getByTestId('right').click();
    });

    await waitFor(() => {
      expect(screen.getByTestId('left')).toBeInTheDocument();
      screen.getByTestId('left').click();
    });
  });
});

// renderWithProviders doesn't work with these tests for some reason
describe('Related List Cards', () => {
  it('Renders a non-cached card', async () => {
    render(<Provider store={store}><Card id="37313" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);
    await waitFor(() => {
      expect(screen.getByText('Morning Joggers')).toBeInTheDocument();
    });
  });

  it('Can load and close the table modal', async () => {
    // manually send API call to set current product in store
    const product = await getProduct(37312);
    store.dispatch(changeData(product));
    render(<Provider store={store}><Card id="37313" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);

    await waitFor(() => {
      const tableButton = screen.getByTestId('card-button');
      tableButton.click();
    });

    // check table headers
    await waitFor(() => {
      expect(screen.getByText('Bright Future Sunglasses')).toBeInTheDocument();
      expect(screen.getAllByText('Morning Joggers').length).toEqual(2);
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

  it('Displays a secondary carousel when hovering over a card', async () => {
    render(<Provider store={store}><Card id="37313" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);

    await waitFor(() => {
      userEvent.hover(screen.getByTestId('image-carousel'));
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('carousel-image').length).toEqual(6);
      screen.getAllByTestId('carousel-image')[0].click();
    });

    // make sure nav buttons are clickable
    await waitFor(() => {
      screen.getByTestId('carousel-right').click();
    });

    await waitFor(() => {
      screen.getByTestId('carousel-left').click();
    });
  });

  it('Changes products when a card gets clicked', async () => {
    const setOffset = jest.fn();
    window.scrollTo = jest.fn();
    render(<Provider store={store}><Card id="37313" icon="☆" offset="0" setOffset={setOffset} /></Provider>);

    await waitFor(() => {
      screen.getByTestId('change-product').click();
    });
    expect(setOffset.mock.calls.length).toEqual(1);
    expect(window.scrollTo.mock.calls.length).toEqual(1);
  });

  it('Renders a card with a sale price', async () => {
    render(<Provider store={store}><Card id="37610" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);

    await waitFor(() => {
      // two prices should be shown
      expect(screen.getByText(/611\.00/i)).toBeInTheDocument();
      expect(screen.getByText(/178\.00/i)).toBeInTheDocument();
    });
  });

  it('Renders a card that has no image', async () => {
    render(<Provider store={store}><Card id="37312" icon="☆" offset="0" /></Provider>);
    mockAllIsIntersecting(true);

    await waitFor(() => {
      expect(screen.getByText('Bright Future Sunglasses')).toBeInTheDocument();
    });

    // no images should be in the card carousel
    await waitFor(() => {
      expect(screen.queryAllByTestId('carousel-image').length).toEqual(0);
    });
  });
});
