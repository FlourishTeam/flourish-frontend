import { gql } from 'apollo-boost';
import client from '../../providers/GraphQLContext';

export const removePlantFromCollection = (user, plantId) => {
  console.log(user, 'remooooooooove');
  
  return  client
    .query({
      query: gql`
        query {
            removeFromCollection(userId: ${user.id}, plantId: ${plantId}) {
            userPlantId
            plantId
            userId
            }
         }
      `, });
};
   
