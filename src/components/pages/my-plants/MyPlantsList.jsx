import React, { useState, useEffect } from 'react';
import MyPlant from './MyPlant';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import styles from './styles/MyPlantsList.css';
import { getAllUserPlants } from '../../../services/fetchUserPlant';
import { useSession } from '../../../state/AuthContext';
import { useParams } from 'react-router';

const MyPlantList = () => {
  const user = useSession();
  const { id } = useParams();

  const [plantsList, setPlantsList] = useState([]);

  useEffect(() => { 

    getAllUserPlants(user)
      .then(res => {
        // eslint-disable-next-line no-console
        console.log(res.data);
        setPlantsList(res.data.getMyPlants);
      });
  }, []);

  const listElement = plantsList.map((plant) => {
    return (
      <li key={uuid()} className={styles.plantListItem}>
        <Link
          to={`/my-plants/${plant.plantId}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MyPlant plantId={id} {...plant} />
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
