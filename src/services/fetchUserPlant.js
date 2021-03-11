import React from 'react';
import client from '../state/GraphQLContext';
import { gql } from 'apollo-boost';

export const getAllUserPlants = (user) => {

  return client
    .query({
      query: gql`
    query {
        getMyPlants(userId: ${user.id}) {
            userId
        } 
    }
`, });

};
