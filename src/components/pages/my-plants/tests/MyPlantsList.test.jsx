import React from 'react';
import { render, cleanup } from '@testing-library/react';
import MyPlantList from '../MyPlantsList';
import { MyPlantProvider } from '../../../../state/MyPlantsContext';
import { MemoryRouter as Router } from 'react-router';

describe('MyPlantList component', () => {
  afterEach(() => cleanup());
  it('renders MyPlantList', () => {
    const { asFragment } = render(
      <Router>
        <MyPlantProvider>
          <MyPlantList />
        </MyPlantProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});