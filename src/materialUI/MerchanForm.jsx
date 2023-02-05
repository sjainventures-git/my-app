import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export default function MerchandForm() {

  const [user_name, setUser_name] = useState('');
  const [user_email, setUser_email] = useState("");
  const [user_contact, setUser_contact] = useState("");


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7wfwqo5', 'template_4n5ncqb', form.current, 'TqO-LjB1jDL7sr4EH')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
          console.log("message not sent")
      });

    setUser_name('')
    setUser_email('')
    setUser_contact('')
  };




  return (
  <>
   
   <Paper elevation={4} className='form_paper_merchan'>
      <div>
      <Box
        className='formwidthmerchan'
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        ref={form} 
      >
        <TextField className='input' id="standard-basic" label='Name' value={user_name} onChange={(e) =>{
          setUser_name(e.target.value)
        }}   variant="standard" />
        <TextField  className='input' id="standard-basic" type='number' value={user_contact} onChange={(e) =>{
          setUser_contact(e.target.value)
        }}    label="Contact No" variant="standard" />
        <TextField  className='input' id="standard-basic" value={user_email} onChange={(e) =>{
          setUser_email(e.target.value)
        }}   label="email" variant="standard" />
      </Box>

   <Link to={'/'}>
   <Stack direction="row" className='submit' spacing={3}>
         <Button onClick={sendEmail} variant="contained">Submit</Button>
      </Stack>
   </Link>
      </div>
      <div>
      <Box
        className='formwidth'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '34ch' },
        }}
        noValidate
        autoComplete="off"
      >
       
      </Box>

      </div>
    </Paper>
   
  
  
  </>
  );
}
