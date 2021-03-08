import React from 'react';
// import { usePlantById } from '../../../state/DetailsContext';

import Loading from '../../reusable/loading/Loading';
// import uuid from 'react-uuid';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import CareDetails from '../../reusable/care/CareDetails';
import CareLogList from '../care-history/CareLogList';
import CareForm from '../care-history/care-notes/care-form/CareForm';
import MyPlantNotes from '../care-history/care-notes/MyPlantNotes';
// import MyPlant from '../my-plants/MyPlant';
// import RemoveFromCollection from '../../reusable/collection/RemoveFromCollection';


// import { data } from '../hooks/fake-data';

function MyCareHistoryPage() {
  // const { myPlantById } = usePlantById();
  // const listElement = myPlantById.map((plant) => {
  return (
    <>
      {/* <li key={uuid()}> */}
 
      <div>
      Hello I am the History Page.
        <Loading />
        {/* <MyPlant
              image={plant.image}
              name={plant.common_name}
            /> */}
        <MaintenanceLevel />
        <CareDetails />
        <MyPlantNotes />
        <CareForm />
        <CareLogList />
        {/* <RemoveFromCollection /> */}
      </div>
      {/* </li> */}
    </>
  );
  // });

  // return <ul>{listElement}</ul>;
}

export default MyCareHistoryPage;
