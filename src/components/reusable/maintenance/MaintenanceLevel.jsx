import React from 'react';

function MaintenanceLevel({ maintenanceLevel }) {
  if(maintenanceLevel === 'Suitable for Beginners') {
    return <img src="./images/maintenance-level-beginner" alt="beginner" />;

  } else if(maintenanceLevel === 'Average Care') {
    return <img src="./images/maintenance-level-average" alt="average" />;

  } else if(maintenanceLevel === 'Intermediate Care') {
    return <img src="./images/maintenance-level-intermediate" alt="intermediate" />;

  } else return <div>N/A</div>;
}

export default MaintenanceLevel;
