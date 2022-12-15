import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { waitFor } from '@testing-library/dom';
import { renderWithProviders } from '../testUtils.js';
import Style from '../../components/overview/style/Style.jsx';
import StyleImg from '../../components/overview/style/StyleImg.jsx';
import exampleData from '../../components/overview/exampleData.jsx';
import '@testing-library/jest-dom';

describe('<Style />', () => {
  it('renders Style component', () => {
    const styleName = 'White';
    renderWithProviders(
      <Style
        styles={exampleData.stylesData}
        currentStyle={exampleData.stylesData[0]}
        styleName={styleName}
      />,
    );
    expect(screen.getByText(/Style/)).toBeInTheDocument();
  });
});
