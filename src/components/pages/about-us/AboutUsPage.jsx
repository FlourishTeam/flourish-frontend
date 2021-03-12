import React from 'react';
import DeeImage from '../../../../public/images/about-us/dee.png';
import JillianImage from '../../../../public/images/about-us/jillian.png';
import JeffImage from '../../../../public/images/about-us/jeff.png';
import JenaImage from '../../../../public/images/about-us/jena.png';
import RhoneImage from '../../../../public/images/about-us/rhone.png';
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
            <span className={styles.heading}>Plant Experience</span>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span className={styles.value}>Tries really hard.</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}># of Plants:</span>
              <span className={styles.value}>5???</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span className={styles.value}>A plant is just a little guy who is your friend.</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={JillianImage} alt="Image of Jillian" className={styles.image} width="200px" />
            <span className={styles.name}>Jillian Gibson</span>
            <span className={styles.title}>Software Engineer</span>
            <span className={styles.heading}>Plant Experience</span>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span className={styles.value}>Novice</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}># of Plants:</span>
              <span className={styles.value}>0</span>          
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span className={styles.value}>I can't even keep bamboo alive.</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={JeffImage} alt="Image of Jeff" className={styles.image} width="200px"/>
            <span className={styles.name}>Jeff Irvine</span>
            <span className={styles.title}>Software Engineer</span>
            <span className={styles.heading}>Plant Experience</span>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span className={styles.value}>Beginner</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}># of Plants:</span>
              <span className={styles.value}>???</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span className={styles.value}>Baby has a new leaf!</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={JenaImage} alt="Image of Jena" className={styles.image} width="200px"/>
            <span className={styles.name}>Jena Boehm</span>
            <span className={styles.title}>Software Engineer and Plant Enthusiast</span>
            <span className={styles.heading}>Plant Experience</span>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span className={styles.value}>I don't know man, just doing my best.</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}># of Plants:</span>
              <span className={styles.value}>34</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span className={styles.value}>I try really hard not to be *that* plant person, but I think I'm kinda turning into exactly that. Oops.</span>
            </div>
          </section>
          <section className={styles.bio}>
            <img src={RhoneImage} alt="Image of Rhone" className={styles.image} width="200px"/>
            <span className={styles.name}>Rhone Lachner</span>
            <span className={styles.title}>Software Engineer and Nature Enthusiast</span>
            <span className={styles.heading}>Plant Experience</span>
            <div className={styles.data}>
              <span className={styles.key}>Skill Level:</span>
              <span className={styles.value}>Human-plant hybrid person.</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}># of Plants:</span>
              <span className={styles.value}>I have many plant friends.</span>
            </div>
            <div className={styles.data}>
              <span className={styles.key}>Quote:</span>
              <span className={styles.value}>All good things are wild and free.</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}


