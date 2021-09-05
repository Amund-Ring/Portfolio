import React from 'react';
import styles from '../css/Contact.module.css';
import contact from '../img/contact.png';

function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.content}>
        <img src={contact} alt="" className={styles.contact}/>
      </div>
    </section>
  );
}

export default Contact;
