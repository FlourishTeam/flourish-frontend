import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Plant.css';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';

const Plant = ({
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
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fad%2FPlaceholder_no_text.svg%2F1200px-Placeholder_no_text.svg.png&f=1&nofb=1"
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
  commonName: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  lightRange: PropTypes.string.isRequired,
  hydrationRange: PropTypes.string.isRequired,
  careDifficulty: PropTypes.string.isRequired,
  temperatureRange: PropTypes.string.isRequired,
};

export default Plant;
