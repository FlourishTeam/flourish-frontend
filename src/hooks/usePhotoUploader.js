import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const usePhotoUploader = () => {
  const [photoMode, setPhotoMode] = useState(false);
  const [pictureUpload, setPictureUpload] = useState({});
  const [lookAlikes, setLookAlikes] = useState([]);

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

  return {
    photoMode,
    setPhotoMode,
    pictureUpload,
    handleUpload,
    handlePreview,
  };
};

export default usePhotoUploader;
