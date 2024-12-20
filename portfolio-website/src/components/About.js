import React from 'react';
import styles from '../styles/About.module.css';

function About({aboutToggle}) {
  return (
    <div className={styles.aboutBackground}>
        <div className={styles.aboutBody}>
            <h1>The search for a companion made easy!</h1>
            <div className={styles.aboutTextContainer}>
            <p className={styles.aboutText}>
                findpet is a platform that aims to make it easy and convenient for interested persons
                to find a pet of their own! It also offers a clearly-defined alternative for people who,
                for one reason or another, can't keep taking care of their pet.
            </p>
            </div>
            <ul className={styles.aboutImages}>
                <li><img id="aboutimg1" src="https://images.pexels.com/photos/1461876/pexels-photo-1461876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></li>
                <li><img id="aboutimg2" src="https://www.chico.ca/wp-content/uploads/2019/09/AdobeStock_41480095-scaled.jpeg"/></li>
            </ul>
            <div className={styles.aboutButtonContainer}>
            <button className={styles.learnMore}>
                Learn more
            </button>
            <button className={styles.goBack} onClick={(e) => {aboutToggle();}}>
                Go back
            </button>
            </div>
        </div>
    </div>
  )
}

export default About