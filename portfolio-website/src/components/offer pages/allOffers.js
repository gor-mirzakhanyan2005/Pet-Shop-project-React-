import React from 'react';
import styles from './allOffers.module.css';
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

const allOffersCardData = [

    {
        title: "Benji",
        text: "Selling vaccinated, chipped, trained dog + documents",
        thumb: "https://images.unsplash.com/photo-1518378188025-22bd89516ee2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Drake",
        text: "the half of life!?!?!??!?!",
        thumb: "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Star",
        text: "the half of life!?!?!??!?!",
        thumb: "https://images.unsplash.com/photo-1535914191444-2a3b177956c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Luna",
        text: "the half of life!?!?!??!?!",
        thumb: "https://images.unsplash.com/photo-1731747757925-72534cb044c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Megatron",
        text: "the half of life!?!?!??!?!",
        thumb: "https://plus.unsplash.com/premium_photo-1668274932966-60df4541e164?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Ted",
        text: "the half of life!?!?!??!?!",
        thumb: "https://images.unsplash.com/photo-1681276311927-c9ec78b8709c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Bo",
        text: "the half of life!?!?!??!?!",
        thumb: "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg",
    },

    {
        title: "Huey",
        text: "the half of life!?!?!??!?!",
        thumb: "https://images.unsplash.com/photo-1696254643280-6543095cfe39?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Huey",
        text: "the half of life!?!?!??!?!",
        thumb: "https://images.unsplash.com/photo-1696254643280-6543095cfe39?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Huey",
        text: "the half of life!?!?!??!?!",
        thumb: "https://images.unsplash.com/photo-1696254643280-6543095cfe39?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },


];

const allOffers = () => {
  return (
    <>
    <section className={styles.aOSection}>
        <h1>Check out these pets!</h1>
        <div className={styles.aOContainer}>
        <ul>
            {allOffersCardData.map((item, index) => (
                                    <li key={index}>
                                    <div className={styles.petCard}>
                                            <h2>{item.title}</h2>
                                            <p>{item.text}</p>
                                            <div className={styles.allCardImg}>
                                                <img src={item.thumb}/>
                                            </div>
                                    </div>
                                    </li>
                                ))}
            </ul>
        </div>
        <div className={styles.pageSelectors}>
            <ul className={styles.pageSelectorUl}>
                <Link to="/"><li><button className={styles.pageSelectorBtn}></button></li></Link>
                <NavLink to="/page2"><li><button className={styles.pageSelectorBtn}></button></li></NavLink>
                <li><button className={styles.pageSelectorBtn}></button></li>
                <li><button className={styles.pageSelectorBtn}></button></li>
            </ul>
        </div>
    </section>
    </>
  )
}

export default allOffers;
