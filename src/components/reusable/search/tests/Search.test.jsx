import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../Search';
import { SearchProvider } from '../../../../state/SearchContext';
import { PhotoUploadProvider } from '../../../../state/PhotoUploadContext';

describe('Search component', () => {
  afterEach(() => cleanup());

  it('renders Search', () => {
    const { asFragment } = render(
      <SearchProvider>
        <PhotoUploadProvider>
          <Search />
        </PhotoUploadProvider>
      </SearchProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
