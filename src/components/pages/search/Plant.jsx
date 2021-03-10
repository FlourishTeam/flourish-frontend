import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Plant.css';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';

const Plant = ({
  image,
  commonName,
  scientificName,
  lightRange,
  hydrationRange,
  careDifficulty,
  temperatureRange,
}) => {
  return (
    <div className={styles.Plant}>
      <img
        src={image}
        height="100px"
      />
      <div>{commonName}</div>
      <div className={styles.scientific}>{scientificName}</div>
      <div>{temperatureRange}</div>
      <div>{lightRange}</div>
      <div>{hydrationRange}</div>
      <MaintenanceLevel maintenanceLevel={careDifficulty} />
    </div>
  );
};

Plant.propTypes = {
  image: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  lightRange: PropTypes.string.isRequired,
  hydrationRange: PropTypes.string.isRequired,
  careDifficulty: PropTypes.string.isRequired,
  temperatureRange: PropTypes.string.isRequired,
};

export default Plant;
