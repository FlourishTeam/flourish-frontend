import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/CareLogItem.css';

const CareLogItem = ({ userPlantLogId, careDate, careNote }) => (
  // const handleLogDelete = () => {
  //   // return delete log(userPlantLogId)
  //   // should trigger rerender
  // };

  <div className={styles.CareLogItem}>
    <p>{careDate}</p>
    <p>{careNote}</p>
    <button>Delete</button>
  </div>
);

CareLogItem.propTypes = {
  usePlantLogId: PropTypes.string.isRequired,
  careDate: PropTypes.string.isRequired,
  careNote: PropTypes.string.isRequired,
};

export default CareLogItem;
