import React from 'react';
import styles from '../css/Skills.module.css';
import skills from '../img/skills.png';
import resume from '../img/resume.jpg';

function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={skills} alt="Skills" className={styles.skills} />
          <button className={styles.button}>Download Resume</button>
        </div>
        <div className={styles.right}>
          <img src={resume} alt="resume" className={styles.resume} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
