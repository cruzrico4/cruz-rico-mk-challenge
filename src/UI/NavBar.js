import React from 'react'
import Box from '@material-ui/core/Box';
import { AmplifySignOut } from '@aws-amplify/ui-react'
import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export function NavBar() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Box flexGrow={1}>
          <h1>MK Contact Form</h1>
        </Box>
        <Button edge="end" p={0}>
          <AmplifySignOut color="black"/>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
