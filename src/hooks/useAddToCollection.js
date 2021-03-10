import React, { useState } from 'react';
import client from '../state/graphqlContext';
import { gql } from 'apollo-boost';



function useAddToCollection(userId, plantId) {

  const [userPlant, setUserPlant] = useState([]);

  client
    .query({
      query: gql`
        query {
            addToCollection(userId: "${userId}", plantId: "${plantId}") {
            userPlantId
            plantId
            userId
            }
        }
    `,
    })
    .then(({ data }) => setUserPlant(data.useAddToCollection));


  return (
    <div>
      {userPlant}
    </div>
  );
}


export default useAddToCollection;
