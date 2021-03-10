import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import { DetailsProvider } from '../../../../state/DetailsContext';
import DetailsPage from '../DetailsPage';

describe('DetailsPage component', () => {
  afterEach(() => cleanup());
  it('renders DetailsPage', () => {
    const { asFragment } = render(
      <Router>
        <DetailsProvider>
          <DetailsPage />
        </DetailsProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
