import React from 'react';
import { useRef } from 'react';
import styles from '../styles/DarkModeToggle.module.css';

function DarkModeToggle({handleChange}) {

  const handleClick = () => {
    handleChange();
  }

  return (
    <button
              // ref={darkModeButtonLooks}
              className={styles.darkmodeButton}
              type="checkbox"
              id="darkmodeCheck"
              onClick={handleClick}
            >
              <div className={styles.darkModeIcon}>

              </div>
              <div className={styles.darkModeIcon2}>

              </div>
    </button>
  )
}

export default DarkModeToggle;