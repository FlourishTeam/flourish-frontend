import React from 'react';
import styles from './styles/Search.css';
import usePhotoUploader from '../../../hooks/usePhotoUploader';
import {
  useHandleChange,
  useHandleSearch,
  useSearchQuery,
} from '../../../state/SearchContext';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const searchQuery = useSearchQuery();
  const handleChange = useHandleChange();
  const handleSearch = useHandleSearch();

  const history = useHistory();

  const {
    photoMode,
    setPhotoMode,
    pictureUpload,
    handleUpload,
    handlePreview,
  } = usePhotoUploader();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
    history.push('/search');
  };

  const searchByPhotoForm = (
    <form onSubmit={handleUpload} className={styles.photoForm}>
      <div className={styles.uploaderContainer}>
        <input type="file" name="uploader" onChange={handlePreview} />
        <button>Submit</button>
      </div>
      {pictureUpload && (
        <img className={styles.uploadThumbnail} src={pictureUpload} />
      )}
    </form>
  );

  const searchByTextForm = (
    <form onSubmit={handleSearchSubmit}>
      <input
        className={styles.searchInput}
        value={searchQuery}
        type="text"
        placeholder="search"
        onChange={handleChange}
      />
      <button className={styles.photoMode} onClick={() => setPhotoMode(true)}>
        <img src="images/photo-icon.svg" />
      </button>
      <button className={styles.submitButton}>
        <img src="images/search-icon.svg" />
      </button>
    </form>
  );

  return (
    <div className={styles.Search}>
      {photoMode ? searchByPhotoForm : searchByTextForm}
    </div>
  );
};

export default Search;
