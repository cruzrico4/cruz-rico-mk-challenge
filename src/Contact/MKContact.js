import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import NavBar from '../UI/NavBar';
import Body from './Body.js';

/**
 * This file contains the function MKContact, which simply calls NavBar and Body components.
 */

export function MKContact() {
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box >
        <Body />
      </Box>
    </Box>
  )
}

export default MKContact
