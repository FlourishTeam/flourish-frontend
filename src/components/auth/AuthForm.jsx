import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../../state/AuthContext';

const AuthForm = ({ title, authFn, showLogin, showSignup }) => {
  const error = useAuthError;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    authFn(email, password);
  };

  return (
    <>
      <div>{title}</div>
      {error && <p>{error.message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)} />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)} />
        <button>{title}</button>
      </form>
      {
        (showLogin) ? <div>Already have an account? <button onClick={showLogin}>Login Here.</button></div>
          : <div>Want to create an account? <button onClick={showSignup}>Signup Here.</button></div>
      }
    </>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  authFn: PropTypes.func.isRequired,
  triggerLogin: PropTypes.func.isRequired
};

export default AuthForm;
