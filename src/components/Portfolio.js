import React from 'react';
import styles from '../styles/Portfolio.module.css';
import ProjectCard from './ProjectCard';

function Portfolio() {
  const projects = [
    {
      name: 'Clever Clothing',
      image: 'cleverclothing.png',
      description: 'Clothing store website',
      github: 'https://github.com/Amund-Ring/Clever-Clothing'
    },
    {
      name: "Let's do this",
      image: 'letsdothis.png',
      description: 'Todo list application in React Native',
      github: 'https://github.com/Amund-Ring/Lets-Do-This'
    },
    {
      name: 'DoneWithIt',
      image: 'donewithit.png',
      description: "A marketplace for selling the stuff you don't need",
      github: 'https://github.com/Amund-Ring/DoneWithIt'
    },
    {
      name: 'Checkbox Fitness',
      image: 'checkbox.png',
      description: 'Casual weekly exercise tracker',
      github: 'https://github.com/Amund-Ring/Checkbox-Fitness'
    },
    {
      name: 'Tech Shop',
      image: 'techshop.png',
      description: 'A minimal online shopping solution',
      github: 'https://github.com/Amund-Ring/Tech-Shop'
    },
    {
      name: "Let's do this - Web version",
      image: 'letsdothisweb.png',
      description: 'Fun todo app with emoji support',
      github: 'https://github.com/Amund-Ring/Lets-Do-This-Web'
    },
    {
      name: 'Dream Stream',
      image: 'dreamstream.png',
      description: 'Image sharing platform',
      github: 'https://github.com/Mob-the-Builders/dream-stream'
    }
  ];

  return (
    <section className={styles.section} id='portfolio'>
      {projects.map(project => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
}

export default Portfolio;
