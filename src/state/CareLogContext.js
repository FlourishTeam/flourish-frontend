import React, { createContext, useContext, useState } from 'react';


export const CareLogContext = createContext(null);

export const CareLogProvider = ({ children }) => {
  const [careLogItems, setCareLog] = useState([]);

  return (
    <CareLogContext.Provider value={{ careLogItems }}>
      {children}
    </CareLogContext.Provider>
  );
};

export const useCareLogItems = () => {
  return useContext(CareLogContext);
};
