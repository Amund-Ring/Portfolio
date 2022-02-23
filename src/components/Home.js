import React from 'react';
import styles from '../styles/Home.module.css';
import portrait from '../assets/portrait.jpeg';

function Home({ darkMode }) {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Amund Ring</h1>
          <h3 className={`${darkMode ? styles.darkMode : ''}`}>
            Full Stack JavaScript Developer
          </h3>
        </div>
        <img src={portrait} alt="Amund Ring" className={styles.portrait} />
      </div>
    </section>
  );
}

export default Home;
