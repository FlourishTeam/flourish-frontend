import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MyPlantList from './MyPlantList';

describe('MyPlantList component', () => {
  afterEach(() => cleanup());
  it('renders MyPlantList', () => {
    const { asFragment } = render(<MyPlantList plants={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
