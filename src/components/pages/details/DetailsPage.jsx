import React from 'react';

import { usePlantById } from '../../../state/DetailsContext';
import Details from './Details';
import styles from './styles/DetailsPage.css';

const DetailsPage = () => {

  const { plant } = usePlantById();

  return (
    <div className={styles.DetailsPage}>
      <Details {...plant}/>
    </div>
  );
};

export default DetailsPage;
