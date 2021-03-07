import React, { useState } from 'react';
import styles from './styles/Search.css';
import useSearchResults from '../../../hooks/useSearchResults';
import Uploady from '@rpldy/uploady';

const Search = () => {
  const { searchQuery, handleChange } = useSearchResults();
  const [photoMode, setPhotoMode] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.Search}>
      <form onSubmit={handleUpload}>
        {photoMode ? (
          <div className={styles.uploaderContainer}>
            <Uploady
              destination={{ url: 'https://my-server/upload' }}
            ></Uploady>
            <button>Submit</button>
          </div>
        ) : (
          <>
            <input
              className={styles.searchInput}
              value={searchQuery}
              type="text"
              placeholder="search"
              onChange={handleChange}
            />
            <button
              className={styles.photoMode}
              onClick={() => setPhotoMode(true)}
            >
              <img src="images/photo-icon.svg" />
            </button>
            <button className={styles.submitButton}>
              <img src="images/search-icon.svg" />
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Search;
