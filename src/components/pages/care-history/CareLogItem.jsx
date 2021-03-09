import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/CareLogItem.css';

const CareLogItem = ({ careDate, careNote }) => (

  <div className={styles.CareLogItem}>
    <p>{careDate}</p>
    <p>{careNote}</p>
    <button>Delete</button>
  </div>
);

CareLogItem.propTypes = {
  careDate: PropTypes.string.isRequired,
  careNote: PropTypes.string.isRequired,
};

export default CareLogItem;
