import React, { createContext, useContext, useState } from 'react';

export const MyPlantContext = createContext(null);

export const MyPlantProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [myPlants, setMyPlants] = useState([]);

  return (
    <MyPlantContext.Provider value={{ myPlants, loading }}>
      {children}
    </MyPlantContext.Provider>
  );
};

export const useMyPlants = () => {
  return useContext(MyPlantContext);
};
