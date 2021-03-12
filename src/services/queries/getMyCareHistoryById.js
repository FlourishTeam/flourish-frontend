import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const getMyCareHistoryById = (plantId, userId) => {
  return client.query({
    query: gql`
        query {
          getMyCareHistoryById(plantId: ${plantId}, userId: ${userId}) {
            careLogs {
              userPlantLogId
              userId
              plantId
              userPlantId
              careDate
              careType
              careNote
            }
            plantDetails {
              plantId
              image
              commonName
              synonyms
              scientificName
              lightRange
              hydrationRange
              careDifficulty
              pestsDiseases
              warnings
              height
              spread
              type
              floweringPeriod
              bloomSize
              temperatureRange
              placement
              substrateRecommendation
              pottingNotes
              watering
              propagation
            }
            userPlantId
          }
        }
      `,
  });
};
