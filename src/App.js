import React from 'react';
import MKContact from './Contact/MKContact.js';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import {  AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'

//Theme
const theme = createMuiTheme({
  spacing: 8,
  shape: {
    borderRadius: 0,
  },
  bgColor: {
    backgroundColor: "#5EB2DB",
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
