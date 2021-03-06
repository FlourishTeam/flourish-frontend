import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError, useSignupError } from '../../providers/AuthContext';
import styles from '../reusable/navmenu/styles/Overlay.css';

const AuthForm = ({ email, setEmail, name, setName, title, signupFn, loginFn, showLogin, showSignup }) => {
  const [password, setPassword] = useState('');
  const error = useAuthError();
  
  let signupError = useSignupError();

  if(signupError) {
    signupError = 'Email already exists. Try logging in!';
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    signupFn(name, email, password);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginFn(email, password);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.title}>{title}</div>
      {showLogin 
        ? (
          <>
            <div className={styles.error}>{signupError}</div>
            <form className={styles.form} onSubmit={handleSignupSubmit}>
              <input
                className={styles.formInput}
                required
                type="name"
                value={name}
                placeholder="username"
                onChange={({ target }) => setName(target.value)}
              />
              <input
                className={styles.formInput}
                required
                type="email"
                value={email}
                placeholder="email"
                onChange={({ target }) => setEmail(target.value)}
              />
              <input
                className={styles.formInput}
                required
                type="password"
                value={password}
                placeholder="password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <button className={styles.submitButton}>Submit</button>
            </form>
          </>
        ) : (
          <>
            {error 
              ? (<div className={styles.error}>{error.message}</div>) 
              : (<></>)
            }
            <form className={styles.form} onSubmit={handleLoginSubmit}>
              <input
                className={styles.formInput}
                type="email"
                value={email}
                placeholder="email"
                onChange={({ target }) => setEmail(target.value)}
              />
              <input
                className={styles.formInput}
                type="password"
                value={password}
                placeholder="password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <button className={styles.submitButton}>{title}</button>
            </form>
          </>
        )}
      {showLogin ? (
        <div className={styles.textDisplay}>
          Already have an account?
          <button className={styles.switch} onClick={showLogin}>
            Log in here.
          </button>
        </div>
      ) : (
        <div className={styles.textDisplay}>
          Want to create an account?
          <button className={styles.switch} onClick={showSignup}>
            Sign up here.
          </button>
        </div>
      )}
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
