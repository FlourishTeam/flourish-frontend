import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styles from './styles/CareLogItem.css';
import { removeCareLog } from '../../../services/queries/removeCareLog';
import { useTempLog } from '../../../providers/CareLogContext';

const CareLogItem = ({ userPlantLogId, careDate, careNote }) => {
  const { setTempLog } = useTempLog();

  const handleLogDelete = () => {
    removeCareLog(userPlantLogId);
    setTempLog({ dummy: uuid() });
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
