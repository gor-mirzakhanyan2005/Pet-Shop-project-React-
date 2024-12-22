import React from 'react';
import { useState } from 'react';
import styles from '../styles/recentOffers.module.css';

function RecentOffers({darkMode}) {
    const recentOfferCardData = [

        {
            title: "Max",
            text: "Giving puppy to good hands",
            thumb: "https://loyal-companions.com/wp-content/uploads/2019/06/shutterstock_308083790-1200x800.jpg",
        },

        {
            title: "Bobby",
            text: "Cat for sale. Vaccinated, trained, documents in post.",
            thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
        },

        {
            title: "Augustus",
            text: "Selling kitten, 2 weeks old.",
            thumb: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },

    ];

  return (
    <section className={styles.uppermiddle}>
        <div className={styles.recentOffersSection}>
            <ul>
            {recentOfferCardData.map((item, index) => (
                                    <li key={index}>
                                    <div className={styles.recentCard}>
                                    <div className={styles.cardImg}>
                                                <img src={item.thumb}/>
                                            </div>
                                        <div className={styles.recentContent}>
                                            <h2>{item.title}</h2>
                                            <p>{item.text}</p>
                                            <h3>Recent!</h3>
                                        </div>
                                    </div>
                                    </li>
                                ))}
            </ul>
        </div>
    </section>
  )
}

export default RecentOffers;