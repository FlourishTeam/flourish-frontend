import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import client from '../state/GraphQLContext';

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
