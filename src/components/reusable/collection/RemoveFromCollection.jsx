import React from 'react';
// import PropTypes from "prop-types";
import useRemoveFromCollection from '../../../hooks/useRemoveFromCollection';
import styles from './styles/AddToCollection.css';

function RemoveFromCollection() {


  return (
    <div>
      <button onClick={() => useRemoveFromCollection(this.id)} className="addToCollectionButton">
        <span>Remove Plant from Collection</span>
        <span><svg className={styles.deleteIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>     
        </span>
      </button> 
    </div>
  );
}



export default RemoveFromCollection;















// ////////////////REMOVE PLANT FROM USER_PLANTS//////////////////
//   export async function deleteUserPlant(someId, token) {
//     try {
//         return await request.delete(`${herokuBackend}api/userPlants/${someId}`)
//         .set('Authorization', token)
//     } catch(err) {
//         throw err;
//     }
// }
// ////////////////////////////////////////////////////////////////

// //UPDATE ALL TO MODERN REACT TUESDAY


// handleDelete = async (someId) => {
//   await deleteUserPlant(someId, this.props.token);
//   const response = await fetchAllUserPlants(this.props.token)
//   await this.setState({ collectionPlants: response.body });
// }

//   return (
//     <div>

   
// <button className="trash" imagevalue={fave.id} onClick={() => this.handleDelete(fave.id)}>
//    Delete this Plant from Collection</button>

//       <svg className={styles.deleteIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>     
//     </div>
//   );
// }

// export default RemoveFromCollection;
