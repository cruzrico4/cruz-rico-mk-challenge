import React from 'react'
import Box from '@material-ui/core/Box';
import { Typography, TextField, Button, Fade } from '@material-ui/core';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';


/**
 * Body.js contains code that renders the body of the contact page.
 * Classes: Body, ContactForm
 * 
 * Body: the main class for this file, renders the body and returns its contents
 *    Notes: This class exists as a wrapper for ContactForm because there were 
 *      originally to be other parts of the body that did not include the 
 *      ContactForm, like accompanying images to make the form more friendly 
 *      to the user.
 * 
 * ContactForm: Renders and returns the contact form portion of the body. This
 *    Methods and Constructor:
 *      constructor: creates the initial state variables for react to use in
 *        the ContactForm
 *      handleChange: handles the change of the state variable fields by setting
 *        them to the relevant state variables
 *      handleSubmit: handles the submit click event, submits data to API for 
 *        lambda function to send email and update dynamoDB
 */

const StyledButton = styled(Button)`
  background-color: #0074d9;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #0095e9;
  }
`
function AirplaneGuy(props) {
  return (
    <svg
      id="prefix__Layer_1"
      x={0}
      y={0}
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {
          ".prefix__st2{display:inline}.prefix__st4,.prefix__st7{fill:#e2857e;stroke:#e2857e;stroke-width:.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.prefix__st7{fill:#fff;stroke:#fff}.prefix__st10{fill:#d4145a}.prefix__st11{fill:#fff}"
        }
      </style>
      <path
        fill="#e0ac69"
        stroke="#e0ac69"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M50.5 105.5l2.2-4.3"
      />
      <path
        className="prefix__st4"
        d="M52.7 101.2l-4.3-8.6s-6.2-15.4 5.7-17.9c10-2.2 12.9 2.2 12.9 2.2s2.9 2.9 2.2 11.5c0 0 2.2 9.3 0 10.8 0 0-2.2 1.4-6.5 2.2l-.7 4.3-.7 2.9H49.1l1.4-2.9 2.2-4.5zM80.2 101.5c2.4-.5 10.2-2.3 12.7-2.8 4-.9 8.1-1.8 12.1-2.7.6-.1 1.2-.3 1.8-.4 1.3-.3 2.2-.8 3.4-1.3 2.1-1 3.2-1.2 5.5-.5.6.2 1.4.7 2.2 1.4 0 0 0 .7-.7.7h-.7c-1.5-.7-1.2-.7-2.8-.7.3 0 1 .7 1.3.9.4.3.9.7 1.3 1 .3.3 1 .7.8 1.1-.1.4-.9.5-1.2.6 0 .1.6.6.6.7-.3.5-.9.8-1.4.7 0 .8-.1.7-.9.7-.7 0-1.4 0-2.1.1-.8.2-1.6.5-2.4.5-1.1 0-2.1-.7-3.3-.5-1.2.2-2.3.6-3.5.9-1.9.5-3.9 1-5.8 1.5-3.5.9-7 1.8-10.6 2.7-.4.1-6.6 1.9-7 2 0 .2-4.3-3.7.7-6.6z"
      />
      <path
        d="M70.6 76.1s-1.1-.6-3.1-1.2c-.7-.2.7-1.4.9-1.6-.7-.3-1.6-.6-2.3-.6-1-.1-2.1 0-3.1.1-2.3.2-4.5.6-6.7 1.3-2 .6-4.3 1.2-6 2.5-2.2 1.7-3.2 4.3-3.4 6.9-.2 2.9.2 6.6 1.6 9.2l4.3 8.6s2.9-4.2 2.9-7.2c0-.7-2.9 0-3.6-2.9-.2-.8-.7-2.9 0-4.3.6-1.3 1.7-1.8 2.9-1.4.8.2 2.2 2.9 2.2 2.9s-1.7-10.8 13.4-12.3z"
        fill="#151c28"
        stroke="#151c28"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path className="prefix__st4" d="M58.4 241.8l-.7 5.1-4.2-.4-.5-4.5z" />
      <path
        d="M64.5 169.7L62 206.6l-3.6 36.6h-7.2s-4.3-17.2-.7-32.3c0 0-3.6-7.2-3.6-14.3l-11.1-26.9"
        fill="#ebeced"
        stroke="#e2e2e2"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
        className="prefix__st4"
        d="M15.4 236.7l-3.5 5.4-3.5-2.1 2-5.4zM33.3 112.7L20.4 122l-5.6 8c-2.1 3.5-4.3 7.1-6.4 10.6-.3.5-.6 1-.9 1.6-.6 1.1-1.4 1.9-2.3 2.8-1.6 1.7-2.2 2.7-2.3 5 0 .7.2 1.6.7 2.5 0 0 .7.2.9-.4l.2-.7c-.2-1.6-.3-1.4.3-2.9-.1.3.3 1.2.4 1.5.2.5.4 1 .6 1.6.2.4.4 1.2.8 1.1.4 0 .8-.7 1-1 .1.1.4.8.4.8.6-.1 1-.6 1.2-1.1.7.3.7.1.9-.6.2-.7.4-1.3.8-1.9.4-.7 1-1.3 1.3-2.1.3-1.1.1-2.2.6-3.3.6-1.1 1.4-2 2-3l11.4-14.3 10.8-7.9-3.9-5.6z"
      />
      <path
        className="prefix__st7"
        d="M64.5 169.7l-7.9 15.8s-7.5 11.8-15.4 20.4c-7.9 8.6-26.5 33-26.5 33L8.9 236s12.2-28 18.6-34.4c0 0 3.6-23.7 7.9-32.3"
      />
      <path
        d="M62 105.5l18.6-4.3s-.7 5 0 8.6c.7 3.6 0 4.3 0 4.3l-11.7 4.1-3.1 53-33.1-1.5 9.2-46.5s-8.6 3.1-10 2.4c-1.4-.7-5-8.6-4.3-10 .7-1.4 13.6-7.9 15.8-8.6 2.2-.7 7.2-1.4 7.2-1.4s10 3.5 11.4-.1z"
        fill="#365676"
        stroke="#365676"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
        className="prefix__st7"
        d="M14.5 240.4l.3 1.6 1.3 4.1 1.1 1.8 3.5 4.1-.6 1.3-.8.3h-1.1L9 247.5l-5.3-4.8v-.6l3-3.7.8-.6h1.2l.3 1.7 1.5 1.3 1.7.2.1.2h.3l.1-1 .5-.2zM59.4 244.6l1.1 1.1 3.2 2.9 1.9.9 5.1 1.6.3 1.4-.6.7-.9.6-11-.2-7.1-1.3-.3-.4.6-4.8.3-.9 1-.7 1.2 1.3 2 .3 1.5-.7.2.1.3-.2-.5-.9.3-.4z"
      />
      <path
        d="M126.1 94c21-4.8 31.2-7.6 40.8-10.8 3.3-1.1 9-3.2 15.7-8.8 2.5-2.1 7.4-7.8 6-14.5-1-4.7-5.1-9.3-10.3-10-8-1.1-15.2 7.6-14.5 14.3.6 6.4 8.3 10 9.4 10.6 18.8 8.9 47.9-17.6 51.3-20.8"
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeDasharray="4,2"
      />
      <g>
        <path
          className="prefix__st10"
          d="M231.4 53.8c.1 0 .1 0 0 0zM231.5 53.9c.1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0 0zM231.7 53.9c.1 0 0 0 0 0z"
        />
        <path className="prefix__st11" d="M233.6 48.2l-1.4 4.5 3.4-3.4z" />
        <path
          className="prefix__st10"
          d="M231.5 53.9c.1 0 .1 0 0 0 .1 0 0 0 0 0zM231.4 53.7c0 .1 0 .1 0 0 0 .1 0 .1 0 0 0 .1 0 .1 0 0zM231.7 53.9z"
        />
        <path
          className="prefix__st11"
          d="M233.3 47.8c0-.1 0-.1 0 0l.1-.1L248 37.4l-17.9 8.7 1.5 6.6 1.7-4.9z"
        />
        <path
          className="prefix__st10"
          d="M250.9 35.6s-.1 0 0 0zM251 35.9s0-.1 0 0zM251 35.7z"
        />
        <path className="prefix__st11" d="M229.9 45.7l19-9.3-26.4 5.3z" />
        <path className="prefix__st10" d="M250.9 35.6zM251 35.9zM251 35.7z" />
        <path
          className="prefix__st11"
          d="M234 47.8l2.1 1.2 6.5 3.3 7.5-15.8-15.9 11.2z"
        />
        <path
          className="prefix__st10"
          d="M251 35.7v0zM250.9 35.6l.1.1-.1-.1zM250.6 35.6h.2-.2z"
        />
      </g>
    </svg>
  )
}

export class Body extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box display="flex" justifyContent="center" height="40rem" border={10} pt={10} borderColor={"#5EB2DB"} bgcolor={"#5EB2DB"}>
        <Box display="block" flexGrow={.6}  pt={10} pr={4} >
          <AirplaneGuy />
        </Box>
        <Box display="block" bgcolor={"#FFFFFF"}>
          <ContactForm />
        </Box>
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
      uiMessage: '',
      successMessage: 'Yay! We got your message, and we\'ll get back to you ASAP!',
      messageColor: '#f00',
    };
  }

  displayError = (err) => {
    this.setState({
      uiMessage: err.message,
      messageColor: '#e84435'
    });
    console.log("Something went wrong!");
  }

  //Displays
  displaySuccess = () => {
    this.setState({
      uiMessage: this.state.successMessage,
      messageColor: '#0074d9'
    })
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
      .then(this.checkError)
      .then(this.displaySuccess)
      .catch(error => {
        this.displayError(error);
        console.log('Error while adding:', error);
      });

    return ({
      payload: request
    })
  }

  //Checks for errors in response json since fetch() only throws errors on disconnects
  checkError(data) {
    console.log("Checking errors")
    console.log(data);
    if (data.err) {
      console.log("ERROR");
      throw Error(data.err.message);
    }
    else {
      console.log("No errors found")
      return data;
    }
  }

  render() {
    return (
      <Box p={5}>
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
          <TextField variant="outlined" label="Name" name="name" required onChange={this.handleChange} />
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
        {this.state.uiMessage &&
          <h3 className="error" style={{ color: this.state.messageColor }}> {this.state.uiMessage} </h3>}
      </Box>
    )
  }
}

// https://30qa72liq1.execute-api.us-west-2.amazonaws.com/default

export default Body
