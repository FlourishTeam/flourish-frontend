import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Plant.css';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import { Link } from 'react-router-dom';

const Plant = ({
  plantId,
  image,
  commonName,
  scientificName,
  lightRange,
  hydrationRange,
  careDifficulty,
  temperatureRange,
}) => {
  return (
    <Link to={`/details/${plantId}`}>
      <div className={styles.Plant}>
        <img src={image} height="100px"/>
        <div>{commonName}</div>
        <div className={styles.scientific}>{scientificName}</div>
        <div>{temperatureRange}</div>
        <div>{lightRange}</div>
        <div>{hydrationRange}</div>
        <MaintenanceLevel maintenanceLevel={careDifficulty} />
      </div>
    </Link>
  );
};

Plant.propTypes = {
  plantId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  lightRange: PropTypes.string.isRequired,
  hydrationRange: PropTypes.string.isRequired,
  careDifficulty: PropTypes.string.isRequired,
  temperatureRange: PropTypes.string.isRequired,
};

export default Plant;
