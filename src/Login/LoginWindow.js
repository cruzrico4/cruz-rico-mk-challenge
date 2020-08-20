import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Spacing from '@material-ui/system'
import Box from '@material-ui/core/Box'
import { sizing } from '@material-ui/system'
import { Card, createMuiTheme, CardHeader, Typography, CardContent, Collapse, TextField, FormLabel, FormGroup, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import GoogleLogin from './GoogleLogin.js';

export var LoginWindow = function () {

  const underlineStyle = {
    textDecoration: "underline",
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      border={1}
      borderRadius={16}>
      <Box p={5}>
        <Box display="flex"
          justifyContent="center">
          <p style={{ fontSize: "1.75rem" }} m={0}>Log in to MK Contact</p>
        </Box>
        <Divider variant={"middle"}></Divider>
        <FormGroup>

          <Box pt={4}>
            <Box pt={1}>
              <TextField id="username"
                label="Username or Email"
                variant="outlined"
                type="text"
                name="username"
                placeholder="Enter your username or email..."
                fullWidth={true} />
            </Box>
          </Box>

          <Box pt={5}>
            <Box pt={1}>
              <TextField id="password"
                label="Password"
                variant="outlined"
                type="password"
                name="username"
                placeholder="Enter your password..."
                fullWidth={true} />
            </Box>
          </Box>

          <Box py={4}>
            <Button variant="contained"
              color="primary"
              size="small"
              borderRadius="1"> Submit </Button>
          </Box>
        </FormGroup>
        <Divider ></Divider>
        <Box display="flex"
          justifyContent="center">
          <p style={{ fontSize: "1.75rem" }}>Or log in with social media</p>
        </Box>

        <Divider variant={"middle"}></Divider>
        <GoogleLogin/>
      </Box>
    </Box>
  )
}

export default LoginWindow
