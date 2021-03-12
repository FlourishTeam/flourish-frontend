import React, { useEffect } from 'react';
import {
  usePlantDetails,
  useCareLogError,
  useCareLogLoading,
  useRenderMyCareHistory,
  useTempLog
} from '../../../providers/CareLogContext';
import MaintenanceLevel from '../../reusable/maintenance/MaintenanceLevelWhite';
import CareForm from '../care-history/care-notes/care-form/CareForm';
import CareLogList from '../../pages/care-history/CareLogList';
import { useSession } from '../../../providers/AuthContext';
import Loading from '../../reusable/loading/Loading';
import styles from './styles/MyCareHistory.css';
import { useParams } from 'react-router';

export default function MyCareHistoryPage() {
  const renderMyCareHistory = useRenderMyCareHistory();
  const plantDetails = usePlantDetails();
  const loading = useCareLogLoading();
  const { tempLog } = useTempLog();
  const error = useCareLogError();
  const { id } = useParams();
  const user = useSession();

  useEffect(() => {
    if(user) {
      renderMyCareHistory(user.id, id);
    }
  }, [user, tempLog]);

  return (
    <>
      <div className={styles.CareHistoryPage}>
        {error && (
          <div className={styles.CareHistoryLoadingCont}>
            <CareForm className={styles.CareForm}/>
            {error}
          </div>
        )}
        {loading && <Loading />}
        <section className={styles.top}>
          <h1 className={styles.common}>{plantDetails.commonName}</h1>
          <h3 className={styles.scientific}>{plantDetails.scientificName}</h3>
          <MaintenanceLevel maintenanceLevel={plantDetails.careDifficulty} />
        </section>

        <section className={styles.mid}>
          <section className={styles.midLeft}>
            <img             
              className={styles.MyCareHistoryImage}
              src={plantDetails.image}
              alt={plantDetails.commonName} />
          </section>
          <div className={styles.midRight}>
            <section className={styles.careDetails}>
              <div>
                <span className={styles.key}> Light Range: </span>
                <span className={styles.value}>{plantDetails.lightRange}</span><br/>
              
                <span className={styles.key}>Hydration Range: </span>
                <span className={styles.value}>{plantDetails.hydrationRange}</span><br/>

                <span className={styles.key}>Temperature Range: </span>
                <span className={styles.value}>{plantDetails.temperatureRange}</span><br/>

                <span className={styles.key}>Placement: </span>
                <span className={styles.value}>{plantDetails.placement}</span><br/><br />
              </div>
              <div>
                <span className={styles.key}>Substrate Recommendation: </span>
                <span className={styles.value}>{plantDetails.substrateRecommendation}</span><br/>
                    
                <span className={styles.key}> Potting Notes: </span>
                <span className={styles.value}>{plantDetails.pottingNotes}</span><br/>
              </div>
              <div>
                <span className={styles.key}> Watering: </span>
                <span className={styles.value}>{plantDetails.watering}</span><br/>
              </div>
            </section>
          </div>
        </section>
        {/* <RemoveFromCollection />  */}
        CARE DETAILS SECTION */
        <CareForm className={styles.CareForm}/>
        <CareLogList className={styles.CareLogList}/>
      </div>
    </>
  );
}
