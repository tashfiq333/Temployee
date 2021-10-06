import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//import Typography from '@material-ui/core';
import { Button } from '@material-ui/core';


import pic from "../../images/c.png"
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootContacUs: {

    margin: '5% 5% 1% 0%',
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '80vh',
    padding: '10%',

  },
  img: {
    color: theme.palette.text.secondary,
    height: '80vh',
    width: '50vw',
  },
  roottext: {
    '& > *': {
      margin: theme.spacing(1),


    },


    gridpadding: {
      padding: '20px',

    },


  },
}));


const handleChange = (event) => {
  const { value, name } = event.target;

};
const handleSubmit = async (event) => {
  event.preventDefault();


};

const ContactUs = () => {
  const classes = useStyles();

  const [data,setData] = useState({
    name:"",
    email:"",
    message:"",
  });

  const{name, email, message } = data;

  const handleChange = e =>{

    setData({ ...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = async(e) => {

    e.preventDefault();

    try{
      const response = await fetch("https://v1.nocodeapi.com/nushraat/google_sheets/jmWxXlCAVhkNKXDj?tabId=Sheet1",{

      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([[name,email,message,new Date().toLocaleDateString]])

      });  

      await response.JSON;
      setData({ ...data, name:"", email:"", message:""});

    }catch(err){

      console.log(err)
    }

  };

  return (

    <div className={classes.rootContacUs}>
      <Grid container spacing={3}>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Send Us your Thoughts

            <form className={classes.roottext} noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Grid container spacing={3} justifyContent="center" className={classes.gridpadding}>
                <Grid item xs={12}>
                  <TextField 
                  id="outlined-basic"
                  name="name"
                  value={name}
                   label="Name" 
                   placeholder="Name" 
                   variant="outlined" 
                   style={{ width: "80%" }}
                   onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  
                <TextField 
                  id="outlined-basic"
                  name="email"
                  value={email}
                   label="Email" 
                   placeholder="Email" 
                   variant="outlined" 
                   style={{ width: "80%" }}
                   onChange={handleChange}
                  />
                </Grid>
              
                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    name="message"
                    value={message}
                    label="Message"
                    placeholder="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ width: "80%" }}
                    onChange={handleChange}

                  />

                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Send
                  </Button>
                </Grid>

              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
          <img className={classes.img}
            src={pic} alt="" />
          {/* </Paper> */}
        </Grid>

      </Grid>
    </div>

  );
}
export default ContactUs;
