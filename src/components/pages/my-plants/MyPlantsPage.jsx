import React from 'react';
import MyPlantList from './MyPlantsList';
import styles from './styles/MyPlantPage.css';

const MyPlantsPage = () => {
  return (
    <>
      <div className={styles.helloDiv}>
    My Plant List
        <p className={styles.clickHere}>Please click plant below to view Care History.</p>
      </div>
      <MyPlantList />
    </>
  );
};

export default MyPlantsPage;
