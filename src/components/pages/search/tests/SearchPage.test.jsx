import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import SearchPage from '../SearchPage';
import { SearchProvider } from '../../../../state/SearchContext';
import { PhotoUploadProvider } from '../../../../state/PhotoUploadContext';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search', () => {
    const { asFragment } = render(
      <Router>
        <SearchProvider>
          <PhotoUploadProvider>
            <SearchPage />
          </PhotoUploadProvider>
        </SearchProvider>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
