import React from 'react';

import { Container } from 'shards-react';

import Header from './components/Header';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <>
      <Header />
      <Container className='wrapper'>
        <Homepage />
      </Container>
    </>
  );
};

export default App;
