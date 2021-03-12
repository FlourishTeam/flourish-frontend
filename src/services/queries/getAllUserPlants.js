import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const getAllUserPlants = (userId) => {
  return client
    .query({
      query: gql`
    query {
        getMyPlants(userId: ${userId}) {
            commonName
            image
            plantId
        } 
    }
`, });
};
