import React from 'react';
import uuid from 'react-uuid';
import CareLogItem from './CareLogItem';
import styles from '../care-history/styles/MyCareHistory.css';
import { useCareLogItems } from '../../../providers/CareLogContext';

const CareLogList = () => {
  const { careLogItems } = useCareLogItems();

  const logListElement = careLogItems?.map((careLogItem) => {
    return (
      <li key={uuid()} className={styles.plantListItem}>
        <CareLogItem {...careLogItem} />
      </li>
    );
  });
  if(!logListElement?.length) return <h2>No list found!!</h2>;
  return (
    <ul data-testid="careLog" className={styles.CareLogList}>
      {logListElement}
    </ul>
  );
};

export default CareLogList;
