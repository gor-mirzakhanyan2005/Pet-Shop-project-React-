import React from 'react';
import styles from '../styles/petAccessories.module.css';

const petAccessories = () => {

    const petAccessoryData = [

        {
            title: "half-life",
            text: "the half of life!?!?!??!?!",
            thumb: "https://www.kroger.com/product/images/large/front/0002310012556",
        },

        {
            title: "half-life",
            text: "the half of life!?!?!??!?!",
            thumb: "https://www.kibblesnbits.com/wp-content/uploads/2024/04/Kibblesn-Bits-Bacon-Steak-Flavor-Dry-Dog-Food-3LB-1536x1536.png",
        },

        {
            title: "half-life",
            text: "the half of life!?!?!??!?!",
            thumb: "https://www.kibblesnbits.com/wp-content/uploads/2024/04/Kibblesn-Bits-Bacon-Steak-Flavor-Dry-Dog-Food-3LB-1536x1536.png",
        },

    ];

  return (
    <section className={styles.accessorySection}>
        <h1>Playtime & Care</h1>
        <div className={styles.accessoryContainer}>
        <ul>
            {petAccessoryData.map((item, index) => (
                                    <li key={index}>
                                    <div className={styles.accessoryCard}>
                                            <div className={styles.petAccImg}>
                                                <img src={item.thumb}/>
                                            </div>
                                            <h2>{item.title}</h2>
                                            <p>{item.text}</p>
                                            <h3>10.99$</h3>
                                    </div>
                                    </li>
                                ))}
            </ul>
        </div>
    </section>
  );
}

export default petAccessories;
