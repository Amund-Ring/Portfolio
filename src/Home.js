import React from 'react';
import styles from './Home.module.css';
import portrait from './portrait.jpeg';

function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Amund Ring</h1>
          <h3>Full Stack JavaScript Developer</h3>
        </div>
        <img src={portrait} alt="Amund Ring" className={styles.portrait} />
      </div>
    </section>
  );
}

export default Home;
