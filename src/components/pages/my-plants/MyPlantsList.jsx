import React from 'react';
import MyPlant from './MyPlant';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import styles from './styles/MyPlantsList.css';
import { useMyPlants } from '../../../state/MyPlantsContext';

const MyPlantList = () => {
  const { myPlants } = useMyPlants();
  const listElement = myPlants.map((plant) => {
    return (
      <li key={uuid()} className={styles.plantListItem}>
        <Link to={`/my-plants/${plant.common_name}`}>
          <MyPlant
            name={plant.common_name}
            // image={plant.image}
          />
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
