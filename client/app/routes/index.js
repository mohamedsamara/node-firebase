import React from 'react';

import { Router } from '@reach/router';

import history from '../history';
import PrivateRoute from './PrivateRoute';
import ProtectedRoute from './ProtectedRoute';

import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Router history={history}>
      <Homepage path='/' />
      <ProtectedRoute path='/login' as={Login} />
      <ProtectedRoute path='/signup' as={Signup} />
      <PrivateRoute path='/dashboard' as={Dashboard} />
    </Router>
  );
};

export default Routes;
