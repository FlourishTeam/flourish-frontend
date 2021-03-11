import React from 'react';
import { useSession } from '../../../providers/AuthContext';
import { removePlantFromCollection } from '../../../services/queries/removePlantFromCollection';
import styles from './styles/AddToCollection.css';

// eslint-disable-next-line react/prop-types
function RemoveFromCollection({ plantId }) {
  const user = useSession();
  
  const handleClick = () => {
    removePlantFromCollection(user, plantId);   
  };

  return (
    <div>
      <button onClick={handleClick} className="removeFromCollectionButton">
        <span>Remove Plant from Collection</span>
        <span><svg className={styles.deleteIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>     
        </span>
      </button> 
    </div>
  );
}

export default RemoveFromCollection;

