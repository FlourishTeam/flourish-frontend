import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  useAuthLoading,
  useIsAuthenticated,
} from '../../providers/AuthContext';

const PrivateRoute = (props) => {
  const isAuthenticated = useIsAuthenticated();
  const loading = useAuthLoading();

  if(loading) return <div>Loading...</div>;

  if(!loading && !isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
