/**
 *
 * index.js
 * This is the entry file for the client application
 */

import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
