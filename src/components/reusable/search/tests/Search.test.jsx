import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../Search';
import { SearchProvider } from '../../../../providers/SearchContext';
import { PhotoUploadProvider } from '../../../../providers/PhotoUploadContext';

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
