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

export class Body extends React.Component {
  render() {
    return (
      <Box display="flex" justifyContent="center" height="30rem">
        <ContactForm />
      </Box>
    )
  }




}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = () => {

    //"Random" id to apply to message, big number to maybe avoid duplicates. 
    // Definitely wouldn't be final implementation
    // DynamoDB expects a string
    const SId = (Math.floor(Math.random() * 10000000000)).toString();


    // data to be sent to lambda through api
    const data = {
      'MessageID': SId,
      "Name": this.state.name,
      "Email": this.state.email,
      'Message': this.state.message,
    };

    //Notify user that message was sent


    //request for the api
    var request = fetch('https://30qa72liq1.execute-api.us-west-2.amazonaws.com/default/SendMessage', {
      mode: 'cors',
      method: 'POST', 'OPTIONS': {
        "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,X-Amz-Security-Token,Authorization,X-Api-Key,X-Requested-With,Accept,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Access-Control-Allow-Headers",
        "Access-Control-Allow-Methods": "POST",
      },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((data) => console.log(data))
      .catch(error => console.log('Error while adding:', error));
    return ({
      payload: request
    })
  }

  // const classes = useStyles();
  render() {
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
          <TextField variant="outlined" label="Name" name="name" required onChange={this.handleChange}/>
        </Box>
        <Box pt={4}>
          <TextField variant="outlined" label="Email" name="email" required 
            onChange={this.handleChange} helperText="We don't share your email with third parties" />
        </Box>
        <Box pt={4} >
          <TextField
            variant="outlined"
            label="What can we help you with?"
            name="message"
            onChange={this.handleChange}
            fullWidth={true}
            required
            multiline
            rows={5} />
        </Box>
        <Box pt={4} >
          <StyledButton type="submit" endIcon={<SendIcon />} onClick={this.handleSubmit} >Send</StyledButton>
        </Box>
      </Box>
    )
  }
}

// https://30qa72liq1.execute-api.us-west-2.amazonaws.com/default

export default Body
