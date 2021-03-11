import React from 'react';
import CareLogItem from './CareLogItem';
import uuid from 'react-uuid';
import styles from './styles/CareLogItem.css';
import { useCareLogItems } from '../../../providers/CareLogContext';
import { Link } from 'react-router-dom';

const CareLogList = () => {
  //make a hook to pass in CareLogItems
  const { careLogItems } = useCareLogItems();
  const logListElement = careLogItems?.map((careLogItem) => {
    console.log(careLogItem);
    return (
      <li key={uuid()} className={styles.plantListItem}>
        <Link to={`/my-plants/${careLogItem}`}>
          <CareLogItem {...careLogItem} />
        </Link>
      </li>
    );
  });
  if(!logListElement?.length) return <h2>No list found!!</h2>;
  return (
    <ul data-testid="careLog" className={styles.CareLogList}>
      {logListElement }
    </ul>
  );
};

export default CareLogList;
