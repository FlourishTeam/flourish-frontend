import client from '../../providers/GraphQLContext';
import { gql } from 'apollo-boost';



export const addCareLog = (user, plantId, userPlantId, careType, careNote) => {
  return  client
    .query({
      query: gql`
      query {
          addLogById(userId: ${user.id}, plantId: ${plantId}, userPlantId: ${userPlantId}, careDate: ${Date.now()}, careType: "${careType}", careNote: "${careNote}") {
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
