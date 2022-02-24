import React from 'react';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ project }) {
  const image = require(`../assets/${project.image}`).default;

  return (
    <a
      href={project.github}
      className={styles.githubLink}
      target='_blank'
      rel='noreferrer'
    >
      <div className={styles.projectCard}>
        <img src={image} className={styles.image} alt='project'></img>
        <div className={styles.detailsContainer}>
          <p className={styles.name}>{project.name}</p>
          <p className={styles.description}>{project.description}</p>
          <p className={styles.githubLink}>Github repository</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
