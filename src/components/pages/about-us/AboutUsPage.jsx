import React from 'react';
import DeeImage from '../../../images/dee.png';
import JillianImage from '../../../images/jillian.png';
import JeffImage from '../../../images/jeff.png';
import JenaImage from '../../../images/jena.png';
import RhoneImage from '../../../images/rhone.png';
import styles from './styles/AboutUsPage.css';


export default function AboutUs() {
  return (
    <>
      <div className={styles.AboutUs}>
        <h3 className={styles.header}>Team Flourish</h3>
        <div className={styles.team_bios}>
          <section className={styles.bio}>
            <img src={DeeImage} alt="Image of Dee" className={styles.image} width="200px" />
            <span className={styles.name}>Dee Watson</span>
            <span className={styles.title}>Just a Dude</span>
            <h5 className={styles.heading}>Plant Experience</h5>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span>Tries really hard.</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Number of Plants:</span>
              <span>5???</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span>A plant is just a little guy who is your friend.</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={JillianImage} alt="Image of Jillian" className={styles.image} width="200px" />
            <span className={styles.name}>Jillian Gibson</span>
            <span className={styles.title}>Software Engineer</span>
            <h5 className={styles.heading}>Plant Experience</h5>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span>Novice</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Number of Plants:</span>
              <span>0</span>          
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span>I can't even keep bamboo alive.</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={JeffImage} alt="Image of Jeff" className={styles.image} width="200px"/>
            <span className={styles.name}>Jeff Irvine</span>
            <span className={styles.title}>Software Engineer</span>
            <h5 className={styles.heading}>Plant Experience</h5>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span>Beginner</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Number of Plants:</span>
              <span>???</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span>Baby has a new leaf!</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={JenaImage} alt="Image of Jena" className={styles.image} width="200px"/>
            <span className={styles.name}>Jena Boehm</span>
            <span className={styles.title}>Software Engineer and Plant Enthusiast</span>
            <h5 className={styles.heading}>Plant Experience</h5>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span>I don't know man, just doing my best.</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Number of Plants:</span>
              <span>34</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span>I try really hard not to be *that* plant person, but I think I'm kinda turning into exactly that. Oops.</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={RhoneImage} alt="Image of Rhone" className={styles.image} width="200px"/>
            <span className={styles.name}>Rhone </span>
            <span className={styles.title}>Software Engineer and Nature Enthusiast</span>
            <h5 className={styles.heading}>Plant Experience</h5>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span>Human-plant hybrid person</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Number of Plants:</span>
              <span>They own themselves, but I have many plant friends.</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span>All good things are wild and free.</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}


