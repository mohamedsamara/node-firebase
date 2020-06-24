import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import './styles';
import App from './app';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
