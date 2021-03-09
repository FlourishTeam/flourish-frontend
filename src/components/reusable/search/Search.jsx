import React from 'react';
import styles from './styles/Search.css';
import useSearchResults from '../../../hooks/useSearchResults';
import usePhotoUploader from '../../../hooks/usePhotoUploader';

const Search = () => {
  const { searchQuery, handleChange, handleSearch } = useSearchResults();
  const {
    photoMode,
    setPhotoMode,
    pictureUpload,
    handleUpload,
    handlePreview,
  } = usePhotoUploader();

  const handleSearchSubmit = e => {
    e.preventDefault();
    handleSearch(searchQuery);
    console.log('SEARCH QUERY', searchQuery);
  };

  return (
    <div className={styles.Search}>
      {photoMode ? (
        <form onSubmit={handleUpload} className={styles.photoForm}>
          <div className={styles.uploaderContainer}>
            <input type="file" name="uploader" onChange={handlePreview} />
            <button>Submit</button>
          </div>
          {pictureUpload && (
            <img className={styles.uploadThumbnail} src={pictureUpload} />
          )}
        </form>
      ) : (
        <form onSubmit={handleSearchSubmit}>
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
        </form>
      )}
    </div>
  );
};

export default Search;
