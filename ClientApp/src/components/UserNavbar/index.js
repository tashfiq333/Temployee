import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { CssBaseline } from '@material-ui/core';
import { Component } from 'react';
import { Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    comApp: {
      flexGrow: 1,
      background  : 'linear-gradient(62.98deg, #7710FF 46.52%, rgba(119, 16, 255, 0.104167) 111.11%, rgba(119, 16, 255, 0) 111.12%);'
    },
    title: {
      flexGrow: 1,
    },
    bt:{
      padding:30,
    },
  }));

const UserAppBar = () => {
  const classes = useStyles();

  return (
      <>
      <CssBaseline />
      <div className={classes.rootComNav}>
      <AppBar  className={classes.comApp} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Temployee
          </Typography>
          <Link className = {classes.bt} color="inherit" href="#">Home</Link>
          <Link className = {classes.bt} color="inherit" href="/company-info">Find Work</Link>
          <Link className = {classes.bt} color="inherit" href="/person_info">About Us</Link>
          <Link className = {classes.bt} color="inherit" href="/user-profile">Notification</Link>
          <Button className = {classes.bt} color="inherit">Sign out</Button>
        </Toolbar>
      </AppBar>
	  
	</div>

    </>
  );
}
export default UserAppBar;
