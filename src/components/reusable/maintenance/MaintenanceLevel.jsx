import React from 'react';
import BeginnerIcon from '../../../images/maintenance-level-beginner.png';
import AverageIcon from '../../../images/maintenance-level-average.png';
import IntermediateIcon from '../../../images/maintenance-level-intermediate.png';
import styles from './styles/MaintenanceLevel.css';

function MaintenanceLevel({ maintenanceLevel }) {
  if(maintenanceLevel === 'Suitable for Beginners') {
    return <div className={styles.container}>
      <img 
        src={BeginnerIcon} 
        alt="beginner"
        height="20em" />
    </div>;

  } else if(maintenanceLevel === 'Average Care') {
    return <div className={styles.container}>
      <img 
        src={AverageIcon} 
        alt="average"
        height="20em" />
    </div>;

  } else if(maintenanceLevel === 'Intermediate Care') {
    return <div className={styles.container}>
      <img 
        src={IntermediateIcon} 
        alt="intermediate"
        height="20em" />
    </div>;

  } else return <div>N/A</div>;
}

export default MaintenanceLevel;
