import React from 'react';

import { useAuth } from '../contexts/Auth';
import Dashboard from '../pages/Dashboard';

const ProtectedRoute = ({ as: Component, ...props }) => {
  const { authToken } = useAuth();

  if (authToken) {
    return <Dashboard />;
  }

  return <Component {...props} />;
};

export default ProtectedRoute;
