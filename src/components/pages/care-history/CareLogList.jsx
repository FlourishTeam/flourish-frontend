import React from 'react';
import CareLogItem from './CareLogItem';
import uuid from 'react-uuid';
import styles from './styles/CareLogItem.css';
import { useCareLogItems } from '../../../providers/CareLogContext';

const CareLogList = () => {
  //make a hook to pass in CareLogItems
  const { careLogItems } = useCareLogItems();
  const logListElement = careLogItems.map((careLogItem) => {
    return (
      <li key={uuid()} className={styles.plantListItem}>
        <CareLogItem {...careLogItem} />
      </li>
    );
  });
  return (
    <ul data-testid="careLog" className={styles.CareLogList}>
      {logListElement}
    </ul>
  );
};

export default CareLogList;
