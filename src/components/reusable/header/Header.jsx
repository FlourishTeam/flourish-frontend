import React, { useState } from 'react';
import styles from './styles/Header.css';
import flourishIcon from '../../../images/flourish-icon-2.png';
import Popup from 'reactjs-popup';
import Signup from '../../auth/Signup';
import SideBar from '../navmenu/NavMenu';
import { useSession } from '../../../providers/AuthContext';

function Header() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const user = useSession();

  return !user ? (
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
          {
            <Signup
              open={open}
              name={name}
              email={email}
              setName={setName}
              setEmail={setEmail}
            />
          }
        </Popup>
      </div>
      <SideBar />
    </div>
  ) : (
    <div className={styles.Header}>
      <img className={styles.icon} src={flourishIcon} />
      <div className={styles.headerRight}>
        <div className={styles.greeting}>Hello {user.name}!</div>
      </div>
      <SideBar />
    </div>
  );
}

export default Header;
