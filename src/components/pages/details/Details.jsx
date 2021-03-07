import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Details.css';

const Details = ({
  image,
  common_name,
  scientific_name,
  synonyms,
  warnings,
  pests_diseases,
  height,
  spread,
  type,
  flowering_period,
  bloom_size,
  propagation,
}) => {
  return (
    <div className={styles.Details}>
      <img src={image} alt={common_name} />
      {/* import ADD/REMOVE component */}
      <div>{common_name}</div>
      <div>{scientific_name}</div>
      {/* import MAINTENANCE LEVEL component */}
      {/* import CARE DETAILS component */}
      {/* ABOUT SECTION */}
      <section>
        <div>Other Names: {synonyms}</div>
        <div>Warnings: {warnings}</div>
        <div>Common Pests and Diseases: {pests_diseases}</div>
        <ul>
        Physical Characteristics:
          <li>Height: {height}</li>
          <li>Spread: {spread}</li>
          <li>Type: {type}</li>
          <li>Flowering Period: {flowering_period}</li>
          <li>Bloom Size: {bloom_size}</li>
        </ul>
        <div>Propagation: {propagation}</div>
      </section>
    </div>
  );
};

Details.propTypes = {
  image: PropTypes.string.isRequired,
  common_name: PropTypes.string.isRequired,
  synonyms: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired,
  pests_diseases: PropTypes.string.isRequired,
  warnings: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  spread: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flowering_period: PropTypes.string.isRequired,
  bloom_size: PropTypes.string.isRequired,
  propagation: PropTypes.string.isRequired,
};

export default Details;

