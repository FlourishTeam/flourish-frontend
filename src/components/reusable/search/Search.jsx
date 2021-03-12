import React from 'react';
import styles from './styles/Search.css';
import {
  useHandleChange,
  useHandleSearch,
  useSearchQuery,
} from '../../../providers/SearchContext';
import { useHistory } from 'react-router-dom';
import { usePhotoUploader } from '../../../providers/PhotoUploadContext';

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
    empty,
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
        <img className={styles.uploadThumbnail} src={pictureUpload} />
        {!empty && <button className={styles.submit}>Submit</button>}

        <button
          className={styles.backButton}
          onClick={() => setPhotoMode(false)}
        >
          Back to Search by Text
        </button>
      </div>
    </form>
  );

  const searchByTextForm = (
    <form onSubmit={handleSearchSubmit}>
      <input
        className={styles.searchInput}
        value={searchQuery}
        type="text"
        placeholder="search a plant by name..."
        onChange={handleChange}
      />
      <button className={styles.submitButton}>
        <img src="images/search-icon.svg" title="Search by text" />
      </button>
      <button className={styles.photoMode} onClick={() => setPhotoMode(true)}>
        <img src="images/photo-icon.svg" title="Search by photo" />
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
