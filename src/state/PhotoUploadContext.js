import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useHandleSearch } from './SearchContext';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const PhotoUploadContext = createContext(null);

export const PhotoUploadProvider = ({ children }) => {
  const [photoMode, setPhotoMode] = useState(false);
  const [pictureUpload, setPictureUpload] = useState({});
  const handleSearch = useHandleSearch();

  const history = useHistory();

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
        .then((json) => handleSearch(json.suggestions[0].plant_name));
    });

    history.push('/search');
  };

  return (
    <PhotoUploadContext.Provider
      value={{
        photoMode,
        setPhotoMode,
        pictureUpload,
        handleUpload,
        handlePreview,
      }}
    >
      {children}
    </PhotoUploadContext.Provider>
  );
};

export const usePhotoUploader = () => {
  return useContext(PhotoUploadContext);
};