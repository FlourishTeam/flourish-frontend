import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/MyPlant.css';
// import RemoveFromCollection from '../../reusable/collection/RemoveFromCollection';

const MyPlant = ({ common_name, scientific_name, image }) => (

  <figure className={styles.MyPlant}>
    <img
      src={image}
      alt={common_name}
      className={styles.plantImg}
    />

    <figcaption className={styles.caption}>
      <p className={styles.commonName}>{common_name}</p>
      <p className={styles.scientificName}>{scientific_name}</p>
    </figcaption>
    {/* <RemoveFromCollection /> */}
  </figure>
);

MyPlant.propTypes = {
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MyPlant;
