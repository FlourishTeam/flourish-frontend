import React, { useEffect } from 'react';
import { 
  usePlantDetails, 
  // useCareLogError, 
  // useCareLogLoading,
  useRenderMyCareHistory,
} from '../../../state/CareLogContext';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import CareForm from '../care-history/care-notes/care-form/CareForm';
import CareLogList from '../../pages/care-history/CareLogList';
// import Loading from '../../reusable/loading/Loading';
import { useSession } from '../../../state/AuthContext';
import styles from './styles/MyCareHistory.css';
// import MyPlant from '../my-plants/MyPlant';

export default function MyCareHistoryPage() {
  const user = useSession();
  // const loading = useCareLogLoading();
  // const error = useCareLogError();
  const plantDetails = usePlantDetails();
  const renderMyCareHistory = useRenderMyCareHistory();

  useEffect(() => {
    renderMyCareHistory(plantDetails.id, user.id);
  }, []);

  // if(loading) return <Loading />;
  // if(error) return <div>{error}</div>;
  return (
    <>
      <div className={styles.MyCareHistoryPlantName}>
        <div>{plantDetails.commonName}</div>
        <div>{plantDetails.scientificName}</div>
        <img className={styles.MyCareHistoryImage}
          src={plantDetails.image} 
          alt={plantDetails.commonName} 
        />
        <div>Maintenance Level: 
          <MaintenanceLevel maintenanceLevel={plantDetails.careDifficulty}/>
        </div>
        {/* <RemoveFromCollection /> */}
        {/* CARE DETAILS SECTION */}
        <section>
          <div> Light Range: {plantDetails.lightRange}</div>
          <div> Hydration Range: {plantDetails.hydrationRange}</div>
          <div> Temperature Range: {plantDetails.temperatureRange}</div>
          <div> Placement: {plantDetails.placement}</div>
          <div> Substrate Recommendation: {plantDetails.substrateRecommendation}</div>
          <div> Potting Notes: {plantDetails.pottingNotes}</div>
          <div> Watering: {plantDetails.watering}</div>
        </section>  
      </div>
      <CareForm />
      <CareLogList /> 
    </>
  );
}
