import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../../state/AuthContext';
import styles from '../reusable/header/styles/Overlay.css';

const AuthForm = ({ email, setEmail, name, setName, title, signupFn, loginFn, showLogin, showSignup }) => {
  const error = useAuthError;
  const [password, setPassword] = useState('');

  const handleSignupSubmit = e => {
    e.preventDefault();
    signupFn(name, email, password);
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    loginFn(email, password);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.title}>{title}</div>
      {error && <p>{error.message}</p>}
      {
        (showLogin)
          ? <form 
            className={styles.form}
            onSubmit={handleSignupSubmit}>
            <input 
              className={styles.formInput}
              type="name"
              value={name}
              placeholder="Name"
              onChange={({ target }) => setName(target.value)} />
            <input 
              className={styles.formInput}
              type="email"
              value={email}
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)} />
            <input 
              className={styles.formInput}
              type="password"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)} />
            <button className={styles.submitButton}>{title}</button>
          </form>
          : <form 
            className={styles.form}
            onSubmit={handleLoginSubmit}>
            <input 
              className={styles.formInput}
              type="email"
              value={email}
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)} />
            <input 
              className={styles.formInput}
              type="password"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)} />
            <button className={styles.submitButton}>{title}</button>
          </form>

      }
      {
        (showLogin) 
          ? <div>Already have an account? 
            <button 
              className={styles.switch}
              onClick={showLogin}>
                Login Here.
            </button>
          </div>
          : <div>Want to create an account? 
            <button 
              className={styles.switch}
              onClick={showSignup}>
                Signup Here.
            </button>
          </div>
      }
    </div>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  signupFn: PropTypes.func,
  loginFn: PropTypes.func,
  showLogin: PropTypes.func,
  showSignup: PropTypes.func,
  name: PropTypes.string,
  setName: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func
};

export default AuthForm;
