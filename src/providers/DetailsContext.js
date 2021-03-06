import React, { createContext, useContext, useState } from 'react';
import { plantById } from '../services/queries/plantById';

export const DetailsContext = createContext(null);

export const DetailsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [plant, setPlant] = useState({});
  const [error, setError] = useState(null);

  const renderDetails = (id) => {
    setError(null);
    setLoading(true);

    plantById(id)
      .then(({ data }) => {
        setPlant(data.plantById);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <DetailsContext.Provider
      value={{
        loading,
        plant,
        error,
        renderDetails,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetailsLoading = () => {
  const { loading } = useContext(DetailsContext);
  return loading;
};

export const usePlant = () => {
  const { plant } = useContext(DetailsContext);
  return plant;
};

export const useDetailsError = () => {
  const { error } = useContext(DetailsContext);
  return error;
};

export const useRenderDetails = () => {
  const { renderDetails } = useContext(DetailsContext);
  return renderDetails;
};
