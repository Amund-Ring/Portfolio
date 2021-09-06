import React from 'react';
import styles from '../css/Portfolio.module.css';
import checkbox from '../img/checkbox.png';
import todo from '../img/todo.png';
import dreamstream from '../img/dreamstream.png';

function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.content}>
        <figure>
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
        <figure>
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
        <figure>
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
              className={styles.dreamstream}
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
