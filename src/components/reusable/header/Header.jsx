import React from 'react';
import styles from './styles/Header.css';
import flourishIcon from '../../../images/flourish-icon-2.png';
import NavMenu from './NavMenu.jsx';

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.icon} src={flourishIcon} />
      <NavMenu />
    </div>
  );
}

export default Header;

