import React from 'react';
import styles from '../styles/Navigation.module.css';
import Contact from './contactModal.js';
import { useState } from 'react';

const Header = ({contactToggle, aboutToggle, listingsToggle}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.upper}>
        <a href="/" className={styles.title}>findpet</a>

        <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={styles.navmenu}>
        <ul className={`${styles.navmenuitems} ${menuOpen ? styles.navmenuOpened : ''}`}
        onClick={()=> setMenuOpen(false)}>
          <li>
            <a href="#" onClick={()=> listingsToggle()}>Add</a>
          </li>
          <li>
            <a href="#" onClick={()=> aboutToggle()}>About</a>
          </li>
          <li>
            <a href="#" onClick={()=> contactToggle()}>Contact</a>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
