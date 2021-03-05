import React from 'react';
import Details from './Details';
// import useLoading hook
// import Loading component
import styles from './styles/DetailsPage.css';

const DetailsPage = () => {
  // const { loading } = useLoading();

  // if(loading) return <Loading />;

  return (
    <div className={styles.DetailsPage}>
      <Details />
    </div>
  );
};

export default DetailsPage;
