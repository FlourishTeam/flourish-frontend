// eslint-disable-next-line no-unused-vars
import React from 'react';
import client from '../state/GraphQLContext';
import { gql } from 'apollo-boost';

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
