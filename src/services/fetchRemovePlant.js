// eslint-disable-next-line no-unused-vars
import React from 'react';
import client from '../state/GraphQLContext';
import { gql } from 'apollo-boost';

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
   
