import React from 'react';
import logo from './logo.svg';
import Box from '@material-ui/core/Box'
import Spacing from '@material-ui/system'

import LoginWindow from './Login/LoginWindow.js'
import MKContact from './Contact/MKContact.js'

import { createMuiTheme, Typography, Card } from '@material-ui/core'
import { sizing } from '@material-ui/system'
import { ThemeProvider } from '@material-ui/core';

import { withAuthenticator, AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'

//Theme
const theme = createMuiTheme({
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AmplifyAuthenticator>
        <AmplifySignIn headerText="Log in to MK Contact" slot="sign-in"/>
        <AmplifySignUp headerText="Create MK Contact Account" slot="sign-up"/>
        {/* 
      <Box
        display="flex"
        justifyContent="center"
        m="5%"> */}
        <MKContact />
        {/* </Box> */}
      </AmplifyAuthenticator>
    </ThemeProvider>
  );
}

export default App;
