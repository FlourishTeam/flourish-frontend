import React, { createContext, useContext, useState } from 'react';
import client from './GraphQLContext';
import { gql } from 'apollo-boost';

export const CareLogContext = createContext(null);

export const CareLogProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [plant, setPlant] = useState({});
  const [careLogItems, setCareLog] = useState(null);
  const [error, setError] = useState(null);

  const renderMyCareHistory = (userId, plantId) => {
    setError(null);
    setLoading(true);

    client
      .query({
        query: gql`
        query {
          getMyCareHistoryById(plantId: ${plantId}, userId: ${userId}) {
            careLogs {
              userPlantLogId
              userId
              plantId
              userPlantId
              careDate
              careType
              careNote
            }
            plantDetails {
              plantId
              image
              commonName
              synonyms
              scientificName
              lightRange
              hydrationRange
              careDifficulty
              pestsDiseases
              warnings
              height
              spread
              type
              floweringPeriod
              bloomSize
              temperatureRange
              placement
              substrateRecommendation
              pottingNotes
              watering
              propagation
            }
          }
        }
      `, })
      .then(({ data }) => {
        setCareLog(data.getMyCareHistoryById);
        setPlant(data.plantDetails);
        setLoading(false);

      })
      .catch((error) => setError(error.message));
  };


  return (
    <CareLogContext.Provider value={{ 
      loading,
      careLogItems,
      renderMyCareHistory,
      plant,
      error 
    }}>
      {children}
    </CareLogContext.Provider>
  );
};

export const useCareLogLoading = () => {
  const { loading } = useContext(CareLogContext);
  return loading;
};

export const useCareLogItems = () => {
  const { careLogItems } = useContext(CareLogContext);
  return careLogItems;
};

export const usePlant = () => {
  const { plant } = useContext(CareLogContext);
  return plant;
};

export const useCareLogError = () => {
  const { error } = useContext(CareLogContext);
  return error;
};

export const useRenderMyCareHistory = () => {
  const { renderMyCareHistory } = useContext(CareLogContext);
  return renderMyCareHistory;
};
