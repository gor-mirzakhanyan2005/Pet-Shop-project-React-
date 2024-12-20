import React from 'react';
import styles from '../styles/Testimonials.module.css';


function Testimonials({testimonialData}) {
  return (
    <section className={styles.testimonialsBody}>
      <h1>But don't just take our word for it!</h1>
      <div className={styles.testimonialsArray}>
      <ul>
      {testimonialData.map((item, index) => (
                                    <li key={index}>
                                    <div className={styles.testimonialCard}>
                                        <div className={styles.testimonialContent}>
                                            <h3 className={styles.stars}>{item.stars}</h3>
                                            <p>{item.text}</p>
                                            <h2>{item.name}</h2>
                                            <h3 className={styles.posterDescription}>{item.desc}</h3>
                                        </div>
                                    </div>
                                    </li>
                                ))}
      </ul>
      </div>
    </section>
  )
}

export default Testimonials;