import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
//import Typography from '@material-ui/core';

import pic from "../../images/c.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "80vh",
  },
  roottext: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Send Us your Thoughts
            <form className={classes.roottext} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={pic} alt="" height="100vh" width="100vw" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default ContactUs;
