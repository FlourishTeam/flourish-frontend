import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const removeFromCollection = (userId, plantId) => {
  return client.query({
    query: gql`
          query {
              removeFromCollection(userId: ${userId}, plantId: ${plantId}) {  
                userId
                userPlantId
                plantId
              }
          }
      `,
  });
};
