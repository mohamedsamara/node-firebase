import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './styles';
import App from './app';

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // eslint-disable-next-line compat/compat
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
