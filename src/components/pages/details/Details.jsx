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
  physical_characteristics,
  propagation,
}) => {
  return (
    <div className={styles.Details}>
      <img src={image} alt={common_name} />
      {/* import ADD/REMOVE component */}
      <p>{common_name}</p>
      <p>{scientific_name}</p>
      {/* import MAINTENANCE LEVEL component */}
      {/* import CARE DETAILS component */}
      {/* ABOUT SECTION */}
      <section>
        {/* import care details component */}
        <div>Other Names: {synonyms}</div>
        <div>Warnings: {warnings}</div>
        <div>Common Pests and Diseases: {pests_diseases}</div>
        <ul>
        Physical Characteristics:
          <li>Height: {physical_characteristics.height}</li>
          <li>Spread: {physical_characteristics.spread}</li>
          <li>Type: {physical_characteristics.type}</li>
          <li>Flowering Period: {physical_characteristics.flowering_period}</li>
          <li>Bloom Size: {physical_characteristics.bloom_size}</li>
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
  physical_characteristics: PropTypes.shape({
    height: PropTypes.string.isRequired,
    spread: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flowering_period: PropTypes.string.isRequired,
    bloom_size: PropTypes.string.isRequired,
  }).isRequired,
  propagation: PropTypes.string.isRequired,
};

export default Details;

