import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Plant.css';

const Plant = ({
  common_name,
  scientific_name,
  light_range,
  hydration_range,
  care_difficulty,
  planting,
}) => {
  return (
    <div className={styles.Plant}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fad%2FPlaceholder_no_text.svg%2F1200px-Placeholder_no_text.svg.png&f=1&nofb=1"
        height="100px"
      />
      <div>{common_name}</div>
      <div>({scientific_name})</div>
      <div>{planting.temperature_range}</div>
      <div>{light_range}</div>
      <div>{hydration_range}</div>
      <div>{care_difficulty}</div>
    </div>
  );
};

Plant.propTypes = {
  common_name: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired,
  light_range: PropTypes.string.isRequired,
  hydration_range: PropTypes.string.isRequired,
  care_difficulty: PropTypes.string.isRequired,
  planting: PropTypes.shape({
    temperature_range: PropTypes.string.isRequired,
  }).isRequired,
};

export default Plant;
