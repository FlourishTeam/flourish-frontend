import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDetailsError, useDetailsLoading, usePlant, useRenderDetails } from '../../../state/DetailsContext';
import Loading from '../../reusable/loading/Loading';
import Details from './Details';
import styles from './styles/DetailsPage.css';
import { useParams } from 'react-router';

const DetailsPage = () => {
  const { id } = useParams();
  const loading = useDetailsLoading();
  const renderDetails = useRenderDetails();
  const error = useDetailsError();
  const plant = usePlant();

  useEffect(() => {
    renderDetails(id);
  }, []);

  if(loading) return <Loading />;
  if(error) return <div>{error}</div>;

  return (
    <>
      <div className={styles.DetailsPage}>
        <Details {...plant}/>
      </div>
    </>
  );
};

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      plantId: PropTypes.string
    })
  })
};

export default DetailsPage;
