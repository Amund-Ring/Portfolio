import React from 'react';
import styles from '../css/Portfolio.module.css';
import checkbox from '../img/checkbox.png';
import todo from '../img/todo.png';
import dreamstream from '../img/dreamstream.png';
import tech_shop from '../img/tech_shop.png';

function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.content}>
        <figure className={styles.portrait}>
          <p>
            <b>Checkbox Fitness:</b>
          </p>
          <a
            href="https://github.com/Amund-Ring/Checkbox-Fitness"
            target="_blank"
            rel="noreferrer"
          >
            <img src={checkbox} alt="Checkbox Fitness App" />
          </a>
          <p>Casual weekly exercise tracker</p>
          <p>
            <a
              href="https://github.com/Amund-Ring/Checkbox-Fitness"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </a>
          </p>
        </figure>
        <figure className={styles.landscape}>
          <p>
            <b>Tech Shop:</b>
          </p>
          <a
            href="https://github.com/Amund-Ring/Tech-Shop"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tech_shop}
              alt="Tech Shop Webpage"
            />
          </a>
          <p>A minimal online shopping solution</p>
          <p>
            <a
              href="https://github.com/Amund-Ring/Tech-Shop"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </a>
          </p>
        </figure>
        <figure className={styles.portrait}>
          <p>
            <b>Todo App:</b>
          </p>
          <a
            href="https://github.com/Amund-Ring/Fun-React-Todo-App"
            target="_blank"
            rel="noreferrer"
          >
            <img src={todo} alt="Todo App" />
          </a>
          <p>Fun todo app with emoji support</p>
          <p>
            <a
              href="https://github.com/Amund-Ring/Fun-React-Todo-App"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </a>
          </p>
        </figure>
        <figure className={styles.landscape}>
          <p>
            <b>Dream Stream:</b>
          </p>
          <a
            href="https://github.com/Mob-the-Builders/dream-stream"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={dreamstream}
              alt="DreamStream App"
            />
          </a>
          <p>Image sharing platform</p>
          <p>
            <a
              href="https://github.com/Mob-the-Builders/dream-stream"
              target="_blank"
              rel="noreferrer"
            >
              Code on GitHub
            </a>
          </p>
        </figure>



      </div>
    </section>
  );
}

export default Portfolio;
