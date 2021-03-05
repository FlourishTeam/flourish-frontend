import React, { useState } from 'react';
import { data } from './fake-data';

const useSearchResults = () => {
  const [loading, setLoading] = useState(true);
  // pulling in static data for now, so we can test out rendering in the Search Page
  const [searchResults, setSearchResults] = useState(data);

  //searchQuery
  const [searchQuery, setSearchQuery] = useState('');

  //handleSearch

  //onChange
  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
    console.log(searchQuery);
  };

  return { loading, searchResults, searchQuery, handleChange };
};

export default useSearchResults;
