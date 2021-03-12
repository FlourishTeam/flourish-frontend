import React, { useEffect } from 'react';
import {
  usePlantDetails,
  useCareLogError,
  useCareLogLoading,
  useRenderMyCareHistory,
  useTempLog,
} from '../../../providers/CareLogContext';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevel';
import CareForm from '../care-history/care-notes/care-form/CareForm';
import CareLogList from '../../pages/care-history/CareLogList';
import { useSession } from '../../../providers/AuthContext';
import Loading from '../../reusable/loading/Loading';
import styles from './styles/MyCareHistory.css';
import { useParams } from 'react-router';

export default function MyCareHistoryPage() {
  const plantDetails = usePlantDetails();
  const loading = useCareLogLoading();
  const error = useCareLogError();
  const { id } = useParams();
  const user = useSession();
  const renderMyCareHistory = useRenderMyCareHistory();
  const { tempLog } = useTempLog();

  // I REALLY WANT THE PAGE TO RE-RENDER BUT IT ISN'T WHEN YOU ADD A NEW CARE LOG
  useEffect(() => {
    if (user) {
      return renderMyCareHistory(user.id, id);
    }
  }, [tempLog]);

  return (
    <>
      {error && (
        <div>
          <CareForm />
          {error}
        </div>
      )}
      {loading && <Loading />}
      <p>Hello!</p>
      <div className={styles.MyCareHistoryPlantName}>
        <div>{plantDetails.commonName}</div>
        <div>{plantDetails.scientificName}</div>
        <img
          className={styles.MyCareHistoryImage}
          src={plantDetails.image}
          alt={plantDetails.commonName}
        />
        <div>
          Maintenance Level:
          <MaintenanceLevel maintenanceLevel={plantDetails.careDifficulty} />
        </div>
        {/* <RemoveFromCollection />  */}
        CARE DETAILS SECTION */
        <section>
          <div> Light Range: {plantDetails.lightRange}</div>
          <div> Hydration Range: {plantDetails.hydrationRange}</div>
          <div> Temperature Range: {plantDetails.temperatureRange}</div>
          <div> Placement: {plantDetails.placement}</div>
          <div>
            {' '}
            Substrate Recommendation: {plantDetails.substrateRecommendation}
          </div>
          <div> Potting Notes: {plantDetails.pottingNotes}</div>
          <div> Watering: {plantDetails.watering}</div>
        </section>
      </div>
      <CareForm />
      <CareLogList />
    </>
  );
}
