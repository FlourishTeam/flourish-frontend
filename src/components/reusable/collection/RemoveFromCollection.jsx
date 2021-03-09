import React from 'react';
import styles from './styles';

function RemoveFromCollection() {


  //Remove myPlantList

  return (
    <div>
      <svg className={styles.deleteIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>     
    </div>
  );
}

export default RemoveFromCollection;
