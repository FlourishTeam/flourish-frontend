import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const getAllUserPlants = (user) => {
  const id = 2;
  console.log(user);

  return client
    .query({
      query: gql`
    query {
        getMyPlants(userId: ${id}) {
            common_name
            image
        } 
    }
`, });
};
