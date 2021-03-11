import client from '../../providers/GraphQLContext';
import { gql } from 'apollo-boost';

export const addPlantToCollection = (user, plantId) => {
  console.log(user, 'beeeeeeeeeeep');

  return client.query({
    query: gql`
      query {
          addToCollection(userId: ${user.id}, plantId: ${plantId}) {
          userPlantId
          plantId
          userId
          }
       }
    `,
  });
};