import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const plantById = (id) => {
  return client.query({
    query: gql`
      query {
        plantById(id: ${id}) {
        plantId,
        image,
        commonName,
        scientificName,
        lightRange,
        hydrationRange,
        temperatureRange,
        placement,
        substrateRecommendation,
        pottingNotes,
        watering,
        synonyms,
        pestsDiseases,
        warnings,
        height,
        spread,
        type,
        floweringPeriod,
        bloomSize,
        propagation,
        careDifficulty
        }
      }
      `,
  });
};
