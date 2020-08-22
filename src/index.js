import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

/**
 * The top-level file of the app. Certain things I want to add, but didn't have enough time:
 *  
 */

// Amplify.configure(config);
Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <App>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
