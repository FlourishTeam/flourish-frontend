import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/CareLogItem.css';
import { removeCareLog } from '../../../services/queries/removeCareLog';
import { useHistory } from 'react-router-dom';

const CareLogItem = ({ userPlantLogId, careDate, careNote }) => {
  // const history = useHistory();
  const handleLogDelete = () => {
    removeCareLog(userPlantLogId);
    // location.reload();
  };

  return (
    <div className={styles.CareLogItem}>
      <p>{careDate}</p>
      <p>{careNote}</p>
      <button onClick={handleLogDelete}>Delete</button>
    </div>
  );
};

CareLogItem.propTypes = {
  userPlantLogId: PropTypes.number.isRequired,
  careDate: PropTypes.string.isRequired,
  careNote: PropTypes.string.isRequired,
};

export default CareLogItem;
