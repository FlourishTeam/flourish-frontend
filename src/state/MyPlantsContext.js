import React, { createContext, useContext, useState } from 'react';
import { data } from '../hooks/fake-data';


export const MyPlantContext = createContext(null);

export const MyPlantProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [myPlants, setMyPlants] = useState(data);

  return (
    <MyPlantContext.Provider value={{ myPlants, loading }}>
      {children}
    </MyPlantContext.Provider>
  );
};

export const useMyPlants = () => {
  return useContext(MyPlantContext);
};
