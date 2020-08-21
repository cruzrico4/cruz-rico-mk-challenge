import React from 'react'
import Box from '@material-ui/core/Box';
import { Typography, TextField, Button } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';


//Style
// const useStyles = makeStyles((theme) => ({
//   root: {
//     background: "#0074d9",
//     color: "white",
//   },
//   '&:hover': {
//     background: "#0074d9",
//   }
// }));

const StyledButton = styled(Button)`
  background-color: #0074d9;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #0095e9;
  }
`

export function Body() {
  return (
    <Box display="flex" justifyContent="center" height="30rem">
      <Box>
        <p>This area for image</p>
      </Box>
      <ContactForm />
    </Box>
  )
}

function ContactForm() {
  // const classes = useStyles();

  return (
    <Box p={2}>
      <Box pt={2}>
        <Typography variant="h4">
          Thank you for reaching out!
      </Typography>
      </Box>
      <Box pt={2}>
        <Typography variant="h5">
          Provide us with the following information and we'll get back to you as soon as we can.
      </Typography>
      </Box>
      <Box pt={4}>
        <TextField variant="outlined" label="Name" required />
      </Box>
      <Box pt={4}>
        <TextField variant="outlined" label="Email" required helperText="We don't share your email with third parties" />
      </Box>
      <Box pt={4} >
        <TextField
          variant="outlined"
          label="What can we help you with?"
          fullWidth={true}
          required
          multiline
          rows={5} />
      </Box>
      <Box pt={4} >
        <StyledButton type="submit" endIcon={<SendIcon />} onClick={handleSubmit} >Send</StyledButton>
      </Box>
    </Box>
  )
}

// export function handleSubmit(item){
//   var request = fetch(`API-URL?desc=${item}`,{
//       method: 'POST',
//       headers:{
//           'Content-Type': 'application/json',
//           'x-api-key': 'API-KEY'
//       }
//   })
//   .then(response => response.json())
//   .then((data) => { return data; } )
//   .catch(error => console.log('Error while adding:', error));
//   return ({
//       // type:ActionTypes.ADD_TODO,
//       payload:request
//   })
// }

async function handleSubmit(event) {
  console.log("HELLO WORLD FROM SUBMIT");
  event.preventDefault();
  await axios.post(
    'https://30qa72liq1.execute-api.us-west-2.amazonaws.com/default',
    { 
      key1: "1",
      key2: "Hello world!"
    }
  );
}


// https://30qa72liq1.execute-api.us-west-2.amazonaws.com/default

export default Body