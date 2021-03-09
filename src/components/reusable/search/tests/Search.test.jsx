import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../Search';
import { SearchProvider } from '../../../../state/SearchContext';

describe('Search component', () => {
  afterEach(() => cleanup());

  it('renders Search', () => {
    const { asFragment } = render(
      <SearchProvider>
        <Search />
      </SearchProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
