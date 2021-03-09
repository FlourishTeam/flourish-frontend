import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import SearchPage from '../SearchPage';
import { SearchProvider } from '../../../../state/SearchContext';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search', () => {
    const { asFragment } = render(
      <Router>
        <SearchProvider>
          <SearchPage />
        </SearchProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
