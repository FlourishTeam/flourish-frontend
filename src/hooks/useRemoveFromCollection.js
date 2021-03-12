import React, { useState } from 'react';
import { removeFromCollection } from '../services/queries/removeFromCollection';

function useRemoveFromCollection(userId, plantId) {
  const [removeUserPlant, setRemoveUserPlant] = useState([]);

  removeFromCollection(userId, plantId).then(({ data }) =>
    setRemoveUserPlant(data.useRemoveFromCollection)
  );

  return <div>{removeUserPlant}</div>;
}

export default useRemoveFromCollection;
