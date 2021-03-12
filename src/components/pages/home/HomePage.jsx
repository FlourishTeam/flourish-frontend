import React from 'react';
import styles from './styles/HomePage.css';
import Search from '../../reusable/search/Search';
import Slideshow from './Slideshow';

const HomePage = () => {
  return (
    <section className={styles.HomePage}>
      <header className={styles.bannerContainer}>
        <p className={styles.topText}>Welcome to Flourish</p>
        <Slideshow />
        <div className={styles.homeSearch}>
          <Search className={styles.Search} />
        </div>
      </header>
    </section>
  );
};

export default HomePage;
