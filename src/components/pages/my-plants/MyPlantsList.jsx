import React, { useState, useEffect } from 'react';
import MyPlant from './MyPlant';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import styles from './styles/MyPlantsList.css';
import { getAllUserPlants } from '../../../services/fetchUserPlant';
import { useSession } from '../../../state/AuthContext';

const MyPlantList = () => {
  const user = useSession();
  const [plantsList, setPlantsList] = useState([]);

  useEffect(() => { 

    getAllUserPlants(user)
      .then(res => setPlantsList(res));

  }, []);



  const listElement = plantsList.map((plant) => {
    return (
      <li key={uuid()} className={styles.plantListItem}>
        <Link
          to={`/my-plants/${plant.common_name}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MyPlant {...plant} />
        </Link>
      </li>
    );
  });

  return (
    <ul data-testid="plants" className={styles.MyPlantsList}>
      {listElement}
    </ul>
  );
};

export default MyPlantList;
