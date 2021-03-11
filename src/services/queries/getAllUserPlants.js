import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const getAllUserPlants = (user) => {
  const id = 2;

  return client.query({
    query: gql`
    query {
        getMyPlants(userId: ${id}) {
            commonName
            plantId
            image

        } 
    }
`,
  });
};
