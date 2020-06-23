import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(
        response => {
          console.log('fetch result', response.json());
        },
        error => {
          console.log('error', error);
        }
      );
  }, []);

  return <div>Test APP Again</div>;
};

export default App;
