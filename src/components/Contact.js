import React from 'react';
import styles from '../styles/Contact.module.css';
import contact from '../assets/contact.png';

function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.content}>
        <img src={contact} alt="contact" className={styles.contact} />
      </div>
    </section>
  );
}

export default Contact;
