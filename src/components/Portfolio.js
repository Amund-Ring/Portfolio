import React from 'react';
import styles from '../css/Portfolio.module.css';
import checkbox from '../img/checkbox.png';
import todo from '../img/todo.png';
import dreamstream from '../img/dreamstream.png';

function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className={styles.content}>
        <figure>
          <img src={checkbox} alt="Checkbox Fitness App" />
          <figcaption>
            <span><b>Checkbox Fitness</b></span>
          </figcaption>
        </figure>
        <figure>
          <img src={todo} alt="Todo App" />
          <figcaption>
            <span><b>Todo App</b></span>
          </figcaption>
        </figure>
        <figure>
          <img src={dreamstream} alt="DreamStream App" />
          <figcaption>
            <span><b>Dream Stream</b></span>
          </figcaption>
          {/* <figcaption>Dream Stream</figcaption> */}
        </figure>
      </div>
    </section>
  );
}

export default Portfolio;
