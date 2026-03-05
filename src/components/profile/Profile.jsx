import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import styles from './profile.module.css';

export function Profile({ avatar, name, bio, phone, email, theme }) {
  return (
    <div className={styles.content}>
      <img className={styles.img} src={avatar} alt={name} />

      <h3 className={styles.h3}>{name}</h3>

      <div className={styles.description}>{bio}</div>
      <div className={styles.description}>{phone}</div>
      <div className={styles.description}>{email}</div>

      <div className={styles.links}>
        <a
          className={
            theme === 'male' ? styles.linksButtonMale : styles.linksButton
          }
          target='blank'
          rel='noreferer'
          href='https://www.linkedin.com/'
        >
          <FaLinkedin className={styles.linksIcon} />
          Linkedin
        </a>
        <a
          className={
            theme === 'male' ? styles.linksButtonMale : styles.linksButton
          }
          target='blank'
          rel='noreferer'
          href='https://github.com'
        >
          <FaGithub className={styles.linksIcon} />
          Github
        </a>
        <a
          className={
            theme === 'male' ? styles.linksButtonMale : styles.linksButton
          }
          target='blank'
          rel='noreferer'
          href='https://www.instagram.com'
        >
          <FaInstagram className={styles.linksIcon} />
          Instagram
        </a>
      </div>
    </div>
  );
}
