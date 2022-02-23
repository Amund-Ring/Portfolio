import React from 'react';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ project }) {
  const image = require(`../assets/${project.image}`).default;

  return (
    <div className={styles.projectCard}>
      <img src={image} className={styles.image} alt="project"></img>
      <div className={styles.detailsContainer}>
        <p className={styles.name}>{project.name}</p>
        <p className={styles.description}>{project.description}</p>
        <a href={project.github} className={styles.githubLink} target='_blank' rel="noreferrer">
          Github repository
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
