import React, { useState } from 'react';
import { data } from './fake-data';

const useSearchResults = () => {
  const [loading, setLoading] = useState(true);
  // pulling in static data for now, so we can test out rendering in the Search Page
  const [searchResults, setSearchResults] = useState(data);

  return { loading, searchResults };
};

export default useSearchResults;
