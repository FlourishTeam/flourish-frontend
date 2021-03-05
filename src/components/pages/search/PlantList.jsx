import React from 'react';
import useSearchResults from '../../../hooks/useSearchResults';
import Plant from './Plant';
import styles from './styles/PlantList.css';
import uuid from 'react-uuid';

const PlantList = () => {
  // state: loading, searchResults (from Hook)
  const { loading, searchResults } = useSearchResults();

  // if there are no search results, render Loading
  // if there are search results, render Plant

  const plantElements = searchResults.map((plant) => {
    return (
      <li key={uuid()}>
        <Plant {...plant} />
      </li>
    );
  });

  // correct loading logic later:
  // opposite of loading for now because loading will never not be true
  return (
    <ul className={styles.PlantList}>
      {!loading ? <>Loading</> : plantElements}
    </ul>
  );
};

export default PlantList;
