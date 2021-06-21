import React from 'react';
import styles from './styles/HomePage.css';
import Search from '../../reusable/search/Search';
// import Slideshow from './Slideshow';

const HomePage = () => {
  return (
    <section className={styles.HomePage}>
      <div className={styles.bannerContainer}>
        <p className={styles.topText}>Welcome to Flourish</p>
        {/* <Slideshow /> */}
        <div className={styles.homeSearch}>
          <Search className={styles.Search} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
