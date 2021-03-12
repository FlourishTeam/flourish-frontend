import React from 'react';
import DeeImage from '../../../images/dee.png';
import JillianImage from '../../../images/jillian.png';
import JeffImage from '../../../images/jeff.png';
import JenaImage from '../../../images/jena.png';
import RhoneImage from '../../../images/rhone.png';
import styles from './styles/AboutUsPage.css';


export default function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <section className={styles.bio}>
        <img src={DeeImage} alt="Image of Dee" className={image} width="100%" height="90%" />
        <span className={styles.name}>Dee Watson</span>
        <span className={styles.title}>Just a Dude</span>
        <h4 className={styles.heading}>Plant Experience</h4>
        <span className={styles.skill_key}>Skill Level:</span>
        <span className={styles.skill_value}>Tries really hard.</span>
        <span className={styles.plant_key}>Number of Plants:</span>
        <span className={styles.plant_value}>5???</span>
        <span className={styles.quote_key}>Quote:</span>
        <span className={styles.quote_value}>A plant is just a little guy who is your friend.</span>
      </section>
      <section className={styles.bio}>
        <img src={JillianImage} alt="Image of Jillian" className={image} width="100%" height="90%" />
        <span className={styles.name}>Jillian Gibson</span>
        <span className={styles.title}>Software Engineer</span>
        <h4 className={styles.heading}>Plant Experience</h4>
        <span className={styles.skill_key}>Skill Level:</span>
        <span className={styles.skill_value}>Novice</span>
        <span className={styles.plant_key}>Number of Plants:</span>
        <span className={styles.plant_value}>0</span>
        <span className={styles.quote_key}>Quote:</span>
        <span className={styles.quote_value}>I can't even keep bamboo alive.</span>
      </section>
      <section className={styles.bio}>
        <img src={JeffImage} alt="Image of Jeff" className={image} width="100%" height="90%" />
        <span className={styles.name}>Jeff Irvine</span>
        <span className={styles.title}>Software Engineer</span>
        <h4 className={styles.heading}>Plant Experience</h4>
        <span className={styles.skill_key}>Skill Level:</span>
        <span className={styles.skill_value}>Beginner</span>
        <span className={styles.plant_key}>Number of Plants:</span>
        <span className={styles.plant_value}>???</span>
        <span className={styles.quote_key}>Quote:</span>
        <span className={styles.quote_value}>Baby has a new leaf!</span>
      </section>
      <section className={styles.bio}>
        <img src={JenaImage} alt="Image of Jena" className={image} width="100%" height="90%" />
        <span className={styles.name}>Jena Boehm</span>
        <span className={styles.title}>Software Engineer and Plant EnthusiastPlant</span>
        <h4 className={styles.heading}>Plant Experience</h4>
        <span className={styles.skill_key}>Skill Level:</span>
        <span className={styles.skill_value}>I don't know man, just doing my best.</span>
        <span className={styles.plant_key}>Number of Plants:</span>
        <span className={styles.plant_value}>34</span>
        <span className={styles.quote_key}>Quote:</span>
        <span className={styles.quote_value}>I try really hard not to be *that* plant person, but I think I'm kinda turning into exactly that. Oops.</span>
      </section>
      <section className={styles.bio}>
        <img src={RhoneImage} alt="Image of Rhone" className={image} width="100%" height="90%" />
        <span className={styles.name}>Rhone </span>
        <span className={styles.title}></span>
        <h4 className={styles.heading}>Plant Experience</h4>
        <span className={styles.skill_key}>Skill Level:</span>
        <span className={styles.skill_value}></span>
        <span className={styles.plant_key}>Number of Plants:</span>
        <span className={styles.plant_value}></span>
        <span className={styles.quote_key}>Quote:</span>
        <span className={styles.quote_value}></span>
      </section>
    </div>
  );
}


