import client from '../../providers/GraphQLContext';
import { gql } from 'apollo-boost';

export const addCareLog = (
  userId,
  plantId,
  userPlantId,
  careDate,
  careType,
  careNote
) => {
  return client.query({
    query: gql`
      query {
          addLogById(userId: ${userId}, plantId: ${plantId}, userPlantId: ${userPlantId}, careDate: "${careDate}", careType: "${careType}", careNote: "${careNote}") {
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
