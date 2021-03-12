import React from 'react';
import styles from './styles/SearchPage.css';
import Search from '../../reusable/search/Search';
import PlantList from './PlantList';

const SearchPage = () => {
  return (
    <div className={styles.SearchPage}>
      <br />
      <Search />
      <h3 className={styles.SearchTitle}>
        Click below for more plant details!
      </h3>
      <PlantList />
    </div>
  );
};

export default SearchPage;
