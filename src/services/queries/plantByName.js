import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const plantByName = (name) => {
  return client.query({
    query: gql`
        query {
          plantByName(name: "${name}") {
          plantId,
          image,
          commonName,
          scientificName,
          lightRange,
          hydrationRange,
          careDifficulty,
          temperatureRange
          }
        } 
        `,
  });
};
