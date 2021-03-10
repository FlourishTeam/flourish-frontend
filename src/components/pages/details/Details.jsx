import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Details.css';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import AddToCollection from '../../reusable/collection/AddToCollection';

const Details = ({
  image,
  commonName,
  scientificName,
  synonyms,
  pestsDiseases,
  warnings,
  height,
  spread,
  type,
  floweringPeriod,
  bloomSize,
  humidityLevel,
  propagation,
  careDifficulty
}) => {
  return (
    <>
      <div className={styles.Details}>
        <img src={image} alt={commonName} />
        <div>{commonName}</div>
        <div>{scientificName}</div>
        <div>Maintenance Level: <MaintenanceLevel maintenanceLevel={careDifficulty} /></div>
        {/* import ADD/REMOVE component */}
        {/* import CARE DETAILS component */}
        {/* ABOUT SECTION */}
        <section>
          <div>Other Names: {synonyms}</div>
          <div>Warnings: {warnings}</div>
          <div>Common Pests and Diseases: {pestsDiseases}</div>
          <ul>
        Physical Characteristics:
            <li>Height: {height}</li>
            <li>Spread: {spread}</li>
            <li>Type: {type}</li>
            <li>Flowering Period: {floweringPeriod}</li>
            <li>Bloom Size: {bloomSize}</li>
          </ul>
          <div>Propagation: {propagation}</div>
          <div>Humidity Level: {humidityLevel}</div>
        </section>    
      </div>
      <AddToCollection />
    </>
  );
};

Details.propTypes = {
  image: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  synonyms: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  pestsDiseases: PropTypes.string.isRequired,
  warnings: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  spread: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  floweringPeriod: PropTypes.string.isRequired,
  bloomSize: PropTypes.string.isRequired,
  propagation: PropTypes.string.isRequired,
  humidityLevel: PropTypes.string,
  careDifficulty: PropTypes.string.isRequired,
};

export default Details;

