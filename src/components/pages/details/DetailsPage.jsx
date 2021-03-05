import React from 'react';
import { useLoading } from '../../../hooks/useLoading';
import Loading from '../../reusable/loading/Loading';
import Details from './Details';
import styles from './styles/DetailsPage.css';

const DetailsPage = () => {
  const { loading } = useLoading();

  if(loading) return <Loading />;

  return (
    <div className={styles.DetailsPage}>
      <Details />
    </div>
  );
};

export default DetailsPage;
