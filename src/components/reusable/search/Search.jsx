import React, { useState } from 'react';
import styles from './styles/Search.css';
import useSearchResults from '../../../hooks/useSearchResults';

const Search = () => {
  const { searchQuery, handleChange } = useSearchResults();
  const [photoMode, setPhotoMode] = useState(false);
  const [pictureUpload, setPictureUpload] = useState({});
  const [lookAlikes, setLookAlikes] = useState([]);

  const API_URL = process.env.REACT_APP_.API_URL;
  const API_KEY = process.env.REACT_APP_.API_KEY;

  const handlePreview = (e) => {
    setPictureUpload(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const files = [...e.target.elements.uploader.files];

    const promise = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const res = e.target.result;
          resolve(res);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promise).then((encodedStr) => {
      const data = {
        api_key: `${API_KEY}`,
        images: encodedStr,
      };

      fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((json) => setLookAlikes(json.suggestions));
    });

    // should trigger a loading spinner while we wait for the fetch to return
  };

  console.log(lookAlikes);

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
        <form onSubmit={(e) => e.preventDefault()}>
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
