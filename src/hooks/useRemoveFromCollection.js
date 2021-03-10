import React, { useState } from 'react';
import client from '../state/graphqlContext';
import { gql } from 'apollo-boost';

function useRemoveFromCollection(userPlantId, plantId, userId) {
 
  const [removeUserPlant, setRemoveUserPlant] = useState([]);

  client
    .query({
      query: gql`
          query {
              removeFromCollection(userId: "${userId}", userPlantId "${userPlantId}, plantId: "${plantId}") {  
                userId
                userPlantId
                plantId
              }
          }
      `,
    })
    .then(({ data }) => setRemoveUserPlant(data.useRemoveFromCollection));
  
  
  return (
    <div>
      {removeUserPlant}
    </div>
  );
}

export default useRemoveFromCollection;
