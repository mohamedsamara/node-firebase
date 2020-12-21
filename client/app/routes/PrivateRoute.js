import React from 'react';

import { useAuth } from '../contexts/Auth';
import Login from '../pages/Login';

const PrivateRoute = ({ as: Component, ...props }) => {
  const { authToken } = useAuth();

  if (authToken) {
    return <Component {...props} />;
  }

  return <Login />;
};

export default PrivateRoute;
