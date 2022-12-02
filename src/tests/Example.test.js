import React from 'react';
import { render, screen } from '@testing-library/react';
import { waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Example from './Example';

describe('Example', () => {
  // `async` functions are a way to use promises without `.then()`
  it('renders the component correctly', () => {
    // render() loads the component passed to it
    render(<Example />);

    // the screen object lets us query the DOM for elements
    // here, we will send a query to make sure the h1 tags get rendered
    expect(screen.getByText('Example!')).toBeInTheDocument();
  });

  // we can also interact with queried DOM elements
  it('displays text once the button is clicked', async () => {
    // render the component with props
    render(<Example text="hello!" />);

    // waitFor runs the callback function until it passes (1 second limit)
    await waitFor(() => {
      // query the DOM for the button, then click it!
      screen.getByText('click me!').click();
      expect(screen.getByText('hello!')).toBeInTheDocument();
    });
  });
});
