import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { auth, anlytics } from '../../config/firebase';
import { API_URL } from '../../constants';

import AuthContext from './context';

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

  const [error, setError] = useState({
    page: {
      message: '',
      isError: false,
      links: false
    }
  });

  const setToken = token => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
  };

  const signIn = async values => {
    try {
      const user = await auth.signInWithEmailAndPassword(
        values.email,
        values.password
      );

      anlytics.setUserProperties({
        newUser: user.additionalUserInfo.isNewUser
      });

      const idToken = await verifyToken();
      setToken(idToken);
      return true;
    } catch (error) {
      handleErrorMessages(error, 'login');
      return false;
    }
  };

  const signUp = async values => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      await axios.post(`${API_URL}/auth/signup`, {
        userId: response.user.uid,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName
      });

      const idToken = await verifyToken();
      setToken(idToken);
      return true;
    } catch (error) {
      handleErrorMessages(error, 'signup');
      return false;
    }
  };

  const signOut = async () => {
    try {
      await axios.post(`${API_URL}/auth/signout`);
      await auth.signOut();
      removeToken();
    } catch (error) {
      handleErrorMessages(error);
    }
  };

  const handleErrorMessages = (error, type = 'page') => {
    let message = '';

    if (error.code) {
      switch (error.code) {
        case 'auth/user-not-found':
          message = 'Email is not found';
          break;

        case 'auth/wrong-password':
          message = 'Wrong Password';
          break;

        case 'auth/email-already-in-use':
          message = 'Email is already in use';
          break;

        case 'auth/weak-password':
          message = 'Password should be at least 6 characters';

          break;
        default:
          break;
      }
    } else {
      message = error;
    }

    setError({
      [type]: {
        message,
        isError: true
      }
    });
  };

  const verifyToken = async () => {
    try {
      const idToken = await getIdToken(true);

      await axios.post(`${API_URL}/auth/session`, {
        idToken
      });

      return idToken;
    } catch (error) {
      return error;
    }
  };

  const getIdToken = () => {
    try {
      return auth.currentUser.getIdToken();
    } catch (error) {
      return error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        signIn,
        signUp,
        signOut,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
