import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getVerify, postLogin, postSignup, getUser } from '../services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState('');
  const isAuthenticated = !!session;

  useEffect(() => {
    getVerify()
      .then(user => {
        setSession(user);
        setUser(user);
      })
      .catch(() => console.log('user not logged in'))
      .finally(() => setLoading(false));
  }, []);

  const signup = (name, email, password) => {
    return postSignup(name,  email, password)
      .then(user => setSession(user))
      .then(() => history.push('/'))
      .then(console.log('CONTEXT SIGNUP', name, email, password))
      .catch(err => setError(err));
  };

  const login = (email, password) => {
    return postLogin(email, password)
      .then(user => {
        setSession(user);
        setUser(user);
        console.log(user);
      })
      .then(() => history.push('/'))
      .catch(err => setError(err));
  };

  const getUserByEmail = (email) => {
    return getUser(email)
      .then(user => setUser(user))
      .then(() => history.push('/'))
      .then(console.log('CONTEXT USER', user))
      .catch(err => setError(err));
  };

  return (
    <AuthContext.Provider value={{
      session,
      loading,
      error,
      isAuthenticated,
      signup,
      login,
      getUserByEmail,
      user
    }}>{children}</AuthContext.Provider>
  );
};

export const useSession = () => {
  const { session } = useContext(AuthContext);
  return session;
};

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

export const useAuthError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

export const useGetUserByEmail = () => {
  const { getUserByEmail } = useContext(AuthContext);
  return getUserByEmail;
};

export const useUser = () => {
  const { user } = useContext(AuthContext);
  return user;
};

