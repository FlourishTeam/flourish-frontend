import React from 'react';
import styles from './styles';
import { useState } from 'react';
import myPlantList from '../../pages/my-plants/MyPlant';
import myPlant from '../../pages/my-plants/MyPlant';

export default function AddToCollection() {

  const [myPlantItem, setMyPlantItem] = useState({});
  //Add myPlant.jsx to MyPlantList.jsx

  const handleClick = () => {

    if(myPlant) {
      console.log('add button');

      return;

    }

    const handleChange = ({ target }) => {
      if(target === myPlant) setMyPlantItem(target.value);


    };



    return (
      <div>
        <svg className={styles.addIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>      </div>
    );
  };
}
