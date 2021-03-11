import React from 'react';
import styles from './styles/SearchPage.css';
import Search from '../../reusable/search/Search';
import PlantList from './PlantList';

const SearchPage = () => {
  return (
    <div className={styles.SearchPage}>
      <Search />
      <PlantList />
    </div>
  );
};

export default SearchPage;
