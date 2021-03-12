import client from '../../providers/GraphQLContext';
import { gql } from 'apollo-boost';

export const addCareLog = (user, plantId) => {
  return  client
    .query({
      query: gql`
      query {
          addLogById(userId: ${user.id}, plantId: ${plantId}) {
            userId
            plantId
            userPlantId, 
            careDate, 
            careType, 
            careNote
          }
       }
    `,
    });
};
