import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const removeCareLog = (userPlantLogId) => {
  return client.query({
    query: gql`
          query {
              removeLogByLogId(userPlantLogId: ${userPlantLogId}) {
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
