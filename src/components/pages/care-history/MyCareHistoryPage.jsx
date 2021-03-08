import React from 'react';
// import uuid from 'react-uuid';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import CareDetails from '../../reusable/care/CareDetails';
import CareLogList from '../../pages/care-history/CareLogList';
import CareForm from '../care-history/care-notes/care-form/CareForm';
import MyPlantNotes from '../care-history/care-notes/MyPlantNotes';
import Loading from '../../reusable/loading/Loading';
// import MyPlant from '../my-plants/MyPlant';
// import { useMyPlants } from '../../../state/MyPlantsContext';

export default function MyCareHistoryPage() {

  // const { myPlants } = useMyPlants();
  // const listElement = myPlants.map((plant) => {

  return (
    <>
      {/* <li key={(plant)}>
          <MyPlant 
            name={plant.common_name}
            image={plant.image}
          />
        </li>  */}
      {/* <ul data-testid="plants">{listElement}</ul> */}
      <div>
        Hello I am the history Page
        <Loading />
        <MaintenanceLevel />
        <CareDetails />
        <MyPlantNotes />
        <CareForm />
        <CareLogList />
      </div>
    </>
  );
  // });
}
