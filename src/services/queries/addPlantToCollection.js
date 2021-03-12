import client from '../../providers/GraphQLContext';
import { gql } from 'apollo-boost';

export const addPlantToCollection = (userId, plantId) => {
  console.log(userId, 'beeeeeeeeeeep');
 
  return  client
    .query({
      query: gql`
      query {
          addToCollection(userId: ${userId}, plantId: ${plantId}) {
          userPlantId
            plantId
          userId
          }
       }
    `,
    });
};
