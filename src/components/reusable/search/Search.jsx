import React from 'react';
import PropTypes from 'prop-types';
import useSearchResults from '../../../hooks/useSearchResults';

const Search = () => {
  const { searchQuery, handleChange } = useSearchResults();

  return (
    <div>
      <label htmlFor="searchInput">Search</label>
      <input 
        id="searchInput"
        value= {searchQuery}
        type="text" 
        placeholder="search" 
        onChange={ handleChange }
      />
      <button>Submit</button>
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Search;
