import React from 'react';
import styles from './styles/HomePage.css';
import Search from '../../reusable/search/Search';

const HomePage = () => {
  return (
    <section className={styles.HomePage}>
      <header className={styles.bannerContainer}>
        <img src="images/home-page/banner-1.jpeg" />
        <Search className={styles.Search} />
      </header>
    </section>
  );
};

export default HomePage;
