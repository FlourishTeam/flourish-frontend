import React from 'react';
import Plant from './Plant';
import styles from './styles/PlantList.css';
import uuid from 'react-uuid';
import {
  useSearchError,
  useSearchLoading,
  useSearchResults,
} from '../../../providers/SearchContext';
import Loading from '../../reusable/loading/Loading';

const PlantList = () => {
  const searchResults = useSearchResults();
  const loading = useSearchLoading();
  const error = useSearchError();

  const plantElements = searchResults.map((plant) => {
    return (
      <li key={uuid()}>
        <Plant {...plant} />
      </li>
    );
  });

  if(loading)
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    );
  if(error) return <div>{error}</div>;

  return <ul className={styles.PlantList}>{plantElements}</ul>;
};

export default PlantList;
