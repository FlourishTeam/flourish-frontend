import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/MyPlantPage.css';
// import RemoveFromCollection from '../../reusable/collection/RemoveFromCollection';

const MyPlant = ({  commonName, scientificName, image }) => (
  <figure className={styles.myPlantFigures}>
    <img
      src={image}
      alt={commonName}
      className={styles.myPlantImg}
      
    />

    <figcaption className={styles.myPlantFigcaption}>
      <p className={styles.commonName}>{commonName}</p>
      <p className={styles.scientificName}>{scientificName}</p>
    </figcaption>
   
  </figure>
);

MyPlant.propTypes = {
  commonName: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MyPlant;
