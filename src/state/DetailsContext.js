import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/reusable/loading/Loading';
//replace with real API fetch plantById
import { data } from '../hooks/fake-data';

export const DetailsContext = createContext(null);

export const DetailsProvider = ({ children }) => {
  const [loading, setLoading]  = useState(true);
  // 
  const [plant, setPlant] = useState(data[0]);

  // uncomment when fetch by plantById is added

  // useEffect(() => {
  //   // replace data with API fetch plantById
  //   data()
  //     .then(plant => {
  //       setPlant(plant);
  //       setLoading(false);
  //     });
  // }, {});
  
  return (
    <DetailsContext.Provider value={{ plant, loading }}>
      {/* remove ! when API fetch plantById is added */}
      {!loading ? <Loading /> : children}
    </DetailsContext.Provider>
  );
};

export const usePlantById = () => {
  return useContext(DetailsContext);
};
