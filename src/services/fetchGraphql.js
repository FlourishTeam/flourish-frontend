import React from 'react';
import client from '../state/graphqlContext';
import { gql } from 'apollo-boost';

export const addPlantToCollection = (user, plantId) => {
  console.log(user);

  return  client
    .query({
      query: gql`
      query {
          addToCollection(userId: ${user.userId}, plantId: ${plantId}) {
          userPlantId
          plantId
          userId
          }
       }
    `, });
};
 
