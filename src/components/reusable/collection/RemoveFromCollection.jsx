import React from 'react';
import { useSession } from '../../../providers/AuthContext';
import { removePlantFromCollection } from '../../../services/queries/removePlantFromCollection';
import styles from './styles/AddRemoveButton.css';

// eslint-disable-next-line react/prop-types
function RemoveFromCollection({ plantId }) {
  const user = useSession();

  const handleClick = async(e) => {
    e.stopPropagation();
    await removePlantFromCollection(user, plantId);
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.removeFromCollectionButton}>
        <span>Remove Plant from Collection</span>
      </button> 
    </div>
  );
}

export default RemoveFromCollection;

