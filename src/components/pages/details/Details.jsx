import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Details.css';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import AddToCollection from '../../reusable/collection/AddToCollection';
import RemoveFromCollection from '../../reusable/collection/RemoveFromCollection';

const Details = ({
  image,
  commonName,
  scientificName,
  lightRange,
  hydrationRange,
  temperatureRange,
  placement,
  substrateRecommendation,
  pottingNotes,
  watering,
  synonyms,
  pestsDiseases,
  warnings,
  height,
  spread,
  type,
  floweringPeriod,
  bloomSize,
  propagation,
  careDifficulty
}) => {
  return (
    <>
      <div className={styles.Details}>
        <div>{commonName}</div>
        <div>{scientificName}</div>
        <img src={image} alt={commonName} />
        <div>Maintenance Level: <MaintenanceLevel maintenanceLevel={careDifficulty} /></div>
        < AddToCollection />
        < RemoveFromCollection />
        {/* CARE DETAILS SECTION */}
        <section>
          <div> Light Range: {lightRange}</div>
          <div> Hydration Range: {hydrationRange}</div>
          <div> Temperature Range: {temperatureRange}</div>
          <div> Placement: {placement}</div>
          <div> Substrate Recommendation: {substrateRecommendation}</div>
          <div> Potting Notes: {pottingNotes}</div>
          <div> Watering: {watering}</div>
        </section>
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
        </section>    
      </div>
    </>
  );
};

Details.propTypes = {
  image: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  lightRange: PropTypes.string.isRequired,
  hydrationRange: PropTypes.string.isRequired,
  temperatureRange: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  substrateRecommendation: PropTypes.string.isRequired,
  pottingNotes: PropTypes.string.isRequired,
  watering: PropTypes.string.isRequired,
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
  careDifficulty: PropTypes.string.isRequired,
};

export default Details;

