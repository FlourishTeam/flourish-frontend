import React, { createContext, useContext, useState } from 'react';
import { getMyCareHistoryById } from '../services/queries/getMyCareHistoryById';

export const CareLogContext = createContext(null);

export const CareLogProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [plantDetails, setPlantDetails] = useState([]);
  const [userPlantId, setUserPlantId] = useState();
  const [careLogItems, setCareLog] = useState([]);
  const [error, setError] = useState(null);

  const renderMyCareHistory = (userId, plantId) => {
    setError(null);
    setLoading(true);

    getMyCareHistoryById(plantId, userId)
      .then(({ data }) => {
        setCareLog(data.getMyCareHistoryById.careLogs);
        setPlantDetails(data.getMyCareHistoryById.plantDetails[0]);
        setUserPlantId(data.getMyCareHistoryById.userPlantId);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <CareLogContext.Provider
      value={{
        loading,
        careLogItems,
        renderMyCareHistory,
        plantDetails,
        userPlantId,
        error,
      }}
    >
      {children}
    </CareLogContext.Provider>
  );
};

export const useUserPlantId = () => {
  const { userPlantId } = useContext(CareLogContext);
  return userPlantId;
};

export const useCareLogLoading = () => {
  const { loading } = useContext(CareLogContext);
  return loading;
};

export const useCareLogItems = () => {
  const { careLogItems } = useContext(CareLogContext);
  return careLogItems;
};

export const usePlantDetails = () => {
  const { plantDetails } = useContext(CareLogContext);
  return plantDetails;
};

export const useCareLogError = () => {
  const { error } = useContext(CareLogContext);
  return error;
};

export const useRenderMyCareHistory = () => {
  const { renderMyCareHistory } = useContext(CareLogContext);
  return renderMyCareHistory;
};
