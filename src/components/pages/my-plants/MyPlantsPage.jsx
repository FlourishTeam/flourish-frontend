import React from 'react';
import MyPlantList from './MyPlantsList';
import styles from './styles/MyPlantPage.css';

const MyPlantsPage = () => {
  return (
    <>
      <div className={styles.helloDiv}>
    My Plant List
      </div>
      <MyPlantList />
    </>
  );
};

export default MyPlantsPage;
