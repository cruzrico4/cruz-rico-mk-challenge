import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import config from './aws-exports';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';

// Amplify.configure(config);
Amplify.configure(awsconfig);

API.get('SendMessage-API', 
  'https://30qa72liq1.execute-api.us-west-2.amazonaws.com/default/SendMessage').then(res=>{
    console.log(res)
});

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
