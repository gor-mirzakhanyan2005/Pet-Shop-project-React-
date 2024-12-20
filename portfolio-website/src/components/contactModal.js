import React from 'react';
import styles from '../styles/Contact.module.css';
import { useEffect } from 'react';

function ContactModal({contactToggle, contact, setContact}) {
  return (
    <div className={styles.modalBack}>
        <div className={styles.modalBody}>
            <h1>Contact us!</h1>
            <button className={styles.closeButton} onClick={(e) => {contactToggle(); e.preventDefault()}}>Close</button>
            <ul className={styles.emailText}>
                <h3>Our email</h3>
                <p>findpet@gmail.com</p>
            </ul>
            <ul className={styles.numberText}>
                <h3>Our number</h3>
                <p>+380 50 403 01 84</p>
            </ul>
        </div>
    </div>
  )
}

export default ContactModal;