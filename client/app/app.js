import React from 'react';

import { Container } from 'shards-react';
import { Router } from '@reach/router';

import Header from './components/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div className='application'>
      <Header />
      <Container className='wrapper'>
        <Router>
          <Homepage path='/' />
          <Login path='/login' />
          <Signup path='/signup' />
        </Router>
      </Container>
    </div>
  );
};

export default App;
