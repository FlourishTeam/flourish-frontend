import React, { createContext, useContext, useState } from 'react';
import { plantByName } from '../services/plantByName';

export const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = (name) => {
    setError(null);
    setLoading(true);

    plantByName(name)
      .then(({ data }) => {
        setSearchResults(data.plantByName);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <SearchContext.Provider
      value={{
        loading,
        searchResults,
        searchQuery,
        handleChange,
        handleSearch,
        setLoading,
        error,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchLoading = () => {
  const { loading } = useContext(SearchContext);
  return loading;
};

export const useSetSearchLoading = () => {
  const { setLoading } = useContext(SearchContext);
  return setLoading;
};

export const useSearchResults = () => {
  const { searchResults } = useContext(SearchContext);
  return searchResults;
};

export const useSearchQuery = () => {
  const { searchQuery } = useContext(SearchContext);
  return searchQuery;
};

export const useHandleChange = () => {
  const { handleChange } = useContext(SearchContext);
  return handleChange;
};

export const useHandleSearch = () => {
  const { handleSearch } = useContext(SearchContext);
  return handleSearch;
};

export const useSearchError = () => {
  const { error } = useContext(SearchContext);
  return error;
};
