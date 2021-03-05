import React from 'react';
import PropTypes from 'prop-types';

const Plant = ({
  common_name,
  scientific_name,
  synonyms,
  light_range,
  hydration_range,
  care_difficulty,
  warnings,
  pests_diseases,
  physical_characteristics,
  planting,
  watering,
  propagation,
}) => {
  return (
    <>
      <div>Common Name: {common_name}</div>
      <div>Scientific Name: {scientific_name}</div>
      <div>Other Names: {synonyms}</div>
      <div>Light Range: {light_range}</div>
      <div>Hydration Range: {hydration_range}</div>
      <div>Difficulty of Care: {care_difficulty}</div>
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
      <ul>
        {' '}
        Planting:
        <li>Temperature Range: {planting.temperature_range}</li>
        <li>Placement: {planting.placement}</li>
        <li>Substrate Recommendation: {planting.substrate_recommendation}</li>
        <li>Potting Notes: {planting.potting_notes}</li>
      </ul>
      <div>Watering: {watering}</div>
      <div>Propagation: {propagation}</div>
    </>
  );
};

Plant.propTypes = {
  common_name: PropTypes.string.isRequired,
  synonyms: PropTypes.string.isRequired,
  scientific_name: PropTypes.string.isRequired,
  light_range: PropTypes.string.isRequired,
  hydration_range: PropTypes.string.isRequired,
  care_difficulty: PropTypes.string.isRequired,
  pests_diseases: PropTypes.string.isRequired,
  warnings: PropTypes.string.isRequired,
  physical_characteristics: PropTypes.shape({
    height: PropTypes.string.isRequired,
    spread: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flowering_period: PropTypes.string.isRequired,
    bloom_size: PropTypes.string.isRequired,
  }).isRequired,
  planting: PropTypes.shape({
    temperature_range: PropTypes.string.isRequired,
    placement: PropTypes.string.isRequired,
    humidity_level: PropTypes.string.isRequired,
    substrate_recommendation: PropTypes.string.isRequired,
    potting_notes: PropTypes.string.isRequired,
  }).isRequired,
  watering: PropTypes.string.isRequired,
  propagation: PropTypes.string.isRequired,
};

export default Plant;
