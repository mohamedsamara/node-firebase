import React from 'react';

import { Container } from 'shards-react';

import { AuthProvider } from './contexts/Auth';
import Routes from './routes';

import Header from './components/Header';

const App = () => {
  return (
    <AuthProvider>
      <div className='application'>
        <Header />
        <Container className='wrapper'>
          <Routes />
        </Container>
      </div>
    </AuthProvider>
  );
};

export default App;
