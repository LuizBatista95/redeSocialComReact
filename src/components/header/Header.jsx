import React from 'react';
import styles from './header.module.css';
import clsx from 'clsx';
import { FaHome, FaUserFriends, FaEnvelope } from 'react-icons/fa';

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Lista de Perfis</h1>
        <nav className={styles.menu}>
          <a className={styles.a} href='#home'>
            <FaHome /> Home
          </a>
          <a className={styles.a} href='#about'>
            <FaUserFriends /> Sobre
          </a>
          <a className={styles.a} href='#contact'>
            <FaEnvelope /> Contato
          </a>
        </nav>
      </header>
    </>
  );
}
