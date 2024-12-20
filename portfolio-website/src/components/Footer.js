import React from 'react';
import styles from '../styles/footer.module.css';

const footer = () => {
  return (
    <footer>
        <section className={styles.footerSection}>
            <ul className={styles.linkUl}>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <h3>Gor Mirzakhanyan 2024-2025</h3>
        </section>
    </footer>
  )
}

export default footer;
