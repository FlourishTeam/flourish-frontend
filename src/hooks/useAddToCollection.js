// import React, { useState } from 'react';
// import client from '../state/graphqlContext';
// import { gql } from 'apollo-boost';



// function useAddToCollection() {
//   const userId = 2;
//   const plantId = 6;

//   const [userPlant, setUserPlant] = useState();
//   const [error, setError] = useState(null);

//   const handleChange = () => {
//     setError(null);

//     client
//       .query({
//         query: gql`
//         query {
//             addToCollection(userId: ${userId}, plantId: ${plantId}) {
//             userPlantId
//             plantId
//             userId
//             }
//          }
//       `, })
//       // .then(res => res.json())
//       .then(({ data }) => {
//         setUserPlant(data.userPlant);
//         console.log(data);
//       })
//       .catch((error) => setError(error.message));
//   };
  


//   return { handleChange, userPlant };     
   
// }



// export default useAddToCollection;

