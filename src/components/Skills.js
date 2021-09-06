import React from 'react';
import styles from '../css/Skills.module.css';
import skills from '../img/skills.png';
import resume from '../img/resume.jpg';
import pdf from '../img/CV_Amund_Ring.pdf';

function Skills() {
  return (
    <section className={styles.section} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={skills} alt="Skills" className={styles.skills} />
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <button className={styles.button}>Download Resume</button>
          </a>
        </div>
        <div className={styles.right}>
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            <img src={resume} alt="resume" className={styles.resume} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
