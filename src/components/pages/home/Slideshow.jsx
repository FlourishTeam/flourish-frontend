import React from 'react';
// import { Slide } from 'react-slideshow-image';
import styles from './styles/Slideshow.css';
import 'react-slideshow-image/dist/styles.css';

// const slideImages = [
//   'images/home-page/banner-1.jpeg',
//   'images/home-page/banner-2.jpeg',
//   'images/home-page/banner-3.jpeg',
// ];

const Slideshow = () => {
  return (
    <div className={styles.Slideshow}>
      {/* <Slide autoplay={true} easing="ease" duration={15000}>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className={styles.eachSlide}>
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide> */}
    </div>
  );
};

export default Slideshow;
