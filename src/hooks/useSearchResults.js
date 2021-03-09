// import React, { useState } from 'react';
// import client from '../state/GraphQLContext';
// import { gql } from 'apollo-boost';

// const useSearchResults = () => {
//   const [loading, setLoading] = useState(true);
//   // pulling in static data for now, so we can test out rendering in the Search Page
//   const [searchResults, setSearchResults] = useState([]);

//   //searchQuery
//   const [searchQuery, setSearchQuery] = useState('');

//   //handleSearch
//   const handleSearch = (name) => {
//     client
//       .query({
//         query: gql`
//         query {
//           plantByName(name: "${name}") {
//           plantId,
//           image,
//           commonName,
//           scientificName,
//           lightRange,
//           hydrationRange,
//           careDifficulty,
//           temperatureRange
//           }
//         }
//         `,
//       })
//       .then(({ data }) => {
//         setSearchResults(data.plantByName);
//       });
//   };
//   console.log('USE SEARCH RESULTS', searchResults);

//   //onChange
//   const handleChange = ({ target }) => {
//     setSearchQuery(target.value);
//   };

//   return { loading, searchResults, searchQuery, handleChange, handleSearch };
// };

// export default useSearchResults;
