import React from 'react';
import styles from './styles/Header.css';
import flourishIcon from '../../../images/flourish-icon-2.png';
import Popup from 'reactjs-popup';
import Signup from '../../auth/Signup';
import SideBar from '../navmenu/SideBar';

function Header() {
  return (
    <div className={styles.Header}>
      <img className={styles.icon} src={flourishIcon} />

      <div className={styles.headerRight}>
        <Popup
          modal
          closeOnDocumentClick={true}
          trigger={(open) => (
            <button open={open} className={styles.loginButton}>
              Sign Up / Log In
            </button>
          )}
        >
          {<Signup open={open} />}
        </Popup>
      </div>
      <SideBar />
    </div>
  );
}

export default Header;
