import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/DetailsPage.css';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import AddToCollection from '../../reusable/collection/AddToCollection';

const Details = ({
  plantId,
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

        <section className={styles.top}>
          <h1 className={styles.common}>{commonName}</h1>
          <h3 className={styles.scientific}>{scientificName}</h3>
          <MaintenanceLevel maintenanceLevel={careDifficulty} />
        </section>

        <section className={styles.mid}>
          <section className={styles.midLeft}>
            <img src={image} alt={commonName} className={image} width="100%" height="90%" />

            <section className={styles.addRemoveContainer}>
              < AddToCollection plantId={plantId} />
            </section>
          </section>

          <div className={styles.midRight}>
            <section className={styles.careDetails}>
              <div>
                <span className={styles.key}> Light Range: </span>
                <span className={styles.value}>{lightRange}</span><br/>
          
                <span className={styles.key}>Hydration Range: </span>
                <span className={styles.value}>{hydrationRange}</span><br/>

                <span className={styles.key}>Temperature Range: </span>
                <span className={styles.value}>{temperatureRange}</span><br/>

                <span className={styles.key}>Placement: </span>
                <span className={styles.value}>{placement}</span><br/>

                <span className={styles.key}>Substrate Recommendation: </span>
                <span className={styles.value}>{substrateRecommendation}</span><br/><br />
              </div>
              <div>
                <span className={styles.key}> Potting Notes: </span>
                <span className={styles.value}>{pottingNotes}</span><br/>
              </div>
              <div>
                <span className={styles.key}> Watering: </span>
                <span className={styles.value}>{watering}</span><br/>
              </div>
            </section>
          </div>
        </section>

        <section className={styles.bottomMid}>
          <section className={styles.bottomMidLeft}>
            <div className={styles.title}>Physical Characteristics:</div>
            <span className={styles.key}>Height: </span>
            <span className={styles.value}>{height}</span>

            <span className={styles.key}>Spread: </span>
            <span className={styles.value}>{spread}</span>

            <span className={styles.key}>Type: </span>
            <span className={styles.value}>{type}</span>

            <span className={styles.key}>Flowering Period: </span>
            <span className={styles.value}>{floweringPeriod}</span>
            {/* 
            <span className={styles.key}>Bloom Size: </span>
                <span className={styles.value}>{bloomSize}</span> */}
          </section>

          <section className={styles.bottomMidRight}>
            <span className={styles.key}>Other Names: </span>
            <span className={styles.value}>{synonyms}</span><br/>

            <span className={styles.key}>Warnings: </span>
            <span className={styles.value}>{warnings}</span><br/>

            <span className={styles.key}>Common Pests & Diseases: </span>
            <span className={styles.value}>{pestsDiseases}</span><br/>
          </section>
        </section>

        <div className={styles.propagation}>
          <span className={styles.propKey}>Propagation </span><br />
          <span className={styles.value}>{propagation}</span>
        </div> 

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
  plantId: PropTypes.number.isRequired

};

export default Details;

