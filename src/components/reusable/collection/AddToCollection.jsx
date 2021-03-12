import React from 'react';
import { addPlantToCollection } from '../../../services/queries/addPlantToCollection';
import { useSession } from '../../../providers/AuthContext';
import styles from './styles/AddToCollection.css';

// eslint-disable-next-line react/prop-types
function AddToCollection({ plantId }) {
  const user = useSession();

  const handleClick = () => {
    addPlantToCollection(user.id, plantId);
  };

  return (
    <div className={styles.AddToCollection}>
      <button onClick={handleClick}>
        <span>Save Plant to Collection</span>
        <img src="images/add-icon.svg" className={styles.addIcon} />
      </button>
    </div>
  );
}

export default AddToCollection;
