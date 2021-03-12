import React, { useState, useEffect } from 'react';
import MyPlant from './MyPlant';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import styles from './styles/MyPlantPage.css';
// import { useParams } from 'react-router';
import { useSession } from '../../../providers/AuthContext';
import { getAllUserPlants } from '../../../services/queries/getAllUserPlants';
import RemoveFromCollection from '../../reusable/collection/RemoveFromCollection';

const MyPlantList = () => {
  const user = useSession();
  // const { id } = useParams();

  const [plantsList, setPlantsList] = useState([]);

  useEffect(() => {
    if (!user) return;
    getAllUserPlants(user.id).then((res) => {
      setPlantsList(res.data.getMyPlants);
    });
  }, [user]);

  const listElement = plantsList.map((plant) => {
    return (
      <li key={uuid()} className={styles.plantListItem}>
        <Link
          to={`/my-plants/${plant.plantId}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MyPlant {...plant} />
        </Link>
        <RemoveFromCollection className={styles.myPlantButton} plantId={plant.plantId}/>
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


// .plantImg {
//         height: 90px;
//     }

//     .caption {
//         text-decoration: none;
//         margin-left: 20px;
//     }

//     .scientificName {
//         font-style: italic;
//     }

