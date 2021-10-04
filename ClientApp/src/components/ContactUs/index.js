import React from 'react';
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

    margin: '5%',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '80vh',
    width: '40vw',
  
  },
  roottext: {
    '& > *': {
      margin: theme.spacing(1),
     

    },


    gridpadding:{
      padding:'20px',

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

  return (

    <div className={classes.rootContacUs}>
      <Grid container spacing={3}>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Send Us your Thoughts

            <form className={classes.roottext} noValidate autoComplete="off">
              <Grid container spacing={3} justifyContent="center" className={classes.gridpadding}>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: "80%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "80%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ width: "80%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    style={{ width: "80%" }}

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
          <img className={classes.paper}
            src={pic} alt="" />
          {/* </Paper> */}
        </Grid>

      </Grid>
    </div>

  );
}
export default ContactUs;
