import React from 'react';
import styles from './styles/Loading.css';

const Loading = () => (
  <div className={styles.loadingContainer}>
    <img
      src="http://www.jainstechnology.com/wp-content/uploads/2018/02/loader.gif"
      alt="Loading"
      styles={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  </div>
);

export default Loading;
