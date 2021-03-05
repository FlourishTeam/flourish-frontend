import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSubmit }) => {
  return (
    <div>
      <label htmlFor="searchInput">Search</label>
      <input 
        id="searchInput"
        type="text" 
        placeholder="search" 
        onSubmit={ onSubmit }
      />
      {/* <button>Submit</button> */}
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Search;




rf