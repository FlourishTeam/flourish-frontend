import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MyPlant from './MyPlant';

describe('MyPlant component', () => {
  afterEach(() => cleanup());
  it('renders MyPlant', () => {
    const { asFragment } = render(<MyPlant />);
    expect(asFragment()).toMatchSnapshot();
  });
});
