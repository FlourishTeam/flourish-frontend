import React from 'react';
import { addPlantToCollection } from '../../../services/queries/addPlantToCollection';
import { useSession } from '../../../providers/AuthContext';
import styles from './styles/AddRemoveButton.css';

// eslint-disable-next-line react/prop-types
function AddToCollection({ plantId }) {
  const user = useSession();

  const handleClick = () => {
    addPlantToCollection(user.id, plantId);
  };

  return (
    <>
      {user
        ? (
          <div>
            <button 
              onClick={handleClick}
              className={styles.addToCollection}>
              <span>Save Plant to Collection</span>
              {/* <svg className={styles.addIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
            </button>
          </div>
        ) : (
          <></>
        )
      }
    </>
  );
}

export default AddToCollection;
