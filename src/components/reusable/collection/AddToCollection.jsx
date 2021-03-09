// import React from 'react';
// import styles from './styles';
// import { useState } from 'react';
// import myPlant from '../../pages/my-plants/MyPlant';

// export default function AddToCollection() {

//   const [myPlantItem, setMyPlantItem] = useState({});


//   //DETAILS PAGE FINDS PLANT BT ID


// ////////////EXPORT CLICKED TARGET TO ADD PLANT TO USER_PLANTS////////
//   export async function addUserPlant(token, payload) {
//     try {
//         return await request.post(`${herokuBackend}api/userPlants`)
//         .set('Authorization', token)
//         .send(payload)
//     } catch(err) {
//         throw err;
//     }
// }
// ////////////////////////////////////////////////////////////////////


// // clarify myPlants or userPlants front and back end 

// //UPDATE ALL TO MODERN REACT TUESDAY



//   handleFavorite = async(e) => {
//     e.preventDefault();
//     const { name, image } = this.state.plants;
//     const userPlant = {
//       name,
//       image,
//     };
//     console.log(this.props.token);
//     await addToCollection(this.props.token, userPlant);
//   };

  

//   return (
//     <div>
//       <button onClick={this.handleUserPlant} className="addToCollectionButton">
//                                             Save Plant to Collection
      
//         <svg className={styles.addIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

//       </button>      
//     </div>
//   );
// }

