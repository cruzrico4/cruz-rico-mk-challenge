import React from 'react';
import logo from './logo.svg';
import Box from '@material-ui/core/Box'
import Spacing from '@material-ui/system'

import LoginWindow from './Login/LoginWindow.js'
import { createMuiTheme, Typography } from '@material-ui/core'
import { sizing } from '@material-ui/system'
import { ThemeProvider } from '@material-ui/core';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

//Padding between elements
const theme = createMuiTheme({
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>

      <Box
        display="flex"
        justifyContent="center"
        m="5%">
        <LoginWindow />
      </Box>
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
