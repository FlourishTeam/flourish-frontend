import React from 'react';
// import { useLoading } from '../../../hooks/useLoading';
import { usePlantById } from '../../../state/DetailsContext';
// import Loading from '../../reusable/loading/Loading';
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
